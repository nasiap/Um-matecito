
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ReviewScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [rating, setRating] = useState(4);
    const [shareAnotherMate, setShareAnotherMate] = useState(true);

    return (
        <div className="bg-[#fdf8ed] dark:bg-background-dark font-display text-text-main dark:text-white min-h-screen flex flex-col items-center max-w-md mx-auto relative overflow-x-hidden">
            {/* Header */}
            <header className="flex items-center justify-between w-full px-5 py-6 bg-transparent">
                <button 
                    onClick={() => navigate('/home')}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[28px]">close</span>
                </button>
                <h1 className="text-[22px] font-bold leading-tight tracking-tight text-center flex-1">
                    {t('arrived')}
                </h1>
                <div className="w-10"></div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full flex flex-col px-6 pb-32">
                {/* Driver Summary Card */}
                <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-8 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col items-center mb-10">
                    <div className="relative mb-4">
                        <div 
                            className="size-[100px] rounded-full bg-cover bg-center border-[4px] border-white dark:border-surface-dark shadow-md" 
                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwOTmN9iVpqNiNeqh9q8rt7h6oHNfx1cxNGcuMIfIu5gshYkx2Ygp1fyDQsMUsge-U9y0tWD5ER5rTv5cDwlglIHSgLFFEzhe89Hu0MzOp0D8y99R5u8pvrHMJQb7JzJjeVDOfzOAqxVd_G28TW1AsWBXFttIdc5kl5RVVhhNf7Y2fmpiPsim2r7agKWOLfogB0qAWyw78gbbOn2B_ArIPVubdsfkUhnhrFoWqwIyWc9UMVO1woslu0e0tBX1raPIWid9bf4j9zSY")'}}
                        ></div>
                        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 shadow-sm ring-4 ring-white dark:ring-surface-dark">
                            <span className="material-symbols-outlined text-[16px] filled">directions_car</span>
                        </div>
                    </div>
                    <h2 className="text-[24px] font-extrabold text-[#141613] dark:text-white mb-1">Sofia Martinez</h2>
                    <div className="mb-4">
                        <span className="text-[12px] font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{t('driver')}</span>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="text-center mb-10">
                    <h3 className="text-[26px] font-extrabold text-[#141613] dark:text-white leading-tight mb-2">
                        {t('how_was_trip')}
                    </h3>
                    <p className="text-[15px] font-medium text-gray-400">
                        {t('rate_experience')}
                    </p>
                    
                    <div className="flex justify-center gap-4 mt-8">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button 
                                key={s} 
                                onClick={() => setRating(s)}
                                className="group flex flex-col items-center gap-2 transition-all"
                            >
                                <span className={`material-symbols-outlined text-[42px] transition-all duration-300 ${s <= rating ? 'text-primary filled scale-110' : 'text-gray-200 dark:text-gray-700'}`}>
                                    emoji_food_beverage
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Toggle Question Section */}
                <div className="bg-white dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-gray-100 dark:border-white/5 mb-10">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-primary text-[24px] filled">favorite</span>
                                <p className="text-[17px] font-bold text-[#141613] dark:text-white leading-tight">
                                    {t('share_another')}
                                </p>
                            </div>
                            <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
                                {t('trust_desc')}
                            </p>
                        </div>
                        <button 
                            onClick={() => setShareAnotherMate(!shareAnotherMate)}
                            className={`relative h-[34px] w-[58px] shrink-0 rounded-full transition-colors duration-300 p-1 ${shareAnotherMate ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            <div className={`size-6.5 bg-white rounded-full shadow-md transition-transform duration-300 ${shareAnotherMate ? 'translate-x-[24px]' : 'translate-x-0'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Comment Section */}
                <div className="flex flex-col gap-3 mb-10">
                    <label className="text-[15px] font-bold text-[#141613] dark:text-white ml-2">
                        {t('comment_label')}
                    </label>
                    <textarea 
                        className="w-full rounded-[2rem] border-none bg-white dark:bg-surface-dark p-6 text-[15px] text-gray-800 dark:text-white shadow-soft placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary transition-all resize-none" 
                        placeholder={t('comment_placeholder')} 
                        rows={4}
                    ></textarea>
                </div>
            </main>

            {/* Footer Actions */}
            <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto p-4 pb-10 bg-gradient-to-t from-[#fdf8ed] via-[#fdf8ed] to-transparent dark:from-background-dark dark:via-background-dark pt-12">
                <button 
                    onClick={() => navigate('/home')}
                    className="w-full bg-primary hover:bg-primary-dark text-white h-16 rounded-2xl font-bold text-[18px] shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
                >
                    {t('send_review')}
                </button>
                <button 
                    onClick={() => navigate('/home')}
                    className="w-full text-center mt-5 text-[15px] font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    {t('skip_now')}
                </button>
            </div>
        </div>
    );
};

export default ReviewScreen;
