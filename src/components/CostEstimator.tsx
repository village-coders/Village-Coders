'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlatformOption {
  id: string;
  name: string;
  baseCost: number;
  baseWeeks: number;
  description: string;
  icon: string;
}

interface FeatureOption {
  id: string;
  name: string;
  cost: number;
  weeks: number;
  category: string;
}

const platforms: PlatformOption[] = [
  {
    id: 'nextjs-web',
    name: 'Custom Web & SaaS Platform',
    baseCost: 3500,
    baseWeeks: 3,
    description: 'High-speed, SEO-optimized web application with modern UI/UX and full-stack capabilities',
    icon: '🌐'
  },
  {
    id: 'saas-enterprise',
    name: 'Enterprise SaaS & API Engine',
    baseCost: 7500,
    baseWeeks: 6,
    description: 'Multi-tenant architecture with high-concurrency microservices',
    icon: '🏢'
  },
  {
    id: 'mobile-app',
    name: 'Cross-Platform Mobile App',
    baseCost: 5500,
    baseWeeks: 5,
    description: 'iOS & Android native feel application with React Native/Flutter',
    icon: '📱'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & CI/CD',
    baseCost: 3000,
    baseWeeks: 2,
    description: 'Kubernetes, Terraform IaC, automated zero-downtime deployment',
    icon: '☁️'
  }
];

const features: FeatureOption[] = [
  { id: 'auth-rbac', name: 'Auth & Multi-Role Permissions', cost: 800, weeks: 1, category: 'Security' },
  { id: 'payment-gateway', name: 'Multi-Currency / Payment Rails', cost: 1400, weeks: 1.5, category: 'FinTech' },
  { id: 'realtime-chat', name: 'Real-time WebSockets / Events', cost: 1100, weeks: 1, category: 'Interactivity' },
  { id: 'ai-integration', name: 'AI / LLM & Vector Pipeline', cost: 1800, weeks: 1.5, category: 'Intelligence' },
  { id: 'admin-dashboard', name: 'Custom Analytics & Admin Suite', cost: 1500, weeks: 1.5, category: 'Management' },
  { id: 'offline-sync', name: 'Offline-First SQLite Cache', cost: 1200, weeks: 1, category: 'Mobile/Web' }
];

