import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { CostEstimator } from '@/components/CostEstimator';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <CostEstimator />
        <Process />
        <Team />
        <Testimonials />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
