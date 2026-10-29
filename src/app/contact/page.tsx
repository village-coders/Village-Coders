import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActionWidget } from '@/components/FloatingActionWidget';
import { ContactSection } from '@/components/ContactSection';

const siteUrl = 'https://thevillagecoders.com';

export const metadata: Metadata = {
  title: 'Contact Us | Village Coders - Start Your Web or Software Project',
  description:
    'Get in touch directly with the Village Coders engineering collective. Reach out via email at villagecoders7@gmail.com or WhatsApp +234 903 711 8808 for custom web platforms, enterprise SaaS, and mobile apps.',
  keywords: [
    'Contact Village Coders',
    'thevillagecoders.com contact',
    'hire Village Coders',
    'Village Coders phone number',
    'Village Coders email address',
    'Village Coders WhatsApp',
    'software engineering consultation',
    'custom web development quote',
    'website design quote Nigeria',
    'hire full stack developers Lagos',
    'hire Next.js and React developers',
    'hire mobile app developers',
    'software development inquiry',
    'African software engineering studio contact'
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Village Coders | Start Your Software Project',
    description:
      'Connect directly with our lead software architects. Fast response guaranteed within 2 hours.',
    url: `${siteUrl}/contact`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Contact Village Coders - Engineering Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Village Coders | Start Your Project',
    description:
      'Reach our senior software engineering team directly. No middlemen, no wait times.',
    images: [`${siteUrl}/logo.png`],
  },
};

const kickoffFaqs = [
  {
    q: 'How fast will someone respond to my note?',
    a: 'We guarantee a direct response from our core software engineering team within 2 to 4 business hours. If your request is urgent, you can also reach us immediately via WhatsApp or phone.'
  },
  {
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Absolutely. We regularly sign mutual NDAs before reviewing sensitive technical specifications, business models, or proprietary datasets.'
  },
  {
    q: 'Can you audit and take over an existing codebase?',
    a: 'Yes. A significant portion of our work involves performing architectural, security, and performance audits on existing codebases, followed by stabilizing and scaling them.'
  },
  {
    q: 'What engagement models do you offer?',
    a: 'We offer fixed-scope milestone delivery for defined products, dedicated engineering pods for ongoing velocity, and technical advisory retainers.'
  }
];

export default function ContactPage() {
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
        name: 'Contact Us',
        item: `${siteUrl}/contact`,
      },
    ],
  };

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: 'Contact Village Coders',
    description:
      'Direct line to Village Coders software engineering team for custom web platforms, cloud architecture, and mobile applications.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Village Coders',
      telephone: '+234-903-711-8808',
      email: 'villagecoders7@gmail.com',
      url: siteUrl,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+234-903-711-8808',
          contactType: 'customer service',
          availableLanguage: ['English'],
          areaServed: 'Worldwide'
        },
        {
          '@type': 'ContactPoint',
          telephone: '+234-808-574-2261',
          contactType: 'technical support',
          availableLanguage: ['English'],
          areaServed: 'Worldwide'
        }
      ]
    }
  };

  const contactFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kickoffFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />

      <Header />

      <main id="main-content" className="contact-page">
        {/* Page Hero */}
        <section className="contact-hero-section">
          <div className="container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Contact Us</span>
            </nav>

            <div className="contact-hero-content">
              <div className="section-badge amber">
                <span>Direct Engineering Line</span>
              </div>
              <h1 className="contact-hero-title">
                Let&apos;s Discuss Your Project With Our <span className="text-gradient-cyan">Core Architects</span>.
              </h1>
              <p className="contact-hero-subtitle">
                No salespeople. No intake queues. Speak directly with the engineers who will architect, build, and maintain your software.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="channels-grid">
              <div className="channel-card">
                <div className="card-top">
                  <div className="card-icon">📞</div>
                  <span className="channel-badge live">Live Response</span>
                </div>
                <h3 className="card-heading">Direct Phone & WhatsApp</h3>
                <p className="card-sub">Immediate answers for urgent inquiries and new contracts.</p>
                <div className="card-links">
                  <a href="tel:+2349037118808" className="primary-link">+234 903 711 8808</a>
                  <a href="tel:+2348085742261" className="secondary-link">+234 808 574 2261</a>
                </div>
              </div>

              <div className="channel-card">
                <div className="card-top">
                  <div className="card-icon">✉️</div>
                  <span className="channel-badge">Inbox Monitored</span>
                </div>
                <h3 className="card-heading">Official Email</h3>
                <p className="card-sub">Send RFPs, architectural briefs, and project inquiries.</p>
                <div className="card-links">
                  <a href="mailto:villagecoders7@gmail.com" className="primary-link">
                    villagecoders7@gmail.com
                  </a>
                </div>
              </div>

              <div className="channel-card">
                <div className="card-top">
                  <div className="card-icon">🌐</div>
                  <span className="channel-badge">Global Delivery</span>
                </div>
                <h3 className="card-heading">Hub & Working Hours</h3>
                <p className="card-sub">Lagos, Nigeria & Distributed Global Remote Team.</p>
                <div className="operating-hours">
                  <span>Mon – Fri: 8:00 AM – 7:00 PM (GMT+1)</span>
                  <span className="sla-notice">24/7 On-Call for Production Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Contact Section (Form & Details) */}
        <ContactSection />

        {/* Project Kickoff FAQ Section */}
        <section className="section kickoff-faq-section">
          <div className="container">
            <div className="text-center">
              <div className="section-badge">
                <span>Client Advisory</span>
              </div>
              <h2 className="section-title">
                Frequently Asked <span className="text-gradient-amber">Project Questions</span>
              </h2>
              <p className="section-description">
                Everything you need to know before booking your technical discovery session.
              </p>
            </div>

            <div className="faq-grid">
              {kickoffFaqs.map((faq, idx) => (
                <div key={idx} className="faq-card">
                  <h3 className="faq-question">
                    <span className="faq-q-badge">Q</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionWidget />
    </>
  );
}
