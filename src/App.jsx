import React, { useState } from 'react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { VerifiedBadgeIcon } from './components/Icons';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const profile = getProfileData();
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (label) => {
    setToastMessage(`${label} copied!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 flex flex-col items-center font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Central Profile Card */}
      <main className="w-full max-w-[480px] bg-white flex flex-col min-h-[100dvh]">
        
        {/* 1. Header Banner */}
        <div className="relative w-full h-36 sm:h-40 bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-600 overflow-hidden">
          <img
            src={profile.banner || "/banner.png"}
            alt="Driving Innovation for Global Impact"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 2. Overlapping Circular Avatar */}
        <div className="-mt-14 ml-5 relative z-10 inline-block">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-orange-500 to-fuchsia-600 overflow-hidden flex items-center justify-center">
            <img
              src={profile.avatar || "/logo.png"}
              alt={profile.name}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* 3. Name & Subtitle (Left Aligned) */}
        <div className="px-6 sm:px-7 mt-3 text-left">
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight font-display">
              {profile.name}
            </h1>
            <VerifiedBadgeIcon className="w-5 h-5 text-[#1D9BF0] flex-shrink-0" />
          </div>

          {profile.title && (
            <p className="text-sm sm:text-[15px] font-medium text-slate-600 mt-1 tracking-normal">
              {profile.title}
            </p>
          )}
        </div>

        {/* 4. Links List with Clean Dividers */}
        <div className="px-6 sm:px-7 mt-5 pb-6 divide-y divide-slate-100 flex flex-col">
          {profile.links.map((link) => (
            <SocialCard 
              key={link.id} 
              link={link} 
              onCopy={showToast} 
            />
          ))}
        </div>

      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce">
          <div className="px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xl text-xs font-semibold flex items-center gap-2 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}
