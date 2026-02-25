
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const TripListScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    
    const carpoolTrips = [
        {
            id: '1',
            driver: 'Mateo',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzaV6ERyDGZpqrBEgF87OMZNUMpn5vXJH4YSBL6BMRhGgXl5m4XdVSj8m7jIOawyVaXxLPTGbn8b4PT-sHCUsYBatROiY26uiT-7pdWdtXfRcxxhnIVH5L6-mqAdkYkfaqEKOZju8Mnoa8ETya0uiiIypS3tqBDADzyJ0oK-P5oBjFMWxj7ntJYuF8sevJvh-edULkkjFsSilGMM-1P4PyUB6HnFumr_F-_QkhNaq6tKEo_BYX_0PQspYmLTKZPvcR8vJRzVsTt8s',
            departure: '08:00',
            arrival: '13:00',
            duration: '5h 00m',
            price: '$4.500',
            rating: 4.8,
            origin: 'Buenos Aires',
            destination: 'Mar del Plata',
            ac: true,
            pets: true
        },
        {
            id: '2',
            driver: 'Lucía',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBiJjha8wufDo0mbk0Kp3kBXBvtzIjLDNIyE9KVlkQOiAe3YBspUpiR3QTIEWPzXQUhChlQVI8VcBvPDgNvyaguuvsQpdnTgnRoknQ42iFcO6klD0l6-AVf4f5wXqMCrUaMPIqujtNCYRr8ks_CCSykFfVqlCkojsTVACMeQRuFFaBCfSJughmF5xCv5vCe1M_gekH7RiMuqTurl1IteAJICinbZFFABP2jO18NncyZDh_sdf5-CuNW7Sy329xji2HCwOe1UnfR1c',
            departure: '09:30',
            arrival: '13:30',
            duration: '4h 00m',
            price: '$4.200',
            rating: 4.9,
            origin: 'Buenos Aires',
            destination: 'Rosario',
            music: true,
            smoking: false
        },
        {
            id: '3',
            driver: 'Facundo',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdpGAMxBy2IgKK1mZSQQbO296fLnKifSS2AcOrzk4mX_CZ93T-vuECVc2lVmjCchIaZx3OHpyPUP64aDIisUDHj0VWF8ssJbBdZaZpnA5ldNnUlGywqEHyFKLR1irK8jaNPa07FNzkutf8Q7CmqKJ3K7fpIVZH4PIZ30FUyiKnO1VhpHDpfOMV1BmyG0ch0fy-oBeZOFVG0184i5QnMlvWwyos9AT7xxQtn-vxkcY7Cod9U-VXK8XBU3yOoIXdl5f9EhSOePHfcLk',
            departure: '07:00',
            arrival: '16:00',
            duration: '9h 00m',
            price: '$8.500',
            rating: 4.7,
            origin: 'Buenos Aires',
            destination: 'Córdoba',
            ac: true,
            music: true
        },
        {
            id: '4',
            driver: 'Sofia',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwOTmN9iVpqNiNeqh9q8rt7h6oHNfx1cxNGcuMIfIu5gshYkx2Ygp1fyDQsMUsge-U9y0tWD5ER5rTv5cDwlglIHSgLFFEzhe89Hu0MzOp0D8y99R5u8pvrHMJQb7JzJjeVDOfzOAqxVd_G28TW1AsWBXFttIdc5kl5RVVhhNf7Y2fmpiPsim2r7agKWOLfogB0qAWyw78gbbOn2B_ArIPVubdsfkUhnhrFoWqwIyWc9UMVO1woslu0e0tBX1raPIWid9bf4j9zSY',
            departure: '10:00',
            arrival: '12:00',
            duration: '2h 00m',
            price: '$2.100',
            rating: 5.0,
            origin: 'Bariloche',
            destination: 'El Bolsón',
            pets: true,
            smoking: false
        },
        {
            id: '5',
            driver: 'Enzo',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRbZrHXKQ4XSrF3hDTehi51M0cjNjXtzt7aNs-Hc0nG2m4lN6zUvvxJKgRx9Q4gsSJV20kQA7Ic09W9zCLgEEhOT3ymoo91RInPrAJ5rkFFIA1HMfobYxxhP-Im7AY3jB79I-JXf8CBYBZkm30qOy5NTlMvMbYkfk-1ku6VBycE8hQ4uopAIxGVf7lJ-1CUUA2pmgIOhI_83HXin4kOr2u4lKZqaYPIKw0tdQ1NoOGIBsGXuLobIdeSLL8BYjb8sHJzB_u2a4jPig',
            departure: '15:30',
            arrival: '21:30',
            duration: '6h 00m',
            price: '$5.800',
            rating: 4.6,
            origin: 'Neuquén',
            destination: 'Bariloche',
            ac: true,
            music: true
        }
    ];

    const busTrips = [
        {
            id: 'b1',
            company: 'FlechaBus',
            type: t('semi_bed'),
            price: '$6.000',
            departure: '10:00',
            arrival: '15:30',
            duration: '5h 30m',
            logo: 'arrow_forward_ios',
            amenities: ['wifi', 'chair']
        }
    ];

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-[#FBF9F5] dark:bg-background-dark font-display antialiased">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-[#FBF9F5]/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 dark:border-white/5 transition-colors">
                {/* Top App Bar */}
                <div className="flex items-center p-4 pb-2 justify-between">
                    <button 
                        onClick={() => navigate('/home')}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
                    </button>
                    <div className="flex-1 flex flex-col items-center mx-2">
                        <h2 className="text-text-main dark:text-white text-[17px] font-bold leading-tight tracking-tight text-center">Viajes Cercanos</h2>
                        <span className="text-[12px] text-text-secondary dark:text-gray-400 font-bold mt-0.5">12 Oct • 1 {t('passengers')}</span>
                    </div>
                    <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-text-main dark:text-white">tune</span>
                    </button>
                </div>
                
                {/* Filter Chips */}
                <div className="flex gap-2.5 px-4 pb-3 overflow-x-auto no-scrollbar">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-soft hover:bg-primary-dark transition-colors">
                        <span className="text-[13px] font-black">{t('filter_all')}</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-primary/20 dark:border-white/10 px-4 hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-primary">directions_car</span>
                        <span className="text-text-main dark:text-white text-[13px] font-bold">{t('filter_carpool')}</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-primary/20 dark:border-white/10 px-4 hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-primary">directions_bus</span>
                        <span className="text-text-main dark:text-white text-[13px] font-bold">{t('filter_bus')}</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-primary/20 dark:border-white/10 px-4 hover:border-primary/50 transition-colors">
                        <span className="text-text-main dark:text-white text-[13px] font-bold">{t('filter_price')}</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col gap-6 p-4 pb-32 overflow-y-auto no-scrollbar">
                {/* Carpooling Section */}
                <section>
                    <div className="flex items-center justify-between mb-5 mt-2 px-1">
                        <h3 className="text-text-main dark:text-white text-[20px] font-black tracking-tight flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-primary filled">handshake</span>
                            {t('carpool_available')}
                        </h3>
                        <span className="text-[10px] font-black text-primary bg-[#eef5e6] dark:bg-primary/20 px-3 py-1 rounded-full tracking-wider uppercase">{t('community')}</span>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        {carpoolTrips.map((trip) => (
                            <Link 
                                key={trip.id} 
                                to="/trip-detail" 
                                className="bg-white dark:bg-surface-dark rounded-[1.5rem] p-5 shadow-soft border border-gray-100 dark:border-white/5 transition-all active:scale-[0.98] group"
                            >
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <div className="flex-1">
                                        <p className="text-[11px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-widest mb-1">Ruta</p>
                                        <h4 className="text-text-main dark:text-white font-bold text-[16px] leading-tight">
                                            {trip.origin} <span className="text-primary mx-1">→</span> {trip.destination}
                                        </h4>
                                    </div>
                                    <p className="text-primary font-black text-[22px] tracking-tighter leading-none">{trip.price}</p>
                                </div>

                                <div className="h-px bg-gray-50 dark:bg-gray-800 w-full mb-4"></div>

                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex gap-4 flex-1">
                                        <div className="relative">
                                            <div 
                                                className="bg-center bg-no-repeat bg-cover rounded-full h-14 w-14 ring-2 ring-white dark:ring-surface-dark shadow-sm" 
                                                style={{backgroundImage: `url("${trip.image}")`}}
                                            ></div>
                                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-surface-dark rounded-full px-1.5 py-0.5 flex items-center shadow-sm border border-gray-100 dark:border-gray-700">
                                                <span className="text-[10px] font-black text-text-main dark:text-white">{trip.rating}</span>
                                                <span className="material-symbols-outlined text-[10px] text-yellow-500 filled ml-0.5">star</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-text-main dark:text-white font-black text-[18px] tracking-tight">{trip.departure}</span>
                                                <span className="material-symbols-outlined text-gray-300 text-[16px]">arrow_forward</span>
                                                <span className="text-text-secondary dark:text-gray-400 text-[18px] font-black opacity-40">{trip.arrival}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-text-secondary dark:text-gray-400 text-[12px] font-bold">
                                                <span>{trip.driver}</span>
                                                <span className="size-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span>{trip.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5">
                                        {trip.ac && <span className="material-symbols-outlined text-[18px] text-gray-300">ac_unit</span>}
                                        {trip.pets && <span className="material-symbols-outlined text-[18px] text-gray-300">pets</span>}
                                        {trip.music && <span className="material-symbols-outlined text-[18px] text-gray-300">music_note</span>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="flex items-center gap-5 py-4">
                    <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-1"></div>
                    <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.25em] whitespace-nowrap">{t('or_take_bus')}</span>
                    <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-1"></div>
                </div>

                {/* Bus Section */}
                <section>
                    <div className="flex items-center justify-between mb-5 px-1">
                        <h3 className="text-text-main dark:text-white text-[20px] font-black tracking-tight flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-primary">directions_bus</span>
                            {t('bus_trips')}
                        </h3>
                        <span className="text-[10px] font-black text-white bg-primary px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider shadow-sm">
                            <span className="material-symbols-outlined text-[14px] filled">verified</span>
                            {t('partners')}
                        </span>
                    </div>

                    <div className="flex flex-col gap-5">
                        {busTrips.map((trip) => (
                            <div key={trip.id} className="bg-white dark:bg-surface-dark rounded-[1.75rem] overflow-hidden shadow-soft border-l-[6px] border-l-primary group">
                                <div className="p-5 pb-4">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 bg-gray-50 dark:bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                                                <span className={`material-symbols-outlined ${trip.company === 'Plusmar' ? 'text-blue-600' : 'text-primary'} text-[28px]`}>{trip.logo}</span>
                                            </div>
                                            <div>
                                                <p className="text-[16px] font-black text-text-main dark:text-white leading-tight mb-0.5">{trip.company}</p>
                                                <p className="text-[12px] font-bold text-text-secondary dark:text-gray-400 uppercase tracking-tight">{trip.type}</p>
                                            </div>
                                        </div>
                                        <p className="text-primary font-black text-[24px] tracking-tighter">{trip.price}</p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between relative px-1">
                                        <div className="flex flex-col">
                                            <span className="text-[22px] font-black text-text-main dark:text-white leading-none mb-1">{trip.departure}</span>
                                            <span className="text-[11px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-widest">BUE</span>
                                        </div>
                                        
                                        <div className="flex-1 flex flex-col items-center px-6 relative">
                                            <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 mb-2">{trip.duration}</span>
                                            <div className="w-full h-0.5 bg-gray-100 dark:bg-gray-800 relative rounded-full">
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 size-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col items-end">
                                            <span className="text-[22px] font-black text-text-main dark:text-white leading-none mb-1">{trip.arrival}</span>
                                            <span className="text-[11px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-widest">MDP</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bus Footer */}
                                <div className="bg-[#f0f5ee] dark:bg-primary/5 px-5 py-3 flex justify-between items-center border-t border-primary/5">
                                    <div className="flex items-center gap-2 text-primary">
                                        <span className="material-symbols-outlined text-[18px] filled">verified_user</span>
                                        <span className="text-[11px] font-black uppercase tracking-widest">{t('guaranteed_purchase')}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-text-secondary dark:text-gray-400 opacity-60">
                                        {trip.amenities.map((amenity) => (
                                            <span key={amenity} className="material-symbols-outlined text-[18px]">{amenity === 'chair' ? 'airline_seat_recline_extra' : amenity}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 pb-8 pt-3 px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] max-w-md mx-auto rounded-t-[2rem]">
                <div className="flex justify-between items-center">
                    <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[28px]">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-tight">Home</span>
                    </button>
                    <button onClick={() => navigate('/trips')} className="flex flex-col items-center gap-1.5 text-primary group">
                        <span className="material-symbols-outlined text-[28px] filled">search</span>
                        <span className="text-[10px] font-black uppercase tracking-tight">Search</span>
                    </button>
                    <button onClick={() => navigate('/chat')} className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[28px]">chat</span>
                        <span className="text-[10px] font-bold uppercase tracking-tight">Messages</span>
                    </button>
                    <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[28px]">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-tight">Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default TripListScreen;
