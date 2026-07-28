import React from 'react';
import { Phone, MessageSquare, Flame } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface StickyMobileBarProps {
  onOpenInquiry: (planName?: string) => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenInquiry }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-amber-500/30 p-2.5 backdrop-blur-lg shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${GYM_DETAILS.phone}`}
          className="py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-500" />
          <span>Call</span>
        </a>

        <a
          href={GYM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => onOpenInquiry('3-Day Free Trial Pass')}
          className="py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg active:scale-95 transition-transform"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Free Pass</span>
        </button>
      </div>
    </div>
  );
};
