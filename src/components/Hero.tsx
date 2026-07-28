import React from 'react';
import { ShieldCheck, Phone, MessageSquare, ArrowRight, Star, Flame, CheckCircle2, MapPin } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface HeroProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-slate-950 overflow-hidden">
      {/* Background Hero Visual with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Fitness Zone Gym Interior Hyderabad"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Location & Trust Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-slate-300">Certified Elite Gym</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-amber-500">ULTIMATE</span> BODY AT FITNESS ZONE
            </h1>

            {/* Persuasive Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hyderabad’s premier high-energy fitness destination. Featuring imported Hammer Strength gear, certified 1-on-1 personal coaches, high-calorie HIIT, and customized Indian nutrition plans.
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenInquiry('3-Day Free Trial Pass')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-base uppercase tracking-wider hover:brightness-110 shadow-xl shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Claim 3-Day Free Trial Pass</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Trust Ratings & Reviews */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Gym Member Hyderabad"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                    alt="Gym Member Hyderabad"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                    alt="Gym Member Hyderabad"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-white font-extrabold text-sm ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-400">Based on 500+ Hyderabad Member Reviews</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No Hidden Fees • Free Assessment</span>
              </div>
            </div>

          </div>

          {/* Quick Trial Inquiry Card Floating Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">

              {/* Card Header Badge */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                Limited Slots
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Get Your Free Pass
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill in your details to lock in a 3-Day Free Pass & complimentary workout consultation at Jubilee Hills / Madhapur.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                  const program = (form.elements.namedItem('program') as HTMLSelectElement).value;

                  const text = `Hi Fitness Zone Hyderabad! My name is ${name} (${phone}). I would like to activate my 3-Day Free Pass for ${program}.`;
                  window.open(`https://wa.me/919550637183?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    defaultValue="9550637183"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Primary Fitness Goal *
                  </label>
                  <select
                    name="program"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  >
                    <option value="Fat Loss & Toning">Fat Loss & Weight Loss</option>
                    <option value="Muscle Building & Strength">Muscle Building & Hypertrophy</option>
                    <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                    <option value="Zumba & Dance Fitness">Zumba & Dance Fitness</option>
                    <option value="Yoga & Core Flexibility">Yoga & Core Flexibility</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-sm uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Activate Free Trial via WhatsApp</span>
                  <MessageSquare className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-400">
                  Or call directly:{' '}
                  <a href={`tel:${GYM_DETAILS.phone}`} className="text-amber-400 font-bold hover:underline">
                    {GYM_DETAILS.phoneFormatted}
                  </a>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80">
          {GYM_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left p-2">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
