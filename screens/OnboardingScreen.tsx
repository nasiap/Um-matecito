
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const OnboardingScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col justify-between max-w-md mx-auto bg-[#fdf8ed] dark:bg-background-dark font-display transition-colors duration-500 overflow-hidden">
            {/* Top Navigation Area */}
            <div className="flex w-full items-center justify-between px-6 pt-8 pb-2 z-20">
                <div className="w-12"></div>
                <div className="flex items-center gap-2.5">
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-[#8eb861]' : 'w-1.5 bg-black/10 dark:bg-white/10'}`}></div>
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-[#8eb861]' : 'w-1.5 bg-black/10 dark:bg-white/10'}`}></div>
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-6 bg-[#8eb861]' : 'w-1.5 bg-black/10 dark:bg-white/10'}`}></div>
                </div>
                <button 
                    onClick={() => navigate('/login')}
                    className="flex w-12 items-center justify-end text-[14px] font-bold tracking-tight text-gray-400 hover:text-[#8eb861] transition-colors gap-1"
                >
                    {t('skip')}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>

            <div className="flex-1 relative flex flex-col items-center justify-center px-6 overflow-hidden">
                {step === 1 && (
                    <div className="text-center space-y-4 animate-in fade-in slide-in-from-right duration-500">
                         <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center mb-10 mx-auto">
                            <div className="absolute inset-0 bg-[#e8eec9] dark:bg-[#2c3324] rounded-full blur-3xl opacity-40 transform scale-110"></div>
                            <div className="relative w-full h-full overflow-hidden organic-shape shadow-xl">
                                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfNRpioaluBNvU0GFuRhYRCDUh6QD7hNVfrK1zWDtnc9AXEyVGFFFJrmFeWlPLcW18BKYfeiMktS-aGgpTls1oCMH1_OrOyGGeHCwDcY5MbGKacI80-WBjeOd1jzFczal_AuFWdplAKj9c3JUOIzZbDZS_17aoaocfHlRUpQWnbg4FovkyfO4SiT0oiyJtXO0kI4mOjmGfA7UhbAlJKGGwf3_AdqtLiiepvbJWvFmaQIdoU--uqKyPJwHr_nEp45l4JykCZ5PPsao')"}}></div>
                            </div>
                        </div>
                        <h1 className="text-[38px] leading-[1.1] font-extrabold tracking-tight text-[#222320] dark:text-white">
                            {t('onboarding_1_title')}
                        </h1>
                        <p className="text-[17px] font-medium leading-relaxed text-[#7a7b77] dark:text-gray-400 max-w-[290px] mx-auto">
                            {t('onboarding_1_desc')}
                        </p>
                    </div>
                )}
                {step === 2 && (
                    <div className="text-center space-y-4 animate-in fade-in slide-in-from-right duration-500">
                        <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center mb-10 mx-auto">
                            <div className="relative w-full h-full overflow-hidden rounded-[4rem] shadow-sm">
                                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGFBWD4ysiAiGWSwEmt9qRHiAQxt5qeXvyFLV7LPFhtBb2M0fEQQjiSM4GdugZ7zCVeJHYGlF2A0JlMGiEYMJOhOhah_yZT1xFuGN3mTLoDn_tOBlsL5_qkttp9U_8vkmnBYpCNk80Zmpi8T_U43M1Iq9QZh1_EoQRYiYmbL_tfe9MB-IAsxObSi2DleRnDcQO6s5XDEo5G4pbSqWcIuDHGK6hlFBj7p2u4r6C3rqVwdu-4YpWvgzmuXfweIH1cny-fhiD9xgJcNs')"}}></div>
                            </div>
                        </div>
                        <h1 className="text-[38px] leading-[1.1] font-extrabold tracking-tight text-[#222320] dark:text-white">
                            {t('onboarding_2_title')}
                        </h1>
                        <p className="text-[17px] font-medium leading-relaxed text-[#7a7b77] dark:text-gray-400 max-w-[290px] mx-auto">
                            {t('onboarding_2_desc')}
                        </p>
                    </div>
                )}
            </div>

            <div className="w-full px-6 pb-12 pt-4 flex flex-col gap-6 items-center">
                <button 
                    onClick={handleNext}
                    className="group relative flex w-full items-center justify-center gap-3 rounded-[2rem] bg-[#8eb861] py-5 px-6 text-white shadow-soft transition-all duration-300 hover:bg-[#7da354] hover:shadow-lg active:scale-[0.98]"
                >
                    <span className="text-xl font-bold tracking-tight">
                        {step === 3 ? t('start') : t('next')}
                    </span>
                    <span className="material-symbols-outlined text-[24px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};

export default OnboardingScreen;
