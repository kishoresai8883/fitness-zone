import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Transformations } from './components/Transformations';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [modalDefaultPlan, setModalDefaultPlan] = useState('3-Day Free Trial Pass');

  const handleOpenInquiry = (planName?: string) => {
    if (planName) {
      setModalDefaultPlan(planName);
    }
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      {/* Navigation Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. About Section */}
        <About onOpenInquiry={handleOpenInquiry} />

        {/* 3. Programs Section */}
        <Programs onOpenInquiry={handleOpenInquiry} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenInquiry={handleOpenInquiry} />

        {/* 5. Transformations & BMI Calculator Section 
        <Transformations onOpenInquiry={handleOpenInquiry} />
        */}

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Schedule & Visit Us Section 
        <Schedule onOpenInquiry={handleOpenInquiry} />
        */}


        {/* 8. Pricing & Membership Section */}
        <Pricing onOpenInquiry={handleOpenInquiry} />

        {/* 9. Contact & Inquiry Section */}
        <ContactSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyMobileBar onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Modal for Pass Claiming / Inquiries */}
      <ContactModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultPlan={modalDefaultPlan}
      />
    </div>
  );
}
