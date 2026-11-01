/**
 * ============================================================================
 * CNS DETAILING CHRISTCHURCH - SINGLE-PAGE APPLICATION
 * ============================================================================
 * 
 * Category: Car wash and car detailing
 * Tagline: "Get Perfection with Paint Correction & Protection"
 * Location: 18 Millhaven Place, Casebrook, Christchurch 8051, New Zealand
 * Phone: +64 27 303 4885 (027 303 4885)
 * Google Rating: 5.0 ★ (4 Google Reviews)
 * 
 * ----------------------------------------------------------------------------
 * HOW TO EDIT THIS SITE:
 * ----------------------------------------------------------------------------
 * 1. Business Info & Text: Open `src/config/siteConfig.ts` and modify any text,
 *    phone numbers, email placeholders, hours, or services.
 * 2. Brand Colors: Edit `BRAND_COLORS` in `src/config/siteConfig.ts`.
 * 3. Replacing Photos:
 *    - To swap the SVG before/after tiles with real workshop photos, place your
 *      images in `/public/images/` (e.g., `before-1.webp`, `after-1.webp`) and
 *      set `beforeImageSrc` and `afterImageSrc` in `BEFORE_AFTER_CONFIG`.
 * 
 * ----------------------------------------------------------------------------
 * PAGE STRUCTURE (EXACTLY 5 CONTENT SECTIONS):
 * - Sticky Navbar (not counted as a section)
 * 1. Hero (#hero)
 * 2. Services (#services)
 * 3. Why Choose Us + Our Work (#why-choose-us)
 * 4. Reviews (#reviews)
 * 5. Contact & Booking (#contact)
 * - Footer (not counted as a section)
 * - Floating circular yellow call button & Back-to-Top
 * ============================================================================
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { ContactBooking } from './components/ContactBooking';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  // State for pre-selecting a service when clicking "Enquire" in Services section
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#FFE000] selection:text-black">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content: Exactly 5 Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 3: Why Choose Us + Our Work */}
        <WhyChooseUs />

        {/* Section 4: Reviews */}
        <Reviews />

        {/* Section 5: Contact & Booking */}
        <ContactBooking preSelectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call Button (Mobile) & Back to Top */}
      <FloatingActions />
    </div>
  );
}
