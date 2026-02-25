import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RefundConfirmationScreen: React.FC = () => {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState('app_credit');

    const handleConfirm = () => {
        console.log("Refund method selected:", selectedMethod);
        // Here you would typically call an API to process the refund
        navigate('/home'); // Or wherever appropriate after confirmation
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#131612] dark:text-gray-100 font-display min-h-screen flex flex-col overflow-hidden selection:bg-primary/30">
            {/* Top Navigation */}
            <div className="flex items-center px-4 pt-4 pb-2 justify-between">
                <div onClick={() => navigate('/home')} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </div>
                <h2 className="text-base font-bold leading-tight tracking-tight text-center flex-1 pr-10 opacity-60">Detalhes do Reembolso</h2>
            </div>

            {/* Main Content Scroll Area */}
            <main className="flex-1 overflow-y-auto px-6 pb-32">
                {/* Success Animation/Icon */}
                <div className="flex flex-col items-center justify-center pt-8 pb-6">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                        <span className="material-symbols-outlined text-5xl text-primary animate-pulse">check_circle</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight text-[#131612] dark:text-white mb-3">
                        Cancelamento realizado com sucesso
                    </h1>
                    <p className="text-base text-gray-500 dark:text-gray-400 text-center leading-relaxed max-w-xs">
                        Não se preocupe, já estamos processando a devolução do seu dinheiro.
                    </p>
                </div>

                {/* Refund Amount Card */}
                <div className="bg-white dark:bg-[#2c3035] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center mb-8">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Valor total a reembolsar</p>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg font-bold text-gray-400">R$</span>
                        <span className="text-4xl font-extrabold text-[#131612] dark:text-white tracking-tight">45,00</span>
                    </div>
                </div>

                {/* Selection Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#131612] dark:text-white mb-4">Como você prefere receber?</h3>

                    {/* Option 1: App Credit (Recommended) */}
                    <label className="relative block group cursor-pointer">
                        <input
                            type="radio"
                            name="refund_method"
                            className="peer sr-only"
                            checked={selectedMethod === 'app_credit'}
                            onChange={() => setSelectedMethod('app_credit')}
                        />
                        <div className={`custom-radio-border relative p-4 rounded-xl border-2 transition-all duration-200 hover:border-primary/50 ${selectedMethod === 'app_credit' ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c3035]'}`}>
                            {/* Badge */}
                            <div className="absolute -top-3 right-4 bg-primary text-[#1a3815] text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">stars</span>
                                Bônus de +5%
                            </div>
                            <div className="flex items-start gap-4">
                                <div className={`radio-indicator flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-colors ${selectedMethod === 'app_credit' ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'}`}>
                                    {selectedMethod === 'app_credit' && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-[#131612] dark:text-white text-lg">Crédito no App</span>
                                        <span className="text-primary font-bold text-lg">R$ 47,25</span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Disponível imediatamente para sua próxima viagem.</p>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                                        <span className="material-symbols-outlined text-[16px]">bolt</span>
                                        Instantâneo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>

                    {/* Option 2: Card Refund */}
                    <label className="relative block group cursor-pointer">
                        <input
                            type="radio"
                            name="refund_method"
                            className="peer sr-only"
                            checked={selectedMethod === 'original_payment'}
                            onChange={() => setSelectedMethod('original_payment')}
                        />
                        <div className={`custom-radio-border relative p-4 rounded-xl border-2 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 ${selectedMethod === 'original_payment' ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c3035]'}`}>
                            <div className="flex items-start gap-4">
                                <div className={`radio-indicator flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-colors ${selectedMethod === 'original_payment' ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'}`}>
                                    {selectedMethod === 'original_payment' && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-[#131612] dark:text-white text-lg">Estorno no Cartão</span>
                                        <span className="text-gray-900 dark:text-gray-300 font-medium text-lg">R$ 45,00</span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Devolução para o método de pagamento original via Mercado Pago.</p>
                                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        Até 5 dias úteis
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </main>

            {/* Fixed Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-10 safe-area-bottom">
                <button onClick={handleConfirm} className="w-full bg-primary hover:bg-[#7bc46d] active:scale-[0.98] transition-all text-[#1a3815] font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    Confirmar reembolso
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button onClick={() => navigate('/home')} className="w-full mt-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    Voltar para o início
                </button>
                {/* Adding some padding for iPhone home indicator */}
                <div className="h-2 w-full"></div>
            </div>
        </div>
    );
};

export default RefundConfirmationScreen;
