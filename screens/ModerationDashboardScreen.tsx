import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModerationDashboardScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="bg-[#F3F4F6] dark:bg-[#111827] font-display text-[#1F2937] dark:text-gray-100 antialiased min-h-screen flex items-center justify-center p-4 lg:p-0">
            <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col bg-[#F3F4F6] dark:bg-[#111827] overflow-hidden shadow-2xl rounded-none lg:rounded-[3rem] lg:min-h-[844px] lg:h-[844px] border-zinc-200 dark:border-zinc-800 lg:border-[8px]">

                {/* Header */}
                <header className="sticky top-0 z-20 flex items-center justify-between bg-white/90 dark:bg-[#1F2937]/90 backdrop-blur-md px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <button
                        aria-label="Menu"
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#1F2937] dark:text-white"
                    >
                        <span className="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-[#1F2937] dark:text-white">Moderation Dashboard</h1>
                    <button
                        aria-label="Notifications"
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#1F2937] dark:text-white relative"
                    >
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[#EF4444] ring-2 ring-white dark:ring-[#1F2937]"></span>
                    </button>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto px-4 pb-24 pt-6 no-scrollbar">
                    {/* Stats Grid */}
                    <section className="grid grid-cols-3 gap-3 mb-8">
                        <div className="bg-white dark:bg-[#1F2937] p-3 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                            <div className="text-[#F59E0B] mb-1">
                                <span className="material-symbols-outlined text-[24px]">pending_actions</span>
                            </div>
                            <span className="text-2xl font-bold text-[#1F2937] dark:text-white">12</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#6B7280] mt-1">Pending</span>
                        </div>
                        <div className="bg-white dark:bg-[#1F2937] p-3 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                            <div className="text-[#EF4444] mb-1">
                                <span className="material-symbols-outlined text-[24px]">block</span>
                            </div>
                            <span className="text-2xl font-bold text-[#1F2937] dark:text-white">5</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#6B7280] mt-1">Active Bans</span>
                        </div>
                        <div className="bg-white dark:bg-[#1F2937] p-3 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                            <div className="text-[#10B981] mb-1">
                                <span className="material-symbols-outlined text-[24px]">flag</span>
                            </div>
                            <span className="text-2xl font-bold text-[#1F2937] dark:text-white">28</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#6B7280] mt-1">Flagged</span>
                        </div>
                    </section>

                    {/* Recent Reports Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-[#1F2937] dark:text-white">Recent Reports</h2>
                        <button className="text-sm font-medium text-[#4F46E5] hover:text-[#4338CA] transition-colors">View All</button>
                    </div>

                    {/* Reports List */}
                    <div className="flex flex-col gap-4">
                        {/* Report Item 1 */}
                        <div className="group relative bg-white dark:bg-[#1F2937] rounded-xl p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border-l-4 border-[#EF4444] dark:border-[#EF4444] transition-all hover:shadow-md cursor-pointer" onClick={() => navigate('/admin/report/1')}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                                        <img alt="Juan Perez Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUrsWCFlPuAEUEW0JOQ00kIwpFUbFBkj4opmrphIVzrDSnvK45zTwSqKgeXw92-c2Si4UuEMZpDL9n4agb7TNk-DK8QBQnpoQMPChl3aCgcnzF3Wi9Oj4WFhgYwk7768tRFhohoP8rXpI1CLC_QOrtHWj13b0mg3yHBoAdilNSztHAuZQjT28auCUfno-Ii78iQjIYd5onH-Vbtm8D1D385bBMY99R1j9j44AwhCm7V1KyRSLBvrSRt4vOhC0b6DdnetamA-zf11A" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#1F2937] dark:text-white">Juan Perez</h3>
                                        <p className="text-xs text-[#6B7280]">Accused</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-red-50 dark:bg-red-900/30 px-2 py-0.5 text-xs font-semibold text-[#EF4444]">
                                    <span className="material-symbols-outlined text-[14px]">warning</span>
                                    Harassment
                                </span>
                            </div>
                            <div className="mb-3 pl-[3.25rem]">
                                <p className="text-sm text-[#1F2937] dark:text-gray-300 line-clamp-2">
                                    User was extremely aggressive during the trip. He started shouting about the route and made me feel unsafe...
                                </p>
                                <div className="mt-2 text-xs text-[#6B7280] flex items-center gap-1">
                                    <span className="font-medium">Reported by:</span> Maria G.
                                    <span className="mx-1">•</span>
                                    <span>2 mins ago</span>
                                </div>
                            </div>
                            <div className="flex gap-2 pl-[3.25rem]">
                                <button className="flex-1 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5]/20 text-[#4F46E5] py-2 text-xs font-bold transition-colors">Review</button>
                                <button className="flex-1 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#1F2937] dark:text-white py-2 text-xs font-bold transition-colors">Dismiss</button>
                            </div>
                        </div>

                        {/* Report Item 2 */}
                        <div className="group relative bg-white dark:bg-[#1F2937] rounded-xl p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border-l-4 border-[#F59E0B] dark:border-[#F59E0B] transition-all hover:shadow-md cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">person</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#1F2937] dark:text-white">Carlos Ruiz</h3>
                                        <p className="text-xs text-[#6B7280]">Accused</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 dark:bg-yellow-900/30 px-2 py-0.5 text-xs font-semibold text-[#F59E0B]">
                                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                                    Late Arrival
                                </span>
                            </div>
                            <div className="mb-3 pl-[3.25rem]">
                                <p className="text-sm text-[#1F2937] dark:text-gray-300 line-clamp-2">
                                    Driver was 45 minutes late to the pickup point and did not communicate.
                                </p>
                                <div className="mt-2 text-xs text-[#6B7280] flex items-center gap-1">
                                    <span className="font-medium">Reported by:</span> Sofia L.
                                    <span className="mx-1">•</span>
                                    <span>15 mins ago</span>
                                </div>
                            </div>
                            <div className="flex gap-2 pl-[3.25rem]">
                                <button className="flex-1 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5]/20 text-[#4F46E5] py-2 text-xs font-bold transition-colors">Review</button>
                                <button className="flex-1 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#1F2937] dark:text-white py-2 text-xs font-bold transition-colors">Dismiss</button>
                            </div>
                        </div>

                        {/* Report Item 3 */}
                        <div className="group relative bg-white dark:bg-[#1F2937] rounded-xl p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border-l-4 border-gray-300 dark:border-gray-600 transition-all hover:shadow-md opacity-80 cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">person</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#1F2937] dark:text-white">Lucia M.</h3>
                                        <p className="text-xs text-[#6B7280]">Accused</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-semibold text-[#6B7280]">
                                    <span className="material-symbols-outlined text-[14px]">directions_car</span>
                                    Vehicle Mismatch
                                </span>
                            </div>
                            <div className="mb-3 pl-[3.25rem]">
                                <p className="text-sm text-[#1F2937] dark:text-gray-300 line-clamp-2">
                                    The car was a Ford Focus but the app said Toyota Corolla. Same plate though.
                                </p>
                                <div className="mt-2 text-xs text-[#6B7280] flex items-center gap-1">
                                    <span className="font-medium">Reported by:</span> Pedro S.
                                    <span className="mx-1">•</span>
                                    <span>1 hr ago</span>
                                </div>
                            </div>
                            <div className="flex gap-2 pl-[3.25rem]">
                                <button className="flex-1 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5]/20 text-[#4F46E5] py-2 text-xs font-bold transition-colors">Review</button>
                                <button className="flex-1 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#1F2937] dark:text-white py-2 text-xs font-bold transition-colors">Dismiss</button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Bottom Navigation */}
                <div className="sticky bottom-0 left-0 right-0 z-10 bg-white dark:bg-[#1F2937] border-t border-gray-200 dark:border-gray-700 pb-6 pt-2 px-6">
                    <div className="flex justify-between items-end">
                        <button className="flex flex-col items-center gap-1 text-[#4F46E5]">
                            <span className="material-symbols-outlined text-[26px]">dashboard</span>
                            <span className="text-[10px] font-medium">Dashboard</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-[26px]">group</span>
                            <span className="text-[10px] font-medium">Users</span>
                        </button>
                        <div className="relative -top-5">
                            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/30 hover:bg-[#4338CA] transition-colors">
                                <span className="material-symbols-outlined text-[28px]">search</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setActiveTab('bans')}
                            className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-[26px]">gavel</span>
                            <span className="text-[10px] font-medium">Bans</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('settings')}
                            className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-[26px]">settings</span>
                            <span className="text-[10px] font-medium">Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModerationDashboardScreen;
