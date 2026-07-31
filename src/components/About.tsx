import React from 'react';
import { Award, ShieldCheck, Users, Flame, Dumbbell, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface AboutProps {
  onOpenInquiry: (planName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            About AURA X
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHERE HYDERABAD COMES TO <span className="text-amber-500">TRANSFORM</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Founded with a passion to deliver genuine, result-driven fitness to Kukatpally. We combine world-class machinery, scientific training, and a supportive brotherhood/sisterhood atmosphere.
          </p>
        </div>

        {/* Grid Visuals & Copy */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Images Gallery Block */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                  alt="Fitness Zone Gym Equipment Hyderabad"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg border border-slate-700">
                  10,000 Sq. Ft Floor
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
                  alt="Personal Coaching Session"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-lg border border-amber-500/30">
                  1-on-1 Personal Training
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
                  alt="Group Fitness Classes"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/30">
                  Zumba & Group Studio
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600"
                  alt="Cross Training Zone"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-red-400 text-xs font-bold px-3 py-1 rounded-lg border border-red-500/30">
                  Functional Turf Zone
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              MORE THAN A GYM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                A RESULTS-DRIVEN COMMUNITY.
              </span>
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              At Aura X Gym Hyderabad, we believe fitness should not be confusing or intimidating. Whether you are stepping into a gym for the first time or prepping for elite athletic conditioning, our certified coaches create custom roadmaps tailored to your body type, busy routine, and nutrition preferences.
            </p>

            {/* Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'ACE/K11 Certified Coaches', desc: 'Expert guidance on posture, form, and injury prevention.' },
                { title: 'Custom Hyderabad Diet Plans', desc: 'South & North Indian meal guidance with optimal macros.' },
                { title: 'Pristine Hygiene & Sanitization', desc: 'Daily deep cleaning, climate control, and steam baths.' },
                { title: 'Flexible Working Hours', desc: 'Open 6:00 AM to 10:00 PM for early birds and night owls.' },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-400 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Address & Direct CTA */}
            <div className="pt-4 p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Location</div>
                  <div className="text-sm font-bold text-white">Prashanthi Nagar, Kukatpally</div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Visit Inquiry')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
              >
                Schedule Facility Tour
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
