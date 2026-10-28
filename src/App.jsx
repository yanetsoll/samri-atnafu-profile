import React, { useState } from 'react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { QRModal } from './components/QRModal';
import { VerifiedBadgeIcon } from './components/Icons';
import { 
  Share2, 
  QrCode, 
  MapPin, 
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
    <div className="min-h-[100dvh] sm:h-[100dvh] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] text-slate-900 flex flex-col justify-between overflow-x-hidden relative font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Radiant Ambient Light Blooms */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-200/40 rounded-full blur-[90px]" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-rose-200/40 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-emerald-100/50 rounded-full blur-[110px]" />
        {/* Subtle geometric dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} 
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col justify-between">
        
        {/* Top Minimal Action Row */}
        <header className="flex items-center justify-between pb-2 flex-shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-medium text-slate-600 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-800 font-semibold">{profile.status}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsQrOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/85 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-xs backdrop-blur-md transition-all hover:scale-105"
              title="Show QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-indigo-600" />
              <span>QR Code</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs backdrop-blur-md transition-all hover:scale-105"
              title="Share profile"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Profile Card Header */}
        <div className="text-center my-3 sm:my-4 flex-shrink-0">
          <div className="relative inline-block mb-2.5 sm:mb-3">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-rose-400 to-amber-400 blur-xs opacity-80 animate-spin-slow" />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-3 sm:border-4 border-white shadow-lg mx-auto"
            />
          </div>

          <div className="flex items-center justify-center gap-1.5">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
              {profile.name}
            </h1>
            <span title="Verified Account" className="inline-flex items-center select-none flex-shrink-0">
              <VerifiedBadgeIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 hover:scale-110 drop-shadow-xs" />
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-indigo-600 tracking-wide flex items-center justify-center gap-1 mt-1 px-4 leading-normal">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>{profile.title}</span>
          </p>

          {profile.bio && (
            <p className="max-w-md mx-auto text-xs text-slate-500 line-clamp-2 mt-1 px-4 leading-relaxed">
              {profile.bio}
            </p>
          )}

          <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 mt-1.5 font-medium">
            <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* The 4 Cards Grid - Perfectly spaced without any overlap */}
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
        <footer className="pt-3 pb-1 border-t border-slate-200/70 flex-shrink-0 text-center text-[11px] text-slate-500 mt-auto">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p className="text-slate-400 font-medium">Click any card to open profile</p>
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
