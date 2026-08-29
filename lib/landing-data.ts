import {
  BarChart3,
  Bot,
  Globe,
  LayoutTemplate,
  Lock,
  Zap,
  ShoppingCart,
  Building2,
  MonitorSmartphone,
  CreditCard,
  Sparkles,
  Server,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: 'High-Speed Colombo Edge Stack',
    description:
      'Engineered for lightning-fast speeds across Sri Lanka and worldwide with sub-30ms latency on SLT, Dialog, and Mobitel networks.',
    tag: 'Ultra Fast',
  },
  {
    icon: CreditCard,
    title: 'Seamless Sri Lankan Payments',
    description:
      'Native integration with PayHere, WebXPay, LANKAQR, Commercial Bank IPG, Sampath Vishwa, and international Stripe/PayPal gateways.',
    tag: 'FinTech Ready',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description:
      'Bank-grade SSL encryption, automated daily off-site backups, DDoS mitigation, and full data privacy compliance for corporate enterprises.',
    tag: 'Secure & Compliant',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Business Intelligence',
    description:
      'Gain actionable analytics on customer acquisition, conversion funnels, and revenue metrics in LKR and foreign currencies.',
    tag: 'LKR & Multi-Currency',
  },
  {
    icon: Bot,
    title: 'AI Automation & Localized Chat',
    description:
      'Deploy intelligent Sinhala, Tamil, and English AI workflows, WhatsApp business bots, and automated client inquiry routers.',
    tag: 'Tri-Lingual AI',
  },
  {
    icon: LayoutTemplate,
    title: 'Bespoke UI/UX Engineering',
    description:
      'Crafted by award-winning digital architects in Colombo to ensure your brand stands out with custom animations and responsive design.',
    tag: 'Tailored Design',
  },
];

export type ShowcaseCategory =
  | 'all'
  | 'ecommerce'
  | 'corporate'
  | 'web-apps';

export interface ShowcaseItem {
  id: number;
  title: string;
  client: string;
  category: Exclude<ShowcaseCategory, 'all'>;
  description: string;
  image: string;
  metric: string;
  icon: LucideIcon;
}

export const showcaseFilters: { label: string; value: ShowcaseCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'Corporate & Wealth', value: 'corporate' },
  { label: 'Web Applications', value: 'web-apps' },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Serendib Artisanal Tea & Spice',
    client: 'Serendib Ceylon Exports',
    category: 'ecommerce',
    description: 'High-conversion global luxury tea boutique with integrated LKR/USD checkout and automated dispatch tracking.',
    image: '/images/portfolio/ecommerce.jpg',
    metric: '+240% Export Growth',
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: 'Aethel Capital & Wealth Portal',
    client: 'Colombo Financial Holdings',
    category: 'corporate',
    description: 'Corporate institutional investment platform featuring real-time CSE stock market performance and investor portal.',
    image: '/images/portfolio/corporate.jpg',
    metric: 'Rs 42.8B Assets Tracked',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Aurora Freight & Supply Chain SaaS',
    client: 'Logisys South Asia',
    category: 'web-apps',
    description: 'Cloud dashboard for maritime shipment tracking, port analytics, and fleet telemetry across Colombo & Trincomalee.',
    image: '/images/portfolio/webapp.jpg',
    metric: '1,240+ Active Vessels',
    icon: MonitorSmartphone,
  },
  {
    id: 4,
    title: 'Amanara Luxury Southern Villas',
    client: 'Amanara Hospitality Group',
    category: 'corporate',
    description: 'Award-winning 5-star boutique resort booking engine with dynamic room availability and experiential tour packages.',
    image: '/images/portfolio/resort.jpg',
    metric: '94% Direct Bookings',
    icon: Building2,
  },
  {
    id: 5,
    title: 'PayLanka Merchant Gateway Portal',
    client: 'PayLanka Technologies PLC',
    category: 'web-apps',
    description: 'Next-generation FinTech merchant terminal supporting LANKAQR, direct bank settlement, and automated invoices.',
    image: '/images/portfolio/fintech.jpg',
    metric: 'Rs 1.2M+ Daily Txns',
    icon: CreditCard,
  },
  {
    id: 6,
    title: 'Arcana Studio & Architectural Web',
    client: 'Arcana Design Colombo',
    category: 'corporate',
    description: 'Minimalist 3D architectural portfolio showcasing high-end commercial properties with smooth WebGL micro-animations.',
    image: '/images/portfolio/creative.jpg',
    metric: 'Awwwards Honoree',
    icon: Sparkles,
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarInitials: string;
  avatarColor: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anura Perera',
    role: 'Managing Director',
    company: 'Ceylon Horizon Tech',
    location: 'Colombo 03',
    avatarInitials: 'AP',
    avatarColor: 'bg-[#1B4769]',
    rating: 5,
    quote:
      'NEXUS completely revamped our digital infrastructure. Our customer conversion rate rose by 65% within two months of launch, and our page speeds on Dialog 4G/Fiber are instantaneous.',
  },
  {
    id: 2,
    name: 'Kumari Jayasinghe',
    role: 'Head of Digital Commerce',
    company: 'Lanka Retail Holdings',
    location: 'Kandy',
    avatarInitials: 'KJ',
    avatarColor: 'bg-[#629BB5]',
    rating: 5,
    quote:
      'Integrating PayHere and local payment gateways was effortless with the NEXUS team. They understand the Sri Lankan consumer market deeply while executing at international Silicon Valley standards.',
  },
  {
    id: 3,
    name: 'Sunil Fernando',
    role: 'Founder & CEO',
    company: 'Colombo Ventures PLC',
    location: 'Colombo 01',
    avatarInitials: 'SF',
    avatarColor: 'bg-[#1B4769]',
    rating: 5,
    quote:
      'The custom web app they engineered for our venture portfolio gives us real-time visibility across our Sri Lankan investments. Their ongoing Colombo support is unmatched.',
  },
  {
    id: 4,
    name: 'Dilshan Silva',
    role: 'Chief Technology Officer',
    company: 'Galle Maritime Logistics',
    location: 'Galle',
    avatarInitials: 'DS',
    avatarColor: 'bg-[#2A658E]',
    rating: 5,
    quote:
      'From sub-50ms cloud speeds to bulletproof uptime, NEXUS delivered a world-class platform. Our team in Galle and Colombo relies on it every single hour.',
  },
  {
    id: 5,
    name: 'Tharushi Mendis',
    role: 'Marketing Director',
    company: 'Serendib Organic Exports',
    location: 'Nuwara Eliya',
    avatarInitials: 'TM',
    avatarColor: 'bg-[#629BB5]',
    rating: 5,
    quote:
      'Our international buyers consistently praise our website design. NEXUS gave our Sri Lankan export brand a polished, luxury presence that commands premium global pricing.',
  },
  {
    id: 6,
    name: 'Kasun Wickramasinghe',
    role: 'Operations Director',
    company: 'Apex Lanka Hospitality',
    location: 'Bentota',
    avatarInitials: 'KW',
    avatarColor: 'bg-[#1B4769]',
    rating: 5,
    quote:
      'Direct booking revenue increased significantly since moving to NEXUS. The booking experience is seamless on mobile devices, and local payments process without a single hiccup.',
  },
];

export interface ClientLogo {
  name: string;
  icon: LucideIcon;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Ceylon Horizon', icon: Globe },
  { name: 'Colombo Capital', icon: Building2 },
  { name: 'LankaLogistics', icon: Server },
  { name: 'Serendib Exports', icon: ShoppingCart },
  { name: 'Apex Lanka', icon: Zap },
  { name: 'PayLanka Tech', icon: CreditCard },
];

export type BillingCycle = 'monthly' | 'yearly';

export interface PricingTier {
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Business',
    description: 'Perfect for Sri Lankan startups and emerging brands establishing a modern web presence.',
    monthlyPrice: 'Rs 35,000',
    yearlyPrice: 'Rs 28,000',
    features: [
      'Custom responsive design (Mobile & Desktop)',
      '.lk Domain & high-speed Sri Lanka CDN setup',
      'PayHere or IPG payment gateway integration',
      'WhatsApp chat widget & inquiry router',
      'Basic SEO & Google Business optimization',
      'Standard email & phone support (Colombo)',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth Enterprise',
    badge: 'Most Popular in Sri Lanka',
    description: 'For scaling companies requiring high-performance e-commerce, custom apps, and AI automation.',
    monthlyPrice: 'Rs 75,000',
    yearlyPrice: 'Rs 60,000',
    features: [
      'Everything in Starter Business',
      'Full E-Commerce or Custom Web Application',
      'Multi-currency checkout (LKR, USD, EUR, GBP)',
      'Automated SMS & email notification gateways',
      'Tri-lingual content support (EN / SI / TA)',
      'Advanced conversion tracking & analytics suite',
      'Priority 24/7 dedicated account manager',
    ],
    cta: 'Request a Quote',
    popular: true,
  },
  {
    name: 'Custom Corporate',
    description: 'Tailored enterprise architecture, dedicated engineering team, and high-security SLA.',
    monthlyPrice: 'Rs 165,000',
    yearlyPrice: 'Rs 135,000',
    features: [
      'Everything in Growth Enterprise',
      'Bespoke Cloud Infrastructure & Custom APIs',
      'Enterprise ERP / CRM integrations',
      'Dedicated staging & continuous CI/CD pipelines',
      'Bank-grade security audits & penetration tests',
      'Custom AI models & workflow automations',
      '99.99% Uptime Service Level Agreement (SLA)',
    ],
    cta: 'Contact Corporate Team',
    popular: false,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How do Sri Lankan payment gateway integrations work?',
    answer:
      'We natively configure and certify all major Sri Lankan payment gateways including PayHere, WebXPay, LANKAQR, and direct bank IPG services (Commercial Bank, Sampath Bank, HNB, Nations Trust). We also enable dual-currency checkouts so you can accept both local LKR and global credit cards seamlessly.',
  },
  {
    question: 'Can you register and manage .lk domains?',
    answer:
      'Yes, we handle complete .lk domain registration with the LK Domain Registry, DNS routing, secure SSL certification, and automated annual renewals on your behalf.',
  },
  {
    question: 'How long does a typical project take to launch?',
    answer:
      'A bespoke business landing page or corporate website typically launches within 2 to 3 weeks. Full-scale e-commerce stores and custom web applications typically range from 4 to 6 weeks, complete with rigorous testing across Dialog, SLT, and Mobitel broadband networks.',
  },
  {
    question: 'Do you offer bilingual or trilingual websites (Sinhala, Tamil, English)?',
    answer:
      'Yes. All NEXUS websites can be built with seamless multilingual localization, enabling your customers to switch dynamically between English, Sinhala, and Tamil with accurate localized typography and SEO indexation.',
  },
  {
    question: 'Where is your technical and support team located?',
    answer:
      'Our primary engineering and design studio is located at 123, Galle Road, Colombo 03, Sri Lanka. You can meet our team in person or contact our dedicated Colombo phone line (+94 11 234 5678) during business hours and 24/7 for emergency SLA clients.',
  },
  {
    question: 'What happens after the website is launched?',
    answer:
      'We provide full post-launch maintenance, security updates, daily backups, speed optimizations, and proactive technical support to ensure your digital presence continues to generate revenue smoothly.',
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design & Engineering', href: '#features' },
      { label: 'E-Commerce Solutions', href: '#showcase' },
      { label: 'Custom Web Applications', href: '#showcase' },
      { label: 'PayHere & IPG Integrations', href: '#features' },
      { label: 'SEO & Growth Marketing', href: '#pricing' },
    ],
  },
  {
    title: 'Showcase',
    links: [
      { label: 'Artisanal E-Commerce', href: '#showcase' },
      { label: 'Corporate Portals', href: '#showcase' },
      { label: 'Logistics SaaS', href: '#showcase' },
      { label: 'Hospitality & Resorts', href: '#showcase' },
      { label: 'FinTech Portals', href: '#showcase' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About NEXUS Colombo', href: '#about' },
      { label: 'Client Testimonials', href: '#testimonials' },
      { label: 'Pricing Plans (Rs)', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Sri Lanka Office',
    links: [
      { label: '123, Galle Road, Colombo 03', href: '#contact' },
      { label: '+94 11 234 5678', href: 'tel:+94112345678' },
      { label: 'hello@nexus.lk', href: 'mailto:hello@nexus.lk' },
      { label: 'Monday – Friday, 8:30 AM – 6:00 PM', href: '#contact' },
      { label: 'Privacy Policy & Terms', href: '#' },
    ],
  },
];
