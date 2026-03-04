/**
 * MEDVOCATES RCM - CONSTANTS
 * Company information and navigation structure
 */

// ============================================
// COMPANY INFORMATION
// ============================================
export const COMPANY_INFO = {
  name: 'MedVocates RCM',
  tagline: 'Trusted Medical Billing & Virtual Assistance for US Healthcare Providers',
  phone: '+1 888 597 3455',
  email: 'info@medvocatercm.com',
  address: {
    street: 'UG5 and UG6 Faisal Rashid Minhas Road',
    city: 'Karachi',
    state: 'Sindh',
    zip: '75260',
    country: 'Pakistan'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/medvocate-rcm',
    instagram: 'https://www.instagram.com/medvocates_rcm'
  },
  hours: {
    weekday: 'Mon-Fri: 8am - 6pm',
    timezone: 'All US Time Zones'
  }
};

// ============================================
// NAVIGATION STRUCTURE
// Dark Luxury Theme Format
// ============================================
export const NAVIGATION = {
  // Solutions Dropdown (Primary Focus)
  solutions: [
    {
      label: 'Virtual Assistance',
      path: '/solutions/virtual-assistance',
      featured: true, // ★ MAIN SERVICE
      description: 'US-based healthcare virtual assistants'
    },
    {
      label: 'Medical Billing Services',
      path: '/solutions/medical-billing',
      description: 'Complete revenue cycle management'
    },
    {
      label: 'Provider Credentialing',
      path: '/solutions/credentialing',
      description: 'Streamlined credentialing process'
    },
    {
      label: 'DME Setup Services',
      path: '/solutions/dme-setup',
      description: 'Complete DME business setup'
    },
    {
      label: 'Website Development',
      path: '/solutions/website-development',
      badge: 'NEW',
      description: 'HIPAA-compliant medical websites'
    },
    {
      label: 'Social Media Marketing',
      path: '/solutions/social-media-marketing',
      badge: 'NEW',
      description: 'Healthcare social media management'
    },
    {
      label: 'Google Business Setup',
      path: '/solutions/google-business-setup',
      badge: 'NEW',
      description: 'Local SEO optimization'
    },
    {
      label: 'Graphic Design Services',
      path: '/solutions/graphic-design',
      badge: 'NEW',
      description: 'Professional healthcare design'
    }
  ],

  // Specialties Dropdown
  specialties: [
    {
      label: 'DME',
      path: '/specialties/dme',
      description: 'Durable Medical Equipment'
    },
    {
      label: 'Pharmacy',
      path: '/specialties/pharmacy',
      description: 'Retail & Specialty Pharmacy'
    },
    {
      label: 'Laboratories',
      path: '/specialties/laboratories',
      description: 'Clinical & Reference Labs'
    },
    {
      label: 'Internal Medicine',
      path: '/specialties/internal-medicine',
      description: 'Internal Medicine Practices'
    },
    {
      label: 'Family Medicine',
      path: '/specialties/family-medicine',
      description: 'Family Practice Support'
    },
    {
      label: 'Gastroenterology',
      path: '/specialties/gastroenterology',
      description: 'GI & Endoscopy Centers'
    },
    {
      label: 'Wound Care',
      path: '/specialties/wound-care',
      description: 'Wound Care & HBO Therapy'
    },
    {
      label: 'ASC',
      path: '/specialties/asc',
      description: 'Ambulatory Surgery Centers'
    },
    {
      label: 'Ophthalmology',
      path: '/specialties/ophthalmology',
      description: 'Eye Care & Surgery'
    },
    {
      label: 'Home Health',
      path: '/specialties/home-health',
      description: 'Home Health Agencies'
    },
    {
      label: 'Dental',
      path: '/specialties/dental',
      description: 'Dental Practice Support'
    }
  ],

  // Company Dropdown
  company: [
    {
      label: 'Blogs',
      path: '/blogs',
      description: 'Latest insights & updates'
    },
    {
      label: 'Contact',
      path: '/contact',
      description: 'Get in touch with us'
    },
    {
      label: 'HIPAA Compliance',
      path: '/hipaa-compliance',
      description: 'Security & compliance'
    }
  ],

  // CTA Button
  cta: {
    label: 'Book Appointment',
    external: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/medvocates',
    variant: 'primary'
  }
};

// ============================================
// SERVICE CATEGORIES
// ============================================
export const SERVICE_CATEGORIES = {
  billing: {
    name: 'Medical Billing',
    icon: 'faFileInvoiceDollar',
    color: 'gold'
  },
  virtual: {
    name: 'Virtual Assistance',
    icon: 'faUserMd',
    color: 'teal'
  },
  credentialing: {
    name: 'Credentialing',
    icon: 'faClipboardCheck',
    color: 'blue'
  },
  digital: {
    name: 'Digital Marketing',
    icon: 'faChartLine',
    color: 'purple'
  }
};

// ============================================
// BLOG CATEGORIES
// ============================================
export const BLOG_CATEGORIES = [
  'Medical Billing',
  'Virtual Assistance',
  'Credentialing',
  'Industry News',
  'Practice Management',
  'Compliance',
  'Technology',
  'Case Studies'
];

