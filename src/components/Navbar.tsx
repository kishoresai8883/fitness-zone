import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, MessageSquare, Menu, X, Flame, MapPin } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import logoImg from '../../assets/fitness_zone_logo.webp';

interface NavbarProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 pt-3 lg:pt-0 pb-3 shadow-2xl'
        : 'bg-gradient-to-b from-slate-950/90 to-transparent pt-4 lg:pt-0 pb-5'
        }`}
    >
      {/* Top Banner Bar for Quick Info */}
      <div className="hidden lg:block bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 text-xs font-bold py-1.5 px-4 mb-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {GYM_DETAILS.area}
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              Open Today: {GYM_DETAILS.hours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Special Deal: Get 3-Day Free Pass Today!</span>
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="hover:underline flex items-center gap-1 font-extrabold"
            >
              <Phone className="w-3 h-3" /> {GYM_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={logoImg}
            alt="Fitness Zone Logo"
            className="w-10 h-10 object-contain rounded-xl shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
              FITNESS<span className="text-amber-500">ZONE</span>
            </div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest -mt-1">
              Hyderabad
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-amber-400 transition-colors py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('programs')}
            className="hover:text-amber-400 transition-colors py-1"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="hover:text-amber-400 transition-colors py-1"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-amber-400 transition-colors py-1"
          >
            Membership
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry('3-Day Free Trial Pass')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            Claim Free Pass
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-amber-500/20 px-4 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-slate-200 text-base font-semibold">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-slate-800/80 hover:text-amber-400"
            >
              About Fitness Zone
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-left py-2 border-b border-slate-800/80 hover:text-amber-400"
            >
              Fitness Programs
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-left py-2 border-b border-slate-800/80 hover:text-amber-400"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 border-b border-slate-800/80 hover:text-amber-400"
            >
              Membership Plans
            </button>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('3-Day Free Trial Pass');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 font-black text-center text-sm uppercase tracking-wider shadow-lg"
              >
                Claim 3-Day Free Trial Pass
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  Call Now
                </a>
                <a
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
