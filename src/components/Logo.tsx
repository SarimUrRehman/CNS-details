/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LogoProps {
  variant?: 'full' | 'compact' | 'emblem-only' | 'footer';
  className?: string;
  onClick?: () => void;
}

/**
 * Recreates the CNS Detailing Christchurch logo as a pristine inline SVG.
 * Features:
 * - Yellow crescent ring (#FFE000) with thin white inner edge (#FFFFFF)
 * - Glossy black circle with specular reflection
 * - Yellow sports car silhouette with orange trim (#FFA800) and tiny lime green window dot (#22E04A)
 * - Bold yellow wordmark "CNS DETAILING" with soft glow
 * - "CHRISTCHURCH" in smaller uppercase lettering
 * - Tagline "GET PERFECTION WITH PAINT CORRECTION & PROTECTION"
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${className}`}
      role="banner"
      aria-label="CNS Detailing Christchurch Logo"
    >
      {/* Dynamic Vector Emblem */}
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 100 100"
          className={
            variant === 'compact'
              ? 'w-10 h-10 md:w-11 md:h-11'
              : variant === 'emblem-only'
              ? 'w-16 h-16'
              : 'w-12 h-12 md:w-14 md:h-14'
          }
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glossy Black Circle Gradient */}
            <radialGradient id="glossCircle" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#282828" />
              <stop offset="45%" stopColor="#121212" />
              <stop offset="100%" stopColor="#040404" />
            </radialGradient>

            {/* Specular White Shine Gradient */}
            <linearGradient id="specularGleam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Yellow Crescent Gradient */}
            <linearGradient id="crescentYellow" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FFF275" />
              <stop offset="50%" stopColor="#FFE000" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>

            {/* Car Body Highlight */}
            <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE000" />
              <stop offset="70%" stopColor="#FFEA45" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>

            {/* Soft Ambient Glow Filter */}
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Yellow Crescent Ring (Sweeps around back of glossy circle) */}
          <path
            d="M 50,6 
               A 44,44 0 1,1 12,68 
               A 44,44 0 0,1 30,12 
               L 33,18 
               A 38,38 0 0,0 18,65 
               A 38,38 0 1,0 52,12 
               Z"
            fill="url(#crescentYellow)"
            filter="drop-shadow(0 0 4px rgba(255, 224, 0, 0.45))"
          />

          {/* Thin White Inner Crescent Edge */}
          <path
            d="M 33,18 
               A 38,38 0 0,0 18,65 
               A 38,38 0 1,0 52,12"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Glossy Black Core Circle */}
          <circle cx="50" cy="50" r="34" fill="url(#glossCircle)" stroke="#222222" strokeWidth="1" />

          {/* Top Specular Arc Reflex */}
          <path
            d="M 24,42 
               A 30,30 0 0,1 76,42 
               A 29,20 0 0,0 24,42 
               Z"
            fill="url(#specularGleam)"
          />

          {/* Dynamic Speed Streaks Behind the Car */}
          <line x1="16" y1="52" x2="34" y2="52" stroke="#FFE000" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
          <line x1="22" y1="56" x2="40" y2="56" stroke="#FFA800" strokeWidth="1.2" strokeOpacity="0.6" />
          <line x1="68" y1="56" x2="84" y2="56" stroke="#FFE000" strokeWidth="1.5" strokeOpacity="0.5" />

          {/* Stylised Yellow Sports Car Silhouette */}
          {/* Main Coupe Aerodynamic Body Profile */}
          <path
            d="M 22,58 
               C 23,55 26,52 30,52
               C 34,52 37,55 38,58
               L 62,58
               C 63,55 66,52 70,52
               C 74,52 77,55 78,58
               L 84,57
               C 85,55 83,52 78,50
               C 74,48 68,46 64,46
               L 54,41
               C 49,38 41,38 35,42
               L 27,47
               C 22,50 18,53 17,56
               C 16,58 19,58 22,58
               Z"
            fill="url(#carBodyGrad)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
          />

          {/* Cockpit / Tinted Window Area */}
          <path
            d="M 37,43
               C 42,40 47,40 52,42
               L 61,47
               L 34,47
               C 35,45 36,44 37,43
               Z"
            fill="#0A0A0A"
          />

          {/* Tiny Lime Green Detailing Dot (#22E04A) in Window */}
          <circle cx="49" cy="44" r="1.3" fill="#22E04A" />

          {/* Orange Aerodynamic Splitter & Trim */}
          <path
            d="M 18,57.5 L 82,57.5 L 83,59 L 17,59 Z"
            fill="#FFA800"
          />

          {/* Wheels / Alloy Rim Centers */}
          {/* Front Wheel */}
          <circle cx="70" cy="58" r="5.5" fill="#141414" stroke="#FFE000" strokeWidth="1.5" />
          <circle cx="70" cy="58" r="2.2" fill="#FFA800" />
          
          {/* Rear Wheel */}
          <circle cx="34" cy="58" r="5.5" fill="#141414" stroke="#FFE000" strokeWidth="1.5" />
          <circle cx="34" cy="58" r="2.2" fill="#FFA800" />

          {/* Headlight Flare */}
          <polygon points="83,54 88,55 83,56" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-2 flex-wrap sm:flex-nowrap">
            {/* Wordmark: CNS DETAILING */}
            <span
              className="text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-tight text-[#FFE000] drop-shadow-[0_0_12px_rgba(255,224,0,0.4)]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              CNS DETAILING
            </span>

            {/* City Lockup: CHRISTCHURCH */}
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#FFE000]/90"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              CHRISTCHURCH
            </span>
          </div>

          {/* Tagline Lockup (Visible on Full & Footer variants) */}
          {(variant === 'full' || variant === 'footer') && (
            <span
              className="hidden sm:block text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-neutral-300 mt-0.5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {SITE_CONFIG.tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
