
import React from 'react';
import { Link } from 'react-router-dom';

const ChatScreen: React.FC = () => {
    return (
        <div className="bg-[#fdf8ed] dark:bg-background-dark min-h-screen flex flex-col font-display overflow-hidden text-[#141613] dark:text-white transition-colors duration-300 max-w-md mx-auto relative">
            {/* Header */}
            <header className="flex items-center justify-between px-5 py-4 bg-white dark:bg-[#191d15] sticky top-0 z-30 transition-all duration-300">
                <Link to="/trips" className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined text-[28px]">chevron_left</span>
                </Link>
                <div className="flex flex-1 items-center gap-3 ml-1">
                    <div className="relative shrink-0">
                        <div 
                            className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center border-[2px] border-white dark:border-[#2a2e25] shadow-sm" 
                            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRbZrHXKQ4XSrF3hDTehi51M0cjNjXtzt7aNs-Hc0nG2m4lN6zUvvxJKgRx9Q4gsSJV20kQA7Ic09W9zCLgEEhOT3ymoo91RInPrAJ5rkFFIA1HMfobYxxhP-Im7AY3jB79I-JXf8CBYBZkm30qOy5NTlMvMbYkfk-1ku6VBycE8hQ4uopAIxGVf7lJ-1CUUA2pmgIOhI_83HXin4kOr2u4lKZqaYPIKw0tdQ1NoOGIBsGXuLobIdeSLL8BYjb8sHJzB_u2a4jPig')"}}
                        ></div>
                        <div className="absolute bottom-0 right-0 bg-[#74a540] w-3 h-3 rounded-full border-[2px] border-white dark:border-[#191d15]"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[18px] font-bold leading-none tracking-tight text-gray-900 dark:text-white mb-1">Facundo</h1>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full flex items-center gap-1 uppercase tracking-tight">
                                Lleva mate <span className="text-[14px]">🧉</span>
                            </span>
                        </div>
                    </div>
                </div>
                <button className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 transition-colors">
                    <span className="material-symbols-outlined filled text-[24px]">info</span>
                </button>
            </header>

            {/* Chat Stream */}
            <main className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-6 pb-48 scroll-smooth bg-[#fdf8ed] dark:bg-background-dark">
                {/* Verified Trip Pill */}
                <div className="flex justify-center w-full mb-2">
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-[#f0f7fa] dark:bg-[#2c3e50] rounded-full shadow-sm border border-[#e1f0f7] dark:border-[#34495e]">
                        <span className="material-symbols-outlined text-[#4a8bb0] dark:text-[#8ac6e8] text-[18px] filled">shield_person</span>
                        <span className="text-[#3a6f8f] dark:text-[#a9c7d9] text-[13px] font-bold tracking-wider uppercase">Verified Trip</span>
                    </div>
                </div>

                {/* System Message */}
                <div className="flex justify-center mb-2">
                    <p className="text-[14px] text-[#8C7B6C] dark:text-gray-500 font-medium px-4 text-center max-w-xs leading-relaxed">
                        You are now connected with Facundo. <br/>Say <span className="text-primary font-bold">hola!</span> 👋
                    </p>
                </div>

                {/* Message: Facundo (Received) */}
                <div className="flex flex-col gap-1.5 items-start max-w-[85%]">
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center shrink-0 shadow-sm" 
                            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdpGAMxBy2IgKK1mZSQQbO296fLnKifSS2AcOrzk4mX_CZ93T-vuECVc2lVmjCchIaZx3OHpyPUP64aDIisUDHj0VWF8ssJbBdZaZpnA5ldNnUlGywqEHyFKLR1irK8jaNPa07FNzkutf8Q7CmqKJ3K7fpIVZH4PIZ30FUyiKnO1VhpHDpfOMV1BmyG0ch0fy-oBeZOFVG0184i5QnMlvWwyos9AT7xxQtn-vxkcY7Cod9U-VXK8XBU3yOoIXdl5f9EhSOePHfcLk')"}}
                        ></div>
                        <div className="bg-white dark:bg-[#2a2e25] px-5 py-3.5 rounded-[1.75rem] shadow-sm text-[15px] leading-snug text-[#141613] dark:text-gray-200">
                            <p>Hola! I'm leaving in 10 minutes. I have the hot water ready. 🌡️</p>
                        </div>
                    </div>
                    <span className="text-[12px] text-gray-400 dark:text-gray-600 font-medium ml-14">10:42 AM</span>
                </div>

                {/* Message: Me (Sent) */}
                <div className="flex flex-col gap-1.5 items-end self-end max-w-[85%]">
                    <div className="bg-[#74a540] px-5 py-3.5 rounded-[1.75rem] shadow-soft text-[15px] leading-snug text-white">
                        <p>Great! I'm at the corner waiting. I brought medialunas. 🥐</p>
                    </div>
                    <div className="flex items-center gap-1.5 pr-1">
                        <span className="text-[12px] text-gray-400 dark:text-gray-600 font-medium">10:45 AM</span>
                        <span className="material-symbols-outlined text-[16px] text-[#74a540]">done_all</span>
                    </div>
                </div>

                {/* Message: Facundo (Received) */}
                <div className="flex flex-col gap-1.5 items-start max-w-[85%]">
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center shrink-0 shadow-sm" 
                            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoOr2ABLQT5PRwfL-RBva3nO12cs8ryzseAj0bEENKtZIe8sKoE5AXeI43PfYjQOVFiRZzwVIpQ3hwm6-33vx0T-yvCGlGu1ebaeXTdf-Wj1akbERdy1BzxKRrJVgtmDFaFnwoxZXD8J2pHqlkHcNNPGUfaNoqld_7BzgH7gCaQxtkGd2ao1Qe_FAYMvFlhm9XNejUq9pI1qUb1f5bMja8v3nA7YdJEdX5m3QqfKpURsn8Jah9Nqp8P_2vDXNghhMG7IQYYhyTbME')"}}
                        ></div>
                        <div className="bg-white dark:bg-[#2a2e25] px-5 py-3.5 rounded-[1.75rem] shadow-sm text-[15px] leading-snug text-[#141613] dark:text-gray-200">
                            <p>¡Buenísimo! Nos vemos ahí.</p>
                        </div>
                    </div>
                    <span className="text-[12px] text-gray-400 dark:text-gray-600 font-medium ml-14">10:46 AM</span>
                </div>
            </main>

            {/* Bottom Interaction Area */}
            <div className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-[#191d15]/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800/50 p-4 pb-10 z-40 max-w-md mx-auto">
                {/* Quick Responses */}
                <div className="flex gap-3 overflow-x-auto pb-4 px-1 no-scrollbar mb-2">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#232820] rounded-full text-[13px] font-bold text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 whitespace-nowrap active:scale-95 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px] text-primary">near_me</span>
                        Share Location
                    </button>
                    <button className="px-5 py-2.5 bg-white dark:bg-[#232820] rounded-full text-[13px] font-bold text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 whitespace-nowrap active:scale-95 transition-all shadow-sm">
                        Voy yendo 🏃‍♂️
                    </button>
                    <button className="px-5 py-2.5 bg-white dark:bg-[#232820] rounded-full text-[13px] font-bold text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 whitespace-nowrap active:scale-95 transition-all shadow-sm">
                        Llevo facturas 🥐
                    </button>
                </div>

                {/* Main Input Field */}
                <div className="flex items-center gap-3 px-1">
                    <button className="flex items-center justify-center size-12 text-gray-400 hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <span className="material-symbols-outlined text-[32px]">add_circle</span>
                    </button>
                    <div className="flex-1 bg-[#f0f2f5] dark:bg-[#232820] rounded-[1.75rem] flex items-center p-1 border border-transparent focus-within:bg-white dark:focus-within:bg-[#2a2e25] focus-within:border-gray-200 transition-all">
                        <input 
                            className="w-full bg-transparent border-none text-[15px] px-5 py-3 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0" 
                            placeholder="Escribí un mensaje..." 
                            type="text"
                        />
                        <button className="size-10 flex items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors">
                            <span className="material-symbols-outlined text-[26px]">sentiment_satisfied</span>
                        </button>
                    </div>
                    <button className="size-14 bg-[#74a540] rounded-full text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-[26px]">send</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
