import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { LinkedInBrandIcon, WhatsAppBrandIcon, WebsiteBrandIcon } from './Icons';

export const SocialCard = ({ link, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const getPlatformIcon = () => {
    switch (link.type) {
      case 'linkedin':
        return <LinkedInBrandIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
      case 'whatsapp':
        return <WhatsAppBrandIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
      case 'website':
      default:
        return <WebsiteBrandIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
    }
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    if (onCopy) onCopy(link.handle || link.title);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* Entire row is a link */
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${link.handle}`}
      className="flex items-center justify-between py-3.5 sm:py-4 group cursor-pointer no-underline"
    >
      {/* Icon + Handle */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
        <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
          {getPlatformIcon()}
        </div>
        <span className="font-semibold text-slate-800 group-hover:text-slate-950 text-sm sm:text-base tracking-tight truncate">
          {link.handle}
        </span>
      </div>


    </a>
  );
};
