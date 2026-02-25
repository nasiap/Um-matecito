import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportUserScreen: React.FC = () => {
    const navigate = useNavigate();
    const [selectedReason, setSelectedReason] = useState<string>('comportamento');

    return (
        <div className="bg-[#fafafa] dark:bg-[#1a1d23] font-display text-[#343B4A] dark:text-gray-100 antialiased min-h-screen flex items-center justify-center p-4 lg:p-0">
            <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col bg-[#fafafa] dark:bg-[#1a1d23] overflow-hidden shadow-2xl rounded-none lg:rounded-[3rem] lg:min-h-[844px] lg:h-[844px] border-zinc-200 dark:border-zinc-800 lg:border-[8px]">

                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-20 flex items-center justify-between bg-[#fafafa]/90 dark:bg-[#1a1d23]/90 backdrop-blur-md px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Close"
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#343B4A] dark:text-white"
                    >
                        <span className="material-symbols-outlined text-[24px]">close</span>
                    </button>
                    <h1 className="text-lg font-bold leading-tight tracking-tight text-[#343B4A] dark:text-white flex-1 text-center pr-10">Report User</h1>
                </header>

                {/* Main Scrollable Content */}
                <main className="flex-1 overflow-y-auto px-4 pb-32 pt-4 no-scrollbar">
                    {/* User Context Card */}
                    <div className="mb-8 flex items-center gap-4 rounded-xl bg-[#E8ECF1] dark:bg-[#2C3038] p-4 shadow-sm border border-transparent dark:border-gray-700">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-gray-600 shadow-sm">
                            <img
                                alt="Portrait of the user being reported"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUrsWCFlPuAEUEW0JOQ00kIwpFUbFBkj4opmrphIVzrDSnvK45zTwSqKgeXw92-c2Si4UuEMZpDL9n4agb7TNk-DK8QBQnpoQMPChl3aCgcnzF3Wi9Oj4WFhgYwk7768tRFhohoP8rXpI1CLC_QOrtHWj13b0mg3yHBoAdilNSztHAuZQjT28auCUfno-Ii78iQjIYd5onH-Vbtm8D1D385bBMY99R1j9j44AwhCm7V1KyRSLBvrSRt4vOhC0b6DdnetamA-zf11A"
                            />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                            <p className="font-semibold text-[#8C9096] uppercase tracking-wider text-xs mb-0.5">Reporting</p>
                            <p className="text-[#343B4A] dark:text-white text-lg font-bold leading-tight truncate">Juan Perez</p>
                            <div className="flex items-center gap-1 mt-1 text-[#438BAD] dark:text-[#749fbe] text-sm font-medium">
                                <span className="material-symbols-outlined text-[16px]">directions_car</span>
                                <span className="truncate">Trip to Mar del Plata</span>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <section className="mb-8">
                        <h2 className="mb-4 text-lg font-bold text-[#343B4A] dark:text-white px-1">What went wrong?</h2>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {/* Option 1: Atraso */}
                            <label className="group relative flex cursor-pointer flex-row sm:flex-col items-center gap-4 sm:gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2C3038] p-4 transition-all hover:border-[#749fbe]/50 hover:shadow-soft active:scale-[0.98]">
                                <input
                                    className="peer sr-only"
                                    name="report_reason"
                                    type="radio"
                                    value="atraso"
                                    checked={selectedReason === 'atraso'}
                                    onChange={() => setSelectedReason('atraso')}
                                />
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8ECF1] dark:bg-gray-700 text-[#438BAD] dark:text-[#749fbe] transition-colors peer-checked:bg-[#749fbe] peer-checked:text-white">
                                    <span className="material-symbols-outlined text-[24px]">schedule</span>
                                </div>
                                <div className="flex-1 text-left sm:text-center">
                                    <span className="block text-base font-bold text-[#343B4A] dark:text-white">Atraso</span>
                                    <span className="block text-xs text-[#8C9096] mt-0.5 sm:hidden">Driver was late to pickup</span>
                                </div>
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-[#749fbe] peer-checked:bg-[#749fbe]/5 transition-all pointer-events-none"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:top-4 sm:right-4 sm:translate-y-0 opacity-0 peer-checked:opacity-100 text-[#749fbe] transition-opacity sm:hidden">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                            </label>

                            {/* Option 2: Comportamento */}
                            <label className="group relative flex cursor-pointer flex-row sm:flex-col items-center gap-4 sm:gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2C3038] p-4 transition-all hover:border-[#749fbe]/50 hover:shadow-soft active:scale-[0.98]">
                                <input
                                    className="peer sr-only"
                                    name="report_reason"
                                    type="radio"
                                    value="comportamento"
                                    checked={selectedReason === 'comportamento'}
                                    onChange={() => setSelectedReason('comportamento')}
                                />
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8ECF1] dark:bg-gray-700 text-[#438BAD] dark:text-[#749fbe] transition-colors peer-checked:bg-[#749fbe] peer-checked:text-white">
                                    <span className="material-symbols-outlined text-[24px]">person</span>
                                </div>
                                <div className="flex-1 text-left sm:text-center">
                                    <span className="block text-base font-bold text-[#343B4A] dark:text-white">Comportamento</span>
                                    <span className="block text-xs text-[#8C9096] mt-0.5 sm:hidden">Rude or inappropriate</span>
                                </div>
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-[#749fbe] peer-checked:bg-[#749fbe]/5 transition-all pointer-events-none"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:top-4 sm:right-4 sm:translate-y-0 opacity-0 peer-checked:opacity-100 text-[#749fbe] transition-opacity sm:hidden">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                            </label>

                            {/* Option 3: Veículo */}
                            <label className="group relative flex cursor-pointer flex-row sm:flex-col items-center gap-4 sm:gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2C3038] p-4 transition-all hover:border-[#749fbe]/50 hover:shadow-soft active:scale-[0.98]">
                                <input
                                    className="peer sr-only"
                                    name="report_reason"
                                    type="radio"
                                    value="veiculo"
                                    checked={selectedReason === 'veiculo'}
                                    onChange={() => setSelectedReason('veiculo')}
                                />
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8ECF1] dark:bg-gray-700 text-[#438BAD] dark:text-[#749fbe] transition-colors peer-checked:bg-[#749fbe] peer-checked:text-white">
                                    <span className="material-symbols-outlined text-[24px]">no_crash</span>
                                </div>
                                <div className="flex-1 text-left sm:text-center">
                                    <span className="block text-base font-bold text-[#343B4A] dark:text-white leading-tight">Veículo diferente</span>
                                    <span className="block text-xs text-[#8C9096] mt-0.5 sm:hidden">Car didn't match profile</span>
                                </div>
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-[#749fbe] peer-checked:bg-[#749fbe]/5 transition-all pointer-events-none"></div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:top-4 sm:right-4 sm:translate-y-0 opacity-0 peer-checked:opacity-100 text-[#749fbe] transition-opacity sm:hidden">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Details Section */}
                    <section className="mb-4">
                        <div className="flex items-center justify-between mb-2 px-1">
                            <h2 className="text-lg font-bold text-[#343B4A] dark:text-white">Additional Details</h2>
                            <span className="text-xs text-[#8C9096] bg-[#E8ECF1] dark:bg-gray-800 px-2 py-1 rounded-md">Optional</span>
                        </div>
                        <div className="relative">
                            <textarea
                                className="w-full rounded-xl border-0 bg-white dark:bg-[#2C3038] p-4 text-base text-[#343B4A] dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-[#8C9096] focus:ring-2 focus:ring-inset focus:ring-[#749fbe] focus:bg-white dark:focus:bg-gray-800 transition-all resize-none leading-relaxed"
                                placeholder="Please provide as much detail as possible to help us understand the situation."
                                rows={5}
                            ></textarea>
                            {/* Attachment Action (Optional) */}
                            <div className="absolute bottom-3 left-3">
                                <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-[#8C9096] hover:bg-[#E8ECF1] dark:hover:bg-gray-700 hover:text-[#749fbe] transition-colors" type="button">
                                    <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                                    <span className="text-xs">Add Photo</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Safety Tip/Disclaimer */}
                    <div className="flex gap-3 px-1 py-4 opacity-80">
                        <span className="material-symbols-outlined text-[#749fbe] text-[20px] shrink-0 mt-0.5">shield</span>
                        <p className="text-xs text-[#8C9096] leading-relaxed">
                            Your safety is our priority. This report is <span className="font-bold text-[#343B4A] dark:text-gray-300">anonymous</span> and will be reviewed by our trust and safety team immediately.
                        </p>
                    </div>
                </main>

                {/* Fixed Footer CTA */}
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white via-white to-transparent dark:from-[#1a1d23] dark:via-[#1a1d23] pt-12 pb-6 px-4 rounded-b-[3rem]">
                    <button
                        onClick={() => navigate('/home')}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#749fbe] hover:bg-[#438BAD] text-white py-4 font-bold text-lg shadow-lg shadow-[#749fbe]/20 transition-all active:scale-[0.98]"
                    >
                        <span>Submit Report</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                    {/* iOS Home Indicator spacer for web when wrapped in frame */}
                    <div className="h-2 w-full"></div>
                </div>

                {/* iOS Home Indicator Visual */}
                <div className="absolute bottom-1.5 left-0 right-0 flex justify-center z-20">
                    <div className="w-32 h-1 bg-gray-300 dark:bg-gray-700 rounded-full opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default ReportUserScreen;
