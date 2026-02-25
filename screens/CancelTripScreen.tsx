import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CancelTripScreen: React.FC = () => {
    const navigate = useNavigate();
    const [justification, setJustification] = useState('');
    const [refundMethod, setRefundMethod] = useState('app_credit');

    const handleConfirm = () => {
        if (!justification.trim()) {
            alert("Por favor, forneça uma justificativa.");
            return;
        }
        console.log("Cancelling trip. Justification:", justification, "Refund Method:", refundMethod);
        // Navigate to the success/refund screen
        navigate('/refund-confirmation');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#131612] dark:text-gray-100 font-display min-h-screen flex flex-col overflow-hidden selection:bg-warning/30">
            {/* Top Navigation */}
            <div className="flex items-center px-4 pt-4 pb-2 justify-between">
                <div onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </div>
                <h2 className="text-base font-bold leading-tight tracking-tight text-center flex-1 pr-10 opacity-60">Política de Cancelamento</h2>
            </div>

            {/* Main Content Scroll Area */}
            <main className="flex-1 overflow-y-auto px-6 pb-40">
                <div className="flex flex-col items-center justify-center pt-6 pb-6 text-center">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-warning/10 mb-4">
                        <span className="material-symbols-outlined text-5xl text-warning">warning</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-bold mb-4">
                        <span className="material-symbols-outlined text-lg">school</span>
                        Aviso Educativo (1/3)
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight text-[#131612] dark:text-white mb-3">
                        Cancelamento de última hora
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                        Cancelamentos em cima da hora impactam a confiança da nossa comunidade e o planejamento de outros usuários.
                    </p>
                </div>

                {/* Rule of Conduct */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 mb-8">
                    <div className="flex gap-3">
                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                        <div>
                            <h4 className="font-bold text-[#1a1c1a] dark:text-blue-200">Estamos aprendendo juntos</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                Entendemos que imprevistos acontecem. As primeiras 3 cancelamentos são apenas educativos.
                                <span className="font-bold text-blue-700 dark:text-blue-400"> Somente após 5 cancelamentos injustificados em um mês haverá suspensão temporária.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Justification Section */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                        <label className="text-lg font-bold text-[#131612] dark:text-white" htmlFor="justificativa">Justificativa</label>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Obrigatório</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">
                        Explique por que você não pôde realizar a viagem. Isso será usado em caso de contestação da amonestação.
                    </p>
                    <textarea
                        id="justificativa"
                        value={justification}
                        onChange={(e) => setJustification(e.target.value)}
                        className="w-full bg-white dark:bg-[#2c3035] border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 focus:ring-warning focus:border-warning text-gray-800 dark:text-white placeholder:text-gray-400 transition-all resize-none outline-none"
                        placeholder="Ex: Imprevisto de saúde, atraso no transporte público..."
                        rows={4}
                    ></textarea>
                </div>

                {/* Refund Amount Card */}
                <div className="bg-white dark:bg-[#2c3035] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center mb-6">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Valor a reembolsar (Taxas aplicadas)</p>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg font-bold text-gray-400">R$</span>
                        <span className="text-4xl font-extrabold text-[#131612] dark:text-white tracking-tight">45,00</span>
                    </div>
                </div>

                {/* Refund Method Selection */}
                <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#131612] dark:text-white mb-2">Destino do reembolso:</h3>

                    {/* App Credit */}
                    <label className="relative block group cursor-pointer">
                        <input
                            type="radio"
                            name="refund_method"
                            className="peer sr-only"
                            checked={refundMethod === 'app_credit'}
                            onChange={() => setRefundMethod('app_credit')}
                        />
                        <div className="custom-radio-border relative p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c3035] transition-all duration-200 peer-checked:border-warning peer-checked:bg-warning/5">
                            <div className="flex items-center gap-4">
                                <div className="radio-indicator flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-colors peer-checked:bg-warning peer-checked:border-warning"></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-[#131612] dark:text-white">Crédito no App</span>
                                        <span className="text-warning font-bold">R$ 47,25</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Com bônus de 5% (Instantâneo)</p>
                                </div>
                            </div>
                        </div>
                    </label>

                    {/* Original Method */}
                    <label className="relative block group cursor-pointer">
                        <input
                            type="radio"
                            name="refund_method"
                            className="peer sr-only"
                            checked={refundMethod === 'original'}
                            onChange={() => setRefundMethod('original')}
                        />
                        <div className="custom-radio-border relative p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c3035] transition-all duration-200 peer-checked:border-warning peer-checked:bg-warning/5">
                            <div className="flex items-center gap-4">
                                <div className="radio-indicator flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-colors peer-checked:bg-warning peer-checked:border-warning"></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-[#131612] dark:text-white">Método Original</span>
                                        <span className="text-gray-500 font-bold">R$ 45,00</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Estorno em até 5 dias úteis</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </main>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-10 safe-area-bottom">
                <button
                    onClick={handleConfirm}
                    className="w-full bg-warning hover:bg-orange-500 active:scale-[0.98] transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-warning/20 flex items-center justify-center gap-2"
                >
                    Confirmar Cancelamento
                    <span className="material-symbols-outlined">report</span>
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="w-full mt-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                    Manter viagem
                </button>
                <div className="h-2 w-full"></div>
            </div>
        </div>
    );
};

export default CancelTripScreen;
