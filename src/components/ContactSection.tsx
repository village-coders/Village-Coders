'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactAction, ActionResponse } from '@/app/actions/contact';
import { servicesData } from '@/data/services';

const initialResponse: ActionResponse = {
  success: false,
  message: '',
  errors: {}
};

export const ContactSection: React.FC = () => {
  const [response, setResponse] = useState<ActionResponse>(initialResponse);
  const [isPending, startTransition] = useTransition();

  const [selectedService, setSelectedService] = useState<string>('web-development');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('service', selectedService);

    startTransition(async () => {
      try {
        const res = await submitContactAction(null, formData);
        setResponse(res);
      } catch (err) {
        setResponse({
          success: false,
          message: 'Unable to submit brief at this moment. Please email hello@thevillagecoders.com directly.'
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
              <span>Initiate Discovery</span>
            </div>

            <h2 className="section-title">
              Let&apos;s Build Something <span className="text-gradient-cyan">Extraordinary</span> Together.
            </h2>

            <p className="contact-lead">
              Have a digital product to build or architecture to scale? Submit your brief to connect directly with our principal software architect.
            </p>

            <motion.div 
              className="sla-card glass-card"
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(2, 132, 199, 0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <div className="sla-header">
                <span className="pulse-dot"></span>
                <span className="sla-title">12-Hour SLA Commitment</span>
              </div>
              <p className="sla-text">
                Direct review by an active software architect within 12 business hours. No sales reps, no middlemen.
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
                    <span className="channel-tag">General</span>
                  </div>
                  <div className="channel-links mt-xs">
                    <a href="tel:+2348085742261" className="channel-value text-secondary">+234 808 574 2261</a>
                    <span className="channel-tag emergency">Emergency</span>
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
                  <div className="channel-label">Email Inquiries</div>
                  <div className="channel-links">
                    <a href="mailto:villagecoders7@gmail.com" className="channel-value">villagecoders7@gmail.com</a>
                  </div>
                  <div className="channel-links mt-xs">
                    <a href="mailto:hello@thevillagecoders.com" className="channel-value text-secondary">hello@thevillagecoders.com</a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="channel-item"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="channel-icon">📍</div>
                <div>
                  <div className="channel-label">Studio & Operation</div>
                  <div className="channel-value">Remote & Global (thevillagecoders.com)</div>
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
                  <div className="success-icon">🎉</div>
                  <h3 className="success-title">Technical Brief Received!</h3>
                  <p className="success-desc">{response.message}</p>
                  <div className="success-action">
                    <motion.button
                      type="button"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setResponse(initialResponse);
                      }}
                    >
                      Submit Another Inquiry
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
                    <h3>Start Your Technical Brief</h3>
                    <p>Fast discovery and transparent technical estimates.</p>
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
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Alex Morgan"
                        className={`form-input ${response.errors?.name ? 'input-error' : ''}`}
                      />
                      {response.errors?.name && <span className="error-text">{response.errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Business Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        className={`form-input ${response.errors?.email ? 'input-error' : ''}`}
                      />
                      {response.errors?.email && <span className="error-text">{response.errors.email}</span>}
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="e.g. Acme FinTech Corp"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+234 903 711 8808"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Primary Capability Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="form-select"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Full Custom Discovery Consultation</option>
                    </select>
                  </div>

                  {/* Target Investment / Budget Number Input */}
                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Target Investment / Budget (USD)
                    </label>
                    <div className="budget-input-wrapper">
                      <span className="currency-prefix">$</span>
                      <input
                        type="number"
                        id="budget"
                        name="budget"
                        min="0"
                        step="500"
                        placeholder="e.g. 10000"
                        className="form-input budget-number-input"
                      />
                    </div>
                  </div>

                  {/* Project Brief Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Scope & Core Objectives *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about what you want to build, current challenges, technical requirements, and target launch dates..."
                      className={`form-textarea ${response.errors?.message ? 'input-error' : ''}`}
                    ></textarea>
                    {response.errors?.message && <span className="error-text">{response.errors.message}</span>}
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
                        <span>Processing Server Action...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Brief & Schedule Discovery</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
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
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 56px;
          align-items: flex-start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-lead {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        :global(.sla-card) {
          padding: 24px;
          background: rgba(2, 132, 199, 0.05);
          border: 1px solid rgba(2, 132, 199, 0.2);
          border-radius: var(--radius-md);
        }

        .sla-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .sla-title {
          font-size: 0.95rem;
          font-weight: 750;
          color: var(--brand-cyan);
        }

        .sla-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .direct-channels {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 10px;
        }

        :global(.channel-item) {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        .channel-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .channel-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .channel-value {
          font-size: 0.95rem;
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
          margin-top: 4px;
        }

        .channel-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 1px 6px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .channel-tag.emergency {
          color: var(--brand-amber-dark);
          background: rgba(217, 119, 6, 0.08);
          border-color: rgba(217, 119, 6, 0.25);
        }

        /* Form Wrapper */
        .contact-form-wrapper {
          padding: 40px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
        }

        .form-header {
          margin-bottom: 24px;
        }

        .form-header h3 {
          font-size: 1.5rem;
          font-weight: 850;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .form-header p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        :global(.contact-form) {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.92rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .input-error {
          border-color: #ef4444;
        }

        .error-text {
          font-size: 0.78rem;
          color: #ef4444;
        }

        .error-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: var(--radius-sm);
          color: #b91c1c;
          font-size: 0.88rem;
        }

        .budget-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .currency-prefix {
          position: absolute;
          left: 14px;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-muted);
          pointer-events: none;
          user-select: none;
          z-index: 2;
        }

        .budget-number-input {
          padding-left: 32px !important;
        }

        :global(.submit-btn) {
          padding: 16px;
          font-size: 1rem;
          margin-top: 10px;
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

        :global(.success-banner) {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon {
          font-size: 3rem;
        }

        .success-title {
          font-size: 1.8rem;
          font-weight: 850;
          color: var(--text-primary);
        }

        .success-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 480px;
          line-height: 1.6;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .budget-radios {
            grid-template-columns: 1fr;
          }
          .contact-form-wrapper {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};
