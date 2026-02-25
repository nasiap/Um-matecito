
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

const EarningsScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const recentTrips = [
        { id: 1, route: "Downtown to Airport", time: "Today, 10:23 AM", amount: "$45.20" },
        { id: 2, route: "Palermo Soho Dropoff", time: "Yesterday, 6:15 PM", amount: "$12.50" },
        { id: 3, route: "Recoleta Tour", time: "Yesterday, 4:30 PM", amount: "$28.00" }
    ];

    return (
        <div className="bg-[#fbfaf8] dark:bg-background-dark font-display text-[#2a2422] dark:text-white min-h-screen relative pb-32 max-w-md mx-auto selection:bg-[#d46c49] selection:text-white">
            {/* Header Section */}
            <header className="px-6 pt-12 pb-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div 
                            onClick={() => navigate('/profile')}
                            className="relative group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-background-dark shadow-sm">
                                <img 
                                    alt="Mateo" 
                                    className="w-full h-full object-cover" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDENdgtru04YjKKtyF2HeMuSRj9BI7XTfJ0o2eUvYlrGIVTLKoYiTb6ngLFDsdNyKe7SzL3Xhb-A_zvFWmP96pJZAEyoAOZPHVqFrMh2IYT8QfUSOCpSC065nRAxYXYe4qGJ2A2AmmuXnom_2qwo6lWn8D_dB-xTnhUdqpuQ9eeEDgt7LJ71QVHU5zYVcHeluBzJuqIUlS0bFN2btAlKyDI24hNH_CD4RbIuJbR91UhY3JtrRJ5AlUIgV1M3onr14BAb1pA8S25vQ"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#6FA68D] rounded-full border-2 border-[#fbfaf8] dark:border-background-dark"></div>
                        </div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-[#2a2422] dark:text-white shadow-[0_2px_8px_rgba(42,36,34,0.04)] hover:bg-[#fcece8] dark:hover:bg-white/20 transition-colors relative">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-3 right-3.5 w-2 h-2 bg-[#d46c49] rounded-full"></span>
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#2a2422] dark:text-white">
                        {t('good_morning')},<br/>Mateo 🧉
                    </h1>
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="px-6 flex flex-col gap-5">
                {/* Hero Earnings Card */}
                <section className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(212,108,73,0.08)] relative overflow-hidden group border border-gray-50 dark:border-white/5">
                    {/* Decorative circle */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#d46c49]/5 rounded-full pointer-events-none group-hover:bg-[#d46c49]/10 transition-colors"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <p className="text-[#836e67] dark:text-white/60 text-xs font-bold uppercase tracking-wider">{t('total_earnings_month')}</p>
                            <div className="flex items-center gap-1 bg-[#6FA68D]/10 px-2 py-1 rounded-full">
                                <span className="material-symbols-outlined text-[#6FA68D] text-[16px]">trending_up</span>
                                <span className="text-[#6FA68D] text-xs font-bold">+12%</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#d46c49] text-[42px] font-black leading-none tracking-tighter">$1,240.50</p>
                        </div>
                        <div className="h-px w-full bg-gray-100 dark:bg-white/10 my-1"></div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-[#836e67] dark:text-white/60 font-medium">{t('tax_breakdown')}</span>
                            <span className="font-bold text-[#2a2422] dark:text-white flex items-center gap-1 cursor-pointer hover:text-[#d46c49] transition-colors">
                                {t('view_action')} <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Bento Grid: Savings & ROI */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Savings Card */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-5 shadow-[0_10px_40px_-10px_rgba(212,108,73,0.08)] flex flex-col justify-between gap-4 h-44 border border-gray-50 dark:border-white/5">
                        <div className="flex items-start justify-between">
                            <div className="w-10 h-10 rounded-2xl bg-[#6FA68D]/10 flex items-center justify-center text-[#6FA68D]">
                                <span className="material-symbols-outlined filled">savings</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#836e67] dark:text-white/60 text-[11px] font-bold uppercase tracking-wider mb-1">{t('subscription_savings')}</p>
                            <p className="text-[#6FA68D] text-[26px] font-black tracking-tight">+$85.00</p>
                            <p className="text-[10px] text-[#836e67] dark:text-white/40 mt-1 font-bold">{t('fees_avoided')}</p>
                        </div>
                    </div>

                    {/* ROI Progress Widget */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-5 shadow-[0_10px_40px_-10px_rgba(212,108,73,0.08)] flex flex-col justify-between gap-4 h-44 relative overflow-hidden border border-gray-50 dark:border-white/5">
                        <div className="absolute inset-0 bg-[#d46c49]/5 dark:bg-[#d46c49]/10"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-black text-[#d46c49] uppercase tracking-[0.15em]">{t('roi_goal')}</span>
                                <span className="text-[10px] font-black text-[#d46c49] bg-[#d46c49]/20 px-2 py-0.5 rounded-lg">75%</span>
                            </div>
                            
                            {/* Progress Circle Representation */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-16 h-16">
                                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                                        <path className="text-[#d46c49]/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                                        <path className="text-[#d46c49] drop-shadow-sm" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="4"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[#d46c49] text-xl filled">local_taxi</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-center text-[10px] text-[#2a2422] dark:text-white font-black leading-tight mt-1">
                                {t('trips_to_cover')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Utility Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-[2rem] border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 active:scale-95 transition-all shadow-sm">
                        <div className="size-12 rounded-2xl bg-[#d46c49]/10 flex items-center justify-center text-[#d46c49]">
                            <span className="material-symbols-outlined text-[30px] filled">shield</span>
                        </div>
                        <span className="text-[13px] font-black text-[#2a2422] dark:text-white uppercase tracking-wider">{t('manage_sub')}</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-[2rem] border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 active:scale-95 transition-all shadow-sm">
                        <div className="size-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[#836e67]">
                            <span className="material-symbols-outlined text-[30px] filled">description</span>
                        </div>
                        <span className="text-[13px] font-black text-[#2a2422] dark:text-white uppercase tracking-wider">{t('tax_docs')}</span>
                    </button>
                </div>

                {/* Recent Activity List */}
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex items-center justify-between px-1">
                        <h3 className="text-[20px] font-black text-[#2a2422] dark:text-white">{t('recent_trips')}</h3>
                        <button className="text-sm font-black text-[#d46c49] hover:text-[#d46c49]/80 transition-colors">{t('see_all')}</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {recentTrips.map((trip) => (
                            <div 
                                key={trip.id} 
                                className="flex items-center justify-between bg-white dark:bg-white/5 p-5 rounded-[1.75rem] border border-gray-50 dark:border-white/5 hover:border-[#d46c49]/20 transition-all shadow-sm active:scale-[0.99]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-[#fbfaf8] dark:bg-white/10 flex items-center justify-center text-[#2a2422] dark:text-white shadow-inner">
                                        <span className="material-symbols-outlined text-[24px]">directions_car</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[15px] font-black text-[#2a2422] dark:text-white leading-tight">{trip.route}</p>
                                        <p className="text-[11px] font-bold text-[#836e67] dark:text-white/50 mt-0.5 tracking-tight">{trip.time}</p>
                                    </div>
                                </div>
                                <p className="text-[17px] font-black text-[#2a2422] dark:text-white">{trip.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default EarningsScreen;
