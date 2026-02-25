
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WomenOnlyScreen: React.FC = () => {
    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(false);

    // Custom colors from the design
    const colors = {
        primary: '#96b06d',
        secondary: '#E8A09A',
        bgLight: '#faf6f0',
        bgDark: '#293d2a',
        cardLight: '#ffffff',
        cardDark: '#1e2e1f'
    };

    return (
        <div className="min-h-screen relative font-display overflow-x-hidden selection:bg-[#96b06d]/30 antialiased transition-colors duration-300"
             style={{ backgroundColor: isEnabled ? colors.bgLight : '#fdf8ed' }}>
            
            {/* Dark Mode Handling wrapper */}
            <div className="dark:bg-[#293d2a] min-h-screen w-full flex flex-col relative">
                
                {/* Decorative Warm Blob Background */}
                <div className="fixed top-[-20%] right-[-20%] w-[600px] h-[600px] bg-[#E8A09A]/10 dark:bg-[#E8A09A]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
                <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#96b06d]/10 dark:bg-[#96b06d]/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

                {/* Main Container */}
                <div className="relative z-10 flex flex-col min-h-screen w-full max-w-md mx-auto bg-transparent group/design-root">
                    
                    {/* Top Navigation */}
                    <div className="flex items-center p-6 justify-between z-20">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center size-10 rounded-full bg-white/60 dark:bg-black/20 backdrop-blur-md shadow-sm transition-transform hover:scale-105 active:scale-95 text-gray-700 dark:text-gray-200"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="flex items-center justify-end">
                            <button 
                                onClick={() => navigate('/home')}
                                className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-wide uppercase hover:text-[#96b06d] transition-colors"
                            >
                                Pular
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 flex flex-col pb-24">
                        {/* Hero Illustration Section */}
                        <div className="relative w-full px-6 pt-2 pb-8 flex flex-col items-center justify-center min-h-[340px]">
                            {/* Abstract blobs behind image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-[#E8A09A]/20 rounded-full blur-2xl"></div>
                            </div>
                            
                            {/* Main Illustration */}
                            <div 
                                className="relative w-full h-80 rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(150,176,109,0.25)] animate-float bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARCrBiQRk3cpL4-U_bf-5oAh4fT-3oP-JhCWvap9-TaknnFuNjNrKRsyjHK5BWoY-7lV10rXcHToRldiQ-vx3PRE_pLfKPPvRxqjBFfOa3Nw7njMZ8qvGICLgznS1uWjHKbgBcHJEzZJAZyXpKlYrvG2U4O-RkJcTUVip8F05vTQnKcW9MlTDHc3cAQ8yTJSa6scw1k7UK_IKl90roSVeIt2huZVFyQyUIVaE7gobNifwYOxJyt4X4rn9Mgy1qn6HHfuXwulStYuo")'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply"></div>
                            </div>
                        </div>

                        {/* Floating Content Card */}
                        <div className="px-5 -mt-6">
                            <div className="bg-white dark:bg-[#1e2e1f] rounded-3xl p-6 shadow-xl shadow-gray-200/50 dark:shadow-none border border-white/50 dark:border-white/5 backdrop-blur-sm">
                                {/* Headline */}
                                <div className="text-center mb-4">
                                    <h1 className="text-gray-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight mb-2">
                                        Un Matecito <span className="text-[#E8A09A] inline-block relative">
                                            entre Ellas
                                            {/* Hand-drawn underline decoration */}
                                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E8A09A] opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                            </svg>
                                        </span>
                                    </h1>
                                </div>

                                {/* Safety Pills */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8A09A]/10 border border-[#E8A09A]/20 text-[#E8A09A] text-xs font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-[16px] filled">female</span>
                                        Só Mulheres
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#96b06d]/10 border border-[#96b06d]/20 text-[#96b06d] text-xs font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-[16px] filled">verified_user</span>
                                        Verificado
                                    </div>
                                </div>

                                {/* Body Text */}
                                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed text-center mb-8 px-2">
                                    Um espaço seguro para mulheres viajarem com mulheres. Ative para ver e publicar caronas exclusivas para a comunidade feminina.
                                </p>

                                {/* Custom Action Panel (Toggle) */}
                                <div className="group relative overflow-hidden rounded-2xl bg-[#F0EDEA] dark:bg-black/20 p-1 transition-all duration-300 hover:shadow-md">
                                    <div className="relative flex items-center justify-between p-4 bg-white dark:bg-[#2C3E2D] rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <div className="flex flex-col gap-1 z-10">
                                            <p className="text-gray-900 dark:text-white text-base font-bold leading-tight flex items-center gap-2">
                                                Ativar Modo Entre Ellas
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px] text-[#96b06d]">check_circle</span>
                                                Verificado por ID
                                            </p>
                                        </div>
                                        
                                        {/* Styled Toggle */}
                                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                                            <input 
                                                className="sr-only peer" 
                                                type="checkbox" 
                                                checked={isEnabled}
                                                onChange={() => setIsEnabled(!isEnabled)}
                                            />
                                            <div className="w-[52px] h-[32px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all after:shadow-sm peer-checked:bg-[#96b06d]"></div>
                                        </label>
                                    </div>
                                    {/* Decorative background highlight inside card on hover */}
                                    <div className="absolute inset-0 bg-[#96b06d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Footer Button */}
                    <div className="fixed bottom-0 left-0 w-full p-6 z-30 flex justify-center max-w-md mx-auto left-0 right-0">
                        {/* Gradient Fade */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#faf6f0] via-[#faf6f0]/95 to-transparent dark:from-[#293d2a] dark:via-[#293d2a]/95 pointer-events-none -z-10"></div>
                        
                        <button 
                            onClick={() => navigate('/women-verification')}
                            className="w-full bg-[#96b06d] hover:bg-[#7a9155] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg shadow-[#96b06d]/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                        >
                            Continuar
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* In-component Styles for Float Animation */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default WomenOnlyScreen;
