/**
 * ============================================================================
 * CNS DETAILING CHRISTCHURCH - MASTER SITE CONFIGURATION
 * ============================================================================
 * 
 * All business details, contact information, services, reviews, benefits,
 * color tokens, and asset paths are defined in this single configuration file.
 * 
 * HOW TO EDIT:
 * 1. Text & Contact: Modify strings below (phone, email, hours, address, etc.)
 * 2. Services: Add, remove, or modify items in `SERVICES_CONFIG`
 * 3. Photos: Follow the ASSET INSTRUCTIONS below to replace SVG placeholders
 *    with your own real car photos without breaking the layout.
 * 
 * ============================================================================
 * ASSETS TO UPLOAD (OPTIONAL REAL PHOTO REPLACEMENTS):
 * ----------------------------------------------------------------------------
 * If you have real project photos, place them in the `/public/images/` directory
 * and update the `imageSrc` fields in `BEFORE_AFTER_CONFIG` below:
 * 
 * File 1: /public/images/before-1.webp  (Recommended size: 1200x800px, 4:3 or 16:9)
 * File 2: /public/images/after-1.webp   (Recommended size: 1200x800px, 4:3 or 16:9)
 * File 3: /public/images/before-2.webp  (Recommended size: 1200x800px, 4:3 or 16:9)
 * File 4: /public/images/after-2.webp   (Recommended size: 1200x800px, 4:3 or 16:9)
 * File 5: /public/images/before-3.webp  (Recommended size: 1200x800px, 4:3 or 16:9)
 * File 6: /public/images/after-3.webp   (Recommended size: 1200x800px, 4:3 or 16:9)
 * 
 * When set to null, the site displays a premium interactive SVG/CSS placeholder
 * with swirl vs mirror shine gloss simulation that never breaks.
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: 'sparkles' | 'shield' | 'car' | 'droplets' | 'sun' | 'lightbulb' | 'wrench' | 'wind';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  // Set to relative string paths when files are uploaded, e.g. './images/before-1.webp'
  beforeImageSrc: string | null;
  afterImageSrc: string | null;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  serviceBadge: string;
  isPlaceholderNotice: boolean;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export const BRAND_COLORS = {
  blackPure: '#000000',
  blackDeep: '#0A0A0A',
  graphiteDark: '#141414',
  graphiteCard: '#1C1C1C',
  graphiteBorder: '#2A2A2A',
  accentYellow: '#FFE000',
  accentOrange: '#FFA800',
  accentGreen: '#22E04A',
  textWhite: '#FFFFFF',
  textMuted: '#B5B5B5',
  lightSection: '#F5F5F2',
  lightSectionText: '#141414',
} as const;

export const SITE_CONFIG = {
  // Business Identity
  businessNameFull: 'CNS Detailing Christchurch',
  businessNameShort: 'CNS Detailing',
  cityRegion: 'Christchurch, New Zealand',
  locality: 'Casebrook',
  tagline: 'Get Perfection with Paint Correction & Protection',
  category: 'Car Wash & Car Detailing',
  establishedYear: 'Years in Business: [edit]', // Editable value per user prompt

  // Contact Details
  phoneDisplay: '027 303 4885',
  phoneTel: '+64273034885',
  phoneHref: 'tel:+64273034885',
  smsHref: 'sms:+64273034885',
  email: 'info@yourdomain.com', // Placeholder
  hours: 'Mon – Sat: 8:00 AM – 5:00 PM', // Placeholder
  hoursSunday: 'Sunday: Closed / By Appointment',

  // Physical Address
  streetAddress: '18 Millhaven Place',
  suburb: 'Casebrook',
  city: 'Christchurch',
  postcode: '8051',
  country: 'New Zealand',
  fullAddress: '18 Millhaven Place, Casebrook, Christchurch 8051, New Zealand',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=18+Millhaven+Place+Casebrook+Christchurch+8051&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=18+Millhaven+Place+Casebrook+Christchurch+8051+New+Zealand',

  // Google Rating Details (Exact & Honest)
  googleRating: '5.0',
  reviewCount: 4,
  ratingDisplay: '5.0 ★ (4 Google Reviews)',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=CNS+Detailing+Christchurch+Casebrook', // Editable URL

  // Social Links Placeholders
  socials: {
    instagram: 'https://instagram.com/yourhandle', // Placeholder
    facebook: 'https://facebook.com/yourhandle',   // Placeholder
    tiktok: 'https://tiktok.com/@yourhandle',      // Placeholder
  },
};

export const SERVICES_CONFIG: ServiceItem[] = [
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    description: 'Multi-stage machine compounding and polishing to eliminate swirls, scratches, and oxidation.',
    badge: 'Speciality',
    iconName: 'sparkles',
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating & Paint Protection',
    description: 'Ultra-hydrophobic chemical ceramic shield delivering high gloss and multi-year UV & chemical defence.',
    badge: 'Protection',
    iconName: 'shield',
  },
  {
    id: 'full-interior-detail',
    title: 'Full Interior Detail',
    description: 'Deep extraction shampoo, steam sanitisation, leather reconditioning, and meticulous cabin detailing.',
    iconName: 'car',
  },
  {
    id: 'exterior-wash',
    title: 'Exterior Wash & Hand Dry',
    description: 'Two-bucket safe wash, pH-neutral foam bath, wheel & brake dust de-ironing, and soft microfibre dry.',
    iconName: 'droplets',
  },
  {
    id: 'polish-and-wax',
    title: 'Polish & Wax',
    description: 'Single-stage gloss enhancement topped with premium carnauba paste or synthetic sealant for deep shine.',
    iconName: 'sun',
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Restoration',
    description: 'Wet-sanding yellowed, cloudy lenses back to crystal optical clarity with durable UV clear sealing.',
    iconName: 'lightbulb',
  },
  {
    id: 'engine-bay-cleaning',
    title: 'Engine Bay Cleaning',
    description: 'Careful degreasing, steam cleaning, and satin UV dressing of all plastic hoses and under-bonnet covers.',
    iconName: 'wrench',
  },
  {
    id: 'odour-stain-removal',
    title: 'Odour & Stain Removal',
    description: 'Targeted ozone air treatment, biological enzyme stain removal, and pet hair eradication.',
    iconName: 'wind',
  },
];

export const WHY_CHOOSE_US_CONFIG: {
  leadParagraph: string;
  benefits: BenefitItem[];
} = {
  leadParagraph:
    'At CNS Detailing, we treat every vehicle that enters our Casebrook workshop with surgical precision. Using professional-grade rotary and dual-action polishers alongside world-leading nano-ceramic coatings, we restore faded paintwork to a mirror-like gloss and safeguard your car against harsh New Zealand UV, road grime, and Canterbury weather.',
  benefits: [
    {
      id: 'specialists',
      title: 'Paint Correction Specialists',
      description: 'Advanced paint depth measurement and multi-step polishing to safely remove up to 90%+ of paint defects.',
    },
    {
      id: 'products',
      title: 'Quality Protection Products',
      description: 'We exclusively apply tested ceramic coatings, synthetic sealants, and pH-neutral car-care formulations.',
    },
    {
      id: 'attention',
      title: 'Attention to Detail',
      description: 'From badge crevices to wheel barrels and exhaust tips, no corner is rushed or left untouched.',
    },
    {
      id: 'quotes',
      title: 'Clear Quotes',
      description: 'Transparent upfront advice with no hidden fees. You get the exact scope tailored to your car’s condition.',
    },
    {
      id: 'friendly',
      title: 'Friendly Local Service',
      description: 'Proudly locally owned and operated right here in Christchurch with personalised, passionate service.',
    },
    {
      id: 'location',
      title: 'Convenient Casebrook Location',
      description: 'Easily accessible at 18 Millhaven Place in Casebrook with secure off-street workshop vehicle storage.',
    },
  ],
};

export const BEFORE_AFTER_CONFIG: BeforeAfterItem[] = [
  {
    id: 'project-1',
    title: 'Stage 2 Paint Correction',
    category: 'Swirl & Scratch Removal',
    description: 'Severe car-wash swirl marks and micro-marring removed on German black clear coat, restoring mirror depth.',
    beforeImageSrc: null, // Replace with './images/before-1.webp' when ready
    afterImageSrc: null,  // Replace with './images/after-1.webp' when ready
    beforeAlt: 'Before paint correction showing heavy swirls and spiderweb scratches on dark car paint',
    afterAlt: 'After paint correction showing deep mirror-like gloss with zero swirl marks',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
  },
  {
    id: 'project-2',
    title: 'Ceramic Coating Application',
    category: 'Paint Protection & Hydrophobics',
    description: 'Permanent ceramic coating applied to body panels and wheels, locking in glass-like gloss and water beading.',
    beforeImageSrc: null, // Replace with './images/before-2.webp' when ready
    afterImageSrc: null,  // Replace with './images/after-2.webp' when ready
    beforeAlt: 'Before ceramic coating showing flat, untreated paintwork prone to water spots',
    afterAlt: 'After ceramic coating showing liquid shine reflection and ultra hydrophobic finish',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
  },
  {
    id: 'project-3',
    title: 'Full Interior Rejuvenation',
    category: 'Leather & Deep Carpet Extraction',
    description: 'Complete cabin reset including matte leather degreasing, steam sanitisation, and fabric shampooing.',
    beforeImageSrc: null, // Replace with './images/before-3.webp' when ready
    afterImageSrc: null,  // Replace with './images/after-3.webp' when ready
    beforeAlt: 'Before interior detail showing soiled upholstery and dusty dashboard surfaces',
    afterAlt: 'After interior detail showing factory-fresh satin finish and pristine carpets',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
  },
];

export const REVIEWS_CONFIG: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Google Reviewer [Replace with client name]',
    rating: 5,
    timeAgo: 'Recent review',
    text: 'Amazing paint correction and detailing on my vehicle! Took out all the harsh swirls and left a showroom reflection. 10/10 recommend CNS Detailing to anyone in Christchurch.',
    serviceBadge: 'Paint Correction',
    isPlaceholderNotice: true,
  },
  {
    id: 'review-2',
    author: 'Google Reviewer [Replace with client name]',
    rating: 5,
    timeAgo: 'Recent review',
    text: 'The ceramic coating finish is unbelievable. Water rolls right off and the car stays clean so much longer. Professional, prompt, and top-tier workmanship at the Casebrook workshop.',
    serviceBadge: 'Ceramic Coating',
    isPlaceholderNotice: true,
  },
  {
    id: 'review-3',
    author: 'Google Reviewer [Replace with client name]',
    rating: 5,
    timeAgo: 'Recent review',
    text: 'Had a full interior and exterior detail done. My car looks brand new inside and out, smells great and every nook was spotless. Best car detailing in Christchurch!',
    serviceBadge: 'Full Detail',
    isPlaceholderNotice: true,
  },
];
