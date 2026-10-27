'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData as initialData } from '@/data/testimonials';
import { submitFeedbackAction } from '@/app/actions/contact';
import { Testimonial } from '@/types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || '';
    const role = formData.get('role')?.toString().trim() || '';
    const company = formData.get('company')?.toString().trim() || '';
    const content = formData.get('content')?.toString().trim() || '';

    if (!name || !content || !company) {
      setFeedbackError('Please fill in your name, company/project, and feedback.');
      return;
    }

    setFeedbackError('');
    startTransition(async () => {
      try {
        const res = await submitFeedbackAction({
          name,
          role,
          company,
          rating,
          content
        });

        if (res.success) {
          setFeedbackSuccess(true);
          // Add to local testimonials list immediately
          const newTestimonial: Testimonial = {
            id: `client-fb-${Date.now()}`,
            author: name,
            title: role || 'Verified Client',
            company,
            rating,
            content,
            projectScope: company,
            avatarSeed: name
          };
          setTestimonials((prev) => [newTestimonial, ...prev]);
        } else {
          setFeedbackError(res.message);
        }
      } catch (err) {
        setFeedbackError('Unable to submit feedback at this time. Please try again.');
      }
    });
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setFeedbackSuccess(false);
    setFeedbackError('');
    setRating(5);
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge green">
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">
            What Our <span className="text-gradient-cyan">Clients Say</span> About Us
          </h2>
          <p className="section-description">
            Real feedback from the organizations and teams we have built software for.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
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
                  {item.author.split(' ').map(n => n[0]).join('').slice(0, 3)}
                </motion.div>
                <div>
                  <div className="author-name">{item.author}</div>
                  <div className="author-title">{item.title}, <span className="company-name">{item.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Place to Submit Feedback Banner */}
        <div className="feedback-cta-banner glass-card">
          <div className="feedback-cta-content">
            <div className="feedback-cta-text">
              <span className="cta-sparkle">💬</span>
              <div>
                <h4 className="cta-heading">Worked with Village Coders?</h4>
                <p className="cta-sub">We value your feedback. Share your experience with our team.</p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-feedback"
              onClick={() => setIsModalOpen(true)}
            >
              <span>✍️ Submit Your Feedback</span>
            </button>
          </div>
        </div>
      </div>

      {/* Submit Feedback Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
          >
            <motion.div 
              className="modal-card glass-card"
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">Share Your Feedback</h3>
                  <p className="modal-subtitle">Tell us about your project experience with Village Coders.</p>
                </div>
                <button type="button" className="modal-close-btn" onClick={resetModal}>✕</button>
              </div>

              {feedbackSuccess ? (
                <div className="modal-success">
                  <div className="success-icon">✓</div>
                  <h4>Thank You for Your Feedback!</h4>
                  <p>Your review has been submitted and shared with villagecoders7@gmail.com.</p>
                  <button type="button" className="btn btn-primary" onClick={resetModal}>
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                  {feedbackError && (
                    <div className="form-error-msg">⚠️ {feedbackError}</div>
                  )}

                  {/* Rating Selector */}
                  <div className="rating-select-group">
                    <label className="form-label">Your Rating *</label>
                    <div className="star-picker">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`star-pick-btn ${star <= (hoverRating || rating) ? 'active' : ''}`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          title={`${star} star${star > 1 ? 's' : ''}`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="rating-score-label">{rating} / 5 Stars</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="fb-name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="fb-name"
                      name="name"
                      required
                      placeholder="e.g. David Adeyemi"
                      className="form-input"
                    />
                  </div>

                  {/* Company / Project */}
                  <div className="form-group">
                    <label htmlFor="fb-company" className="form-label">Company / Project Name *</label>
                    <input
                      type="text"
                      id="fb-company"
                      name="company"
                      required
                      placeholder="e.g. Acme Tech or Sports Club"
                      className="form-input"
                    />
                  </div>

                  {/* Role */}
                  <div className="form-group">
                    <label htmlFor="fb-role" className="form-label">Your Role / Title (Optional)</label>
                    <input
                      type="text"
                      id="fb-role"
                      name="role"
                      placeholder="e.g. Managing Director, Founder, or Manager"
                      className="form-input"
                    />
                  </div>

                  {/* Feedback Content */}
                  <div className="form-group">
                    <label htmlFor="fb-content" className="form-label">Your Feedback / Review *</label>
                    <textarea
                      id="fb-content"
                      name="content"
                      required
                      rows={4}
                      placeholder="Share your thoughts on the quality of work, delivery speed, and communication..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <div className="modal-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={resetModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn btn-primary"
                    >
                      {isPending ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .testimonials-section {
          background: #f8fafc;
          position: relative;
          clear: both;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 52px;
        }

        :global(.testimonial-card) {
          padding: 34px;
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
          margin-bottom: 18px;
        }

        :global(.star) {
          color: var(--brand-amber-light);
          font-size: 1.15rem;
          display: inline-block;
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
          font-size: 1.02rem;
          color: var(--text-primary);
          line-height: 1.65;
          margin-bottom: 22px;
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
          margin-bottom: 22px;
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
          flex-shrink: 0;
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

        /* Submit Feedback CTA Banner */
        .feedback-cta-banner {
          margin-top: 48px;
          padding: 24px 32px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
        }

        .feedback-cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feedback-cta-text {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cta-sparkle {
          font-size: 2rem;
        }

        .cta-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .cta-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .btn-feedback {
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1.5px solid var(--brand-cyan);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-feedback:hover {
          background: var(--brand-cyan);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);
        }

        /* Feedback Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(6px);
          z-index: 250;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          background: #ffffff;
          max-width: 540px;
          width: 100%;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
          padding: 32px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .modal-close-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-error-msg {
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #dc2626;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
        }

        .rating-select-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .star-picker {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .star-pick-btn {
          background: none;
          border: none;
          font-size: 1.7rem;
          color: #cbd5e1;
          cursor: pointer;
          transition: transform 0.15s ease, color 0.15s ease;
          padding: 0 2px;
        }

        .star-pick-btn:hover {
          transform: scale(1.2);
        }

        .star-pick-btn.active {
          color: var(--brand-amber);
        }

        .rating-score-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-left: 8px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .modal-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
        }

        .modal-success {
          text-align: center;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .modal-success .success-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(22, 163, 74, 0.1);
          color: var(--brand-green);
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .modal-success h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-success p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .feedback-cta-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .btn-feedback {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};
