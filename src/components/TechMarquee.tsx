'use client';

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Next.js 16 (App Router)', tag: 'Frontend & SSR', color: '#0284c7' },
  { name: 'TypeScript', tag: 'Type-Safe Core', color: '#0ea5e9' },
  { name: 'React 19', tag: 'UI Library', color: '#0369a1' },
  { name: 'Python & FastAPI', tag: 'AI & Backend', color: '#d97706' },
  { name: 'Node.js & Go', tag: 'High Concurrency', color: '#b45309' },
  { name: 'PostgreSQL', tag: 'Relational DB', color: '#15803d' },
  { name: 'Redis Cache', tag: 'Sub-ms In-Memory', color: '#dc2626' },
  { name: 'Docker & K8s', tag: 'Containerization', color: '#0284c7' },
  { name: 'AWS Cloud', tag: 'ECS, Lambda & S3', color: '#d97706' },
  { name: 'GraphQL & REST', tag: 'API Architectures', color: '#db2777' },
  { name: 'Tailwind & Vanilla CSS', tag: 'Design Tokens', color: '#0ea5e9' },
  { name: 'Terraform IaC', tag: 'Cloud DevOps', color: '#7c3aed' }
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="tech-marquee-wrapper" aria-label="Technology Stack We Engineer With">
      <div className="container marquee-intro">
        <span className="marquee-label">POWERED BY ENTERPRISE-GRADE STACK:</span>
      </div>

      <div className="marquee-overflow">
        <div className="marquee-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div 
              key={index} 
              className="tech-chip"
              whileHover={{ 
                scale: 1.05, 
                y: -2, 
                borderColor: '#0284c7', 
                backgroundColor: '#ffffff',
                boxShadow: '0 6px 18px rgba(2, 132, 199, 0.15)'
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="tech-dot" style={{ backgroundColor: tech.color }}></span>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-badge">{tech.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-marquee-wrapper {
          padding: 30px 0;
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          overflow: hidden;
        }

        .marquee-intro {
          margin-bottom: 16px;
          text-align: center;
        }

        .marquee-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .marquee-overflow {
          display: flex;
          overflow: hidden;
          user-select: none;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        :global(.tech-chip) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          margin-right: 16px;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          white-space: nowrap;
          cursor: pointer;
        }

        .tech-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .tech-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .tech-badge {
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: #e2e8f0;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};
