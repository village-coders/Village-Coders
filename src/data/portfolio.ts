import { ProjectCaseStudy } from '@/types';

export const portfolioData: ProjectCaseStudy[] = [
  {
    id: 'paycraft-fintech',
    title: 'PayCraft Pan-African Payment Gateway',
    category: 'FinTech',
    summary: 'High-concurrency payment engine with multi-currency settlements and mobile money rails.',
    description: 'Engineered a resilient financial settlement system integrating direct bank APIs, USSD gateways, and mobile money services across 6 African markets. Features real-time fraud detection and instant reconciliation.',
    metrics: [
      { label: 'Monthly Volume', value: '$18M+' },
      { label: 'Avg Latency', value: '140ms' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Active Merchants', value: '2,400+' }
    ],
    technologies: ['Java (Spring Boot)', 'Go Microservices', 'Next.js', 'PostgreSQL', 'Kafka', 'Docker'],
    client: 'PayCraft Global Ltd',
    year: '2025',
    deliverables: ['Web Checkout SDK', 'Merchant Portal', 'Admin Risk Console', 'Webhooks API'],
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.05) 100%)'
  },
  {
    id: 'agriconnect-saas',
    title: 'AgriConnect B2B Supply Chain Network',
    category: 'Enterprise SaaS',
    summary: 'B2B supply chain network connecting farming cooperatives with real-time inventory tracking.',
    description: 'Transformed traditional agricultural trade with an offline-capable mobile and web platform. Farmers record harvest yields and receive automated bids, cutting supply chain intermediaries by 40%.',
    metrics: [
      { label: 'Farmers Onboarded', value: '45,000+' },
      { label: 'Intermediary Cut', value: '-38%' },
      { label: 'Logistics Speed', value: '2.5x Faster' },
      { label: 'Tons Shipped', value: '120k Tons' }
    ],
    technologies: ['React 19', 'Next.js App Router', 'Python FastAPI', 'Supabase', 'Leaflet GIS'],
    client: 'Agrilink Holdings',
    year: '2025',
    deliverables: ['Farmer Mobile App', 'Distributor Dashboard', 'Inventory Engine', 'SMS Notification Hub'],
    gradient: 'linear-gradient(135deg, rgba(101, 163, 13, 0.25) 0%, rgba(77, 124, 15, 0.05) 100%)'
  },
  {
    id: 'kura-health',
    title: 'Kura Health Telemedicine & Electronic Records',
    category: 'Web App',
    summary: 'HIPAA-compliant telemedicine platform with WebRTC video consults and digital health records.',
    description: 'Built a patient-first healthcare portal connecting certified clinicians with remote communities. Includes automated booking, secure health record storage, and automated digital prescriptions.',
    metrics: [
      { label: 'Virtual Consults', value: '180,000+' },
      { label: 'Doctor Rating', value: '4.9 / 5.0' },
      { label: 'Patient Retention', value: '88%' },
      { label: 'Compliance', value: 'HIPAA & GDPR' }
    ],
    technologies: ['Next.js', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    client: 'Kura Health Systems',
    year: '2024',
    deliverables: ['Patient Portal', 'Doctor Dashboard', 'Encrypted Video Chat', 'Prescription Dispatch'],
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)'
  },
  {
    id: 'orbit-cloud-ops',
    title: 'Orbit Cloud Management & Auto-Scaler',
    category: 'Cloud/DevOps',
    summary: 'Cloud management and auto-scaling platform cutting AWS infrastructure costs by 42%.',
    description: 'Architected automated Kubernetes scaling controllers and cost telemetry tooling that dynamically adjust cluster instances based on historical predictive demand curves.',
    metrics: [
      { label: 'Cloud Cost Savings', value: '42%' },
      { label: 'Clusters Managed', value: '650+' },
      { label: 'Deployment Time', value: 'Under 3 min' },
      { label: 'Failure Recovery', value: '< 20s' }
    ],
    technologies: ['Kubernetes', 'Go', 'Next.js', 'Prometheus', 'AWS CDK', 'Terraform'],
    client: 'Orbit Global Technologies',
    year: '2024',
    deliverables: ['CLI Tooling', 'Executive Cost Dashboard', 'Automated Slack Bot', 'Terraform Modules'],
    gradient: 'linear-gradient(135deg, rgba(2, 132, 199, 0.3) 0%, rgba(133, 88, 59, 0.1) 100%)'
  },
  {
    id: 'swiftmart-ecommerce',
    title: 'SwiftMart Headless E-Commerce & POS',
    category: 'Mobile',
    summary: 'Omnichannel retail platform synchronizing physical POS hardware with online storefronts.',
    description: 'Integrated Shopify Headless with custom Next.js storefronts, physical barcode scanners, and a React Native retail tablet application with offline resilience.',
    metrics: [
      { label: 'Order Processing', value: '10k/day' },
      { label: 'Checkout Conversion', value: '+31%' },
      { label: 'Inventory Drift', value: '0.01%' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    technologies: ['Next.js 16', 'React Native', 'GraphQL', 'Stripe', 'Redis', 'Vercel Edge'],
    client: 'Swift Retail Group',
    year: '2025',
    deliverables: ['Web Storefront', 'Tablet POS App', 'Inventory Sync Engine', 'Customer Loyalty App'],
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(14, 165, 233, 0.1) 100%)'
  },
  {
    id: 'vaultguard-identity',
    title: 'VaultGuard Decentralized KYC & Auth',
    category: 'FinTech',
    summary: 'Biometric identity verification and KYC onboarding platform with sub-3-second verification.',
    description: 'Created a zero-knowledge biometric verification system that verifies identity documents, facial liveness, and government registries in under 3 seconds.',
    metrics: [
      { label: 'Verification Time', value: '2.8s' },
      { label: 'Fraud Detection Rate', value: '99.4%' },
      { label: 'Verifications Done', value: '1.2M+' },
      { label: 'Drop-off Reduction', value: '-65%' }
    ],
    technologies: ['TypeScript', 'Python AI/ML', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    client: 'VaultGuard Security',
    year: '2025',
    deliverables: ['Web Onboarding SDK', 'Compliance Review Suite', 'Liveness Check Module', 'Audit Log Engine'],
    gradient: 'linear-gradient(135deg, rgba(133, 88, 59, 0.3) 0%, rgba(101, 163, 13, 0.1) 100%)'
  }
];
