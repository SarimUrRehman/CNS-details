/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, ArrowDown, MapPin, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#0A0A0A] overflow-hidden border-b border-[#1C1C1C]"
    >
      {/* Background Ambient Radial Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFE000]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FFA800]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Trust Badges, Copy, CTAs (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              {/* Badge 1: 5.0 Google Rating */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-semibold text-white tracking-wide">
                <div className="flex text-[#FFE000]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFE000] text-[#FFE000]" />
                  ))}
                </div>
                <span className="font-bold text-[#FFE000]">{SITE_CONFIG.googleRating}</span>
                <span className="text-neutral-400">({SITE_CONFIG.reviewCount} Google Reviews)</span>
              </div>

              {/* Badge 2: Location */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] border border-[#262626] text-xs font-medium text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFE000]" />
                <span>Christchurch, NZ</span>
              </div>

              {/* Badge 3: Speciality */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] border border-[#262626] text-xs font-medium text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22E04A]" />
                <span>Paint Correction &amp; Protection</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] text-balance mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get Perfection with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE000] via-[#FFF275] to-[#FFA800] drop-shadow-[0_0_24px_rgba(255,224,0,0.35)]">
                Paint Correction
              </span>{' '}
              &amp; Protection.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-8">
              Professional car detailing and car wash services in Christchurch, from a deep
              clean to a showroom finish. We safely eliminate scratches, restore clear coat depth,
              and shield your vehicle with high-durability ceramic coatings.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Call Button */}
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FFE000] hover:bg-[#FFE838] active:bg-[#E6CA00] text-black font-extrabold text-base tracking-wide transition-all shadow-[0_0_25px_rgba(255,224,0,0.4)] hover:shadow-[0_0_35px_rgba(255,224,0,0.65)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FFE000] cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-black stroke-black" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>

              {/* Get a Free Quote Button */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] active:bg-[#181818] text-white font-bold text-base tracking-wide border border-[#333333] hover:border-[#FFE000]/60 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FFE000] cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowDown className="w-4 h-4 text-[#FFE000]" />
              </a>
            </div>

            {/* Quick Feature Highlights Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1F1F1F] w-full max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  5.0 ★
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Google Rating</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#FFE000]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  100%
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Hand Detailing</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Casebrook
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Workshop, CHCH</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual SVG (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-square flex items-center justify-center">
              {/* Outer Atmospheric Aura */}
              <div
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#FFE000]/20 via-[#FFA800]/10 to-transparent blur-3xl animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Master Hero Illustration SVG */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="CNS Detailing brand visual showing yellow crescent ring and aerodynamic sports car illustration"
              >
                <defs>
                  {/* Hero Deep Radial Gradient */}
                  <radialGradient id="heroCircleGrad" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#2A2A2A" />
                    <stop offset="35%" stopColor="#151515" />
                    <stop offset="80%" stopColor="#080808" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>

                  {/* Yellow Crescent Gradient */}
                  <linearGradient id="heroCrescentGrad" x1="10%" y1="10%" x2="90%" y2="90%">
                    <stop offset="0%" stopColor="#FFF480" />
                    <stop offset="45%" stopColor="#FFE000" />
                    <stop offset="100%" stopColor="#FFA800" />
                  </linearGradient>

                  {/* Car Body Gradient */}
                  <linearGradient id="heroCarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFA800" />
                    <stop offset="30%" stopColor="#FFE000" />
                    <stop offset="70%" stopColor="#FFF275" />
                    <stop offset="100%" stopColor="#FFE000" />
                  </linearGradient>

                  {/* Gloss Highlight Gradient */}
                  <linearGradient id="heroGloss" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>

                  {/* Light Sweep Mask Clip */}
                  <clipPath id="heroCarClip">
                    <path d="M 90,285 C 95,270 110,255 130,255 C 150,255 165,270 170,285 L 320,285 C 325,270 340,255 360,255 C 380,255 395,270 400,285 L 435,280 C 445,270 435,250 405,240 C 380,230 350,220 330,220 L 280,195 C 255,180 210,180 180,200 L 135,225 C 110,240 90,255 85,275 C 80,285 85,285 90,285 Z" />
                  </clipPath>
                </defs>

                {/* Outer Yellow Crescent Ring with White Inner Rim */}
                <path
                  d="M 250,30 
                     A 220,220 0 1,1 60,340 
                     A 220,220 0 0,1 150,60 
                     L 165,90 
                     A 190,190 0 0,0 90,325 
                     A 190,190 0 1,0 260,60 
                     Z"
                  fill="url(#heroCrescentGrad)"
                  filter="drop-shadow(0 0 20px rgba(255, 224, 0, 0.45))"
                />

                {/* Thin White Inner Edge along the Crescent */}
                <path
                  d="M 165,90 
                     A 190,190 0 0,0 90,325 
                     A 190,190 0 1,0 260,60"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Glossy Black Core Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="170"
                  fill="url(#heroCircleGrad)"
                  stroke="#262626"
                  strokeWidth="2"
                />

                {/* Top Specular Curved Reflection Arc */}
                <path
                  d="M 120,210 
                     A 150,150 0 0,1 380,210 
                     A 145,100 0 0,0 120,210 
                     Z"
                  fill="url(#heroGloss)"
                />

                {/* Dynamic Speed & Energy Trails */}
                <line x1="70" y1="260" x2="160" y2="260" stroke="#FFE000" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="8 8" />
                <line x1="100" y1="280" x2="200" y2="280" stroke="#FFA800" strokeWidth="2.5" strokeOpacity="0.6" />
                <line x1="330" y1="280" x2="430" y2="280" stroke="#FFE000" strokeWidth="3" strokeOpacity="0.5" />
                <line x1="360" y1="260" x2="445" y2="260" stroke="#FFF275" strokeWidth="2" strokeOpacity="0.7" strokeDasharray="6 6" />

                {/* Ground Reflection Gradient Bar */}
                <ellipse cx="250" cy="305" rx="190" ry="8" fill="#FFE000" opacity="0.25" filter="blur(6px)" />
                <line x1="80" y1="290" x2="420" y2="290" stroke="#FFA800" strokeWidth="3" />

                {/* Sports Car Silhouette Body */}
                <g>
                  {/* Base Body Silhouette */}
                  <path
                    d="M 90,285 
                       C 95,270 110,255 130,255 
                       C 150,255 165,270 170,285 
                       L 320,285 
                       C 325,270 340,255 360,255 
                       C 380,255 395,270 400,285 
                       L 435,280 
                       C 445,270 435,250 405,240 
                       C 380,230 350,220 330,220 
                       L 280,195 
                       C 255,180 210,180 180,200 
                       L 135,225 
                       C 110,240 90,255 85,275 
                       C 80,285 85,285 90,285 
                       Z"
                    fill="url(#heroCarGrad)"
                    filter="drop-shadow(0 6px 12px rgba(0,0,0,0.9))"
                  />

                  {/* Aerodynamic Cockpit Glass */}
                  <path
                    d="M 190,205 
                       C 215,190 245,190 270,200 
                       L 320,225 
                       L 175,225 
                       C 180,215 185,208 190,205 
                       Z"
                    fill="#0A0A0A"
                  />

                  {/* Cockpit Interior Detailing: Tiny Lime Green Window Accent (#22E04A) */}
                  <circle cx="255" cy="210" r="4.5" fill="#22E04A" filter="drop-shadow(0 0 4px #22E04A)" />

                  {/* Orange Aerodynamic Lower Splitter & Trim (#FFA800) */}
                  <path d="M 85,284 L 435,284 L 438,289 L 82,289 Z" fill="#FFA800" />

                  {/* Rear Wheel with Alloy Spokes */}
                  <circle cx="150" cy="285" r="26" fill="#141414" stroke="#FFE000" strokeWidth="4.5" />
                  <circle cx="150" cy="285" r="11" fill="#FFA800" />
                  <circle cx="150" cy="285" r="4" fill="#FFE000" />

                  {/* Front Wheel with Alloy Spokes */}
                  <circle cx="380" cy="285" r="26" fill="#141414" stroke="#FFE000" strokeWidth="4.5" />
                  <circle cx="380" cy="285" r="11" fill="#FFA800" />
                  <circle cx="380" cy="285" r="4" fill="#FFE000" />

                  {/* Headlight Projector Flare */}
                  <polygon points="430,265 465,270 430,275" fill="#FFFFFF" opacity="0.95" />
                  <circle cx="432" cy="270" r="4" fill="#FFFFFF" filter="drop-shadow(0 0 8px #FFFFFF)" />

                  {/* Sweeping Gloss Shine Stripe Across Car Body */}
                  <g clipPath="url(#heroCarClip)">
                    <rect
                      x="0"
                      y="150"
                      width="60"
                      height="200"
                      fill="#FFFFFF"
                      opacity="0.35"
                      className="animate-sweep"
                    />
                  </g>
                </g>

                {/* Animated Sparkle Accents (#FFE000 and White) */}
                {/* Sparkle 1: Top Right */}
                <g transform="translate(390, 110)">
                  <path d="M 0,-14 Q 0,0 14,0 Q 0,0 0,14 Q 0,0 -14,0 Q 0,0 0,-14" fill="#FFE000" />
                  <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                </g>

                {/* Sparkle 2: Left Center */}
                <g transform="translate(70, 200)">
                  <path d="M 0,-10 Q 0,0 10,0 Q 0,0 0,10 Q 0,0 -10,0 Q 0,0 0,-10" fill="#FFF275" />
                  <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                </g>

                {/* Sparkle 3: Car Hood Flare */}
                <g transform="translate(340, 230)">
                  <path d="M 0,-8 Q 0,0 8,0 Q 0,0 0,8 Q 0,0 -8,0 Q 0,0 0,-8" fill="#FFFFFF" opacity="0.9" />
                </g>

                {/* Sparkle 4: Bottom Right */}
                <g transform="translate(420, 360)">
                  <path d="M 0,-10 Q 0,0 10,0 Q 0,0 0,10 Q 0,0 -10,0 Q 0,0 0,-10" fill="#FFE000" />
                  <circle cx="0" cy="0" r="2" fill="#FFA800" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
