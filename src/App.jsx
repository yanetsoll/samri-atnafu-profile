import React from 'react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { VerifiedBadgeIcon } from './components/Icons';

export default function App() {
  const profile = getProfileData();

  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 font-sans">

      {/* ── BANNER (full width) ── */}
      <div className="relative w-full h-48 md:h-72 lg:h-80 bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-600 overflow-hidden">
        <img
          src={profile.banner || "/banner.png"}
          alt="Driving Innovation for Global Impact"
          className="w-full h-full object-cover object-center"
        />

        {/* Desktop only: avatar overlaps the baked-in banner logo */}
        <div className="hidden md:block absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10">
          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-orange-500 to-fuchsia-600 overflow-hidden">
            <img
              src={profile.avatar || "/logo.png"}
              alt={profile.name}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">

        {/* Mobile only: avatar overlaps from below the banner */}
        <div className="-mt-12 mb-3 inline-block relative z-10 md:hidden">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-orange-500 to-fuchsia-600 overflow-hidden">
            <img
              src={profile.avatar || "/logo.png"}
              alt={profile.name}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Name + Subtitle */}
        <div className="mt-1 mb-6 md:mt-8 md:mb-10">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-950 tracking-tight">
              {profile.name}
            </h1>
            <VerifiedBadgeIcon className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
          </div>
          {profile.title && (
            <p className="text-sm md:text-xl text-slate-500 mt-1">
              {profile.title}
            </p>
          )}
        </div>

        {/* ── LINKS ── */}
        {/* Mobile: divider rows | Desktop: 3-column card grid */}
        <div className="divide-y divide-slate-100 md:divide-y-0 md:grid md:grid-cols-3 md:gap-6 pb-12">
          {profile.links.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </div>

      </div>
    </div>
  );
}
