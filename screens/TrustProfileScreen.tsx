
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavButton } from '../components/Layout';

const TrustProfileScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col mx-auto max-w-md bg-[#faf7f5] dark:bg-background-dark overflow-x-hidden font-trust text-[#131515] dark:text-gray-100 transition-colors duration-300 pb-28">
            {/* Top App Bar */}
            <div className="flex items-center px-6 py-4 justify-between sticky top-0 z-50 bg-[#faf7f5]/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex size-11 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-trust-primary dark:text-gray-200">arrow_back</span>
                </button>
                <h2 className="font-heading text-[18px] font-bold tracking-tight text-trust-primary dark:text-white">Trust Profile</h2>
                <div className="flex items-center">
                    <button 
                        onClick={() => navigate('/report-user')}
                        className="flex size-11 items-center justify-center rounded-full text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        title="Report User"
                    >
                        <span className="material-symbols-outlined text-[24px]">flag</span>
                    </button>
                    <button className="flex size-11 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-trust-primary dark:text-gray-200">settings</span>
                    </button>
                </div>
            </div>

            {/* Profile Header */}
            <div className="flex flex-col items-center px-6 pt-2 pb-8">
                <div className="relative group">
                    {/* Golden ring avatar */}
                    <div className="p-1 rounded-full border-2 border-gold/30">
                        <div className="p-1 rounded-full border-2 border-gold bg-white dark:bg-surface-dark shadow-trust">
                            <div 
                                className="w-24 h-24 rounded-full bg-cover bg-center" 
                                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh_Z93r5KUwdUt6zCvD5K3K-FGtVMCUqABIrtZxxTPeqrK612YbP9zfBHkwwfCGWHIZAl6e54HrAZ4Fo-CA0X1bXI0h38Jv1CSFxHdfuxoywyqwPyEgiApq_RV8MtwKCFhZjjZpp9n57NuYMpofkcjM6O7n4OCC4EzPf5N_1DcAVX1ppKEu6P-cvPyawQIYCQ_CmWVlGUVx3uxuZmutNfne6tk6P7TQ-fYH1MYS4WWvuaUytMO82_K7N5NqYpNftcYKl_gSX-chVE')"}}
                            ></div>
                        </div>
                    </div>
                    <div className="absolute bottom-1 right-2 bg-trust-primary text-white p-1.5 rounded-full border-2 border-[#faf7f5] dark:border-background-dark flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[16px] filled">verified</span>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <h1 className="font-heading text-[26px] font-bold text-gray-900 dark:text-white tracking-tight leading-tight">Facundo M.</h1>
                    <p className="text-[14px] font-bold text-gray-400 dark:text-gray-500 mt-1">Verified Member since 2021</p>
                    <div className="flex gap-2 justify-center mt-4">
                        <span className="px-4 py-1 rounded-full bg-trust-primary/10 dark:bg-trust-primary/20 text-trust-primary dark:text-white text-[10px] font-extrabold uppercase tracking-[0.15em]">Super Driver</span>
                    </div>
                </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 gap-4 px-5">
                {/* Mate Sharing Index (MSI) */}
                <div className="col-span-1 bg-white dark:bg-surface-dark rounded-[2rem] p-6 shadow-trust border border-gray-50 dark:border-white/5 flex flex-col justify-between h-48 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 size-24 bg-trust-primary/5 rounded-full -mr-8 -mt-8"></div>
                    <div className="flex items-center gap-2.5 mb-2 z-10">
                        <span className="material-symbols-outlined text-trust-primary text-[22px] filled">thumb_up</span>
                        <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">MSI Score</span>
                    </div>
                    <div className="flex flex-col z-10">
                        <span className="font-display text-[52px] font-black text-trust-primary dark:text-white tracking-tighter leading-none">98<span className="text-[24px] font-bold align-top mt-2 ml-0.5">%</span></span>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400 font-bold leading-tight mt-2">Would share a mate again</p>
                    </div>
                    {/* Decorative Ring */}
                    <svg className="absolute -bottom-6 -right-6 size-28 opacity-10 text-trust-primary transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                        <path className="text-trust-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeWidth="3"></path>
                    </svg>
                </div>

                {/* Identidade de Ferro (Hero Badge) */}
                <div className="col-span-1 bg-gradient-to-br from-[#1c1c1c] to-[#3a3a3a] rounded-[2rem] p-6 shadow-trust text-white flex flex-col justify-between h-48 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-0"></div>
                    <div className="flex justify-between items-start z-10">
                        <span className="material-symbols-outlined text-gold text-[30px] filled">shield</span>
                        <span className="bg-gold/20 text-gold text-[10px] font-black px-2.5 py-1 rounded-lg border border-gold/30 uppercase tracking-tight">Lvl 3</span>
                    </div>
                    <div className="z-10 mt-2">
                        <h3 className="font-heading text-[19px] font-bold leading-tight mb-3">Identidade<br/>de Ferro</h3>
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2 opacity-90">
                                <span className="material-symbols-outlined text-[14px] text-[#8eb861] filled">check_circle</span>
                                <span className="text-[10px] font-bold tracking-wide uppercase">National ID</span>
                            </div>
                            <div className="flex items-center gap-2 opacity-90">
                                <span className="material-symbols-outlined text-[14px] text-[#8eb861] filled">check_circle</span>
                                <span className="text-[10px] font-bold tracking-wide uppercase">Phone & Email</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Stats Container */}
                <div className="col-span-2 grid grid-cols-3 gap-3">
                    <div className="col-span-2 bg-white dark:bg-surface-dark rounded-[1.5rem] p-5 shadow-sm border border-gray-50 dark:border-white/5 flex flex-col justify-center">
                        <span className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest mb-1">Total Distance</span>
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-[26px] font-black text-gray-900 dark:text-white">12,450</span>
                            <span className="text-[14px] font-bold text-gray-400">km</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-trust-primary/5 dark:bg-trust-primary/20 rounded-[1.5rem] p-5 flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-trust-primary mb-1 text-[22px] filled">directions_car</span>
                        <span className="font-black text-[22px] text-trust-primary dark:text-white">42</span>
                        <span className="text-[10px] font-extrabold text-trust-primary/60 uppercase tracking-tight">Rides</span>
                    </div>
                </div>

                {/* Cebador Mestre Badge */}
                <div className="col-span-2 bg-gradient-to-r from-gold/10 to-transparent dark:from-gold/5 rounded-[2rem] p-1 border border-gold/20 mt-1">
                    <div className="bg-white dark:bg-surface-dark rounded-[1.75rem] p-5 flex items-center justify-between shadow-sm border border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-gold text-[28px] filled">local_cafe</span>
                            </div>
                            <div>
                                <h4 className="font-heading text-[17px] font-bold text-gray-900 dark:text-white">Cebador Mestre</h4>
                                <p className="text-[12px] text-gray-400 font-bold leading-tight">Top rated for conversation & hospitality</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-200 dark:text-gray-700">chevron_right</span>
                    </div>
                </div>

                {/* Featured Review */}
                <div className="col-span-2 mt-2">
                    <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-white mb-4 px-1 uppercase tracking-widest">Latest Feedback</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-7 shadow-trust border border-gray-50 dark:border-white/5 relative group">
                        <span className="material-symbols-outlined absolute top-6 left-6 text-trust-primary/5 text-6xl select-none filled">format_quote</span>
                        <div className="relative z-10 pl-8">
                            <p className="text-gray-600 dark:text-gray-300 font-bold italic text-[15px] leading-relaxed mb-6">
                                "Facu is a legend! Great music, super safe driving, and the mate was always ready. Highly recommend for long trips."
                            </p>
                            <div className="flex justify-between items-center border-t border-gray-50 dark:border-white/5 pt-5">
                                <div className="flex gap-3 items-center">
                                    <div 
                                        className="size-8 rounded-full bg-gray-200 bg-cover bg-center shadow-sm" 
                                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeM6EGFDpZGi3BLiDJU6VznIw4Wy4WEKpNBw904JZa3z3zPPxoA8JD0S_5etF3SXLQ-7YuzOOwAS-OtjSekTPVzi8yMejQpfLkRjHMrjwSPyATK5k-MRb1EGtmUTRKAatW9w-l98T0yAF6NqdkygYSKZuArkz9ETfX7tSFiBe5ZRMdgtwOzxeVPB6lgp7qtfMCas0tNVvlSXgYEMvtYIkVeM6OVnRzm8LDC-V2_K1wE00PGHXQBD1ZYtTGQn6byUEjgUQ9xBBUIlE')"}}
                                    ></div>
                                    <span className="text-[13px] font-black text-gray-400">Sofia R.</span>
                                </div>
                                <div className="flex text-gold">
                                    {[1,2,3,4,5].map(i => (
                                        <span key={i} className="material-symbols-outlined filled text-[18px]">star</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="col-span-2 mt-4">
                    <button 
                        onClick={() => navigate('/booking')}
                        className="w-full h-16 bg-trust-primary hover:bg-trust-primary-dark text-white rounded-[1.5rem] font-black text-[18px] shadow-lg shadow-trust-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined text-[24px]">calendar_add_on</span>
                        Request to Ride
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-surface-dark border-t border-gray-50 dark:border-gray-800 px-8 py-4 flex justify-between items-center z-50 rounded-t-[2.5rem] shadow-xl">
                <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1.5 group">
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-trust-primary transition-colors">search</span>
                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-trust-primary uppercase tracking-tight">Search</span>
                </button>
                <button onClick={() => navigate('/trips')} className="flex flex-col items-center gap-1.5 group">
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-trust-primary transition-colors">directions_car</span>
                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-trust-primary uppercase tracking-tight">Rides</span>
                </button>
                <button className="flex flex-col items-center gap-1.5 group">
                    <span className="material-symbols-outlined text-trust-primary filled">person</span>
                    <span className="text-[10px] font-black text-trust-primary uppercase tracking-tight">Profile</span>
                </button>
                <button onClick={() => navigate('/chat')} className="flex flex-col items-center gap-1.5 group">
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-trust-primary transition-colors">chat_bubble</span>
                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-trust-primary uppercase tracking-tight">Chat</span>
                </button>
            </div>
        </div>
    );
};

export default TrustProfileScreen;