export const CostEstimator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('nextjs-web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth-rbac', 'admin-dashboard']);
  const [speed, setSpeed] = useState<'standard' | 'expedited'>('standard');

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const platform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
    const featCost = selectedFeatures.reduce((acc, fId) => {
      const feat = features.find((f) => f.id === fId);
      return acc + (feat ? feat.cost : 0);
    }, 0);

    const featWeeks = selectedFeatures.reduce((acc, fId) => {
      const feat = features.find((f) => f.id === fId);
      return acc + (feat ? feat.weeks : 0);
    }, 0);

    let totalCost = platform.baseCost + featCost;
    let totalWeeks = platform.baseWeeks + Math.round(featWeeks * 0.7);

    if (speed === 'expedited') {
      totalCost = Math.round(totalCost * 1.25);
      totalWeeks = Math.max(2, Math.round(totalWeeks * 0.65));
    }

    return {
      minCost: Math.round(totalCost * 0.9),
      maxCost: Math.round(totalCost * 1.15),
      weeks: totalWeeks,
      platformName: platform.name
    };
  }, [selectedPlatform, selectedFeatures, speed]);

  const handleApplyEstimate = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="section estimator-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge green">
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="section-title">
            Interactive Project <span className="text-gradient-brand">Scope & Cost Calculator</span>
          </h2>
          <p className="section-description">
            Select your architecture, core modules, and delivery velocity for an instant engineering estimate.
          </p>
        </div>

        <div className="estimator-layout">
          {/* Left: Interactive Configurator */}
          <div className="configurator-panel glass-card">
            {/* Step 1: Platform */}
            <div className="config-step">
              <div className="step-heading">
                <span className="step-num">1</span>
                <h3>Choose Primary Architecture</h3>
              </div>
              <div className="platform-options-grid">
                {platforms.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ height: '100%' }}
                  >
                    <div
                      className={`platform-card ${selectedPlatform === p.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPlatform(p.id)}
                    >
                      <div className="p-icon">{p.icon}</div>
                      <div className="p-title">{p.name}</div>
                      <div className="p-desc">{p.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div className="config-step">
              <div className="step-heading">
                <span className="step-num">2</span>
                <h3>Select Essential System Capabilities</h3>
              </div>
              <div className="features-options-grid">
                {features.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <motion.div
                      key={f.id}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`feature-chip ${isChecked ? 'checked' : ''}`}
                        onClick={() => toggleFeature(f.id)}
                      >
                        <div className="chip-checkbox">
                          {isChecked && <span>✓</span>}
                        </div>
                        <div className="chip-details">
                          <span className="chip-name">{f.name}</span>
                          <span className="chip-cat">{f.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Velocity */}
            <div className="config-step">
              <div className="step-heading">
                <span className="step-num">3</span>
                <h3>Sprint Delivery Velocity</h3>
              </div>
              <div className="velocity-toggle">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ flex: 1 }}>
                  <button
                    type="button"
                    className={`vel-btn ${speed === 'standard' ? 'active' : ''}`}
                    onClick={() => setSpeed('standard')}
                  >
                    <span className="vel-title">Standard Agile Sprints</span>
                    <span className="vel-sub">Balanced pacing with weekly milestones</span>
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ flex: 1 }}>
                  <button
                    type="button"
                    className={`vel-btn ${speed === 'expedited' ? 'active' : ''}`}
                    onClick={() => setSpeed('expedited')}
                  >
                    <span className="vel-title">⚡ Expedited Rapid Sprint</span>
                    <span className="vel-sub">Dedicated dual squad for 35% faster release</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Realtime Summary Box */}
          <div className="summary-panel glass-card">
            <div className="summary-header">
              <div className="summary-badge">Live Scope Telemetry</div>
              <h3 className="summary-title">Estimated Scope</h3>
              <p className="summary-platform">{calculation.platformName}</p>
            </div>

            <div className="summary-pricing">
              <div className="price-label">Estimated Investment Range</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${calculation.minCost}-${calculation.maxCost}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="price-value text-gradient-cyan"
                >
                  ${calculation.minCost.toLocaleString()} - ${calculation.maxCost.toLocaleString()}
                </motion.div>
              </AnimatePresence>
              <div className="price-note">Fixed-price milestone structure, zero hidden fees</div>
            </div>

            <div className="summary-stats-list">
              <div className="stat-row">
                <span className="stat-name">Estimated Time to Market:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={calculation.weeks}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    className="stat-value text-gradient-amber"
                  >
                    ~{calculation.weeks} Weeks
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="stat-row">
                <span className="stat-name">Features Included:</span>
                <span className="stat-value">{selectedFeatures.length} Custom Modules</span>
              </div>
              <div className="stat-row">
                <span className="stat-name">Dedicated Squad:</span>
                <span className="stat-value">Lead Architect, 2 Devs, QA</span>
              </div>
              <div className="stat-row">
                <span className="stat-name">Handover:</span>
                <span className="stat-value">100% IP, Git & CI/CD</span>
              </div>
            </div>

            <div className="summary-benefits">
              <div className="benefit-item">
                <span className="b-check">✓</span>
                <span>Includes 30 Days Free Post-Launch Warranty</span>
              </div>
              <div className="benefit-item">
                <span className="b-check">✓</span>
                <span>Sub-second Core Web Vitals guarantee</span>
              </div>
              <div className="benefit-item">
                <span className="b-check">✓</span>
                <span>Daily commit visibility & weekly demo video</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary w-full summary-btn"
              onClick={handleApplyEstimate}
            >
              <span>Lock In This Estimate & Submit Brief</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .estimator-section {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .estimator-layout {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 36px;
          margin-top: 56px;
          align-items: flex-start;
        }

        .configurator-panel {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }

        .config-step {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .step-heading {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(2, 132, 199, 0.08);
          border: 1.5px solid var(--brand-cyan);
          color: var(--brand-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .step-heading h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .platform-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .platform-card {
          padding: 18px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .platform-card:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .platform-card.selected {
          background: rgba(2, 132, 199, 0.06);
          border-color: var(--brand-cyan);
          box-shadow: 0 0 16px rgba(2, 132, 199, 0.15);
        }

        .p-icon {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .p-title {
          font-size: 0.95rem;
          font-weight: 750;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .p-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .features-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .feature-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feature-chip:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .feature-chip.checked {
          background: rgba(217, 119, 6, 0.08);
          border-color: var(--brand-amber);
        }

        .chip-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          color: #ffffff;
        }

        .feature-chip.checked .chip-checkbox {
          background: var(--brand-amber);
          border-color: var(--brand-amber);
        }

        .chip-details {
          display: flex;
          flex-direction: column;
        }

        .chip-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .chip-cat {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .velocity-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .vel-btn {
          padding: 16px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .vel-btn.active {
          background: rgba(2, 132, 199, 0.08);
          border-color: var(--brand-cyan);
        }

        .vel-title {
          font-size: 0.92rem;
          font-weight: 750;
          color: var(--text-primary);
        }

        .vel-sub {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        /* Summary Panel */
        .summary-panel {
          padding: 36px;
          position: sticky;
          top: calc(var(--header-height) + 20px);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
        }

        .summary-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--brand-green);
          margin-bottom: 8px;
        }

        .summary-title {
          font-size: 1.5rem;
          font-weight: 850;
          color: var(--text-primary);
        }

        .summary-platform {
          font-size: 0.9rem;
          color: var(--brand-cyan);
          font-weight: 700;
          margin-bottom: 24px;
        }

        .summary-pricing {
          padding: 20px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          text-align: center;
        }

        .price-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .price-value {
          font-size: 2.2rem;
          font-weight: 850;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .price-note {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .summary-stats-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
        }

        .stat-name {
          color: var(--text-secondary);
        }

        .stat-value {
          font-weight: 700;
          color: var(--text-primary);
        }

        .summary-benefits {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .b-check {
          color: var(--brand-green);
          font-weight: bold;
        }

        .summary-btn {
          padding: 16px;
          font-size: 0.95rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .estimator-layout {
            grid-template-columns: 1fr;
          }
          .summary-panel {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .platform-options-grid {
            grid-template-columns: 1fr;
          }
          .features-options-grid {
            grid-template-columns: 1fr;
          }
          .velocity-toggle {
            grid-template-columns: 1fr;
          }
          .price-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};
