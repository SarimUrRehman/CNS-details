/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Sparkles,
  Shield,
  Car,
  Droplets,
  Sun,
  Lightbulb,
  Wrench,
  Wind,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SERVICES_CONFIG, ServiceItem } from '../config/siteConfig';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    const iconClass = 'w-6 h-6 text-[#FFE000]';
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'car':
        return <Car className={iconClass} />;
      case 'droplets':
        return <Droplets className={iconClass} />;
      case 'sun':
        return <Sun className={iconClass} />;
      case 'lightbulb':
        return <Lightbulb className={iconClass} />;
      case 'wrench':
        return <Wrench className={iconClass} />;
      case 'wind':
        return <Wind className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const handleEnquire = (e: React.MouseEvent<HTMLAnchorElement>, serviceTitle: string) => {
    e.preventDefault();
    onSelectService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#1C1C1C] relative"
    >
      {/* Background Accent Subtle Glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFE000]/5 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFE000]" />
            <span>Comprehensive Detailing Menu</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Specialist Services for Every Vehicle
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            From single-stage gloss enhancements to multi-stage paint correction and ultra-durable
            ceramic protection, our treatments restore and protect your investment.
          </p>

          {/* Prompt Required Notice: Services shown are examples */}
          <div className="mt-5 p-3.5 rounded-lg bg-[#141414] border border-[#262626] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#FFE000] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong className="text-white">Note for Owner:</strong> Services shown are examples,
              so edit them in the config to match what you offer.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_CONFIG.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#FFE000]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
            >
              {/* Subtle top yellow accent bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFE000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

              <div>
                {/* Header: Icon & Optional Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] group-hover:bg-[#252525] border border-[#2A2A2A] group-hover:border-[#FFE000]/40 flex items-center justify-center transition-colors shadow-inner">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="text-xs font-mono text-neutral-500 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#FFE000] transition-colors mb-2 leading-snug"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </h3>

                {/* One-line Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Footer: Request a Quote & Enquire Link */}
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Request a quote
                </span>

                <a
                  href="#contact"
                  onClick={(e) => handleEnquire(e, service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFE000] group-hover:text-white transition-colors cursor-pointer"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note on Quotes */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#141414] border border-[#222222] max-w-2xl mx-auto">
          <p className="text-sm text-neutral-300">
            Need a custom package or unsure which stage of paint correction your vehicle requires?{' '}
            <a
              href="#contact"
              onClick={(e) => handleEnquire(e, 'Custom Detailing Package')}
              className="text-[#FFE000] underline font-semibold hover:text-white transition-colors"
            >
              Get in touch for a bespoke quote
            </a>{' '}
            or visit us at 18 Millhaven Place.
          </p>
        </div>
      </div>
    </section>
  );
};
