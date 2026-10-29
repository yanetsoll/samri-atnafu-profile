import React, { useState } from 'react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { QRModal } from './components/QRModal';
import { VerifiedBadgeIcon } from './components/Icons';
import { 
  Share2, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export default function App() {
  const profile = getProfileData();
  const [toastMessage, setToastMessage] = useState(null);
  const [isQrOpen, setIsQrOpen] = useState(false);

  const showToast = (platformName) => {
    setToastMessage(`${platformName} link copied to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} - Connect & Social Channels`,
          text: `Check out ${profile.name}'s social links!`,
          url: window.location.href,
        });
      } catch (err) {
        // user dismissed or share unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage("Page URL copied to clipboard!");
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  return (
    <div className="min-h-[100dvh] sm:h-[100dvh] text-slate-900 flex flex-col justify-between overflow-x-hidden relative font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Full Portrait Photo Background with Editorial Glass Veil */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={profile.avatar} 
          alt={profile.name}
          className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02]"
        />
        {/* Soft pearlescent gradient veil for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/80 to-[#F8FAFC]/98 backdrop-blur-[2.5px]" />
        
        {/* Delicate ambient warm accents */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-300/25 rounded-full blur-[90px]" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-rose-300/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col justify-between">
        
        {/* Top Minimal Action Row */}
        <header className="flex items-center justify-between pb-2 flex-shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-white/80 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-800 font-semibold">{profile.status}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs backdrop-blur-md transition-all hover:scale-105"
            title="Share profile"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </header>

        {/* Profile Header (without redundant circle avatar) */}
        <div className="text-center my-4 sm:my-6 flex-shrink-0">
          <div className="flex items-center justify-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-display drop-shadow-xs">
              {profile.name}
            </h1>
            <span title="Verified Account" className="inline-flex items-center select-none flex-shrink-0">
              <VerifiedBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 hover:scale-110 drop-shadow-xs" />
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wide flex items-center justify-center gap-1 mt-1 px-4 leading-normal">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>{profile.title}</span>
          </p>

          {profile.bio && (
            <p className="max-w-md mx-auto text-xs text-slate-600 line-clamp-2 mt-1 px-4 leading-relaxed font-medium">
              {profile.bio}
            </p>
          )}
        </div>

        {/* The 4 Cards Grid - Frosted glass tiles floating gracefully */}
        <div className="my-auto py-2 sm:py-3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            {profile.links.map((link) => (
              <SocialCard 
                key={link.id} 
                link={link} 
                onCopy={showToast} 
              />
            ))}
          </div>
        </div>

        {/* Compact Footer */}
        <footer className="pt-3 pb-1 border-t border-slate-200/70 flex-shrink-0 text-center text-[11px] text-slate-600 mt-auto">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p className="text-slate-500 font-medium">Click any card to open profile</p>
          </div>
        </footer>

      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce">
          <div className="px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xl text-xs font-semibold flex items-center gap-2 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      <QRModal 
        isOpen={isQrOpen} 
        onClose={() => setIsQrOpen(false)} 
        profileName={profile.name} 
      />
    </div>
  );
}
