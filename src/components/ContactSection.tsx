import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MessageSquare, MapPin, Clock, Send, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: (planName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are the gym operating timings at Gym?',
      a: 'We are open Monday to Saturday from 6:00 AM to 10:00 PM continuously, and Sunday from 7:00 AM to 1:00 PM.',
    },
    {
      q: 'Are personal trainers and general floor guidance included?',
      a: 'Yes! Every member receives general floor trainer assistance, equipment orientation, and basic form correction. We also offer dedicated 1-on-1 personal coaching for accelerated goals.',
    },
    {
      q: 'Do you offer a free trial pass before joining?',
      a: 'Absolutely! You can claim a 3-Day Free Trial Pass to test our imported gear, experience our group classes (Zumba/Yoga), and meet our trainers before making any decision.',
    },
    {
      q: 'Do you provide diet charts suitable for Indian food habits?',
      a: 'Yes, our certified nutritionists design customized meal charts keeping local South and North Indian food habits in mind (rice, biryani alternatives, rotis, paneer, eggs, chicken, etc.).',
    },
    {
      q: 'Where is The Gym located in Hyderabad?',
      a: 'We are located on Prashanthi Nagar, Kukatpally.',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-extrabold text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch • Start Your Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            CONTACT & <span className="text-amber-500">MEMBERSHIP INQUIRY</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have questions or ready to claim your 3-Day Free Pass? Reach out directly via Call or WhatsApp!
          </p>
        </div>

        {/* Contact Banner & Quick Buttons */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Instant Contact
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Phone Call</div>
                    <div className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                      {GYM_DETAILS.phoneFormatted}
                    </div>
                  </div>
                </a>

                <a
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 hover:bg-emerald-950/20 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-bold uppercase">WhatsApp Instant Chat</div>
                    <div className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">
                      Chat with The Gym Team
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    Branch Location
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {GYM_DETAILS.address}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 font-medium">
                ⚡ Direct phone line monitored 6:00 AM – 10:00 PM daily.
              </div>
            </div>

          </div>

          {/* Right Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Send Direct Inquiry
              </h3>
              <p className="text-xs text-slate-300">
                Submit your inquiry and our desk team in Hyderabad will contact you within 15 minutes.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('fullName') as HTMLInputElement).value;
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                  const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                  const text = `Hi Fitness Zone Hyderabad!\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}\nMessage: ${message}`;
                  window.open(`https://wa.me/919550637183?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      defaultValue="9550637183"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">I am interested in *</label>
                  <select
                    name="interest"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                  >
                    <option value="3-Day Free Trial Pass">3-Day Free Trial Pass</option>
                    <option value="1 Month Membership">1 Month Membership (₹2,999)</option>
                    <option value="3 Month Transformation Pack">3 Month Transformation (₹6,999)</option>
                    <option value="Annual Elite Membership">Annual Elite Membership (₹17,999)</option>
                    <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Additional Note / Questions</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your fitness goal or preferred workout timings..."
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Block */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
