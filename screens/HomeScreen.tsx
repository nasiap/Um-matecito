
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNav } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

const HomeScreen: React.FC = () => {
    const { t, language, setLanguage } = useLanguage();
    const { user } = useAuth();
    const [from, setFrom] = useState("Buenos Aires");
    const [to, setTo] = useState("Mar del Plata");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setLoading(true);
        setError("");
        setResults([]);

        try {
            // 1. Geocode "From" location
            const coords = await api.geocodeLocation(from);

            if (!coords) {
                setError(t('location_not_found') || "Location not found");
                setLoading(false);
                return;
            }

            // 2. Search Backend
            const trips = await api.searchTrips(coords.lat, coords.lng);
            setResults(trips);

            if (trips.length === 0) {
                setError(t('no_trips_found') || "No trips found nearby");
            }

        } catch (err) {
            console.error(err);
            setError("An error occurred while searching");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#fdf8ed] dark:bg-background-dark font-display text-[#141613] dark:text-white min-h-screen flex flex-col pb-32 max-w-md mx-auto">
            {/* Header Section */}
            <header className="flex items-center justify-between px-6 pt-12 pb-4">
                <div className="flex items-center gap-3">
                    <Link to="/profile" className="relative group cursor-pointer">
                        <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <img
                                alt="User Profile"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf1ERztBy-hCUVI82XVzpdI6dTtKONH1Qzq8DzsZVAQy4Z9XfKMQF84iN5Jf52V_2nbJhJaGJ3ZeJRZ8rwYThYVCPuGmaCcPX8VRKJsobhRLMGJRAVP_gaU-k_YtXfZ-0f7MtUPYx14g1az31FOSa6eu2HFEBdyX2mY-l_nsxlb-I-Z3YDHTTNlstoqJx2kohjT5U1x-YJ-myRGXCr_ok2Zje4jzvkOFQljFLdQ3UpdTzXDYIIiUFizREtXPtekj9XyRHBY0gD52c"
                            />
                        </div>
                        <div className="absolute bottom-0.5 right-0.5 size-3 bg-[#74a540] rounded-full border-2 border-[#fdf8ed]"></div>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-[20px] font-bold leading-none text-[#141613] dark:text-white">¡Hola, {user?.name ? user.name : 'Viajero'}! 👋</h1>
                    </div>
                </div>

                {/* Quick Language Switcher */}
                <div className="flex bg-white dark:bg-surface-dark rounded-full p-1 border border-gray-100 dark:border-white/5 shadow-sm">
                    {(['es', 'en', 'pt'] as const).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all ${language === lang ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-primary'}`}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 flex flex-col px-6 gap-6">
                <div className="mt-4">
                    <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-tight text-[#141613] dark:text-white">
                        {t('where_to')}
                    </h2>
                </div>

                {/* Search Card */}
                <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-6 shadow-soft w-full relative overflow-hidden">
                    <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                        <div className="flex flex-col bg-[#fdf8ed]/50 dark:bg-background-dark/30 rounded-3xl border border-mate-brown/10 overflow-hidden relative">
                            <div className="absolute left-[24px] top-[48px] bottom-[48px] w-[2px] border-l-2 border-dashed border-mate-brown/30 z-0 pointer-events-none"></div>

                            <div className="relative flex items-center p-2 group">
                                <div className="size-10 flex items-center justify-center shrink-0 z-10 ml-1">
                                    <span className="material-symbols-outlined text-primary text-[22px]">trip_origin</span>
                                </div>
                                <div className="flex-1 ml-1">
                                    <label className="block text-[11px] font-bold text-mate-brown uppercase tracking-wider mb-0.5">{t('from')}</label>
                                    <input className="w-full bg-transparent border-none p-0 text-lg font-bold text-[#141613] dark:text-white focus:ring-0" placeholder="Buenos Aires" type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                                </div>
                            </div>

                            <div className="h-[1px] bg-mate-brown/10 mx-14"></div>

                            <div className="relative flex items-center p-2 group">
                                <div className="size-10 flex items-center justify-center shrink-0 z-10 ml-1">
                                    <span className="material-symbols-outlined text-[#e15241] filled text-[22px]">location_on</span>
                                </div>
                                <div className="flex-1 ml-1">
                                    <label className="block text-[11px] font-bold text-mate-brown uppercase tracking-wider mb-0.5">{t('to')}</label>
                                    <input className="w-full bg-transparent border-none p-0 text-lg font-bold text-[#141613] dark:text-white focus:ring-0" placeholder="Mar del Plata" type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 w-full bg-[#74a540] hover:bg-primary-dark transition-all text-white h-16 rounded-[1.5rem] text-xl font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {loading ? (
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-[28px]">search</span>
                                    {t('search')}
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Search Results */}
                {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-center font-bold text-sm">
                        {error}
                    </div>
                )}

                {results.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[18px] font-bold text-[#141613] dark:text-white px-1">Available Trips</h3>
                        {results.map((trip) => (
                            <div key={trip.id} className="bg-white dark:bg-surface-dark p-4 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-[#141613] dark:text-white">{trip.origin_address}</p>
                                        <p className="text-xs text-gray-400">to</p>
                                        <p className="font-bold text-[#141613] dark:text-white">{trip.dest_address}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-black text-primary">
                                            {trip.currency === 'BRL' ? 'R$' : '$'} {trip.price}
                                        </span>
                                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                                            {trip.seats_available} seats
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-50 dark:border-white/5">
                                    <div className="size-6 rounded-full bg-gray-200"></div>
                                    <span className="text-xs font-bold text-gray-500">Driver Name</span>
                                    {trip.women_only && (
                                        <span className="ml-auto text-[10px] bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[12px]">female</span>
                                            Women Only
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Women Only Promo Banner */}
                {/* Women Only Promo Banner - High Visibility */}
                <Link to="/women-only" className="w-full bg-[#faeff2] dark:bg-[#e08594]/10 rounded-[2rem] p-6 flex items-center gap-5 border-2 border-[#e08594] shadow-lg shadow-[#e08594]/15 active:scale-[0.98] transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <span className="material-symbols-outlined text-[100px] text-[#e08594] rotate-12">female</span>
                    </div>
                    <div className="size-16 rounded-full bg-[#e08594] flex items-center justify-center shrink-0 shadow-md shadow-[#e08594]/40 z-10 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white text-[32px] filled">diversity_1</span>
                    </div>
                    <div className="z-10 flex-1">
                        <h3 className="text-[#2D3237] dark:text-white text-[18px] font-black leading-tight">Un Matecito entre Ellas</h3>
                        <p className="text-[#e08594] text-[13px] font-bold mt-1">Viagens exclusivas para mulheres 🌸</p>
                    </div>
                    <div className="size-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shrink-0 z-10 shadow-sm">
                        <span className="material-symbols-outlined text-[#e08594]">arrow_forward</span>
                    </div>
                </Link>

                <div className="mt-2">
                    <h3 className="text-[22px] font-bold text-[#141613] dark:text-white mb-5 px-1">{t('popular_routes')}</h3>
                    {/* Simplified for demo */}
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default HomeScreen;
