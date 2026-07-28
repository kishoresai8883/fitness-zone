import React, { useState } from 'react';
import { SCHEDULE_ITEMS, GYM_DETAILS } from '../data/gymData';
import { Clock, MapPin, Phone, Calendar, User, Navigation, ArrowRight } from 'lucide-react';

interface ScheduleProps {
  onOpenInquiry: (className?: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onOpenInquiry }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const filteredSchedule = SCHEDULE_ITEMS.filter((item) =>
    item.days.includes(selectedDay)
  );

  return (
    <section id="schedule" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5" />
            Class Schedule & Visit Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WEEKLY CLASS <span className="text-amber-500">TIMETABLE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-energy group workouts designed around your work day. Reserve your spot in advance or walk in.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Timetable Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Day Selector */}
            <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-slate-900 border border-slate-800">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 py-3 px-2 rounded-xl font-black text-xs uppercase transition-all ${
                    selectedDay === day
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Timetable List */}
            <div className="space-y-4">
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{item.room}</span>
                    </div>

                    <h4 className="text-lg font-black text-white">{item.className}</h4>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>Instructor: <strong className="text-slate-200">{item.instructor}</strong></span>
                      <span className="bg-slate-800 text-amber-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(`Class Booking: ${item.className} (${selectedDay})`)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Reserve Spot
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* Location & Opening Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-500" />
                Visit Fitness Zone
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Full Address
                  </div>
                  <p className="font-medium text-white leading-relaxed">
                    {GYM_DETAILS.address}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Opening Hours
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Monday – Saturday:</span>
                    <strong className="text-white">{GYM_DETAILS.hours.weekdays}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Sunday:</span>
                    <strong className="text-white">{GYM_DETAILS.hours.sunday}</strong>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={GYM_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-slate-700"
                  >
                    <Navigation className="w-4 h-4 text-amber-500" />
                    Open Directions in Google Maps
                  </a>

                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Reception: {GYM_DETAILS.phoneFormatted}
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
