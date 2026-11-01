/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from './Logo';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us & Work', href: '#why-choose-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact & Quote', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'services', 'why-choose-us', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-xl py-3'
          : 'bg-[#0A0A0A]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="hover:opacity-95 transition-opacity shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000] rounded-lg"
            aria-label="CNS Detailing Home"
          >
            {/* Show full logo on desktop, compact on small mobile */}
            <div className="hidden sm:block">
              <Logo variant="full" />
            </div>
            <div className="sm:hidden">
              <Logo variant="compact" />
            </div>
          </a>

          {/* Zone 2: 5 Clean Single-Line Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`whitespace-nowrap transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000] rounded ${
                    isActive
                      ? 'text-[#FFE000] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFE000] rounded-full shadow-[0_0_8px_rgba(255,224,0,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Yellow Call Button) + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Call Button (visible on tablet and desktop) */}
            <a
              href={SITE_CONFIG.phoneHref}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFE000] hover:bg-[#FFE838] active:bg-[#E6CA00] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,224,0,0.35)] hover:shadow-[0_0_28px_rgba(255,224,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FFE000] whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-black stroke-black" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg bg-[#1C1C1C] text-neutral-300 hover:text-[#FFE000] hover:bg-[#252525] border border-[#2A2A2A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-b border-[#2A2A2A] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1C1C1C] text-[#FFE000] font-semibold border-l-2 border-[#FFE000]'
                      : 'text-neutral-300 hover:bg-[#181818] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#222222]">
            <a
              href={SITE_CONFIG.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-[#FFE000] text-black font-extrabold text-base tracking-wide transition-all shadow-[0_0_20px_rgba(255,224,0,0.4)]"
            >
              <Phone className="w-5 h-5 fill-black stroke-black" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
