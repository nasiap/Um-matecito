import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumScreen: React.FC = () => {
    const navigate = useNavigate();

    // Dynamically load the Epilogue font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="bg-[#f6f5f3] dark:bg-[#2c3a2d] min-h-screen text-[#141514] dark:text-white antialiased selection:bg-[#578156]/20 font-['Epilogue']">
            <div className="relative flex flex-col w-full max-w-md mx-auto min-h-screen pb-safe overflow-x-hidden shadow-2xl">
                {/* Header / Nav */}
                <nav className="sticky top-0 z-20 flex items-center justify-between p-4 pb-2 bg-[#f6f5f3]/95 dark:bg-[#2c3a2d]/95 backdrop-blur-md transition-all">
                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Go back"
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[#141514] dark:text-white">arrow_back</span>
                    </button>
                    <div className="flex items-center gap-1.5 animate-[fadeIn_0.5s_ease-out_forwards] animation-delay-200">
                        <span className="material-symbols-outlined text-[#D4AF37] text-[20px]">local_cafe</span>
                        <h1 className="text-[#141514] dark:text-white text-base font-bold tracking-tight">Un Matecito Premium</h1>
                    </div>
                    <div className="w-10"></div> {/* Spacer for optical centering */}
                </nav>

                {/* Hero Area */}
                <header className="flex flex-col items-center px-6 pt-4 pb-8 text-center">
                    <div className="mb-4 relative group cursor-default">
                        <div className="absolute inset-0 bg-[#D4AF37]/30 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-white dark:bg-white/10 p-4 rounded-full shadow-sm ring-1 ring-black/5">
                            <span className="material-symbols-outlined text-[#D4AF37] text-4xl block">workspace_premium</span>
                        </div>
                    </div>
                    <h2 className="text-[#141514] dark:text-white text-[28px] font-bold leading-[1.15] mb-3">
                        Drive better,<br />
                        <span className="text-[#578156] dark:text-[#8cb88b]">earn more.</span>
                    </h2>
                    <p className="text-[#6B6B6B] dark:text-gray-300 text-[15px] font-medium leading-relaxed max-w-[280px] mx-auto">
                        Join the inner circle. Keep 100% of your tips & fares with zero fees.
                    </p>
                </header>

                {/* Plans Grid */}
                <main className="flex flex-col gap-5 px-5 pb-12 w-full">
                    {/* Plan 1: Frequente (Monthly) */}
                    <article className="relative flex flex-col p-6 bg-white dark:bg-[#3d4b3e] rounded-xl shadow-[0_4px_24px_-4px_rgba(87,129,86,0.08)] border border-[#e7e5e4] dark:border-white/5 active:scale-[0.98] transition-all duration-200">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-bold text-[#2E2E2E] dark:text-white">Frequente</h3>
                        </div>
                        <p className="text-sm text-[#6B6B6B] dark:text-gray-400 mb-5 font-medium">Perfect for trying it out.</p>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-black tracking-tight text-[#2E2E2E] dark:text-white">$9.99</span>
                            <span className="text-sm font-bold text-[#6B6B6B] dark:text-gray-400">/mo</span>
                        </div>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Zero service fees on first 10 rides</span>
                            </div>
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Standard email support</span>
                            </div>
                        </div>
                        <button className="w-full h-11 flex items-center justify-center rounded-lg bg-[#f2f3f2] dark:bg-white/10 text-[#141514] dark:text-white text-sm font-bold hover:bg-[#e5e7e5] dark:hover:bg-white/20 transition-colors">
                            Select Frequente
                        </button>
                    </article>

                    {/* Plan 2: Viajante (Quarterly) */}
                    <article className="relative flex flex-col p-6 bg-white dark:bg-[#3d4b3e] rounded-xl shadow-[0_4px_24px_-4px_rgba(87,129,86,0.08)] border border-[#e7e5e4] dark:border-white/5 active:scale-[0.98] transition-all duration-200">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-bold text-[#2E2E2E] dark:text-white">Viajante</h3>
                            <div className="bg-[#578156]/10 text-[#578156] dark:text-[#8cb88b] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Quarterly</div>
                        </div>
                        <p className="text-sm text-[#6B6B6B] dark:text-gray-400 mb-5 font-medium">For the steady driver.</p>
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-black tracking-tight text-[#2E2E2E] dark:text-white">$8.50</span>
                            <span className="text-sm font-bold text-[#6B6B6B] dark:text-gray-400">/mo</span>
                        </div>
                        <p className="text-xs text-[#6B6B6B] dark:text-gray-500 font-medium mb-6">Billed $25.50 quarterly</p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Zero service fees on all rides</span>
                            </div>
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Priority chat support</span>
                            </div>
                        </div>
                        <button className="w-full h-11 flex items-center justify-center rounded-lg bg-[#f2f3f2] dark:bg-white/10 text-[#141514] dark:text-white text-sm font-bold hover:bg-[#e5e7e5] dark:hover:bg-white/20 transition-colors">
                            Select Viajante
                        </button>
                    </article>

                    {/* Plan 3: Cebador Pro (Annual) - Featured */}
                    <article className="relative flex flex-col p-6 bg-white dark:bg-[#3d4b3e] rounded-xl shadow-[0_8px_30px_-4px_rgba(212,175,55,0.2)] ring-1 ring-[#D4AF37]/40 dark:ring-[#D4AF37]/30 active:scale-[0.99] transition-all duration-200 overflow-hidden">
                        {/* Decorative BG Gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                        <div className="absolute top-0 right-0">
                            <div className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-sm">
                                Best Value
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-[#2E2E2E] dark:text-white">Cebador Pro</h3>
                        </div>
                        <p className="text-sm text-[#6B6B6B] dark:text-gray-400 mb-5 font-medium">The master server experience.</p>
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-black tracking-tight text-[#2E2E2E] dark:text-white">$6.99</span>
                            <span className="text-sm font-bold text-[#6B6B6B] dark:text-gray-400">/mo</span>
                        </div>
                        <p className="text-xs text-[#6B6B6B] dark:text-gray-500 font-medium mb-6">Billed $83.88 annually</p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3 text-[13px] font-bold text-[#141514] dark:text-white">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Unlimited zero service fees</span>
                            </div>
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#578156] text-[20px] shrink-0">check_circle</span>
                                <span className="pt-0.5">Priority in search results</span>
                            </div>
                            <div className="flex items-start gap-3 text-[13px] font-medium text-[#4a4a4a] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[#D4AF37] text-[20px] shrink-0">stars</span>
                                <span className="pt-0.5">Exclusive Gold Badge on profile</span>
                            </div>
                        </div>
                        <button className="w-full h-11 flex items-center justify-center rounded-lg bg-[#578156] text-white text-sm font-bold shadow-lg shadow-[#578156]/20 hover:bg-[#3d5c3c] transition-colors">
                            Join as Cebador Pro
                        </button>
                    </article>
                </main>

                {/* Footer */}
                <footer className="flex flex-col items-center gap-5 px-8 pb-10 mt-auto">
                    <button className="text-[#578156] dark:text-[#8cb88b] text-sm font-semibold hover:text-[#3d5c3c] transition-colors">
                        Restore Purchase
                    </button>
                    <p className="text-[11px] leading-5 text-[#9CA3AF] dark:text-gray-500 text-center">
                        Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period. <br />
                        <a className="underline hover:text-[#6B6B6B] dark:hover:text-gray-400 transition-colors" href="#">Terms of Service</a> & <a className="underline hover:text-[#6B6B6B] dark:hover:text-gray-400 transition-colors" href="#">Privacy Policy</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default PremiumScreen;
