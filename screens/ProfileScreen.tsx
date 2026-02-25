
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const ProfileScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { user, updateProfile, logout } = useAuth();

    // Edit mode state
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Form state — pre-fill from user
    const [name, setName] = useState(user?.name ?? '');
    const [phone, setPhone] = useState(user?.phone ?? '');
    const [country, setCountry] = useState(user?.country ?? 'AR');

    // Sync form when user changes
    useEffect(() => {
        if (user) {
            setName(user.name ?? '');
            setPhone(user.phone ?? '');
            setCountry(user.country ?? 'AR');
        }
    }, [user]);

    const handleSave = async () => {
        setIsSaving(true);
        setErrorMsg('');
        setSuccessMsg('');
        try {
            await updateProfile({ name, phone, country });
            setSuccessMsg('¡Perfil actualizado!');
            setIsEditing(false);
            setTimeout(() => setSuccessMsg(''), 3000);
        } catch (err: any) {
            setErrorMsg(err.message || 'Error al actualizar el perfil.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-[#f7f8f6] dark:bg-background-dark font-display">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#f7f8f6]/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button
                    onClick={() => navigate('/home')}
                    className="flex items-center justify-center size-11 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[28px]">arrow_back</span>
                </button>
                <h2 className="text-[18px] font-bold tracking-tight text-[#141613] dark:text-white">{t('profile')}</h2>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    disabled={isSaving}
                    className="text-primary font-bold text-[15px] hover:text-primary-dark transition-colors px-2 disabled:opacity-50"
                >
                    {isSaving ? '...' : isEditing ? 'Guardar' : t('edit')}
                </button>
            </header>

            <main className="flex-1 flex flex-col px-6 pb-32 overflow-y-auto no-scrollbar">
                {/* Profile Header */}
                <div className="flex flex-col items-center mt-2 mb-8">
                    <div className="relative group cursor-pointer mb-5">
                        <div
                            className="size-32 rounded-full border-[6px] border-white dark:border-surface-dark shadow-soft overflow-hidden bg-cover bg-center bg-primary/10 flex items-center justify-center"
                        >
                            <span className="material-symbols-outlined text-primary text-[56px]">person</span>
                        </div>
                        {user?.is_driver_verified && (
                            <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full size-8 shadow-md border-[3px] border-white dark:border-surface-dark flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <h1 className="text-[28px] font-extrabold text-[#141613] dark:text-white leading-tight mb-1">
                            {user?.name || 'Viajero'}
                        </h1>
                        <p className="text-gray-400 text-[15px] font-bold mb-2">{user?.email}</p>

                        {user?.is_driver_verified && (
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#eef5e6] dark:bg-primary/20 rounded-full border border-primary/10">
                                <span className="material-symbols-outlined text-primary text-[20px] filled">verified_user</span>
                                <span className="text-primary text-[11px] font-extrabold tracking-[0.1em] uppercase">{t('verified')}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Success / Error Messages */}
                {successMsg && (
                    <div className="mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-500 text-xl filled">check_circle</span>
                        <p className="text-green-600 dark:text-green-400 text-sm font-medium">{successMsg}</p>
                    </div>
                )}
                {errorMsg && (
                    <div className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                        <p className="text-red-600 dark:text-red-400 text-sm font-medium">{errorMsg}</p>
                    </div>
                )}

                {/* Editable Profile Fields */}
                <div className="bg-white dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-gray-50 dark:border-white/5 flex flex-col gap-5 mb-6">
                    <h3 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.15em]">Información personal</h3>

                    {/* Name */}
                    <div>
                        <label className="block text-[12px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Nombre</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="w-full h-14 px-5 bg-[#f7f8f6] dark:bg-background-dark text-[#141613] dark:text-white rounded-2xl border border-gray-100 dark:border-white/10 text-[16px] font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                            />
                        ) : (
                            <p className="text-[16px] font-semibold text-[#141613] dark:text-white px-1">{user?.name || '—'}</p>
                        )}
                    </div>

                    {/* Email (read-only) */}
                    <div>
                        <label className="block text-[12px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                        <p className="text-[16px] font-semibold text-[#141613] dark:text-white px-1">{user?.email || '—'}</p>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-[12px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Teléfono</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+54 11 1234-5678"
                                className="w-full h-14 px-5 bg-[#f7f8f6] dark:bg-background-dark text-[#141613] dark:text-white rounded-2xl border border-gray-100 dark:border-white/10 text-[16px] font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                            />
                        ) : (
                            <p className="text-[16px] font-semibold text-[#141613] dark:text-white px-1">{user?.phone || '—'}</p>
                        )}
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-[12px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">País</label>
                        {isEditing ? (
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full h-14 px-5 bg-[#f7f8f6] dark:bg-background-dark text-[#141613] dark:text-white rounded-2xl border border-gray-100 dark:border-white/10 text-[16px] font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none"
                            >
                                <option value="AR">🇦🇷 Argentina</option>
                                <option value="BR">🇧🇷 Brasil</option>
                                <option value="UY">🇺🇾 Uruguay</option>
                                <option value="PY">🇵🇾 Paraguay</option>
                                <option value="CL">🇨🇱 Chile</option>
                            </select>
                        ) : (
                            <p className="text-[16px] font-semibold text-[#141613] dark:text-white px-1">
                                {country === 'AR' ? '🇦🇷 Argentina' : country === 'BR' ? '🇧🇷 Brasil' : country === 'UY' ? '🇺🇾 Uruguay' : country === 'PY' ? '🇵🇾 Paraguay' : country === 'CL' ? '🇨🇱 Chile' : country}
                            </p>
                        )}
                    </div>
                </div>

                {/* Cancel edit button */}
                {isEditing && (
                    <button
                        onClick={() => { setIsEditing(false); setErrorMsg(''); setName(user?.name ?? ''); setPhone(user?.phone ?? ''); setCountry(user?.country ?? 'AR'); }}
                        className="mb-6 text-center text-gray-400 font-bold text-[15px] hover:text-red-400 transition-colors"
                    >
                        Cancelar cambios
                    </button>
                )}

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-5 mb-8">
                    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-surface-dark rounded-[2rem] shadow-card border border-gray-50 dark:border-white/5">
                        <div className="flex items-center gap-2.5 mb-1">
                            <span className="text-3xl font-black text-[#141613] dark:text-white">{user?.reputation?.toFixed(1) || '—'}</span>
                            <span className="material-symbols-outlined text-primary text-[28px] filled">emoji_food_beverage</span>
                        </div>
                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.15em]">Buena Onda</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-surface-dark rounded-[2rem] shadow-card border border-gray-50 dark:border-white/5">
                        <div className="flex items-center gap-2.5 mb-1">
                            <span className="text-3xl font-black text-[#141613] dark:text-white">—</span>
                            <span className="material-symbols-outlined text-primary text-[28px]">commute</span>
                        </div>
                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.15em]">Viajes</p>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full h-14 flex items-center justify-center gap-3 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 rounded-2xl transition-all font-bold text-[15px] border border-red-100 dark:border-red-900/20"
                >
                    <span className="material-symbols-outlined text-xl">logout</span>
                    Cerrar sesión
                </button>
            </main>

            <BottomNav />
        </div>
    );
};

export default ProfileScreen;
