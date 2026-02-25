
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WomenOnlyResultsScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#F9F4EE] dark:bg-[#1f1315] font-display antialiased text-[#2D3237] dark:text-gray-100 overflow-x-hidden min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden">
                
                {/* Top Navigation */}
                <div className="flex items-center p-4 pb-2 justify-between z-10">
                    <button 
                        onClick={() => navigate(-1)}
                        aria-label="Go back" 
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 transition-colors text-[#2D3237] dark:text-white"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h2 className="text-[#2D3237] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Resultados</h2>
                </div>

                {/* Mode Status Banner */}
                <div className="px-4 pb-2 pt-1">
                    <div className="relative overflow-hidden w-full bg-gradient-to-br from-[#e08594]/20 to-[#e08594]/5 rounded-2xl p-4 flex items-center gap-3 border border-[#e08594]/10">
                        {/* Decorative background elements */}
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#e08594]/10 rounded-full blur-2xl"></div>
                        <div className="flex items-center justify-center size-10 rounded-full bg-[#e08594]/20 text-[#e08594] shrink-0">
                            <span className="material-symbols-outlined filled">diversity_1</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#2D3237] dark:text-white text-sm font-bold leading-tight">Modo Entre Ellas Ativado</p>
                            <p className="text-[#80858A] dark:text-gray-400 text-xs font-medium">Viajes exclusivos para mujeres</p>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-3 sticky top-0 z-20 bg-[#F9F4EE]/95 dark:bg-[#1f1315]/95 backdrop-blur-sm transition-all duration-300">
                    <div className="flex w-full items-center rounded-2xl bg-[#FCF9F7] dark:bg-[#2a2223] border border-white/50 dark:border-white/5 shadow-[0_4px_12px_-2px_rgba(45,50,55,0.05)] p-1 pr-4">
                        <div className="text-[#e08594] flex items-center justify-center px-3">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <div className="flex flex-col py-2 flex-1">
                            <span className="text-[#2D3237] dark:text-white text-sm font-semibold leading-tight">Montevideo → Punta del Este</span>
                            <span className="text-[#80858A] dark:text-gray-400 text-xs">Hoy • 2 Pasajeras</span>
                        </div>
                        <div className="size-8 rounded-full bg-[#e08594]/10 flex items-center justify-center text-[#e08594] cursor-pointer hover:bg-[#e08594]/20 transition-colors">
                            <span className="material-symbols-outlined" style={{fontSize: '18px'}}>tune</span>
                        </div>
                    </div>
                </div>

                {/* Chips / Filters */}
                <div className="flex gap-2 px-4 py-1 overflow-x-auto no-scrollbar pb-4">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e08594] text-white pl-4 pr-4 shadow-[0_10px_40px_-10px_rgba(224,133,148,0.15)] transition-transform active:scale-95">
                        <p className="text-sm font-semibold">Todo</p>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#FCF9F7] dark:bg-[#2a2223] border border-gray-100 dark:border-white/5 pl-4 pr-4 transition-transform active:scale-95">
                        <p className="text-[#2D3237] dark:text-white text-sm font-medium">Directo</p>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#FCF9F7] dark:bg-[#2a2223] border border-gray-100 dark:border-white/5 pl-4 pr-4 transition-transform active:scale-95">
                        <span className="material-symbols-outlined text-[#80858A] dark:text-gray-400" style={{fontSize: '16px'}}>pets</span>
                        <p className="text-[#2D3237] dark:text-white text-sm font-medium">Mascotas</p>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#FCF9F7] dark:bg-[#2a2223] border border-gray-100 dark:border-white/5 pl-4 pr-4 transition-transform active:scale-95">
                        <span className="material-symbols-outlined text-[#80858A] dark:text-gray-400" style={{fontSize: '16px'}}>luggage</span>
                        <p className="text-[#2D3237] dark:text-white text-sm font-medium">Equipaje</p>
                    </button>
                </div>

                {/* Scrollable List Content */}
                <div className="flex-1 flex flex-col gap-4 px-4 pb-24 overflow-y-auto no-scrollbar">
                    {/* Card 1 */}
                    <div onClick={() => navigate('/trip-detail')} className="group relative flex flex-col gap-3 rounded-3xl bg-[#FCF9F7] dark:bg-[#2a2223] p-4 shadow-[0_4px_12px_-2px_rgba(45,50,55,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(224,133,148,0.15)] transition-all duration-300 border border-white dark:border-white/5 cursor-pointer">
                        {/* Header: User & Price */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="size-12 rounded-full bg-cover bg-center border-2 border-white dark:border-[#2a2223] shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7X8w0ZNLRTd-bW7Fqfy1pfwQoZKvENwvqf1EiyYLjXZkSu4Zn8uheuFViV9R072fyNpKKg9IFYowD9IaFIzy5R6UowJ15i8s9Zkqc3pW248laSoerXBatijm-3pg_57go_9h6EsFy3xTJoMqXhIE0aBJssUh5kEI3bSOR8Pct_5isBZA5W2TWSrhdz0myFkQxwcePqrC85WXtc-iJ9o-K-UwZl-9O-HS_EVTeaiIk0frAZi9XQaQUXPGidQyrP3sZIeC10Ltp_Tk')"}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#2a2223] rounded-full p-[2px]">
                                        <span className="material-symbols-outlined filled text-[#e08594]" style={{fontSize: '16px'}}>verified</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#2D3237] dark:text-white text-base font-bold leading-none">Lucía</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined filled text-yellow-400" style={{fontSize: '14px'}}>star</span>
                                        <p className="text-[#80858A] dark:text-gray-400 text-xs font-medium">4.9 (24 viajes)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[#e08594] text-xl font-bold leading-tight">$450</p>
                            </div>
                        </div>
                        {/* Route Visual */}
                        <div className="relative pl-2 py-1">
                            {/* Vertical Line */}
                            <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#2D3237] dark:bg-white ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">18:00</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">Tres Cruces, Montevideo</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#e08594] ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">19:30</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">Terminal Maldonado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer: Badges */}
                        <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-100 dark:border-white/5">
                            <div className="flex items-center gap-2 rounded-full bg-[#e08594]/10 px-3 py-1.5">
                                <span className="material-symbols-outlined filled text-[#e08594]" style={{fontSize: '14px'}}>diversity_1</span>
                                <p className="text-[#e08594] text-xs font-bold">Comunidade Feminina</p>
                            </div>
                            <p className="text-[#80858A] dark:text-gray-400 text-xs">2 lugares</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div onClick={() => navigate('/trip-detail')} className="group relative flex flex-col gap-3 rounded-3xl bg-[#FCF9F7] dark:bg-[#2a2223] p-4 shadow-[0_4px_12px_-2px_rgba(45,50,55,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(224,133,148,0.15)] transition-all duration-300 border border-white dark:border-white/5 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="size-12 rounded-full bg-cover bg-center border-2 border-white dark:border-[#2a2223] shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_SpnjP1MhsB6YtgQfiXplP_fJKdPi0epnfV7smwoSdh-VKxJ27k_NGb03cKykW0NClLxfRsI_gLIzsTSZbEW0qmD36P41wHYnajUIfqMEjEGGmYQhJUZvKLrbQds2DjEEPKgtrxxgXbcDYICQ1RVoAsafhsJVvaLSbw1KybTm1rfeX03rb2mdYf5snuLvx60FpP5DiCACnFiRS1EJm7gTUB_EXGANmkhnV56dlBCz1fkfnfVgT4JAYd3qQ9e2oEZ3ARAf4d_I9Y8')"}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#2a2223] rounded-full p-[2px]">
                                        <span className="material-symbols-outlined filled text-[#e08594]" style={{fontSize: '16px'}}>verified</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#2D3237] dark:text-white text-base font-bold leading-none">Ana María</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined filled text-yellow-400" style={{fontSize: '14px'}}>star</span>
                                        <p className="text-[#80858A] dark:text-gray-400 text-xs font-medium">5.0 (12 viajes)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[#e08594] text-xl font-bold leading-tight">$520</p>
                            </div>
                        </div>
                        <div className="relative pl-2 py-1">
                            <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#2D3237] dark:bg-white ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">18:15</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">Obelisco</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#e08594] ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">19:45</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">Punta Shopping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-100 dark:border-white/5">
                            <div className="flex items-center gap-2 rounded-full bg-[#e08594]/10 px-3 py-1.5">
                                <span className="material-symbols-outlined filled text-[#e08594]" style={{fontSize: '14px'}}>diversity_1</span>
                                <p className="text-[#e08594] text-xs font-bold">Comunidade Feminina</p>
                            </div>
                            <p className="text-[#80858A] dark:text-gray-400 text-xs">1 lugar</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div onClick={() => navigate('/trip-detail')} className="group relative flex flex-col gap-3 rounded-3xl bg-[#FCF9F7] dark:bg-[#2a2223] p-4 shadow-[0_4px_12px_-2px_rgba(45,50,55,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(224,133,148,0.15)] transition-all duration-300 border border-white dark:border-white/5 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="size-12 rounded-full bg-cover bg-center border-2 border-white dark:border-[#2a2223] shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBn063UHP6umh_sgANZ4Xs-kycDZ4tOBRJLpJmmn3KK2LCxh3_qqy-J67B8BbahfAp1VDVzJ0EvIHs9DT0p_CObmMPLQBQliqU4U3G9nE-EnG44t4ombwUBufXGmbD7KVBBBOgxLOC9VuvVWuR8sD0jTjEuWYzeeaAS9J3333vpdcRTfQqtdYQHYv07m7U-cWditJFwAvN3QhOlk8GQyqn2bXVI58P1bH-Ig04y5Q744c-6h9fZAGxv9RLoGKXOiKTHwlRolhacTPQ')"}}></div>
                                </div>
                                <div>
                                    <p className="text-[#2D3237] dark:text-white text-base font-bold leading-none">Sofía</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined filled text-yellow-400" style={{fontSize: '14px'}}>star</span>
                                        <p className="text-[#80858A] dark:text-gray-400 text-xs font-medium">Nuevo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[#e08594] text-xl font-bold leading-tight">$400</p>
                            </div>
                        </div>
                        <div className="relative pl-2 py-1">
                            <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#2D3237] dark:bg-white ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">20:00</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">Centro</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="size-2.5 rounded-full bg-[#e08594] ring-4 ring-[#FCF9F7] dark:ring-[#2a2223]"></div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-[#2D3237] dark:text-white">21:30</span>
                                        <span className="text-[#80858A] dark:text-gray-400 truncate">San Rafael</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-100 dark:border-white/5">
                            <div className="flex items-center gap-2 rounded-full bg-[#e08594]/10 px-3 py-1.5">
                                <span className="material-symbols-outlined filled text-[#e08594]" style={{fontSize: '14px'}}>diversity_1</span>
                                <p className="text-[#e08594] text-xs font-bold">Comunidade Feminina</p>
                            </div>
                            <p className="text-[#80858A] dark:text-gray-400 text-xs">3 lugares</p>
                        </div>
                    </div>
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-24 right-4 z-30 max-w-md w-full mx-auto pointer-events-none px-4 flex justify-end">
                    <button 
                        onClick={() => navigate('/publish')}
                        className="pointer-events-auto flex items-center gap-2 bg-[#e08594] text-white rounded-full px-5 py-3 shadow-lg hover:bg-[#e08594]/90 transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="material-symbols-outlined">add</span>
                        <span className="font-bold text-sm">Publicar Viaje</span>
                    </button>
                </div>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-[#FCF9F7] dark:bg-[#2a2223] border-t border-gray-100 dark:border-white/5 p-2 pb-6 z-40 max-w-md mx-auto">
                    <div className="flex justify-around items-center">
                        <button onClick={() => navigate('/trips')} className="flex flex-col items-center gap-1 p-2 rounded-xl text-[#e08594]">
                            <span className="material-symbols-outlined filled">search</span>
                            <span className="text-[10px] font-bold">Buscar</span>
                        </button>
                        <button onClick={() => navigate('/publish')} className="flex flex-col items-center gap-1 p-2 rounded-xl text-[#80858A] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="text-[10px] font-medium">Publicar</span>
                        </button>
                        <button onClick={() => navigate('/chat')} className="flex flex-col items-center gap-1 p-2 rounded-xl text-[#80858A] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">chat_bubble</span>
                            <span className="text-[10px] font-medium">Mensajes</span>
                        </button>
                        <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 p-2 rounded-xl text-[#80858A] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">person</span>
                            <span className="text-[10px] font-medium">Perfil</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenOnlyResultsScreen;
