import React from 'react';
import { Dumbbell, Award, Utensils, Users, ShieldCheck, Zap, HeartPulse, Flame } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

interface WhyChooseUsProps {
  onOpenInquiry: (planName?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenInquiry }) => {
  const iconsMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-7 h-7 text-amber-500" />,
    Award: <Award className="w-7 h-7 text-red-500" />,
    Utensils: <Utensils className="w-7 h-7 text-amber-400" />,
    Users: <Users className="w-7 h-7 text-emerald-400" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            The Gym Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHY WE ARE HYDERABAD'S <span className="text-amber-500">#1 CHOICE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't just sell gym memberships. We provide the guidance, machinery, and accountability you need to look, feel, and perform at your absolute best.
          </p>
        </div>

        {/* 4 Strong Benefit Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500 transition-all">
                  {iconsMap[item.icon]}
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-amber-500">
                <span>Pillar 0{index + 1}</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-red-950/80 via-slate-950 to-amber-950/80 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-400 uppercase tracking-widest">
              <Flame className="w-4 h-4 text-red-500" />
              Ready to feel the difference?
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white uppercase">
              EXPERIENCE The Gym FOR 3 DAYS FREE
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              No pressure. No long-term commitments. Try our equipment and group classes risk-free.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('3-Day Free Trial Pass')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 shadow-xl shadow-amber-500/25 active:scale-95 transition-all whitespace-nowrap"
          >
            Claim Your Free Pass Now
          </button>
        </div>

      </div>
    </section>
  );
};
