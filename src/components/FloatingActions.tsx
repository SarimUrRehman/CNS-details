/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Circular Yellow Call Button (Mobile Only, bottom-right) */}
      <a
        href={SITE_CONFIG.phoneHref}
        className="sm:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#FFE000] text-black flex items-center justify-center shadow-[0_4px_25px_rgba(255,224,0,0.6)] active:scale-95 transition-transform border-2 border-black focus:outline-none focus:ring-4 focus:ring-[#FFE000]/50"
        aria-label={`Call CNS Detailing now at ${SITE_CONFIG.phoneDisplay}`}
      >
        <Phone className="w-6 h-6 fill-black stroke-black" />
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#FFE000] animate-ping opacity-30 pointer-events-none" />
      </a>

      {/* Back-to-Top Button (Desktop & Tablet, when scrolled) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-xl bg-[#1C1C1C]/90 hover:bg-[#FFE000] text-neutral-300 hover:text-black border border-[#2F2F2F] hover:border-[#FFE000] backdrop-blur-md shadow-xl transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FFE000] cursor-pointer"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
