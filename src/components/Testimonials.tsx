import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, MapPin, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Hyderabad Member Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHAT OUR MEMBERS <span className="text-amber-500">SAY</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real stories from working professionals, students, and fitness enthusiasts in Kukatpally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-bold ml-1">5.0</span>
                </div>

                {/* Review Copy */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Achievement Badge */}
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs">
                  {review.achievement}
                </div>
              </div>

              {/* Author Profile Footer */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center gap-4">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-base font-black text-white">{review.name}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {review.area}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">{review.role} • {review.program}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 text-center text-xs text-slate-400 font-medium">
          Rated <strong className="text-white">4.9/5 stars</strong> across 500+ Google Reviews in Jubilee Hills & Madhapur.
        </div>

      </div>
    </section>
  );
};
