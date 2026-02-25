
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, getAuthToken, clearAuth, getSavedUser } from '../services/api';
import type { AuthUser, ProfileUpdateData } from '../services/api';

interface AuthContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: { email: string; password: string; name?: string; phone?: string; country?: string }) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
    updateProfile: (data: ProfileUpdateData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // On mount, check for existing token and restore session
    useEffect(() => {
        const restoreSession = async () => {
            const token = getAuthToken();
            if (token) {
                const savedUser = getSavedUser();
                if (savedUser) setUser(savedUser);

                const freshUser = await api.getMe();
                if (freshUser) {
                    setUser(freshUser);
                } else {
                    clearAuth();
                    setUser(null);
                }
            }
            setIsLoading(false);
        };
        restoreSession();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await api.login(email, password);
        setUser(response.user);
    };

    const register = async (data: { email: string; password: string; name?: string; phone?: string; country?: string }) => {
        const response = await api.register(data);
        setUser(response.user);
    };

    const logout = () => {
        api.logout();
        setUser(null);
    };

    const refreshUser = async () => {
        const freshUser = await api.getMe();
        if (freshUser) setUser(freshUser);
    };

    const updateProfile = async (data: ProfileUpdateData) => {
        const updatedUser = await api.updateProfile(data);
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                register,
                logout,
                refreshUser,
                updateProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
