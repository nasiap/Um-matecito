
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-[#fcfbf8] dark:bg-background-dark font-display antialiased text-gray-900 transition-colors duration-200">
        {/* Background Pattern */}
        <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
                backgroundImage: 'radial-gradient(#74a540 0.5px, transparent 0.5px)',
                backgroundSize: '24px 24px'
            }}
        ></div>

        {/* Top Navigation */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white transition-colors text-primary dark:bg-white/10 dark:text-white backdrop-blur-sm shadow-sm ring-1 ring-black/5"
            >
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-bold text-[#121517] dark:text-white tracking-tight">Seu Bilhete</h1>
            <div className="w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center px-6 pt-2 pb-8 overflow-y-auto relative z-10 no-scrollbar">
            {/* Ticket Card */}
            <div className="w-full bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden flex flex-col relative transition-all duration-300">
                
                {/* Top Section */}
                <div className="p-6 pb-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 dark:bg-white/5 dark:border-white/10">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>directions_bus</span>
                            </div>
                            <span className="font-bold text-gray-800 dark:text-gray-100 text-sm">Flecha Bus</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#E8F0E8] dark:bg-[#4D664D]/20 border border-[#4D664D]/10 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4D664D]"></span>
                            <span className="text-[#4D664D] font-semibold text-xs uppercase tracking-wide">Confirmado</span>
                        </div>
                    </div>

                    {/* Route */}
                    <div className="flex flex-col gap-1 mb-8">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider mb-1">De</span>
                                <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Buenos Aires</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Retiro</span>
                            </div>
                            <div className="mt-4 flex items-center text-primary/40 dark:text-primary/60">
                                <span className="material-symbols-outlined rotate-90" style={{fontSize: '20px'}}>flight</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider mb-1">Para</span>
                                <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Mar del Plata</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Terminal</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid Details */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                        <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '14px'}}>calendar_today</span>
                                Data
                            </span>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">12 Out, 2023</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '14px'}}>schedule</span>
                                Horário
                            </span>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">08:30 AM</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '14px'}}>event_seat</span>
                                Assento
                            </span>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">42 (Janela)</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '14px'}}>signpost</span>
                                Plataforma
                            </span>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">18 - Ala B</span>
                        </div>
                    </div>

                    {/* Passenger */}
                    <div className="flex flex-col border-t border-gray-100 dark:border-white/10 pt-4">
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider mb-1">Passageiro</span>
                        <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-gray-900 dark:text-white">Juan Pérez</span>
                            <span className="text-xs font-semibold text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">Adulto</span>
                        </div>
                    </div>
                </div>

                {/* Rip Effect */}
                <div className="relative w-full h-8 bg-white dark:bg-surface-dark flex items-center justify-between select-none">
                    <div className="w-6 h-6 rounded-full bg-[#fcfbf8] dark:bg-background-dark -ml-3 shadow-[inset_-2px_0_3px_rgba(0,0,0,0.05)]"></div>
                    <div className="flex-1 h-[1px] border-t-2 border-dashed border-gray-200 dark:border-gray-700 mx-2"></div>
                    <div className="w-6 h-6 rounded-full bg-[#fcfbf8] dark:bg-background-dark -mr-3 shadow-[inset_2px_0_3px_rgba(0,0,0,0.05)]"></div>
                </div>

                {/* Bottom QR */}
                <div className="p-8 pt-4 flex flex-col items-center justify-center bg-white dark:bg-surface-dark">
                    <div className="relative p-2 bg-white rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mb-4">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2npPNrlg04QaDLjzNvzTTmEYhsTgILbu4CzDQkW11sQZ1kVfIwRbw8-TxE6MDJJAKeOp2fcBH1vBzIX59BZVouhtkTRPAJmrGygRPE2voby4dszbaQEdFgB9TPiS7-0BnF0EBquSIYnqSUm5WEOTMSFT96s7pc2x3ZQSSBQ8qc8ypeNmAJeohhceYPpESJme0aXl27tl0Z2Vioxw4YJL7xxZsIwixeh0dj6_yoHarfOa1QLopR_cw8ppSzBQCAzywkSkVIYX7jWw"
                            alt="QR Code" 
                            className="w-48 h-48 mix-blend-multiply dark:mix-blend-normal rounded-lg"
                        />
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>check</span>
                        </div>
                    </div>
                    <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 max-w-[200px] leading-snug">
                        Apresente este código ao motorista para embarcar.
                    </p>
                </div>
            </div>
            
            <div className="h-24"></div>
        </main>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#fcfbf8] via-[#fcfbf8] to-transparent dark:from-background-dark dark:via-background-dark pb-6 pt-12 px-6 z-20 flex flex-col gap-3">
            <button className="group w-full flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800 active:scale-[0.98] transition-all duration-200 h-14 rounded-xl shadow-lg shadow-black/10">
                <div className="relative flex items-center justify-center">
                     <div className="w-6 h-4 border-2 border-white rounded-[4px] relative bg-black z-10"></div>
                     <div className="w-6 h-4 border-2 border-white/50 rounded-[4px] absolute -top-1 left-1 bg-black"></div>
                </div>
                <span className="font-bold text-base tracking-tight">Adicionar à Apple Wallet</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary active:scale-[0.98] transition-all duration-200 h-12 rounded-xl">
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>ios_share</span>
                <span className="font-bold text-sm tracking-wide">Compartilhar Bilhete</span>
            </button>
        </div>
    </div>
  );
};

export default TicketScreen;
