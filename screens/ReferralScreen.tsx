
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BottomNav } from '../components/Layout';

const ReferralScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const referralCode = "MATEC123";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#fbfaf9] dark:bg-background-dark min-h-screen flex flex-col font-referral max-w-md mx-auto relative overflow-x-hidden antialiased">
            {/* Top App Bar */}
            <header className="sticky top-0 z-30 bg-[#fbfaf9]/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 flex items-center justify-between">
                <button 
                    onClick={() => navigate(-1)}
                    className="text-[#181311] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[28px]">arrow_back</span>
                </button>
                <h1 className="text-[#181311] dark:text-white text-[19px] font-black leading-tight tracking-tight flex-1 text-center pr-12">
                    {t('referral_title')}
                </h1>
            </header>

            {/* Scrollable Content */}
            <main className="flex-1 flex flex-col px-6 pb-32 overflow-y-auto no-scrollbar">
                {/* Hero Illustration */}
                <div className="mt-4 mb-10 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-warm group ring-1 ring-black/5 dark:ring-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 via-transparent to-transparent z-10 dark:from-background-dark/80"></div>
                    <div 
                        className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhB2ANbP7QU_bFtuNs6_TdUMTcemY9SZsEAZ9t9PifO7yjLkn7sKTG-A58mk1jygMEG5DqKsGsFhyGgxDJEiDRzWi9FvKFUGKBRAK-JYvdLKqHmRzWLRWsS4SuuDR2FSpoT3OG33oC7LmOUVlPS8jrDR2XGKMW1KDvIXQzLMMJy-InXD4l5UHwc4r33AeCRX5KVWdTK_KxQ32-qKaXbI7z1OpMZDVOf6DCPdz650QF4ZlE_kUT3PrRhZ26zWitMuRoOnDbJ2sVIZY")'}}
                    ></div>
                </div>

                {/* Headline */}
                <div className="text-center mb-10 relative z-20">
                    <h2 className="text-[#181311] dark:text-white tracking-tight text-[32px] font-black leading-[1.1] mb-2 px-4">
                        {t('referral_hero_title').includes('ganhem') ? (
                            <>
                                {t('referral_hero_title').split('ganhem')[0]}<br/>
                                <span className="text-referral-orange">ganhem{t('referral_hero_title').split('ganhem')[1]}</span>
                            </>
                        ) : (
                            <span className="text-referral-orange">{t('referral_hero_title')}</span>
                        )}
                    </h2>
                    <p className="text-[#8a6e60] dark:text-gray-400 text-[15px] font-bold opacity-90">
                        {t('referral_hero_desc')}
                    </p>
                </div>

                {/* Benefit Card */}
                <div className="relative mb-10 group cursor-default">
                    <div className="absolute inset-0 bg-referral-orange/10 blur-3xl rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-5 rounded-[1.75rem] bg-white dark:bg-surface-dark p-6 shadow-[0_4px_20px_rgba(244,106,37,0.08)] border border-[#e6dfdb] dark:border-white/5">
                        <div className="size-14 shrink-0 rounded-full bg-[#e8f5e9] dark:bg-green-900/30 flex items-center justify-center text-[#2e7d32] dark:text-green-400 shadow-inner">
                            <span className="material-symbols-outlined text-[30px] filled">savings</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#181311] dark:text-white text-[17px] font-black leading-tight tracking-tight">{t('referral_benefit_title')}</p>
                            <p className="text-[#8a6e60] dark:text-gray-400 text-[13px] font-bold leading-normal">
                                {t('referral_benefit_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Referral Code Section */}
                <div className="flex flex-col gap-4 mb-10">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8a6e60] dark:text-gray-500 text-center">{t('referral_code_label')}</label>
                    <div className="relative group cursor-pointer active:scale-[0.98] transition-all">
                        <div className="absolute inset-0 rounded-[1.25rem] border-2 border-dashed border-referral-orange/20 group-hover:border-referral-orange/50 transition-colors"></div>
                        <div className="relative flex items-center justify-between h-20 px-8 bg-referral-orange/5 rounded-[1.25rem]">
                            <span className="text-[24px] font-black text-[#181311] dark:text-white tracking-[0.2em] font-mono">{referralCode}</span>
                            <button 
                                onClick={handleCopy}
                                className="flex items-center gap-2.5 text-referral-orange font-black text-sm bg-white dark:bg-background-dark py-2.5 px-5 rounded-xl shadow-lg shadow-referral-orange/10 group-hover:text-white group-hover:bg-referral-orange transition-all uppercase tracking-wider"
                            >
                                <span>{copied ? 'OK!' : t('copy')}</span>
                                <span className="material-symbols-outlined text-[20px] filled">{copied ? 'check' : 'content_copy'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Share Buttons */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                    <button className="flex flex-col items-center gap-2.5 group">
                        <div className="size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:-translate-y-1.5 transition-transform duration-300">
                            <svg className="fill-white" height="28" viewBox="0 0 24 24" width="28"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
                        </div>
                        <span className="text-[13px] font-bold text-[#8a6e60] dark:text-gray-400 tracking-tight">{t('whatsapp')}</span>
                    </button>
                    <button className="flex flex-col items-center gap-2.5 group">
                        <div className="size-16 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:-translate-y-1.5 transition-transform duration-300">
                            <svg height="28" viewBox="0 0 24 24" width="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </div>
                        <span className="text-[13px] font-bold text-[#8a6e60] dark:text-gray-400 tracking-tight">{t('instagram')}</span>
                    </button>
                    <button className="flex flex-col items-center gap-2.5 group">
                        <div className="size-16 rounded-full bg-white dark:bg-surface-dark border border-[#e6dfdb] dark:border-white/10 text-[#181311] dark:text-white flex items-center justify-center shadow-sm group-hover:-translate-y-1.5 transition-transform duration-300">
                            <span className="material-symbols-outlined text-[28px]">ios_share</span>
                        </div>
                        <span className="text-[13px] font-bold text-[#8a6e60] dark:text-gray-400 tracking-tight">{t('others')}</span>
                    </button>
                </div>

                {/* Gamification Status Card */}
                <div className="mt-auto">
                    <div className="bg-gradient-to-br from-[#2a2622] to-[#181311] dark:from-black dark:to-[#1a1a1a] rounded-[2rem] p-6 text-white shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -mt-6 -mr-6 size-32 bg-referral-orange rounded-full opacity-10 blur-3xl"></div>
                        
                        <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                            <div className="flex flex-col gap-1">
                                <p className="text-referral-orange font-black text-[10px] uppercase tracking-[0.2em] mb-1">{t('current_status')}</p>
                                <p className="font-black text-[22px] leading-none tracking-tight">{t('referrals_left')}</p>
                                <p className="text-white/60 text-[13px] font-bold mt-1.5 tracking-tight">
                                    {t('badge_target').split('Embaixador')[0].split('Embajador')[0]}
                                    <span className="text-white font-black">{t('ambassador')}</span>
                                </p>
                            </div>
                            <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                                <span className="material-symbols-outlined text-[#F2DF80] text-[34px] filled">military_tech</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative z-10">
                            <div className="flex justify-between text-[10px] font-black text-white/40 mb-2.5 uppercase tracking-widest">
                                <span>{t('beginner')}</span>
                                <span>{t('ambassador')}</span>
                            </div>
                            <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
                                <div className="h-full bg-gradient-to-r from-referral-orange to-[#F2DF80] w-[60%] rounded-full shadow-[0_0_15px_rgba(244,106,37,0.3)] transition-all duration-1000 ease-out"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Footer */}
                <div className="mt-8 text-center">
                    <button className="text-[11px] font-bold text-[#8a6e60]/60 dark:text-gray-500 hover:text-referral-orange transition-colors underline decoration-dotted underline-offset-4">
                        {t('referral_terms')}
                    </button>
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default ReferralScreen;
