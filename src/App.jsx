import React from 'react';
import { getProfileData } from './data/config';
import { SocialCard } from './components/SocialCard';
import { VerifiedBadgeIcon } from './components/Icons';

export default function App() {
  const profile = getProfileData();

  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 font-sans">

      {/* ── BANNER (full width on all screens) ── */}
      <div className="relative w-full h-48 md:h-72 lg:h-80 bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-600 overflow-hidden">
        <img
          src={profile.banner || "/banner.png"}
          alt="Driving Innovation for Global Impact"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Avatar overlapping banner */}
        <div className="-mt-14 md:-mt-16 mb-4 inline-block relative z-10">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-orange-500 to-fuchsia-600 overflow-hidden">
            <img
              src={profile.avatar || "/logo.png"}
              alt={profile.name}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Name + Subtitle */}
        <div className="mt-2 mb-6 md:mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-950 tracking-tight">
              {profile.name}
            </h1>
            <VerifiedBadgeIcon className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
          </div>
          {profile.title && (
            <p className="text-sm md:text-lg text-slate-500 mt-1">
              {profile.title}
            </p>
          )}
        </div>

        {/* ── LINKS ── */}
        {/* Mobile: single column | Desktop: grid 3 columns */}
        <div className="divide-y divide-slate-100 md:divide-y-0 md:grid md:grid-cols-3 md:gap-5 pb-12">
          {profile.links.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </div>

      </div>
    </div>
  );
}
