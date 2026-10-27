'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ProjectCaseStudy } from '@/types';

export const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge amber">
            <span>Engineering Track Record</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-amber">Case Studies</span> & Production Systems
          </h2>
          <p className="section-description">
            Battle-tested systems engineered for high-growth startups and global enterprises.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="project-card-outer"
            >
                <div className="project-card glass-card">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <span className="project-client">{project.client} • {project.year}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  {/* Technologies */}
                  <div className="project-tech-list">
                    {project.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="p-tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <button
                      type="button"
                      className="btn-case-study"
                      onClick={() => setSelectedCase(project)}
                    >
                      <span>Read Case Study</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live-preview"
                        title={`Visit live site: ${project.title}`}
                      >
                        <span>Live Site</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal with Smooth Backdrop & Scale In */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
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
                <div>
                  <span className="project-category">{selectedCase.category}</span>
                  <h3 className="modal-title">{selectedCase.title}</h3>
                  <p className="modal-subtitle">Engineered for {selectedCase.client} ({selectedCase.year})</p>
                </div>
                <button className="modal-close" onClick={() => setSelectedCase(null)}>✕</button>
              </div>

            <div className="modal-body">

              <div className="case-text-block">
                <h4>System Architecture & Challenge:</h4>
                <p>{selectedCase.description}</p>
              </div>

              <div className="case-text-block">
                <h4>Core Production Deliverables:</h4>
                <ul className="case-deliverables">
                  {selectedCase.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <span className="text-green">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-text-block">
                <h4>Full Technology Stack:</h4>
                <div className="tech-pills-row">
                  {selectedCase.technologies.map((tech, idx) => (
                    <span key={idx} className="pill-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-footer-actions">
                {selectedCase.liveUrl && (
                  <a
                    href={selectedCase.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal-live"
                  >
                    <span>Visit Live Website</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
                <Link
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setSelectedCase(null)}
                >
                  Discuss a Similar Project With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

      <style jsx>{`
        .portfolio-section {
          background: #f8fafc;
          position: relative;
          width: 100%;
          clear: both;
        }

        :global(.portfolio-grid),
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
          margin-top: 52px;
          margin-bottom: 24px;
          position: relative;
        }

        :global(.project-card-outer),
        .project-card-outer {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          min-width: 0;
        }

        .project-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: 0;
          border-radius: var(--radius-lg);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(2, 132, 199, 0.4);
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.08);
        }

        .project-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 14px;
        }

        .project-category {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          color: var(--brand-cyan);
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .project-client {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-family: monospace;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .project-summary {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .metrics-showcase {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 14px;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }

        .metric-box {
          display: flex;
          flex-direction: column;
        }

        .m-val {
          font-size: 1.15rem;
          font-weight: 850;
          line-height: 1.1;
        }

        .m-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 4px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .p-tech-pill {
          font-size: 0.72rem;
          font-weight: 550;
          padding: 3px 8px;
          background: #f1f5f9;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: #334155;
        }

        .project-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .btn-live-preview {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-live-preview:hover {
          background: var(--brand-cyan);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
        }

        .btn-case-study {
          background: transparent;
          border: none;
          color: var(--brand-amber-dark);
          font-weight: 700;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .btn-case-study:hover {
          color: var(--brand-amber);
          gap: 12px;
        }

        /* Modal */
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
          max-width: 680px;
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

        .modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-top: 8px;
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

        .case-metrics-banner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .banner-item {
          display: flex;
          flex-direction: column;
        }

        .banner-val {
          font-size: 1.25rem;
          font-weight: 850;
        }

        .banner-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .case-text-block h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .case-text-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .case-deliverables {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .case-deliverables li {
          font-size: 0.9rem;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-green { color: var(--brand-green); font-weight: bold; }

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

        .modal-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .modal-footer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-modal-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.06);
          border: 1.5px solid var(--brand-cyan);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-modal-live:hover {
          background: var(--brand-cyan);
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          :global(.portfolio-grid),
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
        }

        @media (max-width: 720px) {
          :global(.portfolio-grid),
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 32px;
          }
          .project-card {
            padding: 24px 20px;
          }
          .project-title {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            padding: 20px 16px;
          }
          .project-header {
            gap: 6px;
          }
          .project-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .btn-live-preview {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
