'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '@/data/faqs';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <span>Clarifications & Terms</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient-cyan">Engineering Questions</span>
          </h2>
          <p className="section-description">
            Direct answers on our sprint cadence, IP handover, and engineering guarantees.
          </p>
        </div>

        <div className="faq-container">
          {faqsData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-title">
                    <span className="faq-num">0{index + 1}</span>
                    <span>{item.question}</span>
                  </div>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer-body">
                        <p>{item.answer}</p>
                        <div className="faq-category-tag">Category: {item.category}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .faq-container {
          max-width: 860px;
          margin: 56px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 4px rgba(15, 23, 42, 0.03);
        }

        .faq-item:hover {
          border-color: #cbd5e1;
        }

        .faq-item.open {
          border-color: var(--brand-cyan);
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          padding: 22px 28px;
          background: transparent;
          border: none;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 16px;
        }

        .faq-question-title {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 1.1rem;
          font-weight: 750;
          line-height: 1.4;
        }

        .faq-num {
          font-family: monospace;
          font-size: 0.85rem;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 700;
        }

        .faq-icon {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--brand-amber-dark);
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          border-radius: 50%;
        }

        .faq-answer-body {
          padding: 0 28px 24px 72px;
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .faq-category-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .faq-question-btn {
            padding: 18px 20px;
          }
          .faq-question-title {
            font-size: 0.98rem;
            gap: 12px;
          }
          .faq-answer-body {
            padding: 0 20px 20px 20px;
          }
        }
      `}</style>
    </section>
  );
};
