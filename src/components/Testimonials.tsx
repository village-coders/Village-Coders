'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge green">
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="section-title">
            Trusted by Founders, CTOs & <span className="text-gradient-cyan">Global Enterprises</span>
          </h2>
          <p className="section-description">
            What founders, CTOs, and engineering leaders say about building with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              className="testimonial-card glass-card"
              whileHover={{ 
                y: -6, 
                boxShadow: '0 20px 35px -10px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(2, 132, 199, 0.25)' 
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <div className="rating-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="star"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    ★
                  </motion.span>
                ))}
                <span className="verified-badge">✓ Verified Client</span>
              </div>

              <blockquote className="quote-text">
                &ldquo;{item.content}&rdquo;
              </blockquote>

              <div className="project-badge">
                <span className="p-label">Delivered:</span> {item.projectScope}
              </div>

              <div className="author-row">
                <motion.div 
                  className="author-avatar"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {item.author.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <div>
                  <div className="author-name">{item.author}</div>
                  <div className="author-title">{item.title}, <span className="company-name">{item.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #f8fafc;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 56px;
        }

        :global(.testimonial-card) {
          padding: 36px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
          cursor: default;
          transition: border-color 0.2s ease;
        }

        .rating-stars {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 20px;
        }

        :global(.star) {
          color: var(--brand-amber-light);
          font-size: 1.15rem;
          display: inline-block;
          cursor: pointer;
        }

        .verified-badge {
          margin-left: auto;
          font-size: 0.72rem;
          color: var(--brand-green);
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.25);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: 700;
        }

        .quote-text {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.65;
          margin-bottom: 24px;
          font-style: italic;
        }

        .project-badge {
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          margin-top: auto;
          margin-bottom: 24px;
        }

        .p-label {
          color: var(--brand-cyan);
          font-weight: 700;
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
        }

        :global(.author-avatar) {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--brand-cyan), var(--brand-amber));
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .author-name {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .author-title {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .company-name {
          color: var(--brand-cyan);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
