
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

const PublishScreen: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    // Form state
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('18:30');
    const [seats, setSeats] = useState(3);
    const [price, setPrice] = useState('2500');
    const [currency, setCurrency] = useState<'ARS' | 'BRL'>(user?.country === 'BR' ? 'BRL' : 'ARS');
    const [womenOnly, setWomenOnly] = useState(false);
    const [vibe, setVibe] = useState('mate');

    // Submission state
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Generate next 7 days for date picker
    const getUpcomingDays = () => {
        const days = [];
        const dayNames = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
        const monthNames = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
        for (let i = 0; i < 5; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            days.push({
                label: i === 0 ? 'HOY' : dayNames[d.getDay()],
                day: d.getDate(),
                month: monthNames[d.getMonth()],
                iso: d.toISOString().split('T')[0],
            });
        }
        return days;
    };

    const upcomingDays = getUpcomingDays();

    // Default to today if no date selected
    const selectedDate = departureDate || upcomingDays[0].iso;

    const handleSubmit = async () => {
        setError('');

        // Validate
        if (!origin.trim()) { setError('Ingresá la dirección de origen.'); return; }
        if (!destination.trim()) { setError('Ingresá la dirección de destino.'); return; }
        if (!price || parseFloat(price) <= 0) { setError('Ingresá un precio válido.'); return; }
        if (!user) { setError('Tenés que iniciar sesión.'); return; }

        setIsLoading(true);

        try {
            // 1. Geocode origin
            const originCoords = await api.geocodeLocation(origin);
            if (!originCoords) {
                setError(`No pudimos encontrar "${origin}". Probá con una dirección más específica.`);
                setIsLoading(false);
                return;
            }

            // 2. Geocode destination
            const destCoords = await api.geocodeLocation(destination);
            if (!destCoords) {
                setError(`No pudimos encontrar "${destination}". Probá con una dirección más específica.`);
                setIsLoading(false);
                return;
            }

            // 3. Build ISO departure datetime
            const departureDatetime = new Date(`${selectedDate}T${departureTime}:00`).toISOString();

            // 4. Create trip
            await api.createTrip({
                driver_id: user.id,
                origin_lat: originCoords.lat,
                origin_lng: originCoords.lng,
                origin_address: origin,
                dest_lat: destCoords.lat,
                dest_lng: destCoords.lng,
                dest_address: destination,
                departure_time: departureDatetime,
                seats_available: seats,
                price: parseFloat(price),
                currency,
                women_only: womenOnly,
            });

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Error al crear el viaje.');
        } finally {
            setIsLoading(false);
        }
    };

    // ========== SUCCESS STATE ==========
    if (success) {
        return (
            <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col items-center justify-center bg-[#fdf8ed] dark:bg-background-dark font-display px-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="size-28 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[56px] filled">check_circle</span>
                    </div>
                    <h1 className="text-[32px] font-extrabold text-[#141613] dark:text-white leading-tight">
                        ¡Viaje publicado! 🧉
                    </h1>
                    <p className="text-gray-400 text-[16px] font-medium max-w-[280px]">
                        Tu viaje de <span className="font-bold text-[#141613] dark:text-white">{origin}</span> a <span className="font-bold text-[#141613] dark:text-white">{destination}</span> está listo para recibir pasajeros.
                    </p>
                    <button
                        onClick={() => navigate('/home')}
                        className="mt-4 w-full max-w-[300px] h-16 flex items-center justify-center gap-3 rounded-3xl bg-primary text-white font-bold text-[17px] shadow-lg shadow-primary/25 active:scale-[0.98] transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">home</span>
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    // ========== FORM STATE ==========
    return (
        <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-[#fdf8ed] dark:bg-background-dark pb-32 font-display">
            {/* Header */}
            <div className="sticky top-0 z-50 flex items-center justify-between bg-[#fdf8ed]/90 px-4 py-4 backdrop-blur-md dark:bg-background-dark/90">
                <button
                    onClick={() => navigate(-1)}
                    className="flex size-11 items-center justify-center rounded-full bg-white text-text-main shadow-sm transition-transform hover:scale-105 active:scale-95 dark:bg-surface-dark dark:text-white"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>
                <h2 className="flex-1 pr-11 text-center text-[19px] font-bold tracking-tight text-[#141613] dark:text-white">Publicar Viaje</h2>
            </div>

            <main className="flex-1 px-5 pt-2 flex flex-col gap-8">
                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                        <p className="text-red-600 dark:text-red-400 text-sm font-medium flex-1">{error}</p>
                        <button onClick={() => setError('')} className="text-red-400 hover:text-red-600">
                            <span className="material-symbols-outlined text-lg">close</span>
                        </button>
                    </div>
                )}

                {/* Section: The Route */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-7 shadow-soft dark:bg-surface-dark border border-gray-100/50 dark:border-white/5">
                    <div className="absolute left-[38px] top-[60px] bottom-[60px] w-[2px] border-l-2 border-dashed border-gray-100 dark:border-gray-700"></div>

                    {/* Origin */}
                    <div className="relative z-10 mb-8 flex items-start gap-5">
                        <div className="mt-3.5 flex size-4 shrink-0 items-center justify-center rounded-full border-[3px] border-primary bg-white dark:bg-surface-dark"></div>
                        <div className="flex-1">
                            <label className="mb-1 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">ORIGEN</label>
                            <input
                                className="w-full border-0 bg-transparent px-0 py-1 text-[20px] font-bold text-[#141613] placeholder:font-medium placeholder:text-gray-200 focus:ring-0 dark:text-white"
                                placeholder="¿Desde dónde salís?"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="relative z-10 flex items-start gap-5">
                        <div className="mt-3.5 flex size-4 shrink-0 items-center justify-center">
                            <span className="material-symbols-outlined filled text-[24px] text-primary">location_on</span>
                        </div>
                        <div className="flex-1">
                            <label className="mb-1 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">DESTINO</label>
                            <input
                                className="w-full border-0 bg-transparent px-0 py-1 text-[20px] font-bold text-[#141613] placeholder:font-medium placeholder:text-gray-200 focus:ring-0 dark:text-white"
                                placeholder="¿Hacia dónde vas?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Section: Date Picker */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[22px] font-extrabold tracking-tight text-[#141613] dark:text-white">¿Cuándo salimos?</h3>
                    <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2">
                        {upcomingDays.map((d) => (
                            <button
                                key={d.iso}
                                onClick={() => setDepartureDate(d.iso)}
                                className={`flex min-w-[82px] flex-col items-center justify-center gap-1.5 rounded-[2rem] py-5 transition-all active:scale-95 ${selectedDate === d.iso
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                                        : 'bg-white border border-gray-50 text-gray-400 shadow-sm hover:border-primary/30 dark:bg-surface-dark'
                                    }`}
                            >
                                <span className="text-[10px] font-bold tracking-widest opacity-80">{d.label}</span>
                                <span className={`font-display text-[26px] ${selectedDate === d.iso ? 'font-black' : 'font-bold text-[#141613] dark:text-white'}`}>{d.day}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wide opacity-80">{d.month}</span>
                            </button>
                        ))}
                    </div>

                    {/* Time Selector */}
                    <div className="flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft border border-gray-50 dark:bg-surface-dark dark:border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f7f8f6] dark:bg-white/5 text-primary">
                                <span className="material-symbols-outlined text-[24px] filled">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">HORARIO</p>
                                <input
                                    type="time"
                                    value={departureTime}
                                    onChange={(e) => setDepartureTime(e.target.value)}
                                    className="text-[18px] font-bold text-[#141613] dark:text-white bg-transparent border-0 p-0 focus:ring-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Seats */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[22px] font-extrabold tracking-tight text-[#141613] dark:text-white">Asientos disponibles</h3>
                    <div className="flex items-center justify-center gap-6 rounded-[2.5rem] bg-white p-6 shadow-soft dark:bg-surface-dark border border-gray-100/50 dark:border-white/5">
                        <button
                            onClick={() => setSeats(Math.max(1, seats - 1))}
                            className="size-14 rounded-full bg-[#f7f8f6] dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[28px]">remove</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <span className="text-[48px] font-black text-[#141613] dark:text-white w-16 text-center">{seats}</span>
                            <span className="material-symbols-outlined text-primary text-[32px]">airline_seat_recline_normal</span>
                        </div>
                        <button
                            onClick={() => setSeats(Math.min(7, seats + 1))}
                            className="size-14 rounded-full bg-[#f7f8f6] dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[28px]">add</span>
                        </button>
                    </div>
                </div>

                {/* Section: Price */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-[22px] font-extrabold tracking-tight text-[#141613] dark:text-white">Aporte por pasajero</h3>
                    <div className="rounded-[2.5rem] bg-white p-8 shadow-soft dark:bg-surface-dark border border-gray-100/50 dark:border-white/5">
                        <div className="relative flex items-center justify-center border-b border-dashed border-gray-100 pb-6 dark:border-gray-700">
                            <span className="text-2xl font-bold text-gray-300 mr-2">$</span>
                            <input
                                className="w-48 border-0 bg-transparent px-2 text-center text-[56px] font-black text-[#141613] focus:ring-0 dark:text-white"
                                placeholder="0"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            {/* Currency toggle */}
                            <button
                                onClick={() => setCurrency(currency === 'ARS' ? 'BRL' : 'ARS')}
                                className="text-[13px] font-bold text-primary ml-2 bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                            >
                                {currency}
                            </button>
                        </div>

                        <div className="mt-6 flex gap-4 rounded-3xl bg-[#f0f3f5] dark:bg-blue-900/10 p-5">
                            <span className="material-symbols-outlined mt-0.5 shrink-0 text-[#8CA8BA] filled">tips_and_updates</span>
                            <p className="text-[14px] font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                                <span className="font-bold text-[#8CA8BA]">MateTip:</span> Para esta distancia, lo ideal es entre <span className="font-bold text-gray-800 dark:text-white">$2000 y $3000</span> para cubrir gastos básicos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section: Women Only Toggle */}
                <div className="flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft border border-gray-50 dark:bg-surface-dark dark:border-white/5">
                    <div className="flex items-center gap-4">
                        <div className={`size-12 rounded-2xl flex items-center justify-center ${womenOnly ? 'bg-pink-100 dark:bg-pink-900/20' : 'bg-[#f7f8f6] dark:bg-white/5'}`}>
                            <span className={`material-symbols-outlined text-[24px] filled ${womenOnly ? 'text-pink-500' : 'text-gray-400'}`}>female</span>
                        </div>
                        <div>
                            <p className="text-[16px] font-bold text-[#141613] dark:text-white">Solo mujeres</p>
                            <p className="text-[12px] font-medium text-gray-400">Un Matecito entre Ellas</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setWomenOnly(!womenOnly)}
                        className={`relative w-14 h-8 rounded-full transition-colors ${womenOnly ? 'bg-pink-500' : 'bg-gray-200 dark:bg-gray-600'}`}
                    >
                        <div className={`absolute top-1 size-6 rounded-full bg-white shadow-md transition-transform ${womenOnly ? 'translate-x-7' : 'translate-x-1'}`}></div>
                    </button>
                </div>

                {/* Section: Vibe Check */}
                <div className="flex flex-col gap-4 mb-8">
                    <h3 className="text-[22px] font-extrabold tracking-tight text-[#141613] dark:text-white">¿Qué onda el viaje?</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { id: 'mate', icon: 'local_cafe', label: 'Si, Mate!' },
                            { id: 'music', icon: 'music_note', label: 'Música' },
                            { id: 'chat', icon: 'chat_bubble', label: 'Charlamos' },
                        ].map((v) => (
                            <button
                                key={v.id}
                                onClick={() => setVibe(v.id)}
                                className={`relative flex flex-col items-center gap-4 rounded-[2rem] p-5 transition-all ${vibe === v.id
                                        ? 'bg-primary text-white scale-105 ring-2 ring-primary ring-offset-4 ring-offset-[#fdf8ed] shadow-lg'
                                        : 'bg-white text-gray-400 dark:bg-surface-dark'
                                    }`}
                            >
                                <div className={`size-14 items-center justify-center rounded-full flex ${vibe === v.id ? 'bg-white/20' : 'bg-[#f7f8f6] dark:bg-white/5'}`}>
                                    <span className={`material-symbols-outlined text-[28px] ${vibe === v.id ? 'filled text-white' : 'text-gray-400'}`}>{v.icon}</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider">{v.label}</span>
                                {vibe === v.id && <div className="absolute top-4 right-4 size-2 rounded-full bg-white animate-pulse"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom Action Button */}
            <div className="fixed bottom-0 left-0 right-0 z-40 w-full bg-gradient-to-t from-[#fdf8ed] via-[#fdf8ed] to-transparent px-5 pb-8 pt-12 dark:from-background-dark dark:via-background-dark max-w-md mx-auto">
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-3xl bg-[#74a540] py-5 shadow-float hover:bg-primary-dark transition-all active:scale-[0.98] disabled:opacity-60"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-[18px] font-bold text-white">Publicando...</span>
                        </>
                    ) : (
                        <>
                            <span className="text-[18px] font-bold text-white">Confirmar Viaje</span>
                            <span className="material-symbols-outlined text-white text-[24px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PublishScreen;
