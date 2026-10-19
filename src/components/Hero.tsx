'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type TabKey = 'nextjs' | 'microservice' | 'mobile' | 'security';

interface TabConfig {
  filename: string;
  statusText: string;
  statusColor: string;
  footerMetrics: { label: string; value: string; colorClass: string }[];
  renderCode: () => React.ReactNode;
}

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('nextjs');
  const [wordIndex, setWordIndex] = useState(0);

  const rotatingWords = [
    { text: 'Digital Products', color: 'text-gradient-cyan' },
    { text: 'Web Platforms', color: 'text-gradient-amber' },
    { text: 'Enterprise SaaS', color: 'text-gradient-cyan' },
    { text: 'Cloud Systems', color: 'text-gradient-amber' },
    { text: 'Mobile Apps', color: 'text-gradient-cyan' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  const tabConfigs: Record<TabKey, TabConfig> = {
    nextjs: {
      filename: 'metrics-service.ts',
      statusText: 'Active',
      statusColor: '#38bdf8',
      footerMetrics: [
        { label: 'Turbo:', value: 'Active', colorClass: 'text-green' },
        { label: 'Hit Rate:', value: '99.8%', colorClass: 'text-cyan' },
        { label: 'Lighthouse:', value: '100/100', colorClass: 'text-amber' }
      ],
      renderCode: () => (
        <>
          <span className="c-comment">// Next.js 16 App Router + React 19 Server Cache</span>{'\n'}
          <span className="c-keyword">import</span> {'{'} <span className="c-ident">cache</span> {'}'} <span className="c-keyword">from</span> <span className="c-string">&apos;react&apos;</span>;{'\n'}
          <span className="c-keyword">import</span> {'{'} <span className="c-ident">db</span> {'}'} <span className="c-keyword">from</span> <span className="c-string">&apos;@/lib/database&apos;</span>;{'\n\n'}
          <span className="c-keyword">export const</span> <span className="c-func">getMetrics</span> = <span className="c-func">cache</span>(<span className="c-keyword">async</span> (id: <span className="c-type">string</span>) =&gt; {'{\n'}
          {'  '}<span className="c-string">&apos;use cache&apos;</span>;{'\n'}
          {'  '}<span className="c-keyword">return await</span> db.analytics.<span className="c-func">aggregate</span>({'{'}{'\n'}
          {'    '}where: {'{'} tenantId: id, status: <span className="c-string">&apos;SETTLED&apos;</span> {'}'},{'\n'}
          {'    '}metrics: [<span className="c-string">&apos;throughput&apos;</span>, <span className="c-string">&apos;latency_p99&apos;</span>],{'\n'}
          {'    '}cacheTag: <span className="c-template">`metrics-${'{'}id{'}'}`</span>,{'\n'}
          {'    '}revalidate: <span className="c-num">60</span>{'\n'}
          {'  }'});{'\n'}
          {'}'});{'\n\n'}
          <span className="c-keyword">export default async function</span> <span className="c-func">Dashboard</span>({'{'} params {'}'}) {'{\n'}
          {'  '}<span className="c-keyword">const</span> data = <span className="c-keyword">await</span> <span className="c-func">getMetrics</span>(params.id);{'\n'}
          {'  '}<span className="c-keyword">return</span> &lt;<span className="c-tag">RealtimeTelemetry</span> data={'{'}data{'}'} /&gt;;{'\n'}
          {'}'}
        </>
      )
    },
    microservice: {
      filename: 'telemetry_stream.go',
      statusText: 'Active',
      statusColor: '#00add8',
      footerMetrics: [
        { label: 'Throughput:', value: '120k/s', colorClass: 'text-green' },
        { label: 'P99 Latency:', value: '1.2ms', colorClass: 'text-cyan' },
        { label: 'SLA:', value: '99.999%', colorClass: 'text-amber' }
      ],
      renderCode: () => (
        <>
          <span className="c-comment">// High-Concurrency Financial Settlement Engine (Go 1.23)</span>{'\n'}
          <span className="c-comment">// Architecture: Event-driven Kafka + Redis zero-lock cache</span>{'\n'}
          <span className="c-keyword">package</span> <span className="c-ident">telemetry</span>{'\n\n'}
          <span className="c-keyword">type</span> <span className="c-type">TransactionProcessor</span> <span className="c-keyword">struct</span> {'{\n'}
          {'  '}Cluster   *<span className="c-type">kafka.Producer</span>{'\n'}
          {'  '}Cache     *<span className="c-type">redis.RingClient</span>{'\n'}
          {'  '}RateLimit *<span className="c-type">limiter.TokenBucket</span>{'\n'}
          {'}'}{'\n\n'}
          <span className="c-keyword">func</span> (tp *<span className="c-type">TransactionProcessor</span>) <span className="c-func">HandleStream</span>({'\n'}
          {'  '}ctx <span className="c-type">context.Context</span>, tx *<span className="c-type">Tx</span>,{'\n'}
          ) (*<span className="c-type">Receipt</span>, <span className="c-type">error</span>) {'{\n'}
          {'  '}<span className="c-keyword">if</span> err := tp.RateLimit.<span className="c-func">Allow</span>(tx.ID); err != <span className="c-bool">nil</span> {'{\n'}
          {'    '}<span className="c-keyword">return</span> <span className="c-bool">nil</span>, <span className="c-ident">ErrQuotaExceeded</span>{'\n'}
          {'  }'}{'\n'}
          {'  '}<span className="c-keyword">return</span> tp.<span className="c-func">settleAtomic</span>(ctx, tx){'\n'}
          {'}'}
        </>
      )
    },
    mobile: {
      filename: 'offline_sync.tsx',
      statusText: 'Active',
      statusColor: '#16a34a',
      footerMetrics: [
        { label: 'Sync:', value: 'SQLite Local', colorClass: 'text-green' },
        { label: 'FPS:', value: '120 Native', colorClass: 'text-cyan' },
        { label: 'Loss:', value: '0.00%', colorClass: 'text-amber' }
      ],
      renderCode: () => (
        <>
          <span className="c-comment">// React Native + Offline SQLite Synchronizer</span>{'\n'}
          <span className="c-comment">// Architecture: Optimistic UI with bi-directional conflict resolution</span>{'\n'}
          <span className="c-keyword">import</span> {'{'} <span className="c-ident">syncEngine</span>, <span className="c-ident">LocalQueue</span> {'}'} <span className="c-keyword">from</span> <span className="c-string">&apos;@/lib/offline&apos;</span>;{'\n\n'}
          <span className="c-keyword">export const</span> <span className="c-func">useOfflineQuery</span> = (key: <span className="c-type">string</span>) =&gt; {'{\n'}
          {'  '}<span className="c-keyword">const</span> [data, setData] = <span className="c-func">useState</span>(() =&gt; LocalQueue.<span className="c-func">get</span>(key));{'\n\n'}
          {'  '}<span className="c-func">useEffect</span>(() =&gt; {'{\n'}
          {'    '}<span className="c-keyword">return</span> syncEngine.<span className="c-func">subscribe</span>(key, (updates) =&gt; {'{\n'}
          {'      '}<span className="c-func">setData</span>((prev) =&gt; <span className="c-func">reconcile</span>(prev, updates));{'\n'}
          {'    }'});{'\n'}
          {'  }'}, [key]);{'\n\n'}
          {'  '}<span className="c-comment">// Optimistic offline UI with zero packet drop</span>{'\n'}
          {'  '}<span className="c-keyword">return</span> {'{'} data, status: syncEngine.state {'}'};{'\n'}
          {'}'};
        </>
      )
    },
    security: {
      filename: 'security_guard.ts',
      statusText: 'Active',
      statusColor: '#d97706',
      footerMetrics: [
        { label: 'Perimeter:', value: 'Zero-Trust', colorClass: 'text-green' },
        { label: 'OWASP:', value: 'Top 10', colorClass: 'text-cyan' },
        { label: 'Crypto:', value: 'TLS 1.3', colorClass: 'text-amber' }
      ],
      renderCode: () => (
        <>
          <span className="c-comment">// Zero-Trust Security Perimeter &amp; OWASP Middleware</span>{'\n'}
          <span className="c-comment">// Architecture: Strict CSP headers, rate-limiting &amp; threat mitigation</span>{'\n'}
          <span className="c-keyword">export const</span> <span className="c-ident">securityMiddleware</span>: <span className="c-type">MiddlewareConfig</span> = {'{\n'}
          {'  '}csp: {'{\n'}
          {'    '}defaultSrc: [<span className="c-string">&quot;&apos;self&apos;&quot;</span>],{'\n'}
          {'    '}scriptSrc: [<span className="c-string">&quot;&apos;self&apos;&quot;</span>, <span className="c-string">&quot;&apos;strict-dynamic&apos;&quot;</span>],{'\n'}
          {'    '}frameAncestors: [<span className="c-string">&quot;&apos;none&apos;&quot;</span>],{'\n'}
          {'    '}blockAllMixedContent: <span className="c-bool">true</span>{'\n'}
          {'  }'},{'\n'}
          {'  '}rateLimit: {'{\n'}
          {'    '}windowMs: <span className="c-num">60</span> * <span className="c-num">1000</span>,{'\n'}
          {'    '}maxRequests: <span className="c-num">120</span>{'\n'}
          {'  }'},{'\n'}
          {'  '}audit: {'{'} autoLogSuspiciousIPs: <span className="c-bool">true</span> {'}'}{'\n'}
          {'}'};
        </>
      )
    }
  };

  const currentTab = tabConfigs[activeTab];

  const tabsList: { key: TabKey; label: string }[] = [
    { key: 'nextjs', label: 'Next.js 16 SSR' },
    { key: 'microservice', label: 'Cloud Microservice' },
    { key: 'mobile', label: 'Mobile Sync' },
    { key: 'security', label: 'Security Guard' }
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <div className="section-badge">
              <span className="pulse-dot"></span>
              <span>Elite IT Team &amp; Software Studio</span>
            </div>

            <h1 className="hero-title">
              Engineering High-Performance{' '}
              <span className="rotating-text-wrapper">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className={`rotating-text-word ${rotatingWords[wordIndex].color}`}
                  >
                    {rotatingWords[wordIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              From The <span className="text-gradient-amber">Roots Up</span>.
            </h1>

            <p className="hero-subtitle">
              We architect and build high-performance web applications, enterprise cloud systems, and mobile platforms for ambitious businesses worldwide.
            </p>

            <div className="hero-cta-group">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="#estimator" className="btn btn-primary hero-btn">
                  <span>Calculate Project Scope</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="#portfolio" className="btn btn-secondary hero-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 21"></polygon>
                  </svg>
                  <span>View Case Studies</span>
                </Link>
              </motion.div>
            </div>

            {/* Trust Proof Metrics */}
            <div className="hero-metrics">
              <div className="metric-item">
                <div className="metric-value text-gradient-cyan">99.8%</div>
                <div className="metric-label">Client Satisfaction</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <div className="metric-value text-gradient-amber">120+</div>
                <div className="metric-label">Shipped Deployments</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <div className="metric-value">100%</div>
                <div className="metric-label">IP Ownership Handover</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Console */}
          <div className="hero-console-wrapper">
            {/* Dynamic Ambient Radiant Glow */}
            <motion.div
              className="console-ambient-glow"
              animate={{
                background: `radial-gradient(circle at 60% 40%, ${currentTab.statusColor}28 0%, transparent 70%)`
              }}
              transition={{ duration: 0.5 }}
            />

            <div className="code-window">
              {/* Window Header */}
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <span>{currentTab.filename}</span>
                </div>
                <div className="window-status">
                  <motion.span
                    className="status-indicator"
                    style={{ backgroundColor: currentTab.statusColor }}
                    animate={{ opacity: [1, 0.45, 1], scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  />
                  <span>{currentTab.statusText}</span>
                </div>
              </div>

              {/* Tabs with Smooth Sliding Highlight */}
              <div className="window-tabs">
                {tabsList.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      className={`tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="heroTabHighlight"
                          className="active-tab-highlight"
                          transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                        />
                      )}
                      <span className="tab-label-text">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display with Fluid Fade/Slide Transition */}
              <div className="code-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -6, filter: 'blur(3px)' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <pre>
                      <code>{currentTab.renderCode()}</code>
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal Footer with Animated Metrics */}
              <div className="window-footer">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className="footer-metrics-row"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    {currentTab.footerMetrics.map((met, idx) => (
                      <div key={idx} className="footer-metric">
                        <span className="footer-label">{met.label}</span>
                        <span className={`footer-val ${met.colorClass}`}>{met.value}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Accents with Soft Levitation Physics */}
            <div className="floating-badge badge-top">
              <motion.div
                className="badge-inner"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
              >
                <div className="badge-icon">🚀</div>
                <div>
                  <div className="badge-title">Sub-Second Loads</div>
                  <div className="badge-sub">Lighthouse 99/100</div>
                </div>
              </motion.div>
            </div>

            <div className="floating-badge badge-bottom">
              <motion.div
                className="badge-inner"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut', delay: 0.9 }}
              >
                <div className="badge-icon">🛡️</div>
                <div>
                  <div className="badge-title">Zero-Trust Secured</div>
                  <div className="badge-sub">OWASP Top 10 Compliant</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 50px);
          padding-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
          width: 100%;
        }

        .hero-title {
          font-size: 3.3rem;
          font-weight: 850;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.12rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 580px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 14px 26px;
          font-size: 0.98rem;
        }

        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 24px;
          margin-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-size: 1.75rem;
          font-weight: 850;
          line-height: 1.2;
          color: var(--text-primary);
        }

        .metric-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .metric-divider {
          width: 1px;
          height: 36px;
          background: var(--border-subtle);
        }

        /* Interactive Code Console */
        .hero-console-wrapper {
          position: relative;
          min-width: 0;
          width: 100%;
        }

        :global(.console-ambient-glow) {
          position: absolute;
          inset: -20px;
          border-radius: 32px;
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
          opacity: 0.85;
          transition: background 0.5s ease;
        }

        .code-window {
          position: relative;
          z-index: 1;
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.16), 0 4px 12px rgba(15, 23, 42, 0.08);
          overflow: hidden;
          min-width: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #1e293b;
          border-bottom: 1px solid #334155;
          height: 44px;
          min-height: 44px;
          box-sizing: border-box;
          gap: 12px;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-family: monospace;
          color: #94a3b8;
          font-weight: 600;
        }

        .window-status {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.74rem;
          color: #cbd5e1;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          padding: 3px 9px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.08);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .status-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .window-tabs {
          display: flex;
          gap: 4px;
          padding: 6px 12px;
          background: #0b1120;
          border-bottom: 1px solid #1e293b;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          height: 45px;
          min-height: 45px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .window-tabs::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .tab-btn {
          position: relative;
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #94a3b8;
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s ease;
          z-index: 1;
        }

        .tab-btn:hover {
          color: #ffffff;
        }

        .tab-btn.active {
          color: #38bdf8;
        }

        :global(.active-tab-highlight) {
          position: absolute;
          inset: 0;
          background: rgba(14, 165, 233, 0.16);
          border: 1px solid rgba(14, 165, 233, 0.4);
          border-radius: 6px;
          z-index: -1;
          box-shadow: 0 0 12px rgba(14, 165, 233, 0.12);
        }

        .tab-label-text {
          position: relative;
          z-index: 2;
        }

        .code-body {
          padding: 16px 20px;
          height: 345px;
          min-height: 345px;
          max-height: 345px;
          background: #090d16;
          overflow: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          box-sizing: border-box;
          min-width: 0;
        }

        .code-body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .code-body pre {
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-size: 0.77rem;
          line-height: 1.48;
          color: #cbd5e1;
          margin: 0;
          white-space: pre;
          overflow: hidden;
        }

        /* Syntax Highlighting Colors */
        :global(.c-comment) { color: #64748b; font-style: italic; }
        :global(.c-keyword) { color: #38bdf8; font-weight: 600; }
        :global(.c-type) { color: #fbbf24; }
        :global(.c-ident) { color: #e2e8f0; }
        :global(.c-func) { color: #60a5fa; }
        :global(.c-string) { color: #86efac; }
        :global(.c-template) { color: #86efac; }
        :global(.c-num) { color: #f472b6; }
        :global(.c-bool) { color: #f472b6; }
        :global(.c-tag) { color: #38bdf8; }

        .window-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          background: #0f172a;
          border-top: 1px solid #1e293b;
          font-size: 0.73rem;
          font-family: monospace;
          height: 44px;
          min-height: 44px;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          gap: 12px;
        }

        .window-footer::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        :global(.footer-metrics-row) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .footer-metric {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-label {
          color: #64748b;
        }

        .text-green { color: #4ade80; font-weight: 600; }
        .text-cyan { color: #38bdf8; font-weight: 600; }
        .text-amber { color: #fbbf24; font-weight: 600; }

        /* Floating Accents */
        .floating-badge {
          position: absolute;
          z-index: 10;
        }

        .badge-top {
          top: -22px;
          right: 20px;
        }

        .badge-bottom {
          bottom: -22px;
          left: -14px;
        }

        :global(.badge-inner) {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12), 0 4px 10px rgba(15, 23, 42, 0.05);
          white-space: nowrap;
        }

        .badge-top :global(.badge-inner) {
          border-color: rgba(2, 132, 199, 0.35);
        }

        .badge-bottom :global(.badge-inner) {
          border-color: rgba(217, 119, 6, 0.35);
        }

        .badge-icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .badge-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }

        .badge-sub {
          font-size: 0.72rem;
          color: var(--text-secondary);
          line-height: 1.25;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-content {
            text-align: center;
            align-items: center;
          }

          .hero-subtitle {
            margin: 0 auto;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .hero-metrics {
            justify-content: center;
          }

          .floating-badge {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-metrics {
            gap: 16px;
          }

          .metric-value {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};
