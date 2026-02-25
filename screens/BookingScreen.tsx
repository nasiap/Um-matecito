import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

interface TripData {
    id: string;
    origin_address: string;
    dest_address: string;
    departure_time: string;
    price: number;
    currency: string;
    seats_available: number;
    driver_id?: string;
}

const BookingScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    // Get trip data from route state (passed via navigate('/booking', { state: { trip } }))
    const trip = (location.state as any)?.trip as TripData | undefined;

    const [selectedPayment, setSelectedPayment] = useState<string>('MERCADO_PAGO_QR');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // If no trip data was passed, show fallback
    if (!trip) {
        return (
            <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-display text-slate-800 dark:text-slate-100 antialiased min-h-screen flex justify-center">
                <div className="w-full max-w-md flex flex-col items-center justify-center gap-6 px-8">
                    <span className="material-symbols-outlined text-[56px] text-slate-300">search_off</span>
                    <h2 className="text-xl font-bold text-center">No se encontró el viaje</h2>
                    <p className="text-slate-400 text-center text-sm">Volvé a buscar viajes para reservar un asiento.</p>
                    <button
                        onClick={() => navigate('/home')}
                        className="px-8 py-4 bg-primary text-white rounded-xl font-bold"
                    >
                        Buscar viajes
                    </button>
                </div>
            </div>
        );
    }

    // Format helpers
    const departureDate = new Date(trip.departure_time);
    const dateStr = departureDate.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', weekday: 'short' });
    const timeStr = departureDate.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    const currencySymbol = trip.currency === 'BRL' ? 'R$' : '$';

    const handleBooking = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            await api.createBooking(trip.id, selectedPayment);
            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Error al reservar.');
        } finally {
            setIsLoading(false);
        }
    };

    // ========== SUCCESS STATE ==========
    if (success) {
        return (
            <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-display text-slate-800 dark:text-slate-100 antialiased min-h-screen flex justify-center">
                <div className="w-full max-w-md flex flex-col items-center justify-center gap-6 px-8">
                    <div className="size-28 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-green-500 text-[56px] filled">check_circle</span>
                    </div>
                    <h1 className="text-[28px] font-extrabold text-center leading-tight">
                        ¡Asiento reservado! 🎉
                    </h1>
                    <div className="bg-white dark:bg-[#1e2930] rounded-2xl p-6 w-full shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-3 rounded-full border-2 border-primary"></div>
                            <p className="font-bold text-sm">{trip.origin_address}</p>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary text-[16px] filled">location_on</span>
                            <p className="font-bold text-sm">{trip.dest_address}</p>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 border-t border-dashed border-slate-200 dark:border-slate-700 pt-3">
                            <span>{dateStr} · {timeStr}</span>
                            <span className="font-bold text-[#2280a0]">{currencySymbol} {trip.price}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/home')}
                        className="w-full max-w-[300px] h-14 flex items-center justify-center gap-3 rounded-2xl bg-[#2280a0] text-white font-bold text-[16px] shadow-lg active:scale-[0.98] transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">home</span>
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    // ========== BOOKING FORM ==========
    return (
        <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-display text-slate-800 dark:text-slate-100 antialiased min-h-screen flex justify-center">
            <style>{`
                .dashed-line {
                    background-image: linear-gradient(to bottom, transparent 50%, #e5e7eb 50%);
                    background-size: 2px 8px;
                    background-repeat: repeat-y;
                }
                .dark .dashed-line {
                    background-image: linear-gradient(to bottom, transparent 50%, #374151 50%);
                }
                .ticket-scallop {
                    position: absolute;
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background-color: #f6f7f8;
                    z-index: 10;
                }
                .dark .ticket-scallop {
                    background-color: #121c20;
                }
                .scallop-left { left: -12px; top: 50%; transform: translateY(-50%); }
                .scallop-right { right: -12px; top: 50%; transform: translateY(-50%); }
            `}</style>

            <div className="w-full max-w-md bg-[#f6f7f8] dark:bg-[#121c20] relative pb-32 shadow-xl min-h-screen">
                {/* Top Navigation */}
                <div className="fixed top-0 z-50 w-full max-w-md bg-[#f6f7f8]/90 dark:bg-[#121c20]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between px-4 py-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex size-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <span className="material-symbols-outlined text-slate-900 dark:text-white text-[24px]">arrow_back_ios_new</span>
                        </button>
                        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Confirmar Reserva</h1>
                        <div className="size-12"></div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex flex-col gap-6 px-4 pt-20 w-full">
                    {/* Trust Badge */}
                    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#2280a0]/10 rounded-full border border-[#2280a0]/20 w-fit mx-auto">
                        <span className="material-symbols-outlined text-[#2280a0] text-[20px]">verified_user</span>
                        <span className="text-[#2280a0] text-sm font-bold uppercase tracking-wide">Reserva Segura</span>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium flex-1">{error}</p>
                            <button onClick={() => setError('')} className="text-red-400 hover:text-red-600">
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>
                    )}

                    {/* Ticket Card */}
                    <div className="relative flex flex-col w-full bg-white dark:bg-[#1e2930] rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
                        {/* Route Details */}
                        <div className="p-6 flex flex-col gap-8">
                            {/* Route Timeline */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center pt-1.5">
                                    <div className="size-4 rounded-full border-[3px] border-slate-300 dark:border-slate-600 bg-transparent"></div>
                                    <div className="w-0.5 flex-1 bg-slate-300 dark:bg-slate-600 my-1 dashed-line"></div>
                                    <div className="size-4 rounded-full bg-[#2280a0] border-[3px] border-[#2280a0] shadow-[0_0_0_2px_white] dark:shadow-[0_0_0_2px_#1e2930]"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-8">
                                    <div>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="text-2xl font-extrabold text-slate-800 dark:text-white">{timeStr}</span>
                                        </div>
                                        <p className="text-base text-slate-600 dark:text-slate-400 leading-snug">{trip.origin_address}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Destino</span>
                                        </div>
                                        <p className="text-base font-bold text-slate-800 dark:text-white leading-snug">{trip.dest_address}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider with Scallops */}
                            <div className="relative h-px w-full my-2">
                                <div className="absolute inset-0 border-t-2 border-dashed border-slate-300 dark:border-slate-600"></div>
                                <div className="ticket-scallop scallop-left"></div>
                                <div className="ticket-scallop scallop-right"></div>
                            </div>

                            {/* Date & Seats  */}
                            <div className="flex justify-between items-center pt-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Fecha</span>
                                    <span className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                                        {dateStr}
                                    </span>
                                </div>
                                <div className="h-10 w-px bg-slate-300 dark:bg-slate-600 mx-4"></div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Asientos disp.</span>
                                    <span className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">airline_seat_recline_normal</span>
                                        {trip.seats_available}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider opacity-90 px-1">Resumen del pago</h3>
                        <div className="bg-white dark:bg-[#1e2930] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-slate-700 dark:text-slate-300">Asiento (1x Pasajero)</span>
                                <span className="font-bold text-slate-900 dark:text-white">{currencySymbol} {trip.price}</span>
                            </div>
                            <div className="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>
                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">Total</span>
                                <span className="text-3xl font-extrabold text-[#2280a0]">{currencySymbol} {trip.price}</span>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Sticky Bottom CTA */}
                <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1e2930] border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50 p-4 pb-8 safe-pb flex justify-center">
                    <div className="w-full max-w-md">
                        <div className="flex flex-col gap-4">
                            {/* Payment Options */}
                            <div className="flex justify-between gap-3">
                                {[
                                    { id: 'MERCADO_PAGO_QR', label: 'Mercado Pago', icon: 'qr_code_2' },
                                    { id: 'CREDIT_CARD', label: 'Tarjeta', icon: 'credit_card' },
                                    { id: 'EFECTIVO', label: 'Efectivo', icon: 'payments' },
                                ].map((pm) => (
                                    <button
                                        key={pm.id}
                                        onClick={() => setSelectedPayment(pm.id)}
                                        className={`flex-1 flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all ${selectedPayment === pm.id
                                                ? 'border-[#2280a0] bg-[#2280a0]/5'
                                                : 'border-slate-200 dark:border-slate-700 hover:border-[#2280a0]/50'
                                            }`}
                                    >
                                        <span className={`material-symbols-outlined text-[24px] ${selectedPayment === pm.id ? 'text-[#2280a0]' : 'text-slate-400'}`}>{pm.icon}</span>
                                        <span className={`text-[11px] font-extrabold uppercase tracking-wide ${selectedPayment === pm.id ? 'text-[#2280a0]' : 'text-slate-500'}`}>{pm.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Main Action */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[11px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Total Final</span>
                                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{currencySymbol} {trip.price}</span>
                                </div>
                                <button
                                    onClick={handleBooking}
                                    disabled={isLoading}
                                    className="flex-1 bg-[#2280a0] hover:opacity-90 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-[#2280a0]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="tracking-wide text-lg">Reservando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="tracking-wide text-lg">Reservar</span>
                                            <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingScreen;
