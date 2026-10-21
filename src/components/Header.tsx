'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-logo-slot">
          <div className="header-logo-absolute">
            <BrandLogo size="xl" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#portfolio" className="nav-link">Work</Link>
          <Link href="#faq" className="nav-link">FAQ</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        {/* Right CTA & Status */}
        <div className="header-actions">
          <motion.div 
            className="status-pill" 
            title="Current Capacity: Accepting New Projects"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.15 }}
          >
            <span className="pulse-dot"></span>
            <span className="status-text">Available for Projects</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.04 }} 
            whileTap={{ scale: 0.96 }}
            style={{ display: 'inline-flex' }}
          >
            <Link href="#contact" className="btn btn-primary nav-cta">
              <span>Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <motion.button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="mobile-drawer-inner">
                <div className="mobile-drawer-header">
                  <BrandLogo size="sm" />
                  <motion.button
                    className="close-btn"
                    onClick={closeMobileMenu}
                    aria-label="Close Navigation"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                <nav className="mobile-nav">
                  {[
                    { href: '#services', num: '01', label: 'Our Services' },
                    { href: '#portfolio', num: '02', label: 'Case Studies & Work' },
                    { href: '#faq', num: '03', label: 'FAQ' },
                    { href: '#contact', num: '04', label: 'Get In Touch' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link href={item.href} onClick={closeMobileMenu} className="mobile-link">
                        <span className="link-num">{item.num}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mobile-drawer-footer">
                  <div className="mobile-status">
                    <span className="pulse-dot"></span>
                    <span>Currently accepting Q4/Q1 engineering contracts</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link href="#contact" onClick={closeMobileMenu} className="btn btn-primary w-full">
                      Book Technical Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--header-height);
          display: flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          transition: box-shadow var(--transition-normal);
        }

        .header.scrolled {
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
        }

        .header-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          height: 100%;
        }

        .header-logo-slot {
          position: relative;
          width: 142px;
          height: 100%;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header.scrolled .header-logo-slot {
          width: 93px;
        }

        .header-logo-absolute {
          position: absolute;
          top: 6px;
          left: 0;
          z-index: 120;
          pointer-events: auto;
          transform-origin: left center;
          transform: translateY(0) scale(1);
          filter: drop-shadow(0 6px 16px rgba(15, 23, 42, 0.08));
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      top 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      filter 0.3s ease;
        }

        .header-logo-absolute:hover {
          transform: translateY(-2px) scale(1.02);
          filter: drop-shadow(0 12px 24px rgba(2, 132, 199, 0.16));
        }

        .header.scrolled .header-logo-absolute {
          top: 50%;
          transform: translateY(-50%) scale(0.65);
          filter: drop-shadow(0 2px 6px rgba(15, 23, 42, 0.06));
        }

        .header.scrolled .header-logo-absolute:hover {
          transform: translateY(-50%) scale(0.67);
          filter: drop-shadow(0 4px 10px rgba(2, 132, 199, 0.14));
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          position: relative;
          padding: 6px 0;
        }

        .nav-link:hover {
          color: var(--brand-cyan);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, var(--brand-cyan), var(--brand-amber));
          transition: width var(--transition-fast);
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        :global(.status-pill) {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          color: #15803d;
          white-space: nowrap;
          cursor: default;
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.88rem;
        }

        :global(.hamburger-btn) {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 102;
        }

        :global(.hamburger-btn .bar) {
          width: 100%;
          height: 2.5px;
          background-color: #0f172a;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        :global(.hamburger-btn.open .bar:nth-child(1)) {
          transform: translateY(9px) rotate(45deg);
        }
        :global(.hamburger-btn.open .bar:nth-child(2)) {
          opacity: 0;
        }
        :global(.hamburger-btn.open .bar:nth-child(3)) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile Backdrop & Drawer */
        :global(.mobile-backdrop) {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 100;
        }

        :global(.mobile-drawer) {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 380px;
          background: #ffffff;
          border-left: 1px solid var(--border-subtle);
          z-index: 101;
          box-shadow: -10px 0 35px rgba(15, 23, 42, 0.12);
          overflow-y: auto;
        }

        .mobile-drawer-inner {
          padding: 24px;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        :global(.close-btn) {
          background: #f1f5f9;
          border: 1px solid var(--border-subtle);
          color: #0f172a;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 28px 0;
          flex: 1;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .mobile-link:hover {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.3);
          color: var(--brand-cyan);
        }

        .link-num {
          font-size: 0.8rem;
          font-family: monospace;
          color: var(--brand-amber-dark);
          background: rgba(217, 119, 6, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .mobile-drawer-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          :global(.status-pill) {
            display: none;
          }
          :global(.hamburger-btn) {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .header-logo-slot {
            width: 112px;
          }
          .header-logo-absolute {
            transform-origin: left top;
            transform: scale(0.85);
            top: 10px;
          }
          .nav-cta {
            padding: 8px 14px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
};
