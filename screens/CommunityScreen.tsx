
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BottomNav } from '../components/Layout';

const CommunityScreen: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const friends = [
        { 
            id: 1, 
            name: "Lucas M.", 
            desc: t('desc_first_trip'), 
            status: t('status_first_trip'), 
            statusType: 'success', 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUscZDPVy-7QJzDCJS_RVXzw4xVgY_lOu_4BulPonYMckZOCedVleg5qg7zc9v8ILNDlRviCZqjKQMLmfr_gQH8FSWJhK-0q0Yc91hNwfOTeQBA5XEgcHA6NhuSedxBxx3C5wGFfj7N0GI5cQvkrvNAultB-T-K9IzWSg6ncnyuE3x-FnKz-mOyArYfeJ3B4uRvPyRifcAGrbRbfgPRepS5jm9mM5D19I9qDw080rtWLnuLVvRIXH5fk3v-U35Py8VCbSZCVTtVDA" 
        },
        { 
            id: 2, 
            name: "Ana S.", 
            desc: t('desc_new'), 
            status: t('status_new'), 
            statusType: 'warning', 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrcRHnNqrnO58IDbTuDCWwFfeknlezc3QKP3w97WB90lQfCYSrbXBS4ILk1M_kmEXq36YnwuD1rFeZ5qdYLAXUxAUWl8n3eF56dTBVQydmET2PoX_6EMD-mzjL2o0Xp_pnF-pqcSF8b9IKpzyuLPJlro7tIupTxiAm2_wRTOy8kxr5QxEvMYd4J3W1-2Mxh2qN1qad3SW2c-xaAyBKGcsKl3GmFApw4DVcLGfdXp6hubOIKxAwPWBKOzrGq310SuIOW9yZpX_fpYA" 
        },
        { 
            id: 3, 
            name: "Pedro J.", 
            desc: t('desc_pending'), 
            status: t('status_pending'), 
            statusType: 'neutral', 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqNlsiMOog_CaGihrwC6EQIbYDjbvD8Jj7DWcVE_LJg_R2fpzqxz3mPQ4og9f0D3Sj6KGBweZ2pyZrW_FA8DBgv3knQJoaC1p-p_43cNZFPSWVK7uR_4-jJqpVKiAfRG9chaWu1LVBvEmLTRgYJdqpsgqVanOitTPwWLw_jMlWPJAvxhgJoQlnL3sx7GnKH8lGYS5_h1Vxc7I425RvyyPhsuCWCasd7BekZNmLbs4uSnt0BoMf0UsXqeixDtR6h1-Zo-EebE-IQLM" 
        },
        { 
            id: 4, 
            name: "Juliana R.", 
            desc: t('desc_pending'), 
            status: t('status_pending'), 
            statusType: 'neutral', 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGeoRkFY9Zgw99rKZyl9_PZtyG2hGoQPWozXj9CFUZ7YKfs1gaJQULMvxLJbiB8zS_MaXkiIHZhs48OoVCdmcs1q-SdL1h4pgIj2i8FeNPPze2SDr3oT_tFvmKmvroU97Y-zqXUVCGboeWl7xyNUGiBL876eVG2suxtwYqd28XfK2QTdjTiU7FBxfq8jO5ddqzWZAOqGTCXwgL96s-SvnN2B0kmJgAkeT2l0hY1YkhIV81wpl5cFIcZFtdDz_l3Dcje5w9VDTJm5o" 
        },
    ];

    return (
        <div className="bg-[#fcfbf8] dark:bg-background-dark h-screen flex flex-col font-referral max-w-md mx-auto relative overflow-hidden antialiased">
            {/* Top App Bar */}
            <header className="shrink-0 z-50 bg-[#fcfbf8]/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 flex items-center justify-between">
                <button 
                    onClick={() => navigate(-1)}
                    className="text-[#141811] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-[28px]">arrow_back</span>
                </button>
                <h1 className="text-[#141811] dark:text-white text-[19px] font-black leading-tight tracking-tight flex-1 text-center pr-12">
                    {t('community_title')}
                </h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col px-6 pt-4 pb-32 overflow-y-auto no-scrollbar overscroll-contain">
                {/* Hero Reward Card */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#242e1f] dark:bg-black p-8 shadow-soft border border-white/5 mb-10 group">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
                    
                    <div className="relative z-10 flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-referral-orange/20 rounded-full w-fit">
                                <span className="material-symbols-outlined text-referral-orange text-[16px] filled">local_fire_department</span>
                                <span className="text-referral-orange text-[11px] font-black uppercase tracking-[0.1em]">{t('current_meta')}</span>
                            </div>
                            <h2 className="text-white text-[28px] font-black leading-[1.1] tracking-tight">
                                {t('road_to_ambassador').split('ser')[0]}ser<br/>
                                <span className="text-primary">{t('road_to_ambassador').split('ser')[1]}</span>
                            </h2>
                        </div>
                        <div className="size-24 rounded-3xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                             <div className="size-full bg-cover bg-center opacity-90 scale-90" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyy3QdsdWUxgD8nXqjOaOMaDRtTGc5reHj5f03jHLM8Tm6si96ZLtLrlmMcLj204PYIblj14azaaXSiYQIeGCIGo8oieSnwbI1yk38uEf1kvY-kz9mTBQ-v5Dc41Eq12LKxJCsgSQR_wMGIhDnovTepIPeC2ydYMX1veqccg9E50P02EwRN1ewwBcYyF6Gj3p4QIeKEJZ2VI4C1tIfV8k5Kv_41UqetQeeLLFb1Isc5yW9vXffDPxSz_jvBGeu3cY4n3ReiJtFIVM')"}}></div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-[1.75rem] p-5 border border-white/5">
                        <div className="flex justify-between items-end mb-3">
                            <div>
                                <p className="text-white font-black text-[15px]">{t('kit_desc')}</p>
                                <p className="text-white/40 text-[11px] font-bold mt-0.5 tracking-tight">{t('referrals_needed').replace('{n}', '7')}</p>
                            </div>
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-primary text-[26px] font-black">3</span>
                                <span className="text-white/30 text-[16px] font-black">/10</span>
                            </div>
                        </div>
                        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-primary w-[30%] rounded-full shadow-[0_0_15px_rgba(140,238,43,0.4)]"></div>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex items-center justify-between mb-6 px-1">
                    <h3 className="text-[#141811] dark:text-white text-[22px] font-black tracking-tight">{t('friends_circle')}</h3>
                    <button className="text-referral-orange text-[14px] font-black hover:opacity-80 transition-opacity">{t('see_all')}</button>
                </div>

                {/* Friends List */}
                <div className="flex flex-col gap-4 mb-8">
                    {friends.map((friend) => (
                        <div 
                            key={friend.id} 
                            className="bg-white dark:bg-surface-dark rounded-[1.75rem] p-4 flex items-center gap-4 shadow-sm border border-[#f0f0f0] dark:border-white/5 transition-all hover:scale-[1.01]"
                        >
                            <div className="relative shrink-0">
                                <div 
                                    className="size-14 rounded-full bg-cover bg-center border-[3px] border-white dark:border-gray-800 shadow-sm"
                                    style={{backgroundImage: `url('${friend.img}')`}}
                                ></div>
                                {friend.statusType === 'success' && (
                                    <div className="absolute -bottom-1 -right-1 size-6 bg-primary text-[#141811] rounded-full border-2 border-white dark:border-surface-dark flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[14px] font-black">check</span>
                                    </div>
                                )}
                                {friend.statusType === 'warning' && (
                                    <div className="absolute -bottom-1 -right-1 size-6 bg-referral-orange text-white rounded-full border-2 border-white dark:border-surface-dark flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[14px] filled">celebration</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-0.5">
                                    <h4 className="text-[#141811] dark:text-white font-black text-[16px] truncate">{friend.name}</h4>
                                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                        friend.statusType === 'success' ? 'bg-[#fff9e6] text-[#8c6d00]' :
                                        friend.statusType === 'warning' ? 'bg-referral-orange/10 text-referral-orange' :
                                        'bg-gray-100 text-gray-500 dark:bg-white/5'
                                    }`}>
                                        {friend.status}
                                    </span>
                                </div>
                                <p className="text-[#8a918a] dark:text-gray-400 text-[13px] font-bold tracking-tight truncate">
                                    {friend.desc}
                                </p>
                            </div>

                            {friend.statusType === 'neutral' && (
                                <button className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA inline */}
                <button 
                    onClick={() => navigate('/referral')}
                    className="w-full h-16 bg-[#141811] dark:bg-primary hover:scale-[1.02] active:scale-[0.98] text-white dark:text-[#141811] rounded-[1.25rem] font-black text-[18px] shadow-xl flex items-center justify-center gap-3 transition-all mt-auto"
                >
                    <span className="material-symbols-outlined text-[24px]">person_add</span>
                    {t('invite_more')}
                </button>
            </main>

            <BottomNav />
        </div>
    );
};

export default CommunityScreen;
