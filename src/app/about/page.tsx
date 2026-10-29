import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActionWidget } from '@/components/FloatingActionWidget';
import { Process } from '@/components/Process';
import { TechMarquee } from '@/components/TechMarquee';

const siteUrl = 'https://thevillagecoders.com';

export const metadata: Metadata = {
  title: 'About Us | Village Coders - World-Class Software & Web Developers',
  description:
    'Learn about Village Coders (thevillagecoders.com). We are an elite software engineering collective crafting custom web platforms, scalable SaaS products, mobile applications, and enterprise cloud solutions for global clients.',
  keywords: [
    'About Village Coders',
    'Who is Village Coders',
    'thevillagecoders.com about',
    'Village Coders software developers',
    'Village Coders engineering collective',
    'Best software development company in Nigeria',
    'Top web development studio Lagos',
    'Full stack software engineering collective',
    'Enterprise software architects UK & Africa',
    'Custom web application engineers',
    'Next.js and React engineering team',
    'Java Spring Boot & Node.js architects',
    'Mobile app developers Lagos Nigeria',
    'Global software outsourcing partner',
    'Agile software engineering studio'
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Village Coders | World-Class Web & Software Engineering Team',
    description:
      'We architect and engineer resilient web platforms, high-throughput APIs, and mission-critical applications for ambitious businesses worldwide.',
    url: `${siteUrl}/about`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'About Village Coders - Software Engineering Collective',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Village Coders | World-Class Software Developers',
    description:
      'Discover the team, engineering philosophy, and track record behind Village Coders.',
    images: [`${siteUrl}/logo.png`],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: `${siteUrl}/about`,
      },
    ],
  };

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about#webpage`,
    url: `${siteUrl}/about`,
    name: 'About Village Coders | Software Engineering Collective',
    description:
      'Engineering-first software collective building enterprise web platforms, scalable APIs, and mobile systems for clients across the UK, Nigeria, and internationally.',
    publisher: {
      '@type': 'Organization',
      name: 'Village Coders',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      <Header />

      <main id="main-content" className="about-page">
        {/* Page Hero */}
        <section className="about-hero-section">
          <div className="container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">About Us</span>
            </nav>

            <div className="about-hero-content">
              <div className="section-badge amber">
                <span>The Village Coders Story</span>
              </div>
              <h1 className="about-hero-title">
                We Build Digital Systems That Withstand{' '}
                <span className="text-gradient-cyan">Real-World Demands</span>.
              </h1>
              <p className="about-hero-subtitle">
                Village Coders is an engineering-first software collective. We partner directly with ambitious startups, established enterprises, and global regulatory bodies to design, build, and scale mission-critical software.
              </p>
            </div>

            {/* Impact Highlights Grid */}
            <div className="impact-grid">
              <div className="impact-card">
                <span className="impact-number text-gradient-cyan">8+</span>
                <span className="impact-label">Production Enterprise Clients</span>
                <p className="impact-desc">Trusted by international certification authorities, sports clubs, and commerce platforms.</p>
              </div>
              <div className="impact-card">
                <span className="impact-number text-gradient-amber">99.9%</span>
                <span className="impact-label">Production System Uptime</span>
                <p className="impact-desc">High-availability architectures hardened against distributed traffic spikes and downtime.</p>
              </div>
              <div className="impact-card">
                <span className="impact-number text-gradient-cyan">100%</span>
                <span className="impact-label">On-Time Sprint Delivery</span>
                <p className="impact-desc">Transparent two-week agile sprint cadences with daily code check-ins and staging reviews.</p>
              </div>
              <div className="impact-card">
                <span className="impact-number text-gradient-amber">&lt; 100ms</span>
                <span className="impact-label">Optimized API Latency</span>
                <p className="impact-desc">Zero-lock caching, database index tuning, and edge CDN deployments across all endpoints.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Marquee */}
        <TechMarquee />

        {/* Our Mission & Core Principles */}
        <section className="section philosophy-section">
          <div className="container">
            <div className="philosophy-grid">
              <div className="philosophy-text-col">
                <div className="section-badge">
                  <span>Our Engineering Philosophy</span>
                </div>
                <h2 className="section-title">
                  Why <span className="text-gradient-amber">“Village Coders”</span>?
                </h2>
                <p className="philosophy-lead">
                  There is an African proverb: <em>&ldquo;It takes a village to raise a child.&rdquo;</em> In the software industry, it takes a tight-knit village of passionate, deeply skilled architects, engineers, and designers to build software that truly lasts.
                </p>
                <p className="philosophy-body">
                  Too many software agencies operate as sales engines that delegate your critical architecture to junior temps or unvetted contractors. At Village Coders, we did away with account managers and middlemen. When you work with us, you speak directly with the senior engineers designing your database schemas, writing your Next.js application, and maintaining your cloud infrastructure.
                </p>
                <div className="philosophy-cta-box">
                  <Link href="/contact" className="btn btn-primary">
                    <span>Talk Directly With Our Architects</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="pillars-col">
                <div className="pillar-card">
                  <div className="pillar-icon">⚡</div>
                  <div>
                    <h3 className="pillar-title">Clean, Zero-Defect Architecture</h3>
                    <p className="pillar-desc">
                      We prioritize clean separation of concerns, strict type-safety (TypeScript, Go, Java), and comprehensive test suites (Jest, Playwright) so your codebase remains maintainable for years to come.
                    </p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">🔒</div>
                  <div>
                    <h3 className="pillar-title">Zero-Trust Security & Compliance</h3>
                    <p className="pillar-desc">
                      Every endpoint, API call, and database query is guarded by OWASP compliance, rate-limiting, encrypted data-at-rest, and strict content security policies.
                    </p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">🌍</div>
                  <div>
                    <h3 className="pillar-title">Global Reach, African Engineering Grit</h3>
                    <p className="pillar-desc">
                      Headquartered in Lagos with a distributed international footprint, we blend world-class technical execution with obsessive speed and round-the-clock client dedication.
                    </p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">📦</div>
                  <div>
                    <h3 className="pillar-title">100% Source Code Ownership</h3>
                    <p className="pillar-desc">
                      No proprietary vendor lock-in. You retain 100% intellectual property ownership of all source code, deployment scripts, database schemas, and documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rigorous Engineering Process */}
        <Process />

        {/* Global Delivery & Call to Action Banner */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <div className="about-cta-badge">
                <span className="pulse-dot"></span>
                <span>Open for New Projects & Retainers</span>
              </div>
              <h2 className="about-cta-title">
                Ready to Turn Your Vision Into <span className="text-gradient-cyan">Bulletproof Software</span>?
              </h2>
              <p className="about-cta-desc">
                Whether you need a custom enterprise web platform, a mobile application, or a complete cloud architecture overhaul, our core engineering team is ready to deliver.
              </p>
              <div className="about-cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  <span>Start Your Project</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <a href="https://wa.me/2349037118808?text=Hello%20Village%20Coders%2C%20I%20would%20like%20to%20discuss%20a%20software%20project." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionWidget />
    </>
  );
}
