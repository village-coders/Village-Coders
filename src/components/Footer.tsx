'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <BrandLogo size="md" />
            <p className="footer-mission">
              High-performance web applications, distributed cloud backends, and mobile systems for ambitious companies worldwide.
            </p>
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>Village Coders Studio — Operating Globally</span>
            </div>
            <div className="footer-contact-direct">
              <a href="tel:+2349037118808" className="footer-contact-link">
                <span className="contact-icon-mini">📞</span> +234 903 711 8808
              </a>
              <a href="tel:+2348085742261" className="footer-contact-link">
                <span className="contact-icon-mini">🚨</span> +234 808 574 2261
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="#services">Specialized Services</Link></li>
              <li><Link href="#portfolio">Featured Case Studies</Link></li>
              <li><Link href="#estimator">Cost & Scope Calculator</Link></li>
              <li><Link href="#process">Engineering Lifecycle</Link></li>
              <li><Link href="#team">Architects & Team</Link></li>
              <li><Link href="#testimonials">Client Endorsements</Link></li>
              <li><Link href="#faq">Technical FAQ</Link></li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="footer-column">
            <h4 className="footer-title">Engineering</h4>
            <ul className="footer-links">
              <li><Link href="#services">Custom Web Platforms</Link></li>
              <li><Link href="#services">Enterprise SaaS & APIs</Link></li>
              <li><Link href="#services">React Native & Mobile</Link></li>
              <li><Link href="#services">Cloud DevOps & Terraform</Link></li>
              <li><Link href="#services">Cybersecurity Auditing</Link></li>
              <li><Link href="#services">UI/UX Design Systems</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column newsletter-col">
            <h4 className="footer-title">Engineering Dispatch</h4>
            <p className="newsletter-desc">
              Subscribe to our monthly architectural digest covering full-stack engineering, cloud systems, and web performance.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <span>✓ You are subscribed to our technical dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="architect@company.com"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2026 Village Coders (thevillagecoders.com). All rights reserved. Registered Web & Software Developers.
          </div>

          <div className="bottom-links">
            <Link href="#privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="#terms">Terms of Service</Link>
            <span>•</span>
            <Link href="#security">Security SLA</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          padding-top: 80px;
          padding-bottom: 40px;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-mission {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 360px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .footer-contact-direct {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-contact-link:hover {
          color: var(--brand-cyan);
        }

        .contact-icon-mini {
          font-size: 0.95rem;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links li a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          font-weight: 500;
        }

        .footer-links li a:hover {
          color: var(--brand-cyan);
          transform: translateX(4px);
        }

        .newsletter-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }

        .newsletter-input {
          flex: 1;
          padding: 10px 14px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--brand-cyan);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .newsletter-btn {
          padding: 10px 18px;
          font-size: 0.85rem;
        }

        .newsletter-success {
          padding: 10px 14px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.25);
          border-radius: var(--radius-sm);
          color: var(--brand-green);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          font-size: 0.82rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bottom-links a:hover {
          color: var(--brand-cyan);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
