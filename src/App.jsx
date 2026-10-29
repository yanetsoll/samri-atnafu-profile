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
    <div className="min-h-[100dvh] bg-[#F8FAFC] text-slate-900 flex flex-col md:flex-row overflow-x-hidden relative font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* ======================================================== */}
      {/* SIDE 1: Portrait Image Section with Seamless Soft Blend */}
      {/* ======================================================== */}
      
      {/* Desktop & Tablet: Left Half Photo */}
      <div className="relative hidden md:block md:w-5/12 lg:w-1/2 h-[100dvh] sticky top-0 overflow-hidden flex-shrink-0">
        <img 
          src={profile.avatar} 
          alt={profile.name}
          className="w-full h-full object-cover object-top"
        />
        
        {/* Minimal edge fade into the links panel */}
        <div 
          className="absolute inset-y-0 right-0 w-16 lg:w-28 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.6) 60%, #F8FAFC 100%)'
          }}
        />
      </div>

      {/* Mobile: Top Photo Banner with Minimal Bottom Edge Fade */}
      <div className="relative md:hidden w-full h-80 sm:h-96 overflow-hidden flex-shrink-0">
        <img 
          src={profile.avatar} 
          alt={profile.name}
          className="w-full h-full object-cover object-top"
        />
        {/* Only fade the very bottom edge so her photo is completely clear and visible */}
        <div 
          className="absolute inset-x-0 bottom-0 h-14 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.6) 50%, #F8FAFC 100%)'
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* SIDE 2: Social Links & Profile Content Section           */}
      {/* ======================================================== */}
      <div className="flex-1 w-full md:w-7/12 lg:w-1/2 min-h-[100dvh] flex flex-col justify-between p-5 sm:p-8 lg:p-12 relative z-10">
        
        {/* Subtle Ambient Glow Behind Cards */}
        <div className="absolute top-1/4 -right-16 w-72 h-72 bg-indigo-200/30 rounded-full blur-[90px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Top Action Bar */}
        <header className="flex items-center justify-between pb-4 flex-shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-800 font-semibold">{profile.status}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            title="Share profile"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </header>

        {/* Profile Info Header */}
        <div className="my-auto py-3 sm:py-6">
          <div className="mb-6 sm:mb-8 text-left">
            <div className="inline-flex items-center gap-2 mb-1.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 font-display">
                {profile.name}
              </h1>
              <span title="Verified Account" className="inline-flex items-center select-none flex-shrink-0">
                <VerifiedBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 hover:scale-110 drop-shadow-xs" />
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>{profile.title}</span>
            </p>

            {profile.bio && (
              <p className="max-w-md text-xs sm:text-sm text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                {profile.bio}
              </p>
            )}
          </div>

          {/* Four Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full">
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
        <footer className="pt-4 border-t border-slate-200/70 flex-shrink-0 text-[11px] text-slate-500 mt-auto">
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
