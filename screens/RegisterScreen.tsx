
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const RegisterScreen: React.FC = () => {
    const { t } = useLanguage();
    const { register } = useAuth();
    const navigate = useNavigate();

    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState<'AR' | 'BR'>('AR');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim()) { setError('Ingresá tu nombre.'); return; }
        if (!email.trim()) { setError('Ingresá tu email.'); return; }
        if (!password || password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres.'); return; }

        setIsLoading(true);
        try {
            await register({ name, email, password, phone, country });
            navigate('/home');
        } catch (err: any) {
            setError(err.message || 'Error al crear la cuenta.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#fdf8ed] dark:bg-background-dark overflow-x-hidden font-display transition-colors duration-300">
            {/* Header Illustration */}
            <div className="relative w-full h-[30vh] min-h-[200px] rounded-b-[3.5rem] overflow-hidden z-0 shadow-sm">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC905-PCjzf-wEC2bJ8GLAIadXzeCgjXd9YXS7rqhLA_LCtWMM_qJrDFVJ2gUjxgZ8jdRWL7eEfrnUKM2-jtdvuQGaSgd1X4P7Z6Lb4-EC7cbPvOCFM6pYmN2OlUvBZGwYnRKZ0ZSLD53gG4JjaXHUfvfKCh0zfzKMrWkweJ5DqW9zaPOGbXjx5GEhyv62nbPfIehaCwk0qn0_FpmAnixsZTg8w2Sr1TyLoMHAAzi2k6lAVBSYBHyLwYlE-RvISrFPpYdT-Ao7rs9Y')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf8ed] dark:to-background-dark opacity-90"></div>

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-5 z-10 flex size-11 items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="material-symbols-outlined text-[22px] text-[#5D4037] dark:text-white">arrow_back</span>
                </button>

                {/* Floating Icon */}
                <div className="absolute top-8 right-8 bg-white dark:bg-black/40 backdrop-blur-md p-4 rounded-[1.25rem] shadow-xl border border-white/20">
                    <span className="material-symbols-outlined text-primary text-3xl filled">person_add</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center -mt-10 z-10 px-6 pb-8">
                {/* Headlines */}
                <div className="w-full max-w-md text-center mb-6">
                    <span className="text-sm font-bold tracking-[0.15em] text-primary uppercase">Crear cuenta</span>
                    <h1 className="text-[#5D4037] dark:text-gray-100 tracking-tight text-[32px] font-extrabold leading-[1.1] mt-2 mb-2">
                        Unite a la ruta 🧉
                    </h1>
                    <p className="text-[#B5957C] dark:text-gray-400 text-base font-medium leading-relaxed max-w-[300px] mx-auto">
                        Creá tu cuenta y empezá a viajar con mates de por medio.
                    </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="w-full max-w-[360px] flex flex-col gap-3.5">
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium flex-1">{error}</p>
                            <button type="button" onClick={() => setError('')} className="text-red-400 hover:text-red-600">
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>
                    )}

                    {/* Name */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">person</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombre completo"
                            autoComplete="name"
                            className="w-full h-14 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[16px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">mail</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            autoComplete="email"
                            className="w-full h-14 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[16px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">lock</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña (mínimo 6 caracteres)"
                            autoComplete="new-password"
                            className="w-full h-14 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[16px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">phone</span>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Teléfono (opcional)"
                            autoComplete="tel"
                            className="w-full h-14 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[16px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        />
                    </div>

                    {/* Country Selector */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => setCountry('AR')}
                            className={`flex-1 h-14 flex items-center justify-center gap-3 rounded-[1.5rem] border-2 transition-all font-bold text-[15px] ${country === 'AR'
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-[#e8ddd4] dark:border-[#363b2f] text-[#B5957C] bg-white dark:bg-[#2c3026]'
                                }`}
                        >
                            <span className="text-xl">🇦🇷</span>
                            Argentina
                        </button>
                        <button
                            type="button"
                            onClick={() => setCountry('BR')}
                            className={`flex-1 h-14 flex items-center justify-center gap-3 rounded-[1.5rem] border-2 transition-all font-bold text-[15px] ${country === 'BR'
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-[#e8ddd4] dark:border-[#363b2f] text-[#B5957C] bg-white dark:bg-[#2c3026]'
                                }`}
                        >
                            <span className="text-xl">🇧🇷</span>
                            Brasil
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-16 flex items-center justify-center bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white rounded-[1.5rem] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20 font-bold text-[17px] tracking-tight gap-2 mt-2"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Creando cuenta...</span>
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-xl">person_add</span>
                                <span>Crear cuenta</span>
                            </>
                        )}
                    </button>
                </form>

                {/* Footer — Switch to Login */}
                <div className="mt-8 text-center w-full">
                    <p className="text-[#B5957C] dark:text-gray-500 text-[15px] font-medium">
                        ¿Ya tenés cuenta?{' '}
                        <Link to="/login" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">
                            Iniciá sesión
                        </Link>
                    </p>
                    <div className="mt-8 flex gap-6 justify-center">
                        <a className="text-[13px] font-medium text-[#B5957C]/60 dark:text-gray-600 hover:text-primary transition-colors" href="#">{t('terms')}</a>
                        <a className="text-[13px] font-medium text-[#B5957C]/60 dark:text-gray-600 hover:text-primary transition-colors" href="#">{t('privacy')}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;
