
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WomenVerificationScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#f8f4f2] dark:bg-[#2f2226] text-[#151315] dark:text-[#f8f4f2] transition-colors duration-300 antialiased min-h-screen font-display">
            <div className="relative flex h-full min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto shadow-2xl bg-[#f8f4f2] dark:bg-[#2f2226]">
                {/* Top Navigation */}
                <nav className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-[#f8f4f2]/90 dark:bg-[#2f2226]/90 backdrop-blur-md">
                    <button 
                        onClick={() => navigate(-1)}
                        className="text-[#905a7c] dark:text-white/80 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
                    </button>
                    <h2 className="text-[#151315] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Entre Ellas</h2>
                </nav>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col items-center px-6 pt-6 pb-32 overflow-y-auto no-scrollbar">
                    {/* Hero: Verified Badge */}
                    <div className="relative mb-8 mt-4">
                        {/* Decorative background glow */}
                        <div className="absolute inset-0 bg-[#905a7c]/20 dark:bg-[#905a7c]/40 rounded-full blur-2xl scale-125"></div>
                        <div className="relative size-32 rounded-full bg-gradient-to-br from-[#fdfbf7] to-[#f4ece4] dark:from-[#3a2c32] dark:to-[#2f2226] shadow-[0_10px_40px_-10px_rgba(144,90,124,0.15)] border-[3px] border-[#D4AF37] flex items-center justify-center p-1">
                            <div className="size-full rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#905a7c]/5 dark:bg-[#905a7c]/10">
                                <span className="material-symbols-outlined text-[#905a7c] dark:text-[#D4AF37] filled" style={{ fontSize: '64px' }}>verified_user</span>
                            </div>
                            {/* Floating Checkmark Badge */}
                            <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-white rounded-full size-10 flex items-center justify-center shadow-lg border-4 border-[#f8f4f2] dark:border-[#2f2226]">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check</span>
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="text-center mb-8 space-y-3">
                        <h1 className="text-[#151315] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
                            Espaço Exclusivo<br/>para Mulheres
                        </h1>
                        <p className="text-[#151315]/70 dark:text-white/70 text-base font-normal leading-relaxed max-w-[300px] mx-auto">
                            Bem-vinda ao seu espaço seguro. Este modo é exclusivo para perfis verificados, garantindo um ambiente de sororidade.
                        </p>
                    </div>

                    {/* Guidelines Card */}
                    <div className="w-full bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/10 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#905a7c]/60 dark:text-[#905a7c]/80 mb-2">Regras da Roda</h3>
                        
                        {/* Item 1: Support */}
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-full bg-[#905a7c]/10 dark:bg-[#905a7c]/20 flex items-center justify-center text-[#905a7c] dark:text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>volunteer_activism</span>
                            </div>
                            <div className="flex-1 pt-0.5">
                                <h4 className="text-sm font-bold text-[#151315] dark:text-white">Apoio Mútuo</h4>
                                <p className="text-sm text-[#151315]/60 dark:text-white/60 leading-normal mt-0.5">Encorajamos a gentileza e o acolhimento entre todas.</p>
                            </div>
                        </div>

                        {/* Item 2: Safety */}
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-full bg-[#905a7c]/10 dark:bg-[#905a7c]/20 flex items-center justify-center text-[#905a7c] dark:text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
                            </div>
                            <div className="flex-1 pt-0.5">
                                <h4 className="text-sm font-bold text-[#151315] dark:text-white">Privacidade Total</h4>
                                <p className="text-sm text-[#151315]/60 dark:text-white/60 leading-normal mt-0.5">O que é compartilhado aqui, fica protegido aqui.</p>
                            </div>
                        </div>

                        {/* Item 3: Respect */}
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-full bg-[#905a7c]/10 dark:bg-[#905a7c]/20 flex items-center justify-center text-[#905a7c] dark:text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>diversity_1</span>
                            </div>
                            <div className="flex-1 pt-0.5">
                                <h4 className="text-sm font-bold text-[#151315] dark:text-white">Respeito Absoluto</h4>
                                <p className="text-sm text-[#151315]/60 dark:text-white/60 leading-normal mt-0.5">Todas as vozes são valorizadas. Zero tolerância ao julgamento.</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Bottom Action Area */}
                <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8f4f2] via-[#f8f4f2] to-transparent dark:from-[#2f2226] dark:via-[#2f2226] max-w-md mx-auto z-40 h-32 flex flex-col justify-end pointer-events-none">
                    <div className="pointer-events-auto w-full">
                        <button 
                            onClick={() => navigate('/women-only-results')}
                            className="w-full bg-[#905a7c] hover:bg-[#905a7c]/90 text-white text-base font-bold h-14 rounded-full shadow-lg shadow-[#905a7c]/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <span>Entrar na Roda Feminina</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                        </button>
                        <p className="text-center text-[10px] text-[#151315]/40 dark:text-white/30 mt-3">
                            Ao entrar, você concorda com nossas <a className="underline hover:text-[#905a7c] cursor-pointer">Diretrizes da Comunidade</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenVerificationScreen;
