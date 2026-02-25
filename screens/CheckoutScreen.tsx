import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutScreen: React.FC = () => {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState<string>('mercado_pago');
    const [country, setCountry] = useState<'AR' | 'BR'>('AR');

    // Load Manrope font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    // Effect to reset payment method when country changes if the selected one is invalid
    useEffect(() => {
        if (country === 'AR' && selectedPayment === 'pix') {
            setSelectedPayment('mercado_pago');
        } else if (country === 'BR' && selectedPayment === 'cash') {
            setSelectedPayment('pix');
        }
    }, [country]);

    return (
        <div className="bg-[#fbf9f9] dark:bg-[#192729] text-slate-900 dark:text-slate-50 font-['Manrope'] antialiased selection:bg-[#2f5a60] selection:text-white min-h-screen flex items-center justify-center p-4 lg:p-0">
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .icon-filled {
                    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}</style>

            <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 max-w-md mx-auto bg-[#fbf9f9] dark:bg-[#192729] shadow-2xl lg:rounded-[2rem] lg:min-h-[844px] lg:h-[844px] lg:border-[8px] border-zinc-200 dark:border-zinc-800">
                {/* Header */}
                <header className="sticky top-0 z-10 bg-[#fbf9f9]/95 dark:bg-[#192729]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 transition-colors lg:rounded-t-[1.5rem]">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white group"
                    >
                        <span className="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="text-xl font-bold tracking-tight text-center flex-1 pr-10">Confirm Your Ride</h2>
                </header>

                <main className="flex flex-col gap-6 p-4 overflow-y-auto no-scrollbar">
                    {/* Country Toggle */}
                    <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
                        <button
                            onClick={() => setCountry('AR')}
                            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${country === 'AR' ? 'bg-white dark:bg-[#223235] shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
                        >
                            🇦🇷 Argentina
                        </button>
                        <button
                            onClick={() => setCountry('BR')}
                            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${country === 'BR' ? 'bg-white dark:bg-[#223235] shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
                        >
                            🇧🇷 Brasil
                        </button>
                    </div>

                    {/* Trip Summary Card */}
                    <section className="bg-white dark:bg-[#223235] rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-4 flex-[1.5]">
                                <div className="space-y-5">
                                    {/* Pickup */}
                                    <div className="flex gap-3 relative">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#2f5a60] ring-4 ring-[#2f5a60]/20"></div>
                                            <div className="w-0.5 h-full bg-slate-300 dark:bg-slate-600 min-h-[32px] absolute top-3.5 left-[6px]"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">10:30 AM</p>
                                            <p className="text-base font-bold leading-tight mt-0.5">Centro Cívico</p>
                                        </div>
                                    </div>
                                    {/* Dropoff */}
                                    <div className="flex gap-3">
                                        <div className="flex flex-col items-center pt-1">
                                            <div className="w-3.5 h-3.5 rounded-sm bg-slate-900 dark:bg-slate-400 ring-4 ring-slate-900/10 dark:ring-slate-400/20"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">10:55 AM</p>
                                            <p className="text-base font-bold leading-tight mt-0.5">Aeropuerto Internacional</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Map Thumbnail */}
                            <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn7_k_89FLUMKRXOUgeurJSP4T9M06_TIsFFD1N0Nms--yI1KaXnmrfB94HmEc9niWmHliZl8UDvQ4uP7O7iROl1GW37JWdJbhm8FydIP9sl3EjsD0JTmY0rRxaCXdCcYCmyBGOOHcyT1DtVeydThwahjNaWRn26gjkoFrX_r770f8iNrQwGOVJLr7Pnl1W6dkLEMwmqizs79BUOEnEqyeayLdXBzaUa1azfgggswGFG80dVekMBt6EEwG6ad7an42qAgLCgUY220')" }}></div>
                                <div className="absolute inset-0 bg-[#2f5a60]/10"></div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Method */}
                    <section>
                        <h3 className="text-xl font-bold mb-4 px-1 text-slate-900 dark:text-white">Payment Method</h3>
                        <div className="flex flex-col gap-3">
                            {/* Mercado Pago Option (Always visible, fits both regions usually, but definitely AR) */}
                            <label className={`group relative flex items-center justify-between p-4 rounded-xl border ${selectedPayment === 'mercado_pago' ? 'border-[#2f5a60] bg-[#2f5a60]/5 shadow-[0_0_0_1px_rgba(47,90,96,1)]' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#223235]'} cursor-pointer transition-all hover:border-[#2f5a60]/50`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <span className="material-symbols-outlined text-[28px]">account_balance_wallet</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base text-slate-900 dark:text-white">Mercado Pago</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Saldo disponível</span>
                                    </div>
                                </div>
                                <input
                                    className="peer w-5 h-5 text-[#2f5a60] border-slate-300 focus:ring-[#2f5a60] focus:ring-offset-0 bg-transparent"
                                    name="payment_method"
                                    type="radio"
                                    checked={selectedPayment === 'mercado_pago'}
                                    onChange={() => setSelectedPayment('mercado_pago')}
                                />
                            </label>

                            {/* PIX Option (Brazil Only) */}
                            {country === 'BR' && (
                                <label className={`group relative flex items-center justify-between p-4 rounded-xl border ${selectedPayment === 'pix' ? 'border-[#2f5a60] bg-[#2f5a60]/5 shadow-[0_0_0_1px_rgba(47,90,96,1)]' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#223235]'} cursor-pointer transition-all hover:border-[#2f5a60]/50`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <span className="material-symbols-outlined text-[28px]">payments</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-base text-slate-900 dark:text-white">PIX</span>
                                            <span className="text-sm text-slate-600 dark:text-slate-400">Pagamento instantâneo</span>
                                        </div>
                                    </div>
                                    <input
                                        className="peer w-5 h-5 text-[#2f5a60] border-slate-300 focus:ring-[#2f5a60] focus:ring-offset-0 bg-transparent"
                                        name="payment_method"
                                        type="radio"
                                        checked={selectedPayment === 'pix'}
                                        onChange={() => setSelectedPayment('pix')}
                                    />
                                </label>
                            )}

                            {/* Efectivo/Cash Option (Argentina Focus) */}
                            {country === 'AR' && (
                                <label className={`group relative flex items-center justify-between p-4 rounded-xl border ${selectedPayment === 'cash' ? 'border-[#2f5a60] bg-[#2f5a60]/5 shadow-[0_0_0_1px_rgba(47,90,96,1)]' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#223235]'} cursor-pointer transition-all hover:border-[#2f5a60]/50`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center text-green-700 dark:text-green-500">
                                            <span className="material-symbols-outlined text-[28px]">attach_money</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-base text-slate-900 dark:text-white">Efectivo</span>
                                            <span className="text-sm text-slate-600 dark:text-slate-400">Pagar al conductor</span>
                                        </div>
                                    </div>
                                    <input
                                        className="peer w-5 h-5 text-[#2f5a60] border-slate-300 focus:ring-[#2f5a60] focus:ring-offset-0 bg-transparent"
                                        name="payment_method"
                                        type="radio"
                                        checked={selectedPayment === 'cash'}
                                        onChange={() => setSelectedPayment('cash')}
                                    />
                                </label>
                            )}

                            {/* Credit Card Option */}
                            <label className={`group relative flex items-center justify-between p-4 rounded-xl border ${selectedPayment === 'credit_card' ? 'border-[#2f5a60] bg-[#2f5a60]/5 shadow-[0_0_0_1px_rgba(47,90,96,1)]' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#223235]'} cursor-pointer transition-all hover:border-[#2f5a60]/50`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-[28px]">credit_card</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base text-slate-900 dark:text-white">Mastercard •••• 4242</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Personal</span>
                                    </div>
                                </div>
                                <input
                                    className="peer w-5 h-5 text-[#2f5a60] border-slate-300 focus:ring-[#2f5a60] focus:ring-offset-0 bg-transparent"
                                    name="payment_method"
                                    type="radio"
                                    checked={selectedPayment === 'credit_card'}
                                    onChange={() => setSelectedPayment('credit_card')}
                                />
                            </label>

                            {/* Stripe Option */}
                            <label className={`group relative flex items-center justify-between p-4 rounded-xl border ${selectedPayment === 'stripe' ? 'border-[#2f5a60] bg-[#2f5a60]/5 shadow-[0_0_0_1px_rgba(47,90,96,1)]' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#223235]'} cursor-pointer transition-all hover:border-[#2f5a60]/50`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <span className="material-symbols-outlined text-[28px]">credit_card</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base text-slate-900 dark:text-white">Stripe</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Tarjetas y billeteras</span>
                                    </div>
                                </div>
                                <input
                                    className="peer w-5 h-5 text-[#2f5a60] border-slate-300 focus:ring-[#2f5a60] focus:ring-offset-0 bg-transparent"
                                    name="payment_method"
                                    type="radio"
                                    checked={selectedPayment === 'stripe'}
                                    onChange={() => setSelectedPayment('stripe')}
                                />
                            </label>

                            <button className="text-sm font-bold text-[#2f5a60] mt-1 px-1 flex items-center gap-1 hover:underline w-fit">
                                <span className="material-symbols-outlined text-lg">add</span>
                                Add new method
                            </button>
                        </div>
                    </section>

                    {/* Cost Breakdown Section */}
                    <section className="mt-2">
                        <div className="bg-white dark:bg-[#223235] rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Breakdown</h3>
                            <div className="flex flex-col gap-4">
                                {/* Driver Item */}
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span className="text-slate-600 dark:text-slate-400">Contribuição ao motorista</span>
                                    <span className="font-bold text-slate-900 dark:text-white">$12.00</span>
                                </div>
                                {/* Fee Item */}
                                <div className="flex justify-between items-center text-sm font-medium group cursor-help relative">
                                    <div className="flex items-center gap-1.5 text-[#2f5a60]">
                                        <span className="font-bold">Taxa Un Matecito</span>
                                        <span className="material-symbols-outlined text-[18px] cursor-pointer hover:scale-110 transition-transform" tabIndex={0}>info</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-white">$2.50</span>
                                </div>
                                {/* Separator */}
                                <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-1"></div>
                                {/* Total */}
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">$14.50</span>
                                </div>
                            </div>

                            {/* Fee Explanation */}
                            <div className="mt-5 p-4 bg-[#2f5a60]/5 border border-[#2f5a60]/10 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#2f5a60]/10 rounded-full shrink-0 text-[#2f5a60]">
                                        <span className="material-symbols-outlined text-[24px]">shield_lock</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-xs font-bold text-[#2f5a60] uppercase tracking-wider">Why the fee?</p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                            This small contribution supports our 24/7 safety team and helps verify every driver in the community.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Sticky Footer */}
                <div className="fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-[#223235] border-t border-slate-200 dark:border-slate-800 p-4 pb-8 safe-area-pb shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:absolute lg:rounded-b-[1.5rem] max-w-md mx-auto">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                            <span className="material-symbols-outlined text-[16px] text-green-600">lock</span>
                            Payments are secure and encrypted
                        </div>
                        <button className="w-full bg-[#2f5a60] hover:bg-[#1f3d41] active:scale-[0.98] transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#2f5a60]/25 flex items-center justify-between px-6">
                            <span>Confirm and Pay</span>
                            <span className="bg-white/20 px-2 py-0.5 rounded text-base font-medium">$14.50</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutScreen;
