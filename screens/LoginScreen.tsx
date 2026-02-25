
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const LoginScreen: React.FC = () => {
    const { t } = useLanguage();
    const { login } = useAuth();
    const navigate = useNavigate();

    // Form state
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Completa todos los campos.');
            return;
        }

        setIsLoading(true);
        try {
            await login(email, password);
            navigate('/home');
        } catch (err: any) {
            setError(err.message || 'Correo o contraseña inválidos.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#fdf8ed] dark:bg-background-dark overflow-x-hidden font-display transition-colors duration-300">
            {/* Header Illustration Section */}
            <div className="relative w-full h-[48vh] min-h-[340px] rounded-b-[3.5rem] overflow-hidden z-0 shadow-sm">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC905-PCjzf-wEC2bJ8GLAIadXzeCgjXd9YXS7rqhLA_LCtWMM_qJrDFVJ2gUjxgZ8jdRWL7eEfrnUKM2-jtdvuQGaSgd1X4P7Z6Lb4-EC7cbPvOCFM6pYmN2OlUvBZGwYnRKZ0ZSLD53gG4JjaXHUfvfKCh0zfzKMrWkweJ5DqW9zaPOGbXjx5GEhyv62nbPfIehaCwk0qn0_FpmAnixsZTg8w2Sr1TyLoMHAAzi2k6lAVBSYBHyLwYlE-RvISrFPpYdT-Ao7rs9Y')" }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf8ed] dark:to-background-dark opacity-90"></div>

                {/* Floating Mate Icon */}
                <div className="absolute top-12 right-8 bg-white dark:bg-black/40 backdrop-blur-md p-4 rounded-[1.25rem] shadow-xl border border-white/20">
                    <span className="material-symbols-outlined text-primary text-3xl filled">emoji_food_beverage</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center -mt-16 z-10 px-6 pb-8">
                {/* Headlines */}
                <div className="w-full max-w-md text-center mb-10">
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className="text-sm font-bold tracking-[0.15em] text-primary uppercase">{t('login_welcome')}</span>
                    </div>
                    <h1 className="text-[#5D4037] dark:text-gray-100 tracking-tight text-[40px] font-extrabold leading-[1.05] mb-4">
                        {t('login_app_name')}<br />{t('welcome').split(',').length > 1 ? t('welcome').split(',')[1].trim() : "te espera"}
                    </h1>
                    <p className="text-[#B5957C] dark:text-gray-400 text-lg font-medium leading-relaxed max-w-[280px] mx-auto">
                        {t('login_app_tagline')}
                    </p>
                </div>

                {/* Email Login Form (shown when clicked) */}
                {showEmailForm ? (
                    <form onSubmit={handleEmailLogin} className="w-full max-w-[360px] flex flex-col gap-4 animate-in">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                                <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">mail</span>
                            <input
                                id="login-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                autoComplete="email"
                                className="w-full h-16 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[17px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#B5957C] text-xl">lock</span>
                            <input
                                id="login-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                autoComplete="current-password"
                                className="w-full h-16 pl-14 pr-5 bg-white dark:bg-[#2c3026] text-[#5D4037] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] text-[17px] font-medium placeholder:text-[#B5957C]/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            id="login-submit"
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-16 flex items-center justify-center bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white rounded-[1.5rem] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20 font-bold text-[17px] tracking-tight gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Entrando...</span>
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-xl">login</span>
                                    <span>{t('login_login_link')}</span>
                                </>
                            )}
                        </button>

                        {/* Back to options */}
                        <button
                            type="button"
                            onClick={() => { setShowEmailForm(false); setError(''); }}
                            className="flex items-center justify-center gap-2 text-[#B5957C] dark:text-gray-400 font-medium text-[15px] hover:text-primary transition-colors mt-1"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            {t('back')}
                        </button>
                    </form>
                ) : (
                    /* Social Login Buttons (original design) */
                    <>
                        <div className="w-full max-w-[360px] flex flex-col gap-3.5">
                            {/* Apple Button */}
                            <Link to="/home" className="relative group w-full h-16 flex items-center justify-center bg-[#141613] hover:bg-[#2a2d28] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[1.5rem] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-gray-400/20">
                                <div className="absolute left-7 flex items-center">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.6c0-2.4 2-3.6 2.1-3.6-.1-.1-1.2-4.2-4.2-4.2-1.1 0-2.1.6-2.7.6-.6 0-1.7-.6-2.7-.6-2.7 0-5.3 2.1-5.3 6.3 0 2.5 1 5.3 4.2 9.8 1.1 1.5 2.3 3.1 3.9 3.1 1.5 0 2.1-.9 3.9-.9 1.8 0 2.3.9 3.9.9 1.6 0 2.7-1.5 4-3.3 1.2-1.8 1.7-3.6 1.7-3.7 0-.1-3.2-1.2-3.2-4.4zM15.4 3.7c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.3-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.7-1.2z"></path>
                                    </svg>
                                </div>
                                <span className="text-[17px] font-bold tracking-tight">{t('login_apple')}</span>
                            </Link>

                            {/* Google Button */}
                            <Link to="/home" className="relative group w-full h-16 flex items-center justify-center bg-white dark:bg-[#2c3026] hover:bg-gray-50 dark:hover:bg-[#363b2f] text-[#2c3324] dark:text-white rounded-[1.5rem] border border-[#e8ddd4] dark:border-[#363b2f] transition-all duration-200 active:scale-[0.98] shadow-sm">
                                <div className="absolute left-7 flex items-center">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    </svg>
                                </div>
                                <span className="text-[17px] font-bold tracking-tight">{t('login_google')}</span>
                            </Link>

                            {/* Phone Button */}
                            <Link to="/home" className="relative group w-full h-16 flex items-center justify-center bg-[#74a540]/10 hover:bg-[#74a540]/20 dark:bg-[#74a540]/20 dark:hover:bg-[#74a540]/30 text-primary rounded-[1.5rem] transition-all duration-200 active:scale-[0.98]">
                                <div className="absolute left-7 flex items-center">
                                    <span className="material-symbols-outlined text-primary text-[26px] filled">smartphone</span>
                                </div>
                                <span className="text-[17px] font-bold tracking-tight">{t('login_phone')}</span>
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className="w-full max-w-[360px] flex items-center gap-4 py-8">
                            <div className="h-px flex-1 bg-[#B5957C]/20 dark:bg-gray-700"></div>
                            <div className="size-1.5 rounded-full bg-[#B5957C]/40"></div>
                            <div className="h-px flex-1 bg-[#B5957C]/20 dark:bg-gray-700"></div>
                        </div>

                        {/* Email Login Button — opens form */}
                        <button
                            id="login-email-btn"
                            onClick={() => setShowEmailForm(true)}
                            className="flex items-center justify-center gap-2.5 text-[#5D4037] dark:text-gray-300 font-bold hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-[22px]">mail</span>
                            <span className="text-base tracking-tight">{t('login_email')}</span>
                        </button>
                    </>
                )}

                {/* Footer / Switch to Register or Login */}
                <div className="mt-auto pt-10 text-center w-full">
                    {showEmailForm ? (
                        <p className="text-[#B5957C] dark:text-gray-500 text-[15px] font-medium">
                            ¿No tenés cuenta?{' '}
                            <Link to="/register" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">
                                Registrate
                            </Link>
                        </p>
                    ) : (
                        <p className="text-[#B5957C] dark:text-gray-500 text-[15px] font-medium">
                            {t('login_footer_text')} <button onClick={() => setShowEmailForm(true)} className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">{t('login_login_link')}</button>
                        </p>
                    )}
                    <div className="mt-10 flex gap-6 justify-center">
                        <a className="text-[13px] font-medium text-[#B5957C]/60 dark:text-gray-600 hover:text-primary transition-colors" href="#">{t('terms')}</a>
                        <a className="text-[13px] font-medium text-[#B5957C]/60 dark:text-gray-600 hover:text-primary transition-colors" href="#">{t('privacy')}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
