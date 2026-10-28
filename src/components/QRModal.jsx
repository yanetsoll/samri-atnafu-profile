import React from 'react';
import { X, QrCode, Download, Share2 } from 'lucide-react';

export const QRModal = ({ isOpen, onClose, profileName }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-3 border border-indigo-100">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Scan & Connect
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Scan with any mobile camera to instantly access {profileName}'s links.
        </p>

        {/* QR Code Container */}
        <div className="bg-slate-50 p-3 rounded-2xl shadow-inner inline-block mb-5 border border-slate-200">
          <img 
            src="/social-media-qr.svg" 
            alt={`${profileName} Social QR Code`} 
            className="w-44 h-44 mx-auto object-contain"
          />
        </div>

        <div className="flex gap-2">
          <a
            href="/social-media-qr.svg"
            download={`${profileName}-social-qr.svg`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-all hover:scale-[1.01]"
          >
            <Download className="w-4 h-4 text-slate-600" />
            Download
          </a>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `${profileName}'s Social Profile`,
                  url: window.location.href
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Profile link copied to clipboard!');
              }
            }}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.01]"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
