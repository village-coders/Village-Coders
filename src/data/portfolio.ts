import { ProjectCaseStudy } from '@/types';

export const portfolioData: ProjectCaseStudy[] = [
  {
    id: 'halal-food-authority',
    title: 'Halal Food Authority (HFA) International Certification Body',
    category: 'Enterprise SaaS',
    summary: 'Global halal conformity assessment and certification portal enabling multinational food and pharmaceutical enterprises to manage compliance.',
    description: 'Engineered the global digital infrastructure for Halal Food Authority (HFA), a premier international halal conformity and inspection body. Features client onboarding, audit scheduling, international standards directory, digital scheme applications, and an interactive certified organization registry.',
    metrics: [
      { label: 'Global Reach', value: '45+ Countries' },
      { label: 'Certified Clients', value: '1,200+' },
      { label: 'Audit Speed', value: '2.5x Faster' },
      { label: 'Compliance Uptime', value: '99.99%' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Vercel'],
    client: 'Halal Food Authority (UK & Global)',
    year: '2025',
    liveUrl: 'https://halalfoodauthority.com/',
    deliverables: ['Official Global Certification Portal', 'Client Onboarding & Scheme System', 'Standards Directory & Knowledge Base', 'Certified Organization Registry'],
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.05) 100%)'
  },
  {
    id: 'halal-cert-ng',
    title: 'Halal Cert Nigeria Verification & Audit Portal',
    category: 'Enterprise SaaS',
    summary: 'National certification management system featuring dynamic QR-verified certificates, audit inspection logsheets, and automated client billing.',
    description: 'Architected and deployed the official Nigerian halal auditing and certification ecosystem. Powers client application processing, automated QR-verified PDF certificate generation, manufacturing surveillance logsheets, bulk product batching with barcode verification, and automated invoicing via Azure.',
    metrics: [
      { label: 'Active Products', value: '15,000+' },
      { label: 'Enterprises Certified', value: '350+' },
      { label: 'Cert Gen Speed', value: '< 2.5s' },
      { label: 'System Uptime', value: '99.98%' }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Ubuntu Linux', 'Azure Services'],
    client: 'Halal Compliance Certification Services',
    year: '2025',
    liveUrl: 'https://halalcert.com.ng/',
    deliverables: ['Client Self-Service Portal', 'Admin Auditing & Inspector Suite', 'Dynamic QR Certificate Generator', 'Automated Invoicing & Reminder Workflows'],
    gradient: 'linear-gradient(135deg, rgba(101, 163, 13, 0.25) 0%, rgba(77, 124, 15, 0.05) 100%)'
  },
  {
    id: 'osun-fa',
    title: 'Osun State Football Association Official Digital Hub',
    category: 'Web App',
    summary: 'State governing body portal providing official match fixtures, league tables, player registration, referee management, and state football news.',
    description: 'Developed the official digital platform for the Osun State Football Association to modernize state-level football administration. Delivers real-time league standings, cup tournament fixtures, club and player registration databases, administrative publications, and media announcements.',
    metrics: [
      { label: 'Clubs Registered', value: '120+' },
      { label: 'Matches Scheduled', value: '450+' },
      { label: 'Active Visitors', value: '60k+/mo' },
      { label: 'Page Load', value: '< 1s' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    client: 'Osun State Football Association',
    year: '2025',
    liveUrl: 'https://osun-fa.vercel.app/',
    deliverables: ['Official Football Association Hub', 'League & Cup Tournament Management', 'Club & Player Licensing Portal', 'State News & Media Center'],
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(14, 165, 233, 0.05) 100%)'
  },
  {
    id: 'dokkal-khairu-fc',
    title: 'Dokkal Khairu Football Club Official Platform',
    category: 'Web App',
    summary: 'Professional club portal featuring team rosters, match previews, live score updates, youth academy recruitment, and fan engagement.',
    description: 'Built a vibrant, mobile-first web presence for Dokkal Khairu FC. Features player profiles with statistics, match schedule countdowns, fixture results, academy scout admissions, and digital press releases for club supporters and scouts.',
    metrics: [
      { label: 'Squad Roster', value: '35 Players' },
      { label: 'Fan Engagement', value: '25k+/mo' },
      { label: 'Mobile Traffic', value: '88%' },
      { label: 'Lighthouse Score', value: '98/100' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    client: 'Dokkal Khairu Football Club',
    year: '2025',
    liveUrl: 'https://dokkal-khairu-fc.vercel.app/',
    deliverables: ['Club Storefront & Roster Hub', 'Player Statistics & Scouting Profiles', 'Match Day Countdown & Results Feed', 'Youth Academy Admission Portal'],
    gradient: 'linear-gradient(135deg, rgba(133, 88, 59, 0.25) 0%, rgba(101, 163, 13, 0.08) 100%)'
  },
  {
    id: 'sprinkl-biz',
    title: 'Sprinkl Digital Business Platform',
    category: 'Web App',
    summary: 'High-performance business platform built for search engine dominance, high conversion, and seamless interactive client onboarding.',
    description: 'Architected a modern digital business presence for Sprinkl, achieving top Google search visibility and near-instant load speeds. Includes responsive service configurators, optimized client inquiry workflows, and a streamlined cloud deployment pipeline.',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'SEO Ranking', value: 'Top #1' },
      { label: 'Load Time', value: '0.6s' },
      { label: 'Conversion Lift', value: '+35%' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'REST API', 'Payment Integration'],
    client: 'Sprinkl',
    year: '2025',
    liveUrl: 'https://sprinkl.biz',
    deliverables: ['High-Conversion Web Application', 'Advanced SEO & Meta Architecture', 'Interactive Service Configurator', 'Payment & Checkout Integration'],
    gradient: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(133, 88, 59, 0.08) 100%)'
  },
  {
    id: 'alamu-football-academy',
    title: 'Alamu Football Academy & Talent Scouting Platform',
    category: 'Web App',
    summary: 'Sports academy portal featuring player talent scouting profiles, training fixture schedules, and online admission registration.',
    description: 'Created a modern athletic academy web application showcasing prospective young talent to international soccer scouts and coaches. Features digital player profiles with match highlights, upcoming fixture schedules, player admission registrations, and academy news.',
    metrics: [
      { label: 'Player Profiles', value: '500+' },
      { label: 'Admission Growth', value: '+140%' },
      { label: 'Scouting Inquiries', value: '3x Increase' },
      { label: 'Uptime SLA', value: '99.9%' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API'],
    client: 'Alamu Football Academy',
    year: '2024',
    liveUrl: 'http://alamufootballacademy.com',
    deliverables: ['Player Talent Profiles', 'Online Admission & Registration', 'Fixture & Match Schedule Hub', 'News & Media Gallery'],
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)'
  },
  {
    id: 'oluwo-royal-portal',
    title: 'Oluwo of Iwoland Royal Corporate Portal',
    category: 'Web App',
    summary: 'Official digital portal and royal communications platform with multimedia archives and citizen inquiry management.',
    description: 'Engineered the official web portal for the Royal Palace of Iwoland (Imperial Majesty Oba Abdulrosheed Adewale Akanbi). Designed for high responsiveness and fast loading across mobile connections, featuring royal announcements, cultural media archives, press releases, and an interactive public contact system.',
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Mobile Score', value: '98/100' },
      { label: 'Global Readership', value: '100k+' },
      { label: 'Page Load', value: '< 1.2s' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    client: 'Royal Palace of Iwoland',
    year: '2024',
    liveUrl: 'http://oluwoofiwoland.com',
    deliverables: ['Official Royal Portal', 'News & Media Publishing CMS', 'Royal Archive & Gallery', 'Citizen Contact & Protocol System'],
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(14, 165, 233, 0.05) 100%)'
  },
  {
    id: 'hdi-labtest',
    title: 'HDI LabTest Diagnostics & Sample Tracking Platform',
    category: 'Enterprise SaaS',
    summary: 'Laboratory information management system managing diagnostic test workflows, barcoded sample tracking, and digital results.',
    description: 'Developed an end-to-end diagnostic laboratory information management platform (LIMS). Coordinates patient sample intake, automated barcode assignments, laboratory technician testing workflows, medical doctor review pipelines, and secure delivery of certified test certificates.',
    metrics: [
      { label: 'Samples Processed', value: '80,000+' },
      { label: 'Turnaround Time', value: '-45%' },
      { label: 'Lab Error Reduction', value: '99.1%' },
      { label: 'Report Delivery', value: 'Instant Digital' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Vercel'],
    client: 'HDI Laboratory & Diagnostics',
    year: '2025',
    deliverables: ['Sample Intake & Barcode Engine', 'Technician Analysis Workbench', 'Validation & Sign-Off Suite', 'Secure Digital Results Dispatch'],
    gradient: 'linear-gradient(135deg, rgba(101, 163, 13, 0.25) 0%, rgba(77, 124, 15, 0.05) 100%)'
  }
];
