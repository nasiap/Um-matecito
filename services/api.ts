import { Capacitor } from '@capacitor/core';

// ==========================================
// SMART API URL
// ==========================================
// - Web browser: uses localhost
// - Android emulator: uses 10.0.2.2 (Android emulator's alias for host machine)
// - Physical device: CHANGE this to your local network IP (e.g., 192.168.1.100)
//   Find it with `ipconfig` (Windows) or `ifconfig` (Mac/Linux)

function getApiUrl(): string {
    const port = 3001;

    if (Capacitor.isNativePlatform()) {
        if (Capacitor.getPlatform() === 'android') {
            // Android emulator maps 10.0.2.2 → host machine's localhost
            // ⚠️ For PHYSICAL DEVICES, replace with your LAN IP: e.g., http://192.168.x.x:3001/api
            return `http://10.0.2.2:${port}/api`;
        }
        // iOS simulator can use localhost directly
        return `http://localhost:${port}/api`;
    }

    // Web browser
    return `http://localhost:${port}/api`;
}

export const API_URL = getApiUrl();

// ==========================================
// TOKEN MANAGEMENT
// ==========================================

const TOKEN_KEY = 'matecito_auth_token';
const USER_KEY = 'matecito_user';

export function getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function clearAuth(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}

export function getSavedUser(): AuthUser | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as AuthUser;
    } catch {
        return null;
    }
}

function saveUser(user: AuthUser): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// ==========================================
// TYPES
// ==========================================

export interface AuthUser {
    id: string;
    email: string;
    name: string | null;
    phone: string | null;
    country: string;
    reputation?: number;
    is_driver_verified?: boolean;
    createdAt?: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
    user: AuthUser;
}

export interface RegisterData {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    dni_cpf?: string;
    country?: string;
}

export interface ProfileUpdateData {
    name?: string;
    phone?: string;
    dni_cpf?: string;
    country?: string;
}

export interface CreateTripPayload {
    driver_id: string;
    origin_lat: number;
    origin_lng: number;
    origin_address: string;
    dest_lat: number;
    dest_lng: number;
    dest_address: string;
    departure_time: string;
    seats_available: number;
    price: number;
    currency: 'ARS' | 'BRL';
    women_only: boolean;
}

export interface CreateTripResponse {
    success: boolean;
    message: string;
    tripId: string;
}

export interface BookingResponse {
    success: boolean;
    message: string;
    booking: {
        id: string;
        trip_id: string;
        passenger_id: string;
        status: string;
        payment_method: string;
        trip: {
            origin_address: string;
            dest_address: string;
            departure_time: string;
            price: number;
            currency: string;
            seats_available: number;
        };
    };
}

export interface Trip {
    id: string;
    driver_id: string;
    origin_address: string;
    dest_address: string;
    price: number;
    currency: 'BRL' | 'ARS';
    seats_available: number;
    women_only: boolean;
    departure_time: string;
    origin_wkt: string;
}

// ==========================================
// HELPERS
// ==========================================

function authHeaders(extra: Record<string, string> = {}): Record<string, string> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...extra,
    };
    const token = getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

// ==========================================
// API FUNCTIONS
// ==========================================

export const api = {
    // ------ AUTH ------

    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Login failed');
        setAuthToken(data.token);
        saveUser(data.user);
        return data as AuthResponse;
    },

    register: async (userData: RegisterData): Promise<AuthResponse> => {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Registration failed');
        setAuthToken(data.token);
        saveUser(data.user);
        return data as AuthResponse;
    },

    getMe: async (): Promise<AuthUser | null> => {
        const token = getAuthToken();
        if (!token) return null;
        try {
            const response = await fetch(`${API_URL}/auth/me`, { headers: authHeaders() });
            if (!response.ok) return null;
            const data = await response.json();
            saveUser(data.user);
            return data.user as AuthUser;
        } catch {
            return null;
        }
    },

    /**
     * Update the current user's profile (requires auth).
     */
    updateProfile: async (data: ProfileUpdateData): Promise<AuthUser> => {
        const response = await fetch(`${API_URL}/auth/me`, {
            method: 'PUT',
            headers: authHeaders(),
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Failed to update profile');
        saveUser(result.user);
        return result.user as AuthUser;
    },

    logout: (): void => {
        clearAuth();
    },

    // ------ GEOCODING ------

    geocodeLocation: async (address: string): Promise<{ lat: number; lng: number } | null> => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
                { headers: { 'User-Agent': 'UnMatecitoApp/1.0' } }
            );
            const data = await response.json();
            if (data && data.length > 0) {
                return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
            }
            return null;
        } catch (error) {
            console.error('Geocoding error:', error);
            return null;
        }
    },

    // ------ TRIPS ------

    searchTrips: async (lat: number, lng: number, radiusKm: number = 50): Promise<Trip[]> => {
        try {
            const response = await fetch(
                `${API_URL}/trips/search?lat=${lat}&lng=${lng}&radius_km=${radiusKm}`,
                { headers: authHeaders() }
            );
            if (!response.ok) throw new Error('Failed to fetch trips');
            return await response.json();
        } catch (error) {
            console.error('Search error:', error);
            return [];
        }
    },

    /**
     * Create a new trip (requires auth).
     */
    createTrip: async (tripData: CreateTripPayload): Promise<CreateTripResponse> => {
        const response = await fetch(`${API_URL}/trips`, {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify(tripData),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to create trip');
        }

        return data as CreateTripResponse;
    },

    // ------ BOOKINGS ------

    /**
     * Create a booking for a trip (requires auth).
     */
    createBooking: async (tripId: string, paymentMethod: string = 'EFECTIVO'): Promise<BookingResponse> => {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({ trip_id: tripId, payment_method: paymentMethod }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to create booking');
        }

        return data as BookingResponse;
    },

    /**
     * Get the logged-in user's bookings.
     */
    getMyBookings: async (): Promise<any[]> => {
        const response = await fetch(`${API_URL}/bookings/mine`, {
            headers: authHeaders(),
        });

        if (!response.ok) return [];
        return await response.json();
    },
};
