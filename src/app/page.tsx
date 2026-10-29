import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingActionWidget } from '@/components/FloatingActionWidget';
import { faqsData } from '@/data/faqs';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Village Coders Software & Web Engineering Case Studies',
    itemListElement: portfolioData.map((project, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        url: project.liveUrl || 'https://thevillagecoders.com/#portfolio',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionWidget />
    </>
  );
}
