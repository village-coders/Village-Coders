'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '@/data/team';

export const Team: React.FC = () => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge amber">
            <span>Engineering Leadership</span>
          </div>
          <h2 className="section-title">
            The Architects Behind <span className="text-gradient-amber">Village Coders</span>
          </h2>
          <p className="section-description">
            Direct collaboration with seasoned software architects and engineers. No account managers, no middlemen.
          </p>
        </div>

        <div className="team-grid">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              className="team-card glass-card"
              whileHover={{ 
                y: -7, 
                boxShadow: '0 20px 35px -10px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(2, 132, 199, 0.3)' 
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <div className="member-avatar-box">
                <motion.div 
                  className="avatar-circle"
                  whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </motion.div>
                <div className="experience-tag">{member.experience}</div>
              </div>

              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role text-gradient-cyan">{member.role}</div>
                <div className="member-specialty">{member.specialty}</div>
                <p className="member-bio">{member.bio}</p>

                <div className="member-skills">
                  {member.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx} 
                      className="skill-pill"
                      whileHover={{ scale: 1.08, backgroundColor: '#e0f2fe', color: '#0369a1' }}
                      transition={{ duration: 0.15 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="member-links">
                  <motion.a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    aria-label={`${member.name} GitHub`}
                    whileHover={{ scale: 1.25, rotate: -6, color: '#0284c7' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    aria-label={`${member.name} LinkedIn`}
                    whileHover={{ scale: 1.25, rotate: 6, color: '#0284c7' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-section {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 56px;
        }

        :global(.team-card) {
          padding: 32px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
          position: relative;
          cursor: default;
          transition: border-color 0.2s ease;
        }

        .member-avatar-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        :global(.avatar-circle) {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-amber) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 850;
          font-size: 1.25rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .experience-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--brand-green);
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.25);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .member-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .member-role {
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .member-specialty {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--brand-amber-dark);
          margin-bottom: 14px;
        }

        .member-bio {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        :global(.skill-pill) {
          font-size: 0.72rem;
          font-weight: 500;
          padding: 3px 8px;
          background: #f1f5f9;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: #334155;
          cursor: default;
          display: inline-block;
        }

        .member-links {
          display: flex;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        :global(.social-icon) {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
