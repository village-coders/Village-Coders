'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Discovery & System Blueprinting',
    subtitle: 'Architectural Bedrock',
    desc: 'System architecture, API contracts, and database schemas mapped out before writing production code.',
    deliverables: ['Architecture Diagram', 'Database ERD', 'User Flows', 'Sprint Plan'],
    accentColor: '#0284c7'
  },
  {
    step: '02',
    title: 'Agile Sprints & Test-Driven Build',
    subtitle: 'Two-Week Sprints',
    desc: 'Rapid sprint cycles with daily GitHub commits, private staging previews, and automated test reports.',
    deliverables: ['Staging Environments', 'Jest/Playwright Tests', 'Daily Commits', 'Sprint Demos'],
    accentColor: '#d97706'
  },
  {
    step: '03',
    title: 'Security Auditing & Load Hardening',
    subtitle: 'Zero-Trust Hardening',
    desc: 'Automated vulnerability scans, OWASP penetration testing, and load stress testing up to 10k concurrent users.',
    deliverables: ['OWASP Audit Report', 'Load Telemetry', 'Hardened Docker/K8s', 'SSL/TLS & CSP'],
    accentColor: '#15803d'
  },
  {
    step: '04',
    title: 'Zero-Downtime Launch & SLA Handover',
    subtitle: 'Release & IP Handover',
    desc: 'Zero-downtime DNS cutover, 100% source code ownership transfer, and 30-day post-launch warranty.',
    deliverables: ['100% Code Handover', 'Prometheus Alerts', '30-Day Warranty', 'Maintenance SLA'],
    accentColor: '#784421'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <span>Rigorous Methodology</span>
          </div>
          <h2 className="section-title">
            How We Engineer <span className="text-gradient-cyan">Flawless Software</span>
          </h2>
          <p className="section-description">
            A structured, battle-tested engineering lifecycle designed for speed, security, and predictability.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              className="process-card glass-card"
              whileHover={{ 
                y: -6, 
                boxShadow: '0 20px 35px -10px rgba(15, 23, 42, 0.1), 0 0 0 1px ' + item.accentColor 
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <motion.div 
                className="card-indicator" 
                style={{ background: item.accentColor }}
                whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span>{item.step}</span>
              </motion.div>

              <div className="card-body">
                <span className="card-subtitle" style={{ color: item.accentColor }}>{item.subtitle}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>

                <div className="card-deliverables">
                  <span className="del-header">Key Milestones:</span>
                  <div className="del-tags">
                    {item.deliverables.map((d, dIdx) => (
                      <motion.span 
                        key={dIdx} 
                        className="del-tag"
                        whileHover={{ scale: 1.05, backgroundColor: '#e2e8f0' }}
                        transition={{ duration: 0.15 }}
                      >
                        <span style={{ color: item.accentColor, fontWeight: 700 }}>✓</span> {d}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: #f8fafc;
          position: relative;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 56px;
        }

        :global(.process-card) {
          padding: 32px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
          cursor: default;
          transition: border-color 0.2s ease;
        }

        :global(.card-indicator) {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-family: monospace;
          font-size: 1.25rem;
          font-weight: 800;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .card-subtitle {
          font-size: 0.82rem;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .card-deliverables {
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .del-header {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .del-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        :global(.del-tag) {
          font-size: 0.78rem;
          font-weight: 500;
          padding: 4px 10px;
          background: #f1f5f9;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: #334155;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: default;
        }

        @media (max-width: 900px) {
          .process-timeline {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          :global(.process-card) {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};
