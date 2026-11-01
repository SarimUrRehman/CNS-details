/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Star, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from './Logo';
import { NAV_LINKS } from './Navbar';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-[#1C1C1C] relative pt-16 pb-12">
      {/* Top subtle yellow border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFE000]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]">
          {/* Column 1: Brand & Description (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000] rounded-lg"
              aria-label="CNS Detailing Home"
            >
              <Logo variant="footer" />
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm pt-2">
              Christchurch’s dedicated paint correction and nano-ceramic protection studio.
              Delivering showroom clarity, scratch removal, and lasting vehicle care from our
              Casebrook workshop.
            </p>

            {/* Rating verification */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-[#FFE000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE000] text-[#FFE000]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-neutral-300">
                {SITE_CONFIG.ratingDisplay}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explore Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFE000] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact &amp; Location
            </h4>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#FFE000]" />
              </div>
              <a
                href={SITE_CONFIG.phoneHref}
                className="text-sm font-semibold text-white hover:text-[#FFE000] transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#FFE000]" />
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-neutral-300 hover:text-[#FFE000] transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFE000]" />
              </div>
              <span className="text-sm text-neutral-400 leading-snug">
                {SITE_CONFIG.fullAddress}
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FFE000] flex items-center justify-center text-neutral-400 hover:text-[#FFE000] transition-colors"
                aria-label="Instagram placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FFE000] flex items-center justify-center text-neutral-400 hover:text-[#FFE000] transition-colors"
                aria-label="Facebook placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2025 CNS Detailing Christchurch. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Casebrook, Christchurch</span>
            <span aria-hidden="true">·</span>
            <span>New Zealand</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
