/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Sparkles,
  FileCheck,
  HeartHandshake,
  MapPin,
  Star,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import {
  SITE_CONFIG,
  WHY_CHOOSE_US_CONFIG,
  BEFORE_AFTER_CONFIG,
  BeforeAfterItem,
} from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  // State tracking active view (Before vs After) for each of the 3 tiles
  const [activeTab, setActiveTab] = useState<{ [key: string]: 'before' | 'after' }>({
    'project-1': 'after',
    'project-2': 'after',
    'project-3': 'after',
  });

  const getBenefitIcon = (id: string) => {
    const iconClass = 'w-5 h-5 text-[#FFE000]';
    switch (id) {
      case 'specialists':
        return <Sparkles className={iconClass} />;
      case 'products':
        return <ShieldCheck className={iconClass} />;
      case 'attention':
        return <Award className={iconClass} />;
      case 'quotes':
        return <FileCheck className={iconClass} />;
      case 'friendly':
        return <HeartHandshake className={iconClass} />;
      case 'location':
        return <MapPin className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  const toggleTile = (id: string, state: 'before' | 'after') => {
    setActiveTab((prev) => ({ ...prev, [id]: state }));
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-[#1C1C1C] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Overview */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFE000]" />
            <span>Why Choose Us &amp; Our Work</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Meticulous Detailing. Proven Paint Correction.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {WHY_CHOOSE_US_CONFIG.leadParagraph}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_CHOOSE_US_CONFIG.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#FFE000]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center mb-4">
                {getBenefitIcon(benefit.id)}
              </div>
              <h3
                className="text-lg font-bold uppercase tracking-tight text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Our Work: 3 Before / After Tiles */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000]">
                Work Showcase
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Before &amp; After Transformations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Toggle between Before and After views below. Styled interactive placeholders ready
              to display your real workshop photography.
            </p>
          </div>

          {/* Row of 3 Before/After Tiles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BEFORE_AFTER_CONFIG.map((project) => {
              const currentView = activeTab[project.id] || 'after';
              const isAfter = currentView === 'after';
              const activeImage = isAfter ? project.afterImageSrc : project.beforeImageSrc;

              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#141414] border border-[#222222] overflow-hidden flex flex-col justify-between group"
                >
                  {/* Visual Display Container (Explicit 16:10 aspect ratio) */}
                  <div className="relative aspect-[16/10] w-full bg-[#1A1A1A] overflow-hidden select-none">
                    {activeImage ? (
                      /* Real Image (when provided by owner) */
                      <img
                        src={activeImage}
                        alt={isAfter ? project.afterAlt : project.beforeAlt}
                        loading="lazy"
                        width={600}
                        height={375}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        onError={(e) => {
                          // Fallback to null in case file is missing
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      /* Styled SVG / CSS Placeholder (Zero dependency on external images) */
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                        {isAfter ? (
                          /* AFTER: High-Gloss Mirror Reflection SVG Representation */
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F] via-[#1E1E1E] to-[#121212]">
                            {/* Mirror reflection gloss lines */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:16px_16px]" />
                            <div className="absolute -inset-x-20 top-1/3 h-16 bg-gradient-to-r from-transparent via-[#FFE000]/25 to-transparent rotate-12 blur-md" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                            {/* Crisp Sparkle Graphic */}
                            <div className="absolute top-6 right-8">
                              <Sparkles className="w-8 h-8 text-[#FFE000] drop-shadow-[0_0_8px_rgba(255,224,0,0.8)] animate-pulse" />
                            </div>

                            {/* Status Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                              <div className="w-12 h-12 rounded-full bg-[#FFE000]/15 border border-[#FFE000]/60 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,224,0,0.3)]">
                                <Sparkles className="w-6 h-6 text-[#FFE000]" />
                              </div>
                              <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#FFE000] mb-1">
                                {project.afterLabel}
                              </span>
                              <span className="text-xs text-neutral-300 font-medium">
                                Showroom Mirror Finish &amp; UV Seal
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* BEFORE: Swirl Marks & Scratched Panel SVG Representation */
                          <div className="absolute inset-0 bg-[#161616]">
                            {/* Swirl Mark SVG Simulation */}
                            <svg
                              className="absolute inset-0 w-full h-full opacity-40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="50%" cy="50%" r="40" fill="none" stroke="#666666" strokeWidth="1" strokeDasharray="4 6" />
                              <circle cx="50%" cy="50%" r="80" fill="none" stroke="#555555" strokeWidth="1" strokeDasharray="6 8" />
                              <circle cx="50%" cy="50%" r="120" fill="none" stroke="#444444" strokeWidth="1.2" strokeDasharray="5 7" />
                              <path d="M 0,20 Q 150,80 300,20" stroke="#777777" strokeWidth="1" fill="none" opacity="0.6" />
                              <path d="M 50,150 Q 200,80 400,160" stroke="#555555" strokeWidth="1" fill="none" opacity="0.6" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                            {/* Status Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                              <div className="w-12 h-12 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mb-3">
                                <SlidersHorizontal className="w-5 h-5 text-neutral-400" />
                              </div>
                              <span className="text-xs uppercase tracking-widest font-mono font-bold text-neutral-400 mb-1">
                                {project.beforeLabel}
                              </span>
                              <span className="text-xs text-neutral-400 font-medium">
                                Heavy Swirl Marks &amp; Oxidation
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Interactive Switcher Buttons */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                      <div className="flex p-1 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700/80 shadow-lg">
                        <button
                          type="button"
                          onClick={() => toggleTile(project.id, 'before')}
                          className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                            !isAfter
                              ? 'bg-[#2A2A2A] text-white shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          Before
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleTile(project.id, 'after')}
                          className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                            isAfter
                              ? 'bg-[#FFE000] text-black shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          After
                        </button>
                      </div>

                      {/* State pill */}
                      <span
                        className={`text-[10px] font-mono uppercase font-bold px-2 py-1 rounded bg-black/80 border ${
                          isAfter
                            ? 'text-[#FFE000] border-[#FFE000]/40'
                            : 'text-neutral-400 border-neutral-700'
                        }`}
                      >
                        {isAfter ? 'Finished Result' : 'Pre-Treatment'}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Footer */}
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FFE000] block mb-1">
                      {project.category}
                    </span>
                    <h4
                      className="text-lg font-bold uppercase text-white mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row (Displaying EXACTLY 5.0 Google rating, 4 Google reviews, and 1 editable value) */}
        <div className="mt-20 pt-10 border-t border-[#1C1C1C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1: 5.0 Google Rating */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222] text-center flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-[#FFE000] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFE000] text-[#FFE000]" />
                ))}
              </div>
              <span
                className="text-4xl sm:text-5xl font-black text-white tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {SITE_CONFIG.googleRating}
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Google Rating
              </p>
            </div>

            {/* Stat 2: 4 Google Reviews */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222] text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-[#FFE000]" />
              </div>
              <span
                className="text-4xl sm:text-5xl font-black text-[#FFE000] tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {SITE_CONFIG.reviewCount}
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Google Reviews
              </p>
            </div>

            {/* Stat 3: 1 Editable Value (Years in business / Customer Focus) */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222] text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-[#22E04A]" />
              </div>
              <span
                className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {SITE_CONFIG.establishedYear}
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Casebrook, Christchurch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
