
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripTrackingScreen: React.FC = () => {
    const navigate = useNavigate();

    // Custom styles for the map background pattern
    const mapPatternStyle = {
        backgroundImage: `
            linear-gradient(#e5e7eb 2px, transparent 2px), 
            linear-gradient(90deg, #e5e7eb 2px, transparent 2px)
        `,
        backgroundSize: '40px 40px',
        backgroundColor: '#f3f4f6'
    };

    const mapPatternStyleDark = {
        backgroundImage: `
            linear-gradient(#2d3138 2px, transparent 2px), 
            linear-gradient(90deg, #2d3138 2px, transparent 2px)
        `,
        backgroundSize: '40px 40px',
        backgroundColor: '#1a1d21'
    };

    return (
        <div className="font-display bg-white dark:bg-background-dark text-slate-900 dark:text-white h-screen w-full overflow-hidden flex flex-col relative max-w-md mx-auto shadow-2xl">
            {/* Top Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-20 pt-8 px-6 flex justify-between items-start pointer-events-none">
                <button 
                    onClick={() => navigate(-1)}
                    className="pointer-events-auto w-10 h-10 bg-white dark:bg-surface-dark rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="pointer-events-auto bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full shadow-lg font-bold flex items-center gap-2 border border-red-100 dark:border-red-800 transition-transform hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined text-[20px] filled">emergency_home</span>
                    <span className="text-sm">SOS</span>
                </button>
            </div>

            {/* Map Area */}
            <div className="relative flex-1 w-full overflow-hidden">
                {/* Background Pattern Layer */}
                <div className="absolute inset-0 bg-map-pattern dark:hidden" style={mapPatternStyle}></div>
                <div className="absolute inset-0 hidden dark:block" style={mapPatternStyleDark}></div>

                {/* Abstract Buildings / Blocks for Map Feel */}
                <div className="absolute top-20 left-10 w-24 h-32 bg-slate-200 dark:bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="absolute top-60 right-10 w-40 h-40 bg-slate-200 dark:bg-slate-800 opacity-50 rounded-lg"></div>
                <div className="absolute bottom-1/3 left-20 w-32 h-20 bg-slate-200 dark:bg-slate-800 opacity-50 rounded-lg"></div>

                {/* SVG Route */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    {/* Outline for contrast */}
                    <path 
                        className="dark:stroke-slate-900" 
                        d="M -50 100 Q 150 400 200 350 T 450 600" 
                        fill="none" 
                        stroke="white" 
                        strokeLinecap="round" 
                        strokeWidth="12"
                    ></path>
                    {/* Actual Route */}
                    <path 
                        d="M -50 100 Q 150 400 200 350 T 450 600" 
                        fill="none" 
                        stroke="#74a540" 
                        strokeDasharray="10 0" 
                        strokeLinecap="round" 
                        strokeWidth="6"
                    ></path>
                </svg>

                {/* Destination Marker */}
                <div className="absolute top-[350px] left-[200px] -translate-x-1/2 -translate-y-full flex flex-col items-center">
                    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md mb-1 whitespace-nowrap">
                        15 min
                    </div>
                    <div className="w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-slate-900 shadow-sm"></div>
                </div>

                {/* Vehicle Marker (Current Location) */}
                <div className="absolute top-[280px] left-[160px] -translate-x-1/2 -translate-y-1/2 z-10">
                    {/* Pulsing effect ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                    {/* Car Icon Circle */}
                    <div className="relative w-12 h-12 bg-white dark:bg-surface-dark rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-primary">
                        <span className="material-symbols-outlined text-primary filled">directions_car</span>
                    </div>
                </div>
            </div>

            {/* Bottom Sheet Container */}
            <div className="relative z-30 -mt-6">
                <div className="bg-white dark:bg-background-dark rounded-t-[32px] shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] px-6 pt-3 pb-8 w-full flex flex-col items-stretch">
                    {/* Drag Handle */}
                    <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>

                    {/* Header: Time Estimate */}
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                            15 min <span className="text-lg font-medium text-slate-400 dark:text-slate-500">para o destino</span>
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span>Chegada às 18:45</span>
                        </div>
                    </div>

                    {/* Driver Card */}
                    <div className="flex flex-col gap-4 mb-6">
                        {/* Driver Info Row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                                        <img 
                                            alt="Driver" 
                                            className="w-full h-full object-cover" 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7Tc7kLu0Kih_C0wU88leZ2PTCBT6dTO0qdHmrfHSpeVhHMz64ecbySEvFWbmXLFoPqoP8078k2p00ZPK8Erz6F2vB3e05BDhcaIl8urogndhmo-P7h9rYAZnJyNJpzpqvaJ3LGmTMiuit7tn4t09oHXFDdbQyaD4r2NYZjsFA88uNbTuXUVbLqSYVCOZJJgRhpFA4Om8G_W-kcI1G-zasBrL-M3M0r6F7c3uQ_uYKjxdCQtMZg3kxolay3PZf617815wkNPaaV8"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-1 shadow-sm">
                                        <div className="bg-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-yellow-900 flex items-center gap-0.5">
                                            <span className="material-symbols-outlined text-[10px] filled">star</span> 4.9
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Mateo Silva</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">Toyota Corolla • Branco</p>
                                </div>
                            </div>
                            {/* License Plate */}
                            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg">
                                <p className="font-mono font-bold text-slate-600 dark:text-slate-300 tracking-wider text-sm">ABC-1234</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="mb-6">
                        <div className="flex items-center justify-center gap-2 bg-[#f0fdf4] dark:bg-[#152e1d] border border-primary/20 rounded-xl py-2.5 px-4">
                            <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                            <span className="text-xs font-semibold text-primary/90 tracking-wide uppercase">Conexão Segura e Criptografada</span>
                        </div>
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-stretch gap-3">
                        <button className="flex-1 bg-primary hover:bg-[#5da051] text-white rounded-2xl h-14 flex items-center justify-center gap-2.5 shadow-[0_8px_16px_-4px_rgba(111,184,97,0.4)] transition-all active:scale-[0.98] group">
                            <span className="material-symbols-outlined group-hover:animate-bounce">share_location</span>
                            <span className="font-bold text-lg">Compartilhar Localização</span>
                        </button>
                        <button 
                            onClick={() => navigate('/home')}
                            className="w-14 h-14 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-2xl flex items-center justify-center transition-colors"
                        >
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>
                    {/* Bottom Safe Area Spacer */}
                    <div className="h-6 w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default TripTrackingScreen;
