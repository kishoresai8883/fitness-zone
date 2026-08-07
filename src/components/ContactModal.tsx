import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Flame, CheckCircle2, Send } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('9550637183');
  const [selectedTopic, setSelectedTopic] = useState(defaultPlan || '3-Day Free Trial Pass');
  const [preferredTime, setPreferredTime] = useState('Morning (6am - 10am)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setSelectedTopic(defaultPlan);
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messagePayload = `Hi Fitness Zone Hyderabad!\nName: ${name}\nPhone: ${phone}\nTopic: ${selectedTopic}\nTime: ${preferredTime}`;
    const url = `https://wa.me/919550637183?text=${encodeURIComponent(messagePayload)}`;

    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Inquiry Sent!</h3>
            <p className="text-slate-300 text-sm">
              We are opening WhatsApp now to connect you directly with The Gym desk in Kukatpally.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs uppercase"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4 text-red-500" />
              The Gym
            </div>

            <h3 className="text-2xl font-black text-white uppercase mb-2">
              Claim Pass / Inquire
            </h3>

            <p className="text-xs text-slate-300 mb-6">
              Lock in your free pass or ask questions. Our team will contact you immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Inquiry Topic *</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                >
                  <option value="3-Day Free Trial Pass">3-Day Free Trial Pass</option>
                  <option value="1 Month Membership">1 Month Membership (₹2,999)</option>
                  <option value="3 Month Transformation Pack">3 Month Transformation (₹6,999)</option>
                  <option value="Annual Elite Membership">Annual Elite Membership (₹17,999)</option>
                  <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                  <option value="Zumba / Group Class Booking">Zumba / Group Class Booking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Preferred Time to Visit</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                >
                  <option value="Morning (6am - 10am)">Morning Slot (6:00 AM – 10:00 AM)</option>
                  <option value="Mid-day (10am - 4pm)">Mid-day Slot (10:00 AM – 4:00 PM)</option>
                  <option value="Evening (5pm - 10pm)">Evening Slot (5:00 PM – 10:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp Chat</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-800 text-center flex items-center justify-center gap-4 text-xs text-slate-400">
              <span>Or call right now:</span>
              <a href={`tel:${GYM_DETAILS.phone}`} className="text-amber-400 font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {GYM_DETAILS.phoneFormatted}
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
