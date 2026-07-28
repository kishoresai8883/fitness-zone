import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';
import { Flame, Clock, Dumbbell, Sparkles, ArrowRight, Check, X } from 'lucide-react';

interface ProgramsProps {
  onOpenInquiry: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-extrabold text-xs tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5" />
            Specialized Training Programs
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WORKOUTS FOR EVERY <span className="text-amber-500">GOAL</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you want to build lean muscle, torch stubborn belly fat, or enjoy group dance cardio, we have expert-crafted programs designed for maximum speed and safety.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'strength', label: 'Strength & Hypertrophy' },
            { id: 'personal', label: '1-on-1 Coaching' },
            { id: 'cardio', label: 'HIIT & Fat Loss' },
            { id: 'group', label: 'Group & Zumba' },
            { id: 'wellness', label: 'Yoga & Mobility' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                selectedCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {program.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {program.duration}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>{program.category}</span>
                    <span className="text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded">
                      {program.intensity}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-slate-300 text-sm line-clamp-2">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {program.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(program)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenInquiry(`Program: ${program.title}`)}
                  className="px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Program Detailed View Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-400">{activeModalProgram.category}</span>
                <h3 className="text-2xl font-black text-white">{activeModalProgram.title}</h3>
              </div>
            </div>

            <img
              src={activeModalProgram.imageUrl}
              alt={activeModalProgram.title}
              className="w-full h-56 object-cover rounded-2xl mb-6 border border-slate-800"
              referrerPolicy="no-referrer"
            />

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeModalProgram.fullDetails}
            </p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Key Highlights</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {activeModalProgram.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onOpenInquiry(`Program: ${title}`);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg"
              >
                Inquire & Book Free Pass
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
