import React, { useState } from 'react';
import { TRANSFORMATION_STORIES } from '../data/gymData';
import { Sparkles, Calculator, Flame, Trophy, TrendingUp, Heart, ArrowRight } from 'lucide-react';

interface TransformationsProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenInquiry }) => {
  // BMI & Calorie Calculator State
  const [weight, setWeight] = useState<number>(72);
  const [height, setHeight] = useState<number>(172);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.375); // moderate
  const [goal, setGoal] = useState<'loss' | 'maintain' | 'gain'>('loss');

  // Calculate BMI
  const heightMeters = height / 100;
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
  const bmiVal = parseFloat(bmi);

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-emerald-400';
  if (bmiVal < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = 'text-amber-400';
  } else if (bmiVal >= 25 && bmiVal < 30) {
    bmiCategory = 'Overweight';
    bmiColor = 'text-amber-500';
  } else if (bmiVal >= 30) {
    bmiCategory = 'Obese';
    bmiColor = 'text-red-500';
  }

  // BMR Calculation (Mifflin-St Jeor Formula)
  let bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
  let tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  if (goal === 'loss') targetCalories = Math.round(tdee - 450);
  if (goal === 'gain') targetCalories = Math.round(tdee + 400);

  return (
    <section id="results" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-extrabold text-xs tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            Real Transformations & Health Tracking
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PROVEN RESULTS, <span className="text-amber-500">NOT PROMISES</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See real member journeys from Hyderabad, and calculate your target daily calories right now.
          </p>
        </div>

        {/* Benefits Cards Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Flame className="w-6 h-6 text-red-500" />, title: 'Accelerated Fat Loss', desc: 'Burn up to 800+ calories per session with metabolic resistance training.' },
            { icon: <TrendingUp className="w-6 h-6 text-amber-500" />, title: 'Lean Muscle Hypertrophy', desc: 'Sculpt tone, definition, and strength with progressive overload.' },
            { icon: <Heart className="w-6 h-6 text-emerald-400" />, title: 'All-Day Stamina', desc: 'Double your daily energy levels and relieve desk job stiffness.' },
            { icon: <Trophy className="w-6 h-6 text-amber-400" />, title: 'Unshakeable Confidence', desc: 'Look great in any outfit and take command of your overall health.' },
          ].map((benefit, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-black text-white">{benefit.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Member Transformations Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center sm:text-left">
            Featured Hyderabad Success Stories
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {TRANSFORMATION_STORIES.map((story) => (
              <div key={story.id} className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-6 items-center shadow-xl">
                <div className="relative w-full md:w-48 h-56 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-700">
                  <img
                    src={story.afterImg}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-slate-950/90 text-amber-400 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-amber-500/30">
                    {story.timeframe}
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-black text-white">{story.name}, {story.age}</h4>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {story.weightLoss}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    "{story.story}"
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs text-slate-400">
                    <span>Target: Fat Loss & Toning</span>
                    <button
                      onClick={() => onOpenInquiry(`Inspired by ${story.name}`)}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      Get Same Plan &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive BMI & Calorie Calculator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase">
              <Calculator className="w-4 h-4" />
              Interactive Health & Fitness Tool
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase">
              CALCULATE YOUR BMI & DAILY CALORIE TARGET
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Enter your current parameters below to instantly calculate your Body Mass Index and optimal daily calorie intake for your goal.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Gender</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2.5 rounded-xl font-bold text-xs uppercase ${
                        gender === 'male' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2.5 rounded-xl font-bold text-xs uppercase ${
                        gender === 'female' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Age ({age} yrs)</label>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Weight ({weight} kg)</label>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Height ({height} cm)</label>
                  <input
                    type="range"
                    min="130"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Target Fitness Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('loss')}
                    className={`py-2.5 rounded-xl font-bold text-xs uppercase ${
                      goal === 'loss' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Fat Loss (-450 cal)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('maintain')}
                    className={`py-2.5 rounded-xl font-bold text-xs uppercase ${
                      goal === 'maintain' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Maintain
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('gain')}
                    className={`py-2.5 rounded-xl font-bold text-xs uppercase ${
                      goal === 'gain' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Muscle Gain (+400 cal)
                  </button>
                </div>
              </div>

            </div>

            {/* Results Box */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-6">
              <div className="grid grid-cols-2 gap-4 divide-x divide-slate-800">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Your BMI</div>
                  <div className="text-4xl font-black text-white mt-1">{bmi}</div>
                  <div className={`text-xs font-extrabold mt-1 ${bmiColor}`}>{bmiCategory}</div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Daily Target</div>
                  <div className="text-4xl font-black text-amber-400 mt-1">{targetCalories}</div>
                  <div className="text-[11px] text-slate-400 font-bold mt-1">Calories / Day</div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-relaxed">
                Want a custom workout split & diet chart tailored specifically to these target numbers?
              </div>

              <button
                onClick={() => onOpenInquiry(`Calculated BMI: ${bmi} (${bmiCategory}), Daily Target: ${targetCalories} kcal`)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Free Custom Meal Chart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
