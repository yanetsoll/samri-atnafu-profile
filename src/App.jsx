import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { VerifiedBadgeIcon } from './components/Icons';

export default function App() {
  const profile = getProfileData();
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: profile.name,
      text: profile.title,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 flex flex-col items-center font-sans selection:bg-rose-500 selection:text-white">

      {/* Profile Card */}
      <main className="w-full max-w-[600px] bg-white flex flex-col min-h-[100dvh] border-x border-slate-100">

        {/* 1. Banner */}
        <div className="relative w-full h-36 sm:h-48 bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-600 overflow-hidden flex-shrink-0">
          <img
            src={profile.banner || "/banner.png"}
            alt="Driving Innovation for Global Impact"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 2. Overlapping Avatar */}
        <div className="-mt-12 sm:-mt-14 ml-5 sm:ml-7 relative z-10 inline-block flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-orange-500 to-fuchsia-600 overflow-hidden">
            <img
              src={profile.avatar || "/logo.png"}
              alt={profile.name}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* 3. Name & Subtitle */}
        <div className="px-6 sm:px-8 mt-3 text-left">
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {profile.name}
            </h1>
            <VerifiedBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D9BF0] flex-shrink-0" />
          </div>
          {profile.title && (
            <p className="text-sm sm:text-base text-slate-500 mt-1">
              {profile.title}
            </p>
          )}
        </div>

        {/* 4. Links — mobile: vertical rows | desktop: 3-col grid */}
        <div className="px-6 sm:px-8 mt-6 sm:mt-8 pb-6
                        flex flex-col sm:grid sm:grid-cols-3 sm:gap-4">
          {profile.links.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </div>

        {/* 5. Footer (desktop only) */}
        <footer className="hidden sm:flex items-center justify-between px-8 py-5 mt-auto border-t border-slate-100">
          <span className="text-xs text-slate-400">© 2026 Tewos Technology</span>
          <button
            onClick={handleShare}
            className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold shadow transition-colors"
          >
            <Share2 className="w-4 h-4" />
            {shared ? 'Copied!' : 'Share'}
          </button>
        </footer>

      </main>
    </div>
  );
}
