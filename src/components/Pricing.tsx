import React from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, Flame, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenInquiry: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenInquiry }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing • No Hidden Registration Fees
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            CHOOSE YOUR <span className="text-amber-500">MEMBERSHIP PLAN</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Invest in your health today. All plans include full access to strength and cardio zones with trainer guidance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/15 scale-105 z-10'
                  : 'bg-slate-950 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 font-black text-xs uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  Most Popular Pack
                </div>
              )}

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-1">
                  {plan.duration}
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 min-h-[32px] mb-6">{plan.tagline}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-slate-500 text-sm font-bold line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  {plan.savings && (
                    <span className="text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded ml-auto">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenInquiry(`Plan: ${plan.name} (${plan.price})`)}
                className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Corporate & Student Discount Note */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>
              Group or Corporate Gym Memberships available for tech companies in Hitec City, Madhapur & Jubilee Hills.
            </span>
          </div>

          <button
            onClick={() => onOpenInquiry('Corporate Membership Inquiry')}
            className="text-amber-400 font-bold hover:underline whitespace-nowrap"
          >
            Inquire Corporate Offer &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
