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
    const content = formData.get('content')?.toString().trim() || '';

    if (!name || !content) {
      setFeedbackError('Please enter your name and your feedback.');
      return;
    }

    setFeedbackError('');
    startTransition(async () => {
      try {
        const res = await submitFeedbackAction({
          name,
          company: 'Verified Client',
          rating,
          content
        });

        if (res.success) {
          setFeedbackSuccess(true);
          const newTestimonial: Testimonial = {
            id: `client-fb-${Date.now()}`,
            author: name,
            title: 'Verified Client',
            company: 'Client Partner',
            rating,
            content,
            projectScope: 'Web & Software Solutions',
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
    setHoverRating(0);
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

        {/* Submit Feedback Action Banner */}
        <div className="feedback-cta-banner glass-card">
          <div className="feedback-cta-content">
            <div className="feedback-cta-text">
              <span className="cta-sparkle">💬</span>
              <div>
                <h4 className="cta-heading">Worked with Village Coders?</h4>
                <p className="cta-sub">We value your partnership. Share your feedback with our team.</p>
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

      {/* Ultra-Clean, Professional Feedback Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="feedback-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.72)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div 
              className="feedback-modal-card"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#ffffff',
                maxWidth: '500px',
                width: '100%',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(15, 23, 42, 0.05)',
                padding: '32px 32px 28px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              {/* Header */}
              <div className="fb-modal-header">
                <div>
                  <div className="fb-badge">
                    <span>⭐ Client Feedback</span>
                  </div>
                  <h3 className="fb-modal-title">Share Your Experience</h3>
                  <p className="fb-modal-subtitle">We appreciate your honest thoughts and review.</p>
                </div>
                <button 
                  type="button" 
                  className="fb-close-btn" 
                  onClick={resetModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {feedbackSuccess ? (
                <div className="fb-modal-success">
                  <div className="fb-success-icon">✓</div>
                  <h4>Thank You for Your Feedback!</h4>
                  <p>Your review has been submitted to villagecoders7@gmail.com and added to our feedback list.</p>
                  <button type="button" className="btn btn-primary w-full" onClick={resetModal}>
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="fb-modal-form">
                  {feedbackError && (
                    <div className="fb-error-msg">⚠️ {feedbackError}</div>
                  )}

                  {/* Rating Selector */}
                  <div className="fb-form-group">
                    <label className="fb-form-label">How would you rate our work? *</label>
                    <div className="fb-star-picker">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`fb-star-btn ${star <= (hoverRating || rating) ? 'active' : ''}`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          aria-label={`${star} star`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="fb-rating-score">
                        {hoverRating || rating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="fb-form-group">
                    <label htmlFor="fb-name" className="fb-form-label">Your Name *</label>
                    <input
                      type="text"
                      id="fb-name"
                      name="name"
                      required
                      placeholder="e.g. David Adeyemi"
                      className="fb-form-input"
                    />
                  </div>

                  {/* Feedback Textarea */}
                  <div className="fb-form-group">
                    <label htmlFor="fb-content" className="fb-form-label">Your Feedback / Review *</label>
                    <textarea
                      id="fb-content"
                      name="content"
                      required
                      rows={4}
                      placeholder="Tell us about your experience working with Village Coders, our communication, delivery speed, and code quality..."
                      className="fb-form-textarea"
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="fb-modal-actions">
                    <button
                      type="button"
                      className="fb-btn-cancel"
                      onClick={resetModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="fb-btn-submit"
                    >
                      {isPending ? 'Submitting...' : 'Submit Feedback ➔'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .testimonials-section {
          background: #f8fafc;
          position: relative;
          clear: both;
          padding-bottom: 90px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 52px;
        }

        .testimonial-card {
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

        .rating-stars .star {
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

        .author-avatar {
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

        /* --- Full Professional Modal Styling --- */
        .fb-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 22px;
        }

        .fb-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 750;
          color: var(--brand-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.2);
          border-radius: var(--radius-full);
          padding: 3px 10px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fb-modal-title {
          font-size: 1.35rem;
          font-weight: 850;
          color: #0f172a;
          line-height: 1.25;
          margin: 0;
        }

        .fb-modal-subtitle {
          font-size: 0.88rem;
          color: #64748b;
          margin-top: 4px;
          margin-bottom: 0;
        }

        .fb-close-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          color: #475569;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-left: 14px;
        }

        .fb-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: scale(1.05);
        }

        .fb-modal-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .fb-error-msg {
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #dc2626;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
        }

        .fb-form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fb-form-label {
          font-size: 0.86rem;
          font-weight: 700;
          color: #1e293b;
        }

        .fb-star-picker {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
        }

        .fb-star-btn {
          background: none;
          border: none;
          font-size: 2rem;
          color: #cbd5e1;
          cursor: pointer;
          transition: transform 0.15s ease, color 0.15s ease;
          padding: 0 2px;
          line-height: 1;
        }

        .fb-star-btn:hover {
          transform: scale(1.2);
        }

        .fb-star-btn.active {
          color: #f59e0b;
        }

        .fb-rating-score {
          font-size: 0.88rem;
          font-weight: 750;
          color: #0284c7;
          margin-left: auto;
          background: rgba(2, 132, 199, 0.08);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .fb-form-input,
        .fb-form-textarea {
          width: 100%;
          padding: 11px 14px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: #0f172a;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .fb-form-input:focus,
        .fb-form-textarea:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .fb-form-textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.55;
        }

        .fb-modal-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 6px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .fb-btn-cancel {
          padding: 11px 20px;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-weight: 650;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fb-btn-cancel:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .fb-btn-submit {
          padding: 11px 24px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
          transition: all 0.2s ease;
        }

        .fb-btn-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.45);
        }

        .fb-btn-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .fb-modal-success {
          text-align: center;
          padding: 28px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .fb-success-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .fb-modal-success h4 {
          font-size: 1.3rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
        }

        .fb-modal-success p {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 10px;
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
