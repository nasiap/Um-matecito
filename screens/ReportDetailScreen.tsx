import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ReportDetailScreen: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <div className="bg-[#f3f4f6] dark:bg-[#111827] font-display text-[#111827] dark:text-gray-100 antialiased min-h-screen flex items-center justify-center p-4 lg:p-0">
            <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col bg-[#f3f4f6] dark:bg-[#111827] overflow-hidden shadow-2xl border-x border-gray-200 dark:border-gray-800 rounded-none lg:rounded-[3rem] lg:min-h-[844px] lg:h-[844px] lg:border-[8px] border-zinc-200 dark:border-zinc-800">

                {/* Header */}
                <header className="sticky top-0 z-30 flex items-center justify-between bg-white/90 dark:bg-[#1F2937]/90 backdrop-blur-md px-4 py-3 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Back"
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-[#111827] dark:text-white"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <div className="flex flex-col items-center">
                        <h1 className="text-base font-bold text-[#111827] dark:text-white leading-tight">Report #{id || '8932'}</h1>
                        <span className="text-xs font-medium text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full mt-0.5">Pending Review</span>
                    </div>
                    <button
                        aria-label="More options"
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-[#111827] dark:text-white"
                    >
                        <span className="material-symbols-outlined text-[24px]">more_vert</span>
                    </button>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto pb-40 no-scrollbar">
                    {/* Reported User Section */}
                    <section className="bg-white dark:bg-[#1F2937] px-4 py-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-sm font-bold text-[#6B7280] uppercase tracking-wider">Reported User</h2>
                            <span className="text-xs font-semibold text-[#749fbe] cursor-pointer hover:underline">View Full Profile</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative h-16 w-16 shrink-0">
                                <img
                                    alt="Portrait of reported user"
                                    className="h-full w-full rounded-full object-cover border-2 border-gray-100 dark:border-gray-600"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUrsWCFlPuAEUEW0JOQ00kIwpFUbFBkj4opmrphIVzrDSnvK45zTwSqKgeXw92-c2Si4UuEMZpDL9n4agb7TNk-DK8QBQnpoQMPChl3aCgcnzF3Wi9Oj4WFhgYwk7768tRFhohoP8rXpI1CLC_QOrtHWj13b0mg3yHBoAdilNSztHAuZQjT28auCUfno-Ii78iQjIYd5onH-Vbtm8D1D385bBMY99R1j9j44AwhCm7V1KyRSLBvrSRt4vOhC0b6DdnetamA-zf11A"
                                />
                                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#1F2937] border border-gray-200 dark:border-gray-600 shadow-sm">
                                    <span className="text-xs font-bold text-[#111827] dark:text-white">4.2</span>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#111827] dark:text-white truncate">Juan Perez</h3>
                                    <span className="text-xs text-[#6B7280]">Joined 2021</span>
                                </div>
                                <div className="mt-2 flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                                        <span className="material-symbols-outlined text-[16px] text-[#EF4444]">gavel</span>
                                        <span className="text-xs font-bold text-[#EF4444]">2 Strikes</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                        <span className="material-symbols-outlined text-[16px] text-[#6B7280]">history</span>
                                        <span className="text-xs font-medium text-[#6B7280]">3 Reports</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Report Details Section */}
                    <section className="mt-2 bg-white dark:bg-[#1F2937] px-4 py-6 border-y border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-[#F59E0B] text-[20px]">warning</span>
                            <h2 className="text-base font-bold text-[#111827] dark:text-white">Report Details: Inappropriate Behavior</h2>
                        </div>
                        <div className="mb-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-3">
                            <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-2">
                                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                <span>Yesterday, 14:30 PM</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-gray-200">
                                <span className="material-symbols-outlined text-[18px]">directions_car</span>
                                <span>Buenos Aires <span className="text-[#6B7280] mx-1">→</span> Mar del Plata</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-xs font-bold text-[#6B7280] uppercase mb-2">Reporter Description</h4>
                            <p className="text-sm leading-relaxed text-[#111827] dark:text-gray-300">
                                "The driver was constantly checking his phone while on the highway. I asked him politely to focus on the road, but he got aggressive and started shouting. I felt very unsafe during the last hour of the trip."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-[#6B7280] uppercase mb-2">Evidence Provided</h4>
                            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                                <div className="h-24 w-24 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-gray-400">image</span>
                                </div>
                                <div className="h-24 w-24 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                    <span className="material-symbols-outlined text-gray-400">image</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer Action */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-white dark:bg-[#1F2937] border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 pb-8">
                    <h3 className="text-sm font-bold text-[#111827] dark:text-white mb-3">Take Action</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 text-sm font-semibold text-[#111827] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 transition-colors">
                            <span className="material-symbols-outlined text-[20px] text-[#10B981]">check_circle</span>
                            Dismiss as False Report
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#F59E0B]/10 py-3 text-sm font-semibold text-[#F59E0B] hover:bg-[#F59E0B]/20 active:bg-[#F59E0B]/30 transition-colors border border-[#F59E0B]/20">
                            <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                            Send Warning
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 py-3 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 active:bg-orange-300 transition-colors border border-orange-200 dark:border-orange-800">
                            <span className="material-symbols-outlined text-[20px]">timer</span>
                            3-Day Ban
                        </button>
                        <button className="col-span-2 flex items-center justify-center gap-2 rounded-lg bg-[#EF4444] hover:bg-[#DC2626] text-white py-3.5 font-bold text-base shadow-md shadow-[#EF4444]/20 transition-all active:scale-[0.98]">
                            <span className="material-symbols-outlined text-[20px]">block</span>
                            Permanent Ban
                        </button>
                    </div>
                </div>

                {/* iOS Home Indicator Visual for web */}
                <div className="absolute bottom-1.5 left-0 right-0 flex justify-center z-30 pointer-events-none">
                    <div className="w-32 h-1 bg-gray-300 dark:bg-gray-700 rounded-full opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default ReportDetailScreen;
