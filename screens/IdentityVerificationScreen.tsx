import React from 'react';
import { useNavigate } from 'react-router-dom';

const IdentityVerificationScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white transition-colors duration-300 antialiased selection:bg-primary/30 min-h-screen flex flex-col">
            <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
                {/* Top Navigation */}
                <header className="flex items-center justify-between p-6 sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-gray-800 dark:text-gray-200 group-hover:-translate-x-0.5 transition-transform" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
                    </button>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Verificação de Identidade</div>
                    <div className="w-8"></div> {/* Spacer for centering */}
                </header>

                {/* Progress Bar */}
                <div className="px-6 pb-2">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-primary">Passo 1 de 3</span>
                        <span className="text-xs text-gray-400 font-medium">33%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '33%' }}></div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col px-6 pt-6 pb-24 overflow-y-auto">
                    {/* Hero Illustration Card */}
                    <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden shadow-soft group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 dark:from-primary/10 dark:to-primary/30 z-0"></div>
                        {/* Abstract background shapes for distinct look */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/40 dark:bg-white/5 rounded-full blur-2xl"></div>
                        <div className="absolute -left-10 bottom-0 w-32 h-32 bg-primary/20 blur-3xl"></div>

                        {/* Central Visual */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-4">
                            {/* Custom DNI Graphic */}
                            <div className="relative w-48 h-32 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 flex flex-col justify-between transform -rotate-3 transition-transform duration-500 group-hover:rotate-0">
                                <div className="flex justify-between items-start">
                                    <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-600"></div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="w-16 h-2 rounded-full bg-primary/30"></div>
                                        <div className="w-10 h-2 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                                    <div className="w-12 h-2 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                                </div>
                                {/* Check badge */}
                                <div className="absolute -right-2 -top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-background-dark">
                                    <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
                            Vamos confirmar <br /><span className="text-primary">sua identidade</span>
                        </h1>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                            Para manter o <span className="font-semibold text-gray-700 dark:text-gray-200">Un Matecito</span> seguro para todos, precisamos validar seus documentos. Leva menos de 2 minutos.
                        </p>
                    </div>

                    {/* Checklist */}
                    <div className="flex flex-col gap-4 mb-8">
                        {/* Item 1 */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">badge</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Foto do DNI (Frente)</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Verifique se está legível</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">check_circle</span>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary" style={{ transform: 'scaleX(-1)' }}>badge</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Foto do DNI (Verso)</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Código de barras visível</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">check_circle</span>
                        </div>
                        {/* Item 3 */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">face</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Selfie rápida</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Boa iluminação, sem óculos</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">check_circle</span>
                        </div>
                    </div>

                    {/* Trust Indicator */}
                    <div className="mt-auto flex items-center justify-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                        <span className="material-symbols-outlined text-primary text-sm">lock</span>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Sua segurança é nossa prioridade. Dados criptografados.</p>
                    </div>
                </main>

                {/* Fixed Bottom Action */}
                <div className="fixed bottom-0 w-full max-w-md bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 p-6 z-30">
                    <button className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
                        Começar Verificação
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IdentityVerificationScreen;
