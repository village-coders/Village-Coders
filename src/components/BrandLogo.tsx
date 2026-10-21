'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
}) => {
  // 544 x 348 native cropped dimensions (ratio = 1.563)
  const dimensions: Record<string, { width: number; height: number }> = {
    sm: { width: 68, height: 44 },
    md: { width: 92, height: 58 },
    lg: { width: 118, height: 75 },
    xl: { width: 142, height: 91 },
    '2xl': { width: 168, height: 107 }
  };

  const current = dimensions[size] || dimensions.md;

  return (
    <Link href="/" className="brand-logo-link" aria-label="Village Coders - Web & Software Developers">
      <div className={`brand-logo-box size-${size}`}>
        <Image
          src="/logo.png"
          alt="Village Coders - Web & Software Developers Logo"
          width={current.width}
          height={current.height}
          priority
          style={{
            width: `${current.width}px`,
            height: `${current.height}px`,
            objectFit: 'contain'
          }}
          className="brand-logo-img"
        />
      </div>

      <style jsx>{`
        .brand-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.25s ease, opacity 0.2s ease;
        }

        .brand-logo-link:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .brand-logo-box {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .brand-logo-img {
          display: block;
          filter: drop-shadow(0 1px 2px rgba(15, 23, 42, 0.06));
        }
      `}</style>
    </Link>
  );
};
