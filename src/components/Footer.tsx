import React from 'react';
import { Dumbbell, MapPin, Phone, MessageSquare, Clock, Heart, ArrowUp } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 sm:mb-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="assets/fitness_zone_logo.webp"
                alt="Fitness Zone Logo"
                className="w-10 h-10 object-contain rounded-xl shadow-lg"
              />
              <span className="text-2xl font-black tracking-tight text-white">
                FITNESS<span className="text-amber-500">ZONE</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Hyderabad’s premier high-energy fitness destination. Featuring imported Hammer Strength equipment, certified personal coaches, HIIT, Zumba, and customized Indian diet plans.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-xs flex items-center gap-2 hover:border-amber-500"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                {GYM_DETAILS.phoneFormatted}
              </a>

              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center gap-2 hover:bg-emerald-600 hover:text-slate-950 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Fitness Zone</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Fitness Programs</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#results" className="hover:text-amber-400 transition-colors">Transformations & BMI</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-amber-400 transition-colors">Class Timetable</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">Membership Plans</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest">
              Location & Hours
            </h4>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Mon - Sat: 6:00 AM – 10:00 PM | Sun: 7:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Fitness Zone Hyderabad. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500 transition-all flex items-center gap-2 font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
