/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  Navigation,
  Instagram,
  Facebook,
  AlertCircle,
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_CONFIG } from '../config/siteConfig';

interface ContactBookingProps {
  preSelectedService?: string;
}

export const ContactBooking: React.FC<ContactBookingProps> = ({
  preSelectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    vehicleInfo: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Sync service pre-selection when passed from Services section
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: preSelectedService,
      }));
    }
  }, [preSelectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9+() \-\.]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 027 303 4885).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a detailing service.';
    }

    if (!formData.vehicleInfo.trim()) {
      newErrors.vehicleInfo = 'Please enter vehicle make, model, and year.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      vehicleInfo: '',
      preferredDate: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-[#1C1C1C] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFE000]" />
            <span>Connect &amp; Book</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Request a Free Quote &amp; Booking
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Fill in your details below for an upfront quote tailored to your vehicle, or reach
            out directly via call or message. We look forward to perfecting your car.
          </p>
        </div>

        {/* Two-Column Layout (Stacked on mobile, side-by-side on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Booking Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#242424] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            {isSubmitted ? (
              /* Success State Display */
              <div className="py-12 px-4 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FFE000]/15 border-2 border-[#FFE000] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(255,224,0,0.4)]">
                  <CheckCircle className="w-8 h-8 text-[#FFE000]" />
                </div>

                <h3
                  className="text-2xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Quote Request Received!
                </h3>

                <p className="text-neutral-300 text-sm max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have received
                  your enquiry for{' '}
                  <span className="text-[#FFE000] font-semibold">{formData.serviceType}</span> on your{' '}
                  <span className="text-white font-medium">{formData.vehicleInfo}</span>. We will review
                  your vehicle requirements and contact you within 24 hours.
                </p>

                <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] w-full max-w-md text-left mb-6 text-xs text-neutral-400 space-y-1.5">
                  <p><strong className="text-neutral-200">Phone:</strong> {formData.phone}</p>
                  <p><strong className="text-neutral-200">Email:</strong> {formData.email}</p>
                  {formData.preferredDate && (
                    <p><strong className="text-neutral-200">Preferred Date:</strong> {formData.preferredDate}</p>
                  )}
                  {formData.message && (
                    <p><strong className="text-neutral-200">Notes:</strong> {formData.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FFE000] text-black font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(255,224,0,0.3)] hover:bg-[#FFE838] transition-all"
                  >
                    <Phone className="w-4 h-4 fill-black stroke-black" />
                    <span>Call Now ({SITE_CONFIG.phoneDisplay})</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-neutral-200 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Lead Booking Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-[#242424] pb-4 mb-4">
                  <h3
                    className="text-xl font-bold uppercase text-white tracking-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Vehicle &amp; Contact Details
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Provide your car information so we can prepare an accurate recommendation.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Your Full Name <span className="text-[#FFE000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border ${
                        errors.name ? 'border-red-500' : 'border-[#303030] focus:border-[#FFE000]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Phone Number <span className="text-[#FFE000]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 027 123 4567"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border ${
                        errors.phone ? 'border-red-500' : 'border-[#303030] focus:border-[#FFE000]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Email Address <span className="text-[#FFE000]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border ${
                      errors.email ? 'border-red-500' : 'border-[#303030] focus:border-[#FFE000]'
                    } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Dropdown & Vehicle Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Service Required <span className="text-[#FFE000]">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border ${
                        errors.serviceType
                          ? 'border-red-500'
                          : 'border-[#303030] focus:border-[#FFE000]'
                      } text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES_CONFIG.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Detailing Package">Custom Detailing Package</option>
                      <option value="General Inspection &amp; Advice">General Inspection &amp; Advice</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.serviceType}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleInfo"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Vehicle Make / Model / Year <span className="text-[#FFE000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="vehicleInfo"
                      name="vehicleInfo"
                      value={formData.vehicleInfo}
                      onChange={handleChange}
                      placeholder="e.g., 2021 BMW M3 Black"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border ${
                        errors.vehicleInfo
                          ? 'border-red-500'
                          : 'border-[#303030] focus:border-[#FFE000]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors`}
                    />
                    {errors.vehicleInfo && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.vehicleInfo}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#303030] focus:border-[#FFE000] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors [color-scheme:dark]"
                  />
                </div>

                {/* Message / Paint Condition Notes */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Vehicle Condition / Specific Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about swirl marks, scratch depth, pet hair, or any special requests..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#303030] focus:border-[#FFE000] text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFE000] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#FFE000] hover:bg-[#FFE838] active:bg-[#E6CA00] text-black font-extrabold text-base tracking-wide transition-all shadow-[0_0_20px_rgba(255,224,0,0.35)] hover:shadow-[0_0_30px_rgba(255,224,0,0.6)] flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FFE000] cursor-pointer"
                >
                  <Send className="w-5 h-5 fill-black stroke-black" />
                  <span>Send Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact, Hours, Map, Socials (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Actions Panel (Call, Text, Email) */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424] space-y-4">
              <h3
                className="text-lg font-bold uppercase text-white tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Direct Contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Call Button */}
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] hover:border-[#FFE000]/60 transition-colors group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FFE000]/15 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#FFE000]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                      Call Direct
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-[#FFE000] transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Text Message Button */}
                <a
                  href={SITE_CONFIG.smsHref}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] hover:border-[#FFE000]/60 transition-colors group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FFE000]/15 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#FFE000]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                      SMS / Text
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-[#FFE000] transition-colors">
                      Send Text
                    </span>
                  </div>
                </a>
              </div>

              {/* Email Button */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] hover:border-[#FFE000]/60 transition-colors group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FFE000]/15 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#FFE000]" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                    Email Enquiries
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-[#FFE000] transition-colors truncate block">
                    {SITE_CONFIG.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Address & Hours Card */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424] space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFE000] shrink-0 mt-0.5" />
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-neutral-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Workshop Location
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {SITE_CONFIG.streetAddress}, {SITE_CONFIG.suburb}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {SITE_CONFIG.city} {SITE_CONFIG.postcode}, {SITE_CONFIG.country}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-[#222222]">
                <Clock className="w-5 h-5 text-[#FFE000] shrink-0 mt-0.5" />
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-neutral-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Operating Hours (Placeholder)
                  </h4>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    {SITE_CONFIG.hours}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {SITE_CONFIG.hoursSunday}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Social Channels:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#FFE000] flex items-center justify-center text-neutral-300 hover:text-[#FFE000] transition-colors"
                    aria-label="Instagram Placeholder"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#FFE000] flex items-center justify-center text-neutral-300 hover:text-[#FFE000] transition-colors"
                    aria-label="Facebook Placeholder"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Keyless Google Maps Embed with Graceful Fallback Card & Get Directions */}
            <div className="rounded-2xl bg-[#141414] border border-[#242424] overflow-hidden shadow-lg flex flex-col">
              <div className="relative aspect-[16/9] w-full bg-[#181818] overflow-hidden">
                {!iframeError ? (
                  <iframe
                    title="CNS Detailing Christchurch Location Map"
                    src={SITE_CONFIG.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setIframeError(true)}
                    className="w-full h-full"
                  />
                ) : (
                  /* Styled Fallback Card when Iframe fails or is blocked */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1A1A1A]">
                    <MapPin className="w-8 h-8 text-[#FFE000] mb-2" />
                    <p className="text-sm font-bold text-white mb-1">
                      18 Millhaven Place, Casebrook
                    </p>
                    <p className="text-xs text-neutral-400 mb-3">
                      Christchurch 8051, New Zealand
                    </p>
                  </div>
                )}
              </div>

              {/* Get Directions Button */}
              <div className="p-4 bg-[#141414] border-t border-[#242424] flex items-center justify-between">
                <div className="text-xs text-neutral-300">
                  <span className="font-semibold block text-white">Workshop Navigation</span>
                  <span>Casebrook, Christchurch</span>
                </div>

                <a
                  href={SITE_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFE000] hover:bg-[#FFE838] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000]"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
