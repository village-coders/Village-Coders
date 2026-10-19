'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/services';
import { ServiceItem } from '@/types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'cpu':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        );
      case 'smartphone':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        );
      case 'cloud':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        );
      case 'layout':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
    }
  };

  const serviceCategories: Record<string, string> = {
    'web-development': 'WEB & SAAS',
    'software-solutions': 'BACKEND & APIS',
    'mobile-engineering': 'MOBILE APPS',
    'cloud-devops': 'CLOUD & DEVOPS',
    'ui-ux-design': 'UI/UX DESIGN',
    'cybersecurity-audit': 'CYBER QA'
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <span>Specialized IT Capabilities</span>
          </div>
          <h2 className="section-title">
            Architecting Your Next <span className="text-gradient-cyan">Technological Leap</span>
          </h2>
          <p className="section-description">
            High-speed web apps, enterprise microservices, and mobile platforms built to scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              style={{ height: '100%' }}
            >
              <div
                className="service-card"
                style={{ '--accent': service.accentColor } as React.CSSProperties}
              >
                {/* Top Row: Icon + Monospace Category Badge */}
                <div className="card-top">
                  <div
                    className="service-icon-box"
                    style={{
                      background: `linear-gradient(135deg, ${service.accentColor}18, ${service.accentColor}06)`,
                      borderColor: `${service.accentColor}35`
                    }}
                  >
                    {getServiceIcon(service.icon, service.accentColor)}
                  </div>
                  <div className="category-pill">
                    <span className="dot" style={{ backgroundColor: service.accentColor }}></span>
                    <span className="cat-text">{serviceCategories[service.id] || `0${index + 1}`}</span>
                  </div>
                </div>

                {/* Title & Short Punchy Description */}
                <div className="card-heading-group">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>

                {/* Feature Highlights with Clean Checkmarks */}
                <div className="features-block">
                  <div className="features-label">Core Capabilities:</div>
                  <ul className="service-features-list">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span
                          className="check-icon"
                          style={{
                            color: service.accentColor,
                            background: `${service.accentColor}12`
                          }}
                        >
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Block: Tech Stack Tags & Interactive Action */}
                <div className="card-bottom">
                  <div className="service-tech-tags">
                    {service.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="tech-tag-more">+{service.technologies.length - 3}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-details"
                    onClick={() => setSelectedService(service)}
                  >
                    <span>Explore Deliverables</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Deep Dive with Smooth Scale and Backdrop Fade */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="modal-content glass-card"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-icon-title">
                  <div
                    className="service-icon-box"
                    style={{
                      background: `linear-gradient(135deg, ${selectedService.accentColor}20, ${selectedService.accentColor}08)`,
                      borderColor: `${selectedService.accentColor}35`
                    }}
                  >
                    {getServiceIcon(selectedService.icon, selectedService.accentColor)}
                  </div>
                  <div>
                    <h3 className="modal-title">{selectedService.title}</h3>
                    <p className="modal-subtitle">{selectedService.subtitle}</p>
                  </div>
                </div>
                <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
              </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedService.description}</p>

              <div className="modal-section-block">
                <h4>What We Deliver:</h4>
                <div className="deliverables-grid">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-chip">
                      <span className="chip-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4>Core Technologies:</h4>
                <div className="tech-pills-row">
                  {selectedService.technologies.map((t, idx) => (
                    <span key={idx} className="pill-bold">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-label">Typical Sprint:</span>
                  <span className="meta-val">{selectedService.timeframe}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Team Squad:</span>
                  <span className="meta-val">Lead Architect + 2 Engineers + QA</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link
                href="#contact"
                className="btn btn-primary"
                onClick={() => setSelectedService(null)}
              >
                Request Proposal for this Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

      <style jsx>{`
        .services-section {
          background: #ffffff;
          position: relative;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 52px;
        }

        .service-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(2, 132, 199, 0.4);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08), 0 0 20px rgba(2, 132, 199, 0.08);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .service-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          transition: transform 0.2s ease;
        }

        .service-card:hover .service-icon-box {
          transform: scale(1.06);
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-full);
          font-family: monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .category-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .card-heading-group {
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
          letter-spacing: -0.015em;
        }

        .service-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .features-block {
          margin-bottom: 24px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .features-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .service-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .service-features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.35;
        }

        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .card-bottom {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .service-tech-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tech-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          color: var(--text-secondary);
        }

        .tech-tag-more {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .btn-details {
          background: transparent;
          border: none;
          color: var(--brand-cyan);
          font-weight: 700;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .btn-details:hover {
          color: var(--brand-cyan-dark);
          gap: 9px;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }
        .btn-details:hover .arrow-icon {
          transform: translateX(2px);
        }

        /* Modal Details */
        .modal-backdrop,
        :global(.modal-backdrop) {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content,
        :global(.modal-content) {
          background: #ffffff;
          max-width: 650px;
          width: 100%;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
          border-radius: var(--radius-lg);
          padding: 36px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-icon-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .modal-close {
          background: #f1f5f9;
          border: none;
          color: #0f172a;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .modal-body {
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-section-block h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .deliverable-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: #334155;
        }

        .chip-check {
          color: var(--brand-green);
          font-weight: bold;
        }

        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill-bold {
          padding: 4px 12px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          border-radius: var(--radius-full);
          color: var(--brand-cyan);
          font-size: 0.82rem;
          font-weight: 700;
        }

        .modal-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .meta-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .meta-val {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .card-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .deliverables-grid {
            grid-template-columns: 1fr;
          }
          .modal-meta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
