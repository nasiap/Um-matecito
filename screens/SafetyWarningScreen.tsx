
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SafetyWarningScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#f8f8f7] dark:bg-background-dark min-h-screen flex items-center justify-center p-6 font-display selection:bg-primary/30 antialiased">
            <div className="w-full max-w-md bg-white dark:bg-[#232e3a] rounded-[2.5rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] overflow-hidden relative flex flex-col group/card transform transition-all duration-300">
                
                {/* Warning Header Strip */}
                <div className="w-full bg-[#FFDC82] flex items-center justify-center gap-2 py-3.5 px-4">
                    <span className="material-symbols-outlined text-[#5C4D26] text-[20px] filled">warning</span>
                    <span className="text-[#5C4D26] text-[13px] font-black uppercase tracking-[0.15em]">Atenção Necessária</span>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center px-8 pt-10 pb-10 text-center">
                    
                    {/* Hero Illustration */}
                    <div className="relative size-36 mb-8">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-[#749fbe]/10 rounded-full scale-110 blur-xl"></div>
                        {/* Main Image */}
                        <div 
                            className="relative w-full h-full bg-contain bg-center bg-no-repeat z-10 drop-shadow-sm transition-transform duration-500 hover:scale-105" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvFr74NmghrHLPVTXllH38Kyx2rcT2imvvt2FNWrfZOYRRyqJHkT53RO8rFofK8dRtDvqHVZ1QwzenTAKWR0Y8ycQkqeI6p_ruUi-jEyWxBT7IDAASF4ao_uO5gOhuAW6mdIPOtQYiqiHDuxWSw9i51xf5x1rSGOD4iVwK34ghqQZnUSvTMfs1PcAsHS1bLy6blUjzYubr48_DQk0sUMONYt4OB2ez_Z_ES9evDily0jMZRk4v8gAfywhlUlz-1_BeF0e0J3cC0HI')" }}
                        ></div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-[#131516] dark:text-white text-[26px] font-extrabold leading-tight mb-4 tracking-tight">
                        Aviso sobre sua última viagem
                    </h2>

                    {/* Body Text */}
                    <p className="text-[#5f6368] dark:text-gray-300 text-[15px] font-medium leading-relaxed mb-8">
                        Notamos que houve um reporte relacionado à pontualidade na sua última carona. Para manter a comunidade segura e confiável, pedimos que revise nossas <button className="text-[#749fbe] hover:underline font-bold">Diretrizes da Comunidade</button>.
                    </p>

                    <div className="w-full h-px bg-gray-100 dark:bg-gray-700/50 mb-8"></div>

                    {/* Reminder Box */}
                    <div className="bg-[#749fbe]/5 dark:bg-[#749fbe]/10 rounded-2xl p-5 w-full mb-10 text-left flex gap-4 border border-[#749fbe]/10">
                        <span className="material-symbols-outlined text-[#749fbe] shrink-0 mt-0.5 filled" style={{ fontSize: '22px' }}>info</span>
                        <p className="text-[13px] text-[#5f6368] dark:text-gray-400 leading-normal font-medium">
                            Este é apenas um lembrete amigável para garantir boas experiências para todos no Un Matecito. Nenhuma penalidade foi aplicada à sua conta neste momento.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="w-full flex flex-col gap-4">
                        <button 
                            onClick={() => navigate('/home')}
                            className="group/btn w-full bg-[#749fbe] hover:bg-[#638ba8] active:scale-[0.98] transition-all text-white font-black text-[16px] py-4.5 px-6 rounded-2xl shadow-lg shadow-[#749fbe]/20 flex items-center justify-center gap-3"
                        >
                            <span>Entendi e concordo</span>
                            <span className="material-symbols-outlined text-[20px] filled group-hover/btn:translate-x-0.5 transition-transform">check_circle</span>
                        </button>
                        
                        <button 
                            className="text-[#749fbe] dark:text-[#8cbcdb] text-[15px] font-bold hover:text-[#5a7f9a] transition-colors py-3 px-4 rounded-xl hover:bg-[#749fbe]/5 dark:hover:bg-white/5"
                        >
                            Contestar esta decisão
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyWarningScreen;
