import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Custom Web & SaaS Engineering',
    subtitle: 'Lightning-fast, high-converting platforms',
    icon: 'code',
    accentColor: '#0284c7', // Brand Cyan
    description: 'Next.js 16 App Router, React 19, and serverless edge architectures engineered for sub-second page loads.',
    features: [
      'Next.js 16 & Server Components',
      'Headless CMS & micro-frontends',
      'Core Web Vitals 99+ score',
      'Automated CI/CD pipeline'
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'GraphQL'],
    deliverables: ['Production Web App', 'Design System Library', 'Automated CI/CD Pipeline', 'Full Source Code'],
    timeframe: '3 - 8 weeks'
  },
  {
    id: 'software-solutions',
    title: 'Enterprise Software & Microservices',
    subtitle: 'High-throughput backends & data rails',
    icon: 'cpu',
    accentColor: '#d97706', // Brand Warm Amber
    description: 'Resilient event-driven microservices, database schemas, and APIs built to handle millions of requests.',
    features: [
      'Event-driven pipelines (Kafka, Redis)',
      'Relational & NoSQL optimization',
      'High-concurrency microservices',
      'SOC2 & enterprise security'
    ],
    technologies: ['Go', 'Python', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka'],
    deliverables: ['API Suite & Docs', 'Database Schemas', 'Load Test Telemetry', 'Deployment Scripts'],
    timeframe: '6 - 12 weeks'
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'Native performance on iOS & Android',
    icon: 'smartphone',
    accentColor: '#15803d', // Brand Meadow Green
    description: 'Cross-platform mobile apps with 120fps fluid gestures, biometric auth, and offline data synchronization.',
    features: [
      'React Native & Flutter architectures',
      'Offline-first SQLite local sync',
      'Biometric auth & payment checkout',
      'App Store & Play Store publishing'
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Expo', 'Swift', 'Kotlin'],
    deliverables: ['iOS IPA & Android APK', 'Store Publishing Handover', 'Push Notification Hub'],
    timeframe: '4 - 10 weeks'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps CI/CD',
    subtitle: 'Automated scaling & zero-downtime releases',
    icon: 'cloud',
    accentColor: '#0369a1', // Brand Deep Cyan
    description: 'Infrastructure as Code, Kubernetes clusters, and automated continuous delivery pipelines on AWS, GCP, or Azure.',
    features: [
      'Terraform Infrastructure as Code',
      'Kubernetes cluster auto-scaling',
      'GitHub Actions CI/CD workflows',
      '24/7 Prometheus telemetry alerts'
    ],
    technologies: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'],
    deliverables: ['Terraform Scripts', 'Automated CI/CD Pipeline', 'Observability Dashboard', 'Runbooks'],
    timeframe: '2 - 6 weeks'
  },
  {
    id: 'ui-ux-design',
    title: 'Product UI/UX & Design Systems',
    subtitle: 'Intuitive interfaces engineered to convert',
    icon: 'layout',
    accentColor: '#b45309', // Brand Amber Ochre
    description: 'Translating complex business logic into beautiful, user-centered digital products and scalable design systems.',
    features: [
      'Figma Design Systems & tokens',
      'Interactive micro-prototyping',
      'WCAG 2.1 AA accessibility audits',
      'Zero-drift developer handoff'
    ],
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'Framer', 'Prototyping'],
    deliverables: ['Figma Source Files', 'Interactive Prototypes', 'Design System Specs', 'Component Kit'],
    timeframe: '2 - 4 weeks'
  },
  {
    id: 'cybersecurity-audit',
    title: 'Cybersecurity, Audits & Code QA',
    subtitle: 'Vulnerability assessments & hardening',
    icon: 'shield',
    accentColor: '#784421', // Brand Earthy Village Brown
    description: 'Rigorous code audits, automated penetration scans, and security hardening for enterprise peace of mind.',
    features: [
      'OWASP Top 10 remediation',
      'API penetration testing',
      'Data encryption at rest & in transit',
      'Automated regression test suites'
    ],
    technologies: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'Playwright', 'Jest'],
    deliverables: ['Security Audit Report', 'Vulnerability Remediation Plan', 'Automated Test Suite'],
    timeframe: '1 - 3 weeks'
  }
];
