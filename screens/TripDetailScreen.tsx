import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getTripInsights } from '../services/geminiService';

const TripDetailScreen: React.FC = () => {
    const navigate = useNavigate();
    const [aiInsights, setAiInsights] = useState<{ text: string; grounding: any[] } | null>(null);
    const [loadingInsights, setLoadingInsights] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            setLoadingInsights(true);
            const insights = await getTripInsights("Buenos Aires", "Mar del Plata");
            setAiInsights(insights);
            setLoadingInsights(false);
        };
        fetchInsights();
    }, []);

    const mapGrounding = aiInsights?.grounding?.filter(chunk => chunk.maps) || [];

    return (
        <div className="bg-[#f7f8f6] dark:bg-background-dark font-display text-text-main dark:text-[#e0e3de] antialiased pb-32 max-w-md mx-auto min-h-screen relative overflow-x-hidden">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-[#f7f8f6]/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-4 flex items-center justify-between">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex size-11 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[26px]">arrow_back</span>
                </button>
                <h2 className="text-[18px] font-extrabold tracking-tight">Detalles del viaje</h2>
                <button className="flex size-11 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">share</span>
                </button>
            </div>

            {/* Map Placeholder */}
            <div className="px-5 py-2">
                <div className="relative w-full h-[240px] rounded-[2.5rem] overflow-hidden shadow-soft border border-white dark:border-white/5">
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQk3UXLm6FIPaxQgI9Qe1WEhPw2RPLiQiOOmVt0Vz8qpEuhHwjhaRh0R0dlNF0HWG7VZd7e0A2EZSXTgeyKujwXvDeZ8qEYRHrKH8BTmTro11j4YathIt412QXjLwg2lG2lcdUSXQLZ2_61RALYqAnov0gYUDj_QnzUpunvjeUcaNpkc8yVfQRt4VVudr2Aairib28sFESlVIii4z6_G5ePKD2sSOSymK2kBehOM_LqyB1O26YQ1FNuygQBrbIX0WET8wBbQg5NsY")'}}
                    ></div>
                    <div className="absolute bottom-5 right-5 bg-white/90 dark:bg-black/70 backdrop-blur-md px-5 py-2 rounded-2xl text-[14px] font-black shadow-lg">
                        415 km
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 px-8">
                <div className="grid grid-cols-[36px_1fr] gap-x-6">
                    <div className="flex flex-col items-center pt-2">
                        <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        <div className="w-[2px] dashed-line flex-1 my-2"></div>
                    </div>
                    <div className="pb-10">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-2xl font-black tracking-tight">08:30 AM</span>
                            <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg uppercase tracking-wider">Origen</span>
                        </div>
                        <p className="text-[18px] font-bold leading-tight">Buenos Aires</p>
                        <p className="text-[13px] font-medium text-gray-400 mt-1">Obelisco, Av. 9 de Julio</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="size-4 rounded-full border-[3px] border-accent-blue bg-white dark:bg-background-dark"></div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-2xl font-black tracking-tight">01:30 PM</span>
                            <span className="text-[11px] font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-lg uppercase tracking-wider">Destino</span>
                        </div>
                        <p className="text-[18px] font-bold leading-tight">Mar del Plata</p>
                        <p className="text-[13px] font-medium text-gray-400 mt-1">Casino Central, Blvd. Maritimo</p>
                    </div>
                </div>
            </div>

            {/* AI Guide */}
            <div className="px-5 mt-10">
                <div className="p-6 rounded-[2.5rem] bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-soft relative">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[24px] filled">auto_awesome</span>
                        </div>
                        <div>
                            <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.2em]">MateTip de IA</h4>
                            <p className="text-[10px] text-gray-400 font-bold">CONSEJOS PERSONALIZADOS</p>
                        </div>
                    </div>

                    {loadingInsights ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-gray-100 dark:bg-white/10 rounded-full w-3/4"></div>
                            <div className="h-4 bg-gray-100 dark:bg-white/10 rounded-full w-full"></div>
                            <div className="h-4 bg-gray-100 dark:bg-white/10 rounded-full w-5/6"></div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 italic">
                                "{aiInsights?.text}"
                            </p>
                            {mapGrounding.length > 0 && (
                                <div className="grid gap-3">
                                    {mapGrounding.map((place, idx) => (
                                        <a key={idx} href={place.maps.uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-background-light dark:bg-white/5 border border-primary/10 group hover:border-primary transition-all active:scale-[0.98]">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                                <span className="text-[14px] font-bold">{place.maps.title}</span>
                                            </div>
                                            <span className="material-symbols-outlined text-[18px] text-gray-300 group-hover:text-primary transition-colors">open_in_new</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Driver Card */}
            <div className="px-5 mt-10 mb-10">
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5 px-1">Tu Conductor</h3>
                <Link to="/trust-profile" className="block bg-white dark:bg-surface-dark rounded-[2.5rem] p-6 shadow-soft border border-gray-100 dark:border-white/5 hover:scale-[1.01] transition-all active:scale-[0.99]">
                    <div className="flex items-center gap-5 pb-6 border-b border-gray-50 dark:border-white/5">
                        <div className="relative">
                            <div 
                                className="size-20 rounded-full bg-cover bg-center border-[4px] border-white dark:border-surface-dark shadow-md" 
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh_Z93r5KUwdUt6zCvD5K3K-FGtVMCUqABIrtZxxTPeqrK612YbP9zfBHkwwfCGWHIZAl6e54HrAZ4Fo-CA0X1bXI0h38Jv1CSFxHdfuxoywyqwPyEgiApq_RV8MtwKCFhZjjZpp9n57NuYMpofkcjM6O7n4OCC4EzPf5N_1DcAVX1ppKEu6P-cvPyawQIYCQ_CmWVlGUVx3uxuZmutNfne6tk6P7TQ-fYH1MYS4WWvuaUytMO82_K7N5NqYpNftcYKl_gSX-chVE")'}}
                            ></div>
                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-surface-dark rounded-full p-1 shadow-sm">
                                <span className="material-symbols-outlined text-blue-500 text-[20px] filled">verified</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="text-[20px] font-black">Facundo M.</h4>
                                <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-yellow-500 text-[16px] filled">star</span>
                                    <span className="text-[13px] font-bold text-yellow-700 dark:text-yellow-400">4.9</span>
                                </div>
                            </div>
                            <p className="text-[13px] font-bold text-primary">Conductor Pro</p>
                            <p className="text-[12px] font-medium text-gray-400 mt-1">42 viajes compartidos</p>
                        </div>
                    </div>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                                <span className="material-symbols-outlined text-[24px]">directions_car</span>
                            </div>
                            <div>
                                <p className="text-[14px] font-black">Peugeot 208</p>
                                <p className="text-[12px] font-medium text-gray-400">Blanco • AB 123 CD</p>
                            </div>
                        </div>
                        <span className="text-primary material-symbols-outlined">chevron_right</span>
                    </div>
                </Link>
            </div>

            {/* CTA Section */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 p-5 pb-10 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] max-w-md mx-auto rounded-t-[2.5rem]">
                <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Total</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-[28px] font-black">$4.500</span>
                            <span className="text-[12px] font-bold text-gray-400 uppercase">ars</span>
                        </div>
                    </div>
                    <Link to="/booking" className="flex-1 h-16 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white font-black text-[18px] rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                        Reservar Lugar
                        <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TripDetailScreen;