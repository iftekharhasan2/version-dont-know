export interface NavPromoItem {
  eyebrow: string;
  title: string;
  image: string;
  href: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  sectionId?: string;
  desc?: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
}

export interface NavColumnItem {
  title?: string;
  links: NavLinkItem[];
}

export interface PrimaryNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
  links: NavLinkItem[];
  columns: NavColumnItem[];
  promos: NavPromoItem[];
}

export const primaryNav: PrimaryNavItem[] = [
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    sectionId: '#overview',
    page: 'about',
    links: [
      { label: 'Overview', href: '/about#overview', sectionId: '#overview', page: 'about', desc: 'Mission, institutional heritage, ecosystem & four strategic fronts' },
      { label: 'IP3 People', href: '/about#people', sectionId: '#people', page: 'about', desc: 'Global faculty of economists, researchers, fellows & executive leadership' },
      { label: 'Our Approach (Sub-Page)', href: '/approach', sectionId: '#journey', page: 'approach', desc: 'Six movements of reform from diagnosis to durable institutional capability' },
    ],
    columns: [],
    promos: [
      {
        eyebrow: 'IP3 PEOPLE',
        title: 'Meet our global faculty of economists, researchers, and policy practitioners',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        href: '/about#people',
      },
      {
        eyebrow: 'OUR APPROACH SUB-PAGE',
        title: 'Reform as a Movement: Six movements from diagnosis to durable institutional capability',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/approach',
      },
    ],
  },
  {
    id: 'focus-areas',
    label: 'Focus Areas',
    href: '/focus',
    sectionId: '#focus-areas',
    page: 'focus',
    links: [
      { label: 'Strategic Pillars Overview', href: '/focus#overview', sectionId: '#overview', page: 'focus', desc: 'Whole-systems policy architecture across climate, education, digital governance & action research' },
      { label: 'Education & Capacity Development', href: '/focus#education', sectionId: '#education', page: 'focus', desc: 'Foundational learning systems, teacher professional development & pedagogical reform' },
      { label: 'Policy Innovation & Action Research', href: '/focus#innovation', sectionId: '#innovation', page: 'focus', desc: 'Translational laboratories, regulatory sandboxes & iterative governance experiments' },
      { label: 'Data, AI & Digital Governance', href: '/focus#data', sectionId: '#data', page: 'focus', desc: 'Sovereign data ecosystems, algorithmic accountability & modern public administration' },
      { label: 'Climate Action & Sustainability', href: '/focus#climate', sectionId: '#climate', page: 'focus', desc: 'Green transition engines, circular economy, industrial decarbonization & ESG excellence' },
    ],
    columns: [],
    promos: [
      {
        eyebrow: 'FOCUS 01 • EDUCATION',
        title: 'Transforming foundational learning and workforce capability systems',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
        href: '/focus#education',
      },
      {
        eyebrow: 'FOCUS 04 • CLIMATE & ESG',
        title: 'Actionable decarbonization and circular economic transition roadmaps',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800',
        href: '/focus#climate',
      },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    href: '/services',
    sectionId: '#services',
    page: 'services',
    links: [
      { label: 'Economic Assessment & Feasibility', href: '/services#economic', sectionId: '#economic', page: 'services', desc: 'Cost-benefit analysis, tariff modeling & financial viability' },
      { label: 'Climate Action & Sustainability', href: '/services#climate', sectionId: '#climate', page: 'services', desc: 'Regenerative economics, carbon audits & ESG disclosure' },
      { label: 'Program & Survey Design (CAPI)', href: '/services#design', sectionId: '#design', page: 'services', desc: 'Sampling frameworks, multi-tier QA & nationwide data engines' },
      { label: 'Monitoring & Evaluation (MERLA)', href: '/services#merla', sectionId: '#merla', page: 'services', desc: 'Impact evaluation, results frameworks & digital monitoring' },
      { label: 'Macro & Sector Policy Advisory', href: '/services#macro-policy', sectionId: '#macro-policy', page: 'services', desc: 'Fiscal frameworks, industrial policy & structural reforms' },
    ],
    columns: [],
    promos: [
      {
        eyebrow: 'PRACTICE 01 • ECONOMIC',
        title: 'Rigorous Economic & Environmental Feasibility Assessments',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        href: '/services#economic',
      },
      {
        eyebrow: 'PRACTICE 04 • MERLA',
        title: 'Impact Evaluation & Adaptive Real-Time Monitoring Systems',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/services#merla',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Navbar chrome (brand, CTA, top bar) — CMS controlled                */
/* ------------------------------------------------------------------ */

export interface NavbarBrandConfig {
  /** Short mark shown inside the coloured logo tile, e.g. "IP3". */
  badgeText: string;
  /** Wordmark next to the logo tile. */
  name: string;
  /** Small line under the wordmark. */
  tagline: string;
  /** Green "live" dot on the logo tile. */
  showStatusDot: boolean;
  /** Optional image URL; replaces the badge tile when set. */
  logoImage?: string;
}

export interface NavbarCtaConfig {
  enabled: boolean;
  label: string;
  /** Section id to scroll to, e.g. "#contact-advisory". */
  targetId: string;
}

export interface NavbarTopBarConfig {
  enabled: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  /** Pulsing-dot label on the right, e.g. "Global Policy Advisory Desk". */
  statusLabel: string;
}

export interface NavbarConfig {
  brand: NavbarBrandConfig;
  cta: NavbarCtaConfig;
  topBar: NavbarTopBarConfig;
  searchEnabled: boolean;
  searchPlaceholder: string;
  /** Badge in the top-right of every mega menu panel. */
  megaMenuBadge: string;
  skipLinkLabel: string;
}

export const defaultNavbarConfig: NavbarConfig = {
  brand: {
    badgeText: 'IP3',
    name: 'IP3 AGRISCIENCE',
    tagline: 'Precision Research Farm',
    showStatusDot: true,
    logoImage: '',
  },
  cta: {
    enabled: true,
    label: 'Field Trials & Contact',
    targetId: '#contact-advisory',
  },
  topBar: {
    enabled: true,
    showEmail: true,
    showPhone: true,
    showLocation: true,
    statusLabel: 'Research Farm Operations Active',
  },
  searchEnabled: true,
  searchPlaceholder: 'Search field trials, soil science & research data...',
  megaMenuBadge: 'IP3 AGRISCIENCE',
  skipLinkLabel: 'Skip to main content',
};

