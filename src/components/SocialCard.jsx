import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, WhatsAppIcon, WebsiteIcon } from './Icons';

export const SocialCard = ({ link, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const getPlatformIcon = () => {
    switch (link.type) {
      case 'linkedin':
        return <LinkedInIcon className="w-6 h-6 text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />;
      case 'instagram':
        return <InstagramIcon className="w-6 h-6 text-[#E1306C] group-hover:scale-110 transition-transform duration-300" />;
      case 'whatsapp':
        return <WhatsAppIcon className="w-6 h-6 text-[#16A34A] group-hover:scale-110 transition-transform duration-300" />;
      case 'website':
      default:
        return <WebsiteIcon className="w-6 h-6 text-[#6366F1] group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  const getPlatformTheme = () => {
    switch (link.type) {
      case 'linkedin':
        return {
          glow: 'hover:shadow-[0_16px_35px_-8px_rgba(10,102,194,0.18)]',
          border: 'border-slate-200/90 hover:border-[#0A66C2]/50',
          iconBg: 'bg-[#0A66C2]/10 border-[#0A66C2]/20',
          badgeBg: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20',
          gradientHover: 'from-[#0A66C2]/[0.03] to-transparent',
          accentText: 'text-[#0A66C2]',
          tag: 'Professional'
        };
      case 'instagram':
        return {
          glow: 'hover:shadow-[0_16px_35px_-8px_rgba(225,48,108,0.18)]',
          border: 'border-slate-200/90 hover:border-[#E1306C]/50',
          iconBg: 'bg-[#E1306C]/10 border-[#E1306C]/20',
          badgeBg: 'bg-[#E1306C]/10 text-[#E1306C] border-[#E1306C]/20',
          gradientHover: 'from-[#E1306C]/[0.03] to-[#F56040]/[0.02]',
          accentText: 'text-[#E1306C]',
          tag: 'Stories & Visuals'
        };
      case 'whatsapp':
        return {
          glow: 'hover:shadow-[0_16px_35px_-8px_rgba(37,211,102,0.22)]',
          border: 'border-slate-200/90 hover:border-[#25D366]/60',
          iconBg: 'bg-[#25D366]/12 border-[#25D366]/25',
          badgeBg: 'bg-[#25D366]/12 text-[#15803D] border-[#25D366]/25',
          gradientHover: 'from-[#25D366]/[0.04] to-transparent',
          accentText: 'text-[#15803D]',
          tag: 'Instant Chat'
        };
      case 'website':
      default:
        return {
          glow: 'hover:shadow-[0_16px_35px_-8px_rgba(99,102,241,0.18)]',
          border: 'border-slate-200/90 hover:border-[#6366F1]/50',
          iconBg: 'bg-[#6366F1]/10 border-[#6366F1]/20',
          badgeBg: 'bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20',
          gradientHover: 'from-[#6366F1]/[0.03] to-[#06B6D4]/[0.02]',
          accentText: 'text-[#6366F1]',
          tag: 'Portfolio & Blog'
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
      className={`group relative flex flex-col justify-between rounded-2xl bg-white/85 backdrop-blur-xl border ${theme.border} p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] ${theme.glow} overflow-hidden cursor-pointer no-underline`}
    >
      {/* Subtle hover gradient highlight */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Card Top Row */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${theme.iconBg} border shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                {getPlatformIcon()}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-slate-950 transition-colors">
                    {link.title}
                  </h3>
                  {link.type === 'whatsapp' && (
                    <span className="flex h-2 w-2 relative" title="Online / Available">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                  {link.handle}
                </p>
              </div>
            </div>

            {/* Platform Tag */}
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.badgeBg} transition-colors tracking-wide`}>
              {theme.tag}
            </span>
          </div>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {link.subtitle}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
            <span>{link.badge || "Open"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-500 group-hover:text-slate-900" />
          </div>

          <button
            onClick={handleCopy}
            type="button"
            title={`Copy ${link.title} URL`}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-all text-xs flex items-center gap-1 font-medium border border-slate-200/60"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] text-emerald-600 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </a>
  );
};
