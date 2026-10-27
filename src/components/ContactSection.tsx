'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactAction, ActionResponse } from '@/app/actions/contact';

const initialResponse: ActionResponse = {
  success: false,
  message: '',
  errors: {}
};

export const ContactSection: React.FC = () => {
  const [response, setResponse] = useState<ActionResponse>(initialResponse);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const res = await submitContactAction(null, formData);
        setResponse(res);
      } catch (err) {
        setResponse({
          success: false,
          message: 'Unable to send message right now. Please email us directly at villagecoders7@gmail.com.'
        });
      }
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info">
            <div className="section-badge amber">
              <span>Get In Touch</span>
            </div>

            <h2 className="section-title">
              Let&apos;s Build Something <span className="text-gradient-cyan">Great</span> Together.
            </h2>

            <p className="contact-lead">
              Have an idea, project, or existing software you want to build or improve? Send us a message and our team will get back to you promptly.
            </p>

            <motion.div 
              className="sla-card glass-card"
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(2, 132, 199, 0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <div className="sla-header">
                <span className="pulse-dot"></span>
                <span className="sla-title">Fast Response Guarantee</span>
              </div>
              <p className="sla-text">
                Every inquiry is reviewed directly by our core software development team. You will hear back within a few hours.
              </p>
            </motion.div>

            <div className="direct-channels">
              <motion.div 
                className="channel-item"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="channel-icon">📞</div>
                <div>
                  <div className="channel-label">Direct Lines / WhatsApp</div>
                  <div className="channel-links">
                    <a href="tel:+2349037118808" className="channel-value">+234 903 711 8808</a>
                    <span className="channel-tag">Direct</span>
                  </div>
                  <div className="channel-links mt-xs">
                    <a href="tel:+2348085742261" className="channel-value text-secondary">+234 808 574 2261</a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="channel-item"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="channel-icon">✉️</div>
                <div>
                  <div className="channel-label">Official Email</div>
                  <div className="channel-links">
                    <a href="mailto:villagecoders7@gmail.com" className="channel-value">villagecoders7@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="channel-item"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="channel-icon">🌐</div>
                <div>
                  <div className="channel-label">Official Website</div>
                  <div className="channel-value">thevillagecoders.com</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-wrapper glass-card">
            <AnimatePresence mode="wait">
              {response.success ? (
                <motion.div 
                  key="success"
                  className="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-desc">
                    Your inquiry has been automatically delivered to <strong>villagecoders7@gmail.com</strong>. We will review your message and reach out shortly.
                  </p>
                  <div className="success-action">
                    <motion.button
                      type="button"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setResponse(initialResponse)}
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="form-header">
                    <h3>Send Us a Message</h3>
                    <p>Tell us about your project and we will get back to you quickly.</p>
                  </div>

                  {response.message && !response.success && (
                    <div className="error-alert">
                      <span>⚠️</span>
                      <span>{response.message}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Alex"
                        className={`form-input ${response.errors?.name ? 'input-error' : ''}`}
                      />
                      {response.errors?.name && <span className="error-text">{response.errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className={`form-input ${response.errors?.email ? 'input-error' : ''}`}
                      />
                      {response.errors?.email && <span className="error-text">{response.errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234 903 711 8808"
                      className="form-input"
                    />
                  </div>

                  {/* Note */}
                  <div className="form-group">
                    <label htmlFor="note" className="form-label">Note *</label>
                    <textarea
                      id="note"
                      name="note"
                      required
                      rows={4}
                      placeholder="Leave us a note about your project, idea, or questions..."
                      className={`form-textarea ${response.errors?.note ? 'input-error' : ''}`}
                    ></textarea>
                    {response.errors?.note && <span className="error-text">{response.errors.note}</span>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    className="btn btn-primary submit-btn w-full"
                    whileHover={{ scale: isPending ? 1 : 1.015 }}
                    whileTap={{ scale: isPending ? 1 : 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isPending ? (
                      <>
                        <span className="spinner"></span>
                        <span>Sending Note...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Note to Village Coders</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #f8fafc;
          position: relative;
          clear: both;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 52px;
          align-items: flex-start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .contact-lead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        :global(.sla-card) {
          padding: 22px;
          background: rgba(2, 132, 199, 0.05);
          border: 1px solid rgba(2, 132, 199, 0.2);
          border-radius: var(--radius-md);
        }

        .sla-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .sla-title {
          font-size: 0.92rem;
          font-weight: 750;
          color: var(--brand-cyan);
        }

        .sla-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--brand-green);
          box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(22, 163, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }

        .direct-channels {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }

        :global(.channel-item) {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .channel-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .channel-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .channel-value {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .channel-value:hover {
          color: var(--brand-cyan);
        }

        .channel-value.text-secondary {
          color: var(--text-secondary);
        }

        .channel-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .channel-links.mt-xs {
          margin-top: 3px;
        }

        .channel-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 1px 6px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        /* Form Wrapper */
        .contact-form-wrapper {
          padding: 36px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
        }

        .form-header {
          margin-bottom: 22px;
        }

        .form-header h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .form-header p {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .error-alert {
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: var(--radius-sm);
          color: #dc2626;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.84rem;
          font-weight: 650;
          color: var(--text-primary);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.92rem;
          color: var(--text-primary);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .form-input.input-error,
        .form-textarea.input-error {
          border-color: #ef4444;
        }

        .error-text {
          font-size: 0.75rem;
          color: #dc2626;
          font-weight: 500;
        }

        .budget-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .currency-prefix {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.95rem;
          pointer-events: none;
        }

        .budget-number-input {
          padding-left: 28px;
        }

        .submit-btn {
          margin-top: 6px;
          padding: 14px 24px;
          font-size: 0.95rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
        }

        .w-full {
          width: 100%;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success Banner */
        .success-banner {
          text-align: center;
          padding: 32px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(22, 163, 74, 0.1);
          color: var(--brand-green);
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .success-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .success-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 440px;
        }

        .success-action {
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-wrapper {
            padding: 28px 20px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
};
