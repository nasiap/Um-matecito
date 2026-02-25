
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const WelcomeBonusScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#fdf8f2] dark:bg-background-dark font-vibrant text-background-dark dark:text-white overflow-x-hidden antialiased max-w-md mx-auto">
            {/* Hero Section with Illustration */}
            <div className="w-full relative">
                <div className="relative z-10 w-full aspect-[4/3] max-h-[45vh] bg-center bg-no-repeat bg-cover rounded-b-[3.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden bg-[#F2EFE9] dark:bg-[#252b26]" 
                     style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkpDkoLSmeITTpaQBE6bBg4zU4kWas1OTdrO3E9PftmZQlen2-kZh305SMA1nWY-GwS72PqPASMkSxFbkhCcsTbogqIndigsyvxloIvts2Ob6cmqoWJ2IKnokW7TsU-7qZUhiFn5jhvS2NKoGqPu_0Ck8iy7zp7TbW--CLcfDACDCrhIO9EzZX4hhweoR5Zg4PhTqqUyWeK6k4C0dZLiTo_X2bCTergwtNZeQxh8xpyCHf2COu4o0WmIh5rsp_WBlWMLR4zcmPdVw")' }}>
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center px-6 -mt-10 relative z-20 pb-40">
                {/* Referrer Badge */}
                <div className="bg-white dark:bg-surface-dark pl-1.5 pr-5 py-1.5 rounded-full shadow-lg border border-gray-100 dark:border-white/5 flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full border-2 border-primary-vibrant bg-cover bg-center bg-gray-200" 
                         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyuqyN-76OYt2SBq2XNJvKXVwpODjbCuxo1cH0257lCkw9ZnET1MfrxInzSa0R5K9vIMeLzKORMLs2fJOXVSBHynVMkaLSHh6EglkyatDDuExfTqC1q5vXKYa4sEaDGa9Ou3Ek5TpiiG1ODN7C0lTkXd_K1sLaFG6mR4bi89b6FcYvySzqx58r4rEYINd4EM1ZhoWxTg00h-Wamffpqcy5GHPB8MY0FRke6xQzZwvIIhUxBgLrDJCR86Jvqwx6U_AliBw4gEau-SU")' }}>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black leading-none mb-1">{t('invited_by')}</p>
                        <p className="text-[15px] font-bold text-[#191f1a] dark:text-white leading-none">Carlos Silva</p>
                    </div>
                </div>

                {/* Headlines */}
                <div className="mt-8 text-center max-w-xs mx-auto">
                    <h1 className="text-[#191f1a] dark:text-[#fdf8f2] tracking-tight text-[36px] font-bold leading-[1.05] mb-4">
                        {t('welcome_to_circle').split(',').length > 1 ? (
                            <>
                                {t('welcome_to_circle').split(',')[0]}, <br/>
                                <span className="text-primary-vibrant">{t('welcome_to_circle').split(',')[1]}</span>
                            </>
                        ) : (
                            <span className="text-primary-vibrant">{t('welcome_to_circle')}</span>
                        )}
                    </h1>
                    <p className="text-[#5f615e] dark:text-gray-400 text-[17px] font-medium leading-relaxed px-2">
                        {t('friend_sent_mate')}
                    </p>
                </div>

                {/* Offer Card */}
                <div className="w-full mt-10">
                    <div className="relative flex flex-col items-stretch justify-start rounded-[1.75rem] shadow-[0_12px_40px_-12px_rgba(140,238,43,0.15)] bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 overflow-hidden group active:scale-[0.99] transition-all">
                        {/* Decorative accent stripe */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-vibrant"></div>
                        
                        <div className="flex w-full flex-row items-center justify-between gap-4 p-6 pl-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-primary-vibrant text-[22px] filled">stars</span>
                                    <p className="text-[#7d7f7c] dark:text-gray-400 text-[11px] font-black uppercase tracking-[0.15em]">{t('arrival_gift')}</p>
                                </div>
                                <p className="text-[#191f1a] dark:text-white text-[20px] font-bold leading-tight tracking-tight mb-1.5">
                                    {t('zero_fee_title')}
                                </p>
                                <p className="text-[#5f615e] dark:text-gray-400 text-[15px] font-medium leading-normal">
                                    {t('zero_fee_desc')}
                                </p>
                            </div>
                            
                            {/* Visual Element on Card */}
                            <div className="h-16 w-16 bg-[#f7fff0] dark:bg-background-dark rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-[32px] text-primary-vibrant">percent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto z-50 bg-gradient-to-t from-[#fdf8f2] via-[#fdf8f2]/95 to-transparent dark:from-background-dark dark:via-background-dark/95 pt-12 pb-10 px-5">
                <button 
                    onClick={() => navigate('/home')}
                    className="w-full h-16 bg-primary-vibrant hover:bg-[#a2f754] active:scale-[0.98] text-[#191f1a] font-black text-[18px] rounded-[1.25rem] shadow-xl shadow-primary-vibrant/20 flex items-center justify-center gap-3 transition-all"
                >
                    <span>{t('find_first_ride')}</span>
                    <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </button>
                <div className="flex justify-center mt-5">
                    <p className="text-[13px] text-[#9ca19c] dark:text-gray-500 font-bold">
                        {t('valid_30_days')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBonusScreen;
