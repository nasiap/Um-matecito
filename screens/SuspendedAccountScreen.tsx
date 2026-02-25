import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuspendedAccountScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#fcf9f1] dark:bg-[#221310] font-display text-gray-800 dark:text-gray-100 min-h-screen flex items-center justify-center p-4">
            {/* iOS Phone Frame Simulator */}
            <div className="w-full max-w-[390px] h-[844px] bg-white dark:bg-zinc-900 rounded-[3rem] shadow-2xl border-[8px] border-zinc-200 dark:border-zinc-800 relative overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-12 w-full flex justify-between items-center px-8 pt-4">
                    <span className="text-sm font-semibold">9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <span className="material-symbols-outlined text-xs">signal_cellular_alt</span>
                        <span className="material-symbols-outlined text-xs">wifi</span>
                        <span className="material-symbols-outlined text-xs">battery_full</span>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto px-6 pb-12">
                    {/* Header Status */}
                    <div className="mt-4 flex flex-col items-center text-center">
                        <div className="bg-[#ee4b2b]/10 dark:bg-[#ee4b2b]/20 text-[#ee4b2b] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Conta Suspensa por 7 Dias
                        </div>

                        {/* Sad Mate Mascot Icon */}
                        <div className="relative w-32 h-32 mb-6">
                            <img
                                alt="Sad mate cup character with a clock"
                                className="w-full h-full object-cover rounded-full border-4 border-[#ee4b2b]/20"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgFRl90Tx6p2WsDSihtf-WxlN0Gg7DdXF1O9JIaMV3t3KCduyXAQfjoI23VhiPczh31-USbbBk_VwglYbTZDPANJKIY7GYY4NCIMkEvJwfFSxnilsXFTY1cujFpOycCS4U3802Fw9Z52bw9thJ8THKMOAdSRqnRlOP-QMgRBz61tJfIGQp1UH3Gmy7J1XeSSDPEdEwW0oL3VVNOmcdlXL3iPkHzeEL7tm3irbLnQGYD4X4yEdrtzlRsgyk862RzxhQ-nBpiP4BZg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-[#ee4b2b] text-white p-2 rounded-full shadow-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl">timer_off</span>
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold mb-2">Opa, sua conta está descansando</h1>
                        <p className="text-gray-500 dark:text-gray-400 px-4 leading-relaxed">
                            Você atingiu o limite de 3 amonestações por cancelamentos tardios em nossa comunidade.
                        </p>
                    </div>

                    {/* Countdown Timer Card */}
                    <div className="mt-8 bg-[#fcf9f1] dark:bg-[#221310] border border-[#ee4b2b]/20 rounded-xl p-5 shadow-sm">
                        <p className="text-xs font-bold text-[#ee4b2b] uppercase tracking-widest text-center mb-3">Tempo Restante</p>
                        <div className="flex justify-center items-baseline gap-4">
                            <div className="text-center">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">06</span>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Dias</p>
                            </div>
                            <span className="text-2xl font-bold text-[#ee4b2b]/40 mb-4">:</span>
                            <div className="text-center">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">23</span>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Horas</p>
                            </div>
                            <span className="text-2xl font-bold text-[#ee4b2b]/40 mb-4">:</span>
                            <div className="text-center">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">45</span>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Min</p>
                            </div>
                        </div>
                    </div>

                    {/* Educational Section */}
                    <div className="mt-8 space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#ee4b2b]">info</span>
                            Por que isso aconteceu?
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-[#ee4b2b]/5 dark:bg-[#ee4b2b]/10 p-4 rounded-lg border-l-4 border-[#ee4b2b]">
                            <p>
                                No <span className="font-bold text-[#ee4b2b] italic">Un Matecito</span>, o respeito pelo tempo dos outros é fundamental. O mate é um momento de conexão e compartilhamento.
                            </p>
                            <p>
                                Cancelamentos de última hora impedem que outros membros possam desfrutar de uma roda de mate genuína. Pessoas reservaram seu tempo para te encontrar.
                            </p>
                            <p className="font-medium">
                                Sua conta será reabilitada automaticamente após o término do prazo. Aproveite esse tempo para revisar nossas diretrizes de convivência.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col gap-3">
                        <button className="w-full py-4 bg-[#ee4b2b]/10 dark:bg-[#ee4b2b]/20 text-[#ee4b2b] font-bold rounded-xl hover:bg-[#ee4b2b]/20 transition-colors border border-[#ee4b2b]/20">
                            Contestar Suspensão
                        </button>
                        <button onClick={() => navigate('/')} className="w-full py-4 text-gray-400 text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                            Voltar para o Início
                        </button>
                    </div>
                </div>

                {/* iOS Home Indicator */}
                <div className="h-8 w-full flex justify-center items-end pb-2">
                    <div className="w-32 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SuspendedAccountScreen;
