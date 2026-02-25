import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const NavButton: React.FC<{ icon: string; label: string; to: string; active: boolean }> = ({ icon, label, to, active }) => {
    return (
        <Link to={to} className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${active ? 'text-primary scale-105' : 'text-gray-400 hover:text-text-main dark:hover:text-white'}`}>
            <span className={`material-symbols-outlined text-[28px] ${active ? 'filled' : ''}`}>{icon}</span>
            <span className={`text-[10px] font-bold tracking-tight uppercase ${active ? 'opacity-100' : 'opacity-60'}`}>{label}</span>
        </Link>
    );
};

export const BottomNav: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { t } = useLanguage();

    return (
        <nav className="fixed bottom-0 w-full z-50 max-w-md mx-auto left-0 right-0">
            <div className="absolute inset-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] rounded-t-[2.5rem]"></div>
            
            <div className="relative flex justify-between items-center px-8 py-3 pb-8">
                <NavButton icon="home" label={t('home')} to="/home" active={currentPath === '/home'} />
                <NavButton icon="search" label={t('search_nav')} to="/trips" active={currentPath === '/trips'} />
                
                <div className="relative -top-8">
                    <Link to="/publish" className="bg-primary text-white size-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all ring-8 ring-white dark:ring-surface-dark">
                        <span className="material-symbols-outlined text-[32px]">add</span>
                    </Link>
                </div>

                <NavButton icon="chat_bubble" label={t('messages')} to="/chat" active={currentPath === '/chat'} />
                <NavButton icon="person" label={t('profile')} to="/profile" active={currentPath === '/profile'} />
            </div>
        </nav>
    );
};

export const SimpleHeader: React.FC<{ title: string; backTo?: string }> = ({ title, backTo }) => {
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 px-4 py-4 backdrop-blur-md">
            <button 
                onClick={() => backTo ? navigate(backTo) : navigate(-1)}
                className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark text-text-main dark:text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="flex-1 pr-11 text-center text-lg font-bold tracking-tight text-text-main dark:text-white">{title}</h2>
        </div>
    );
};