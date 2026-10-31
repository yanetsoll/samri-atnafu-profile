import React from 'react';
import { LinkedInBrandIcon, WhatsAppBrandIcon, WebsiteBrandIcon } from './Icons';

export const SocialCard = ({ link }) => {
  const getPlatformIcon = () => {
    switch (link.type) {
      case 'linkedin':  return <LinkedInBrandIcon className="w-10 h-10 md:w-12 md:h-12" />;
      case 'whatsapp':  return <WhatsAppBrandIcon  className="w-10 h-10 md:w-12 md:h-12" />;
      case 'website':
      default:          return <WebsiteBrandIcon   className="w-10 h-10 md:w-12 md:h-12" />;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${link.handle}`}
      className="
        flex items-center gap-4 py-4
        md:flex-col md:items-start md:gap-3 md:p-5
        md:rounded-2xl md:border md:border-slate-100
        md:hover:border-slate-300 md:hover:shadow-md
        md:bg-white md:transition-all md:duration-200
        no-underline group cursor-pointer
      "
    >
      <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        {getPlatformIcon()}
      </div>
      <span className="font-semibold text-slate-800 group-hover:text-slate-950 text-sm md:text-base tracking-tight truncate">
        {link.handle}
      </span>
    </a>
  );
};
