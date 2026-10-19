'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActionWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/2349037118808?text=Hello%20Village%20Coders%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-widget-container"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
          {/* Expanded Quick Contact Card */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="widget-popover glass-card"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="popover-header">
                  <div className="popover-status">
                    <span className="pulse-dot"></span>
                    <span className="status-text">Principal Architect Online</span>
                  </div>
                  <button
                    type="button"
                    className="popover-close-btn"
                    onClick={() => setExpanded(false)}
                    aria-label="Close contact widget"
                  >
                    ×
                  </button>
                </div>

                <div className="popover-body">
                  <p className="popover-title">Ready to build or scale?</p>
                  <p className="popover-desc">
                    Connect directly with our engineering team for an instant architectural feasibility review.
                  </p>

                  <div className="popover-actions">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="popover-btn whatsapp-btn"
                    >
                      <span className="btn-icon">💬</span>
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="#estimator"
                      className="popover-btn estimator-btn"
                      onClick={() => setExpanded(false)}
                    >
                      <span className="btn-icon">⚡</span>
                      <span>Calculate Scope & Cost</span>
                    </a>

                    <a
                      href="#contact"
                      className="popover-btn email-btn"
                      onClick={() => setExpanded(false)}
                    >
                      <span className="btn-icon">✉️</span>
                      <span>Send Project Brief</span>
                    </a>
                  </div>
                </div>

                <div className="popover-footer">
                  <span className="sla-badge">🛡️ 12-Hour SLA Response</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Trigger Pill */}
          <div className="widget-bar">
            <motion.button
              type="button"
              className="widget-main-pill"
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Toggle quick contact menu"
            >
              <span className="pulse-dot"></span>
              <span className="widget-label">Chat with Architect</span>
              <span className="widget-badge-count">12h SLA</span>
            </motion.button>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="widget-icon-btn whatsapp-icon-btn"
              title="Quick WhatsApp Chat"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Chat on WhatsApp"
            >
              💬
            </motion.a>

            <motion.button
              type="button"
              className="widget-icon-btn top-btn"
              onClick={scrollToTop}
              title="Scroll to Top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll back to top"
            >
              ↑
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