// ============================================
// FOOTER SECTIONS
// ============================================
export const FOOTER_SECTIONS = {
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'Virtual Assistance', path: '/solutions/virtual-assistance' },
      { label: 'Medical Billing', path: '/solutions/medical-billing' },
      { label: 'Credentialing', path: '/solutions/credentialing' },
      { label: 'DME Setup', path: '/solutions/dme-setup' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Who We Are', path: '/who-we-are' },
      { label: 'Contact', path: '/contact' },
      { label: 'HIPAA Compliance', path: '/hipaa-compliance' },
      { label: 'Blogs', path: '/blogs' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Cookie Policy', path: '/cookie-policy' }
    ]
  }
};

// ============================================
// SERVICES FOR HOMEPAGE
// ============================================
export const SERVICES = [
  {
    id: 1,
    title: 'Virtual Assistance',
    slug: 'virtual-assistance',
    shortDesc: 'US-based healthcare virtual assistants for appointment scheduling, patient communication, and administrative support.',
    icon: 'faUserMd',
    featured: true
  },
  {
    id: 2,
    title: 'Medical Billing Services',
    slug: 'medical-billing',
    shortDesc: 'Complete revenue cycle management with 98% clean claim rate and faster collections.',
    icon: 'faFileInvoiceDollar',
    featured: true
  },
  {
    id: 3,
    title: 'Provider Credentialing',
    slug: 'credentialing',
    shortDesc: 'Streamlined credentialing process with 90-120 day completion and expert application management.',
    icon: 'faIdCard',
    featured: true
  },
  {
    id: 4,
    title: 'DME Setup Services',
    slug: 'dme-setup',
    shortDesc: 'Complete DME business setup including licensing, accreditation, and Medicare enrollment.',
    icon: 'faCrutch',
    featured: true
  }
];

// ============================================
// SERVICE INTERESTS (for contact form dropdown)
// ============================================
export const SERVICE_INTERESTS = [
  'Virtual Assistance',
  'Medical Billing',
  'Provider Credentialing',
  'DME Setup',
  'Website Development',
  'Social Media Marketing',
  'Google Business Setup',
  'Graphic Design',
  'General Inquiry',
  'Other'
];

// ============================================
// TRUST INDICATORS
// ============================================
export const TRUST_INDICATORS = [
  { icon: 'faShieldAlt', text: 'HIPAA Compliant' },
  { icon: 'faCertificate', text: 'SOC 2 Certified' },
  { icon: 'faUserCheck', text: 'US-Based Team' },
  { icon: 'faHeadset', text: '24/7 Support' }
];

// ============================================
// STATS
// ============================================
export const STATS = [
  { value: '300+', label: 'Healthcare Providers', icon: 'faHospital' },
  { value: '100+', label: 'Professionals', icon: 'faUserMd' },
  { value: '99%', label: 'Satisfaction Rate', icon: 'faSmile' },
  { value: '$50M+', label: 'Revenue Managed', icon: 'faChartLine' }
];

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Family Medicine Physician',
    location: 'Las Vegas, NV',
    rating: 5,
    text: 'MedVocates transformed our billing process. Our collections increased by 35% in just 3 months.',
    image: '/images/testimonials/testimonial-1.jpg'
  },
  {
    name: 'Michael Chen',
    title: 'Practice Manager',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'The virtual assistants are incredibly professional and have reduced our administrative burden by 70%.',
    image: '/images/testimonials/testimonial-2.jpg'
  },
  {
    name: 'Dr. Robert Martinez',
    title: 'Gastroenterology',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Best decision we made for our practice. The team is knowledgeable, responsive, and results-driven.',
    image: '/images/testimonials/testimonial-3.jpg'
  }
];

// ============================================
// FAQ ITEMS
// ============================================
export const FAQ_ITEMS = [
  {
    question: 'How quickly can we get started?',
    answer: 'Most clients are fully onboarded within 2-3 weeks. We provide dedicated support throughout the transition process.'
  },
  {
    question: 'Are your services HIPAA compliant?',
    answer: 'Yes, all our services are fully HIPAA compliant. We maintain enterprise-grade security and sign BAAs with all clients.'
  },
  {
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing based on your practice size and needs. Contact us for a customized quote with no long-term contracts required.'
  },
  {
    question: 'Do you work with all specialties?',
    answer: 'Yes, we serve 11+ medical specialties including DME, Pharmacy, Family Medicine, Gastroenterology, and more.'
  },
  {
    question: 'Where are your virtual assistants located?',
    answer: 'All our virtual assistants are US-based, HIPAA-trained healthcare professionals with relevant experience.'
  }
];

export default {
  COMPANY_INFO,
  NAVIGATION,
  SERVICE_CATEGORIES,
  BLOG_CATEGORIES,
  FOOTER_SECTIONS,
  SERVICES,
  SERVICE_INTERESTS,
  TRUST_INDICATORS,
  STATS,
  TESTIMONIALS,
  FAQ_ITEMS
};