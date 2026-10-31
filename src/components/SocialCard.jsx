import React, { useState } from 'react';
import { LinkedInBrandIcon, WhatsAppBrandIcon, WebsiteBrandIcon } from './Icons';

export const SocialCard = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const getIcon = () => {
    switch (link.type) {
      case 'linkedin':  return <LinkedInBrandIcon className="w-10 h-10 sm:w-12 sm:h-12" />;
      case 'whatsapp':  return <WhatsAppBrandIcon className="w-10 h-10 sm:w-12 sm:h-12" />;
      case 'website':
      default:          return <WebsiteBrandIcon  className="w-10 h-10 sm:w-12 sm:h-12" />;
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group no-underline"
    >
      {/* ── MOBILE: horizontal row ── */}
      <div className="flex sm:hidden items-center gap-4 py-3.5 border-b border-slate-100 last:border-0">
        <div className="flex-shrink-0">{getIcon()}</div>
        <span className="font-semibold text-slate-800 text-sm truncate">{link.handle}</span>
      </div>

      {/* ── DESKTOP: vertical card ── */}
      <div className="hidden sm:flex flex-col gap-3 border border-slate-200 rounded-2xl p-4 h-full hover:shadow-md transition-shadow bg-white">
        <div className="flex-shrink-0">{getIcon()}</div>
        <span className="font-semibold text-slate-800 text-sm leading-snug">{link.handle}</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-slate-600 text-sm font-medium text-left mt-auto transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </a>
  );
};
