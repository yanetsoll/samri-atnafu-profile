import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, WhatsAppIcon, WebsiteIcon } from './Icons';

export const SocialCard = ({ link, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const getPlatformIcon = () => {
    switch (link.type) {
      case 'linkedin':
        return <LinkedInIcon className="w-6 h-6 text-[#0A66C2] transition-transform duration-300 group-hover:scale-110" />;
      case 'instagram':
        return <InstagramIcon className="w-6 h-6 text-[#E1306C] transition-transform duration-300 group-hover:scale-110" />;
      case 'whatsapp':
        return <WhatsAppIcon className="w-6 h-6 text-[#16A34A] transition-transform duration-300 group-hover:scale-110" />;
      case 'website':
      default:
        return <WebsiteIcon className="w-6 h-6 text-[#6366F1] transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  const getPlatformTheme = () => {
    switch (link.type) {
      case 'linkedin':
        return {
          glow: 'hover:shadow-[0_12px_28px_-6px_rgba(10,102,194,0.18)]',
          border: 'border-slate-200/90 hover:border-[#0A66C2]/60',
          iconBg: 'bg-[#0A66C2]/10 border-[#0A66C2]/20',
          hoverBg: 'hover:bg-slate-50/90',
          arrowHover: 'group-hover:bg-[#0A66C2] group-hover:text-white',
          accentColor: '#0A66C2'
        };
      case 'instagram':
        return {
          glow: 'hover:shadow-[0_12px_28px_-6px_rgba(225,48,108,0.18)]',
          border: 'border-slate-200/90 hover:border-[#E1306C]/60',
          iconBg: 'bg-[#E1306C]/10 border-[#E1306C]/20',
          hoverBg: 'hover:bg-slate-50/90',
          arrowHover: 'group-hover:bg-[#E1306C] group-hover:text-white',
          accentColor: '#E1306C'
        };
      case 'whatsapp':
        return {
          glow: 'hover:shadow-[0_12px_28px_-6px_rgba(37,211,102,0.22)]',
          border: 'border-slate-200/90 hover:border-[#25D366]/70',
          iconBg: 'bg-[#25D366]/12 border-[#25D366]/25',
          hoverBg: 'hover:bg-slate-50/90',
          arrowHover: 'group-hover:bg-[#16A34A] group-hover:text-white',
          accentColor: '#16A34A'
        };
      case 'website':
      default:
        return {
          glow: 'hover:shadow-[0_12px_28px_-6px_rgba(99,102,241,0.18)]',
          border: 'border-slate-200/90 hover:border-[#6366F1]/60',
          iconBg: 'bg-[#6366F1]/10 border-[#6366F1]/20',
          hoverBg: 'hover:bg-slate-50/90',
          arrowHover: 'group-hover:bg-[#6366F1] group-hover:text-white',
          accentColor: '#6366F1'
        };
    }
  };

  const theme = getPlatformTheme();

  const handleCopy = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    if (onCopy) onCopy(link.title);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${link.title} profile for ${link.handle}`}
      className={`group relative flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur-xl border ${theme.border} p-3.5 sm:p-4 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] ${theme.glow} ${theme.hoverBg} cursor-pointer no-underline`}
    >
      {/* Left: Icon + Info */}
      <div className="flex items-center gap-3.5 min-w-0 pr-2">
        <div className={`p-2.5 rounded-xl ${theme.iconBg} border shadow-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          {getPlatformIcon()}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-slate-950 truncate">
              {link.title}
            </h3>
            {link.type === 'whatsapp' && (
              <span className="flex h-2 w-2 relative flex-shrink-0" title="Online / Active">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
          </div>
          <p className="text-xs font-mono font-medium text-slate-500 group-hover:text-slate-700 truncate">
            {link.handle}
          </p>
        </div>
      </div>

      {/* Right: Actions (Copy + Arrow) */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={handleCopy}
          type="button"
          title={`Copy ${link.title} link`}
          className="px-2.5 py-1.5 rounded-xl bg-slate-100/90 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all text-xs flex items-center gap-1 font-medium border border-slate-200/80 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] text-emerald-600 font-semibold hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] text-slate-600 hidden sm:inline">Copy</span>
            </>
          )}
        </button>

        <div 
          className={`w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 ${theme.arrowHover} border border-slate-200/60`}
          title={`Visit ${link.title}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
};
