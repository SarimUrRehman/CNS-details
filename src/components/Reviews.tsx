/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, REVIEWS_CONFIG } from '../config/siteConfig';

export const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#1C1C1C] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Summary Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFE000] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFE000]" />
            <span>Customer Feedback</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Honest 5-Star Reviews
          </h2>

          {/* Rating Summary Block */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center gap-6 shadow-xl w-full max-w-xl justify-center">
            {/* Score */}
            <div className="flex items-baseline gap-2">
              <span
                className="text-5xl font-black text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {SITE_CONFIG.googleRating}
              </span>
              <span className="text-xl font-bold text-[#FFE000]">/ 5.0</span>
            </div>

            <div className="h-10 w-px bg-[#2A2A2A] hidden sm:block" />

            {/* Stars & Count */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-[#FFE000] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFE000] text-[#FFE000]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-neutral-300">
                Based on <span className="text-[#FFE000] font-bold">{SITE_CONFIG.reviewCount}</span> Google reviews
              </p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REVIEWS_CONFIG.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#FFE000]/40 transition-colors flex flex-col justify-between relative group"
            >
              {/* Owner Notice Tag if placeholder */}
              {review.isPlaceholderNotice && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1C1C] border border-[#2E2E2E] text-[11px] font-mono text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFE000]" />
                  <span>Placeholder – Editable in config</span>
                </div>
              )}

              <div>
                {/* Star Rating */}
                <div className="flex text-[#FFE000] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFE000] text-[#FFE000]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                <div>
                  <h4
                    className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-1.5"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22E04A]" />
                  </h4>
                  <span className="text-xs text-neutral-500">{review.timeAgo}</span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFE000] bg-[#1E1E1E] px-2.5 py-1 rounded border border-[#2B2B2B]">
                  {review.serviceBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Read our reviews on Google */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href={SITE_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] active:bg-[#181818] text-white hover:text-[#FFE000] font-bold text-base tracking-wide border border-[#333333] hover:border-[#FFE000]/60 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(255,224,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE000]"
          >
            <MessageSquareQuote className="w-5 h-5 text-[#FFE000]" />
            <span>Read our reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#FFE000]" />
          </a>

          <p className="text-xs text-neutral-500 mt-3">
            Google rating is authentic and uninflated ({SITE_CONFIG.ratingDisplay}).
          </p>
        </div>
      </div>
    </section>
  );
};
