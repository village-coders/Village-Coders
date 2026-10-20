import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './components.css';
import StyledJsxRegistry from './registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://thevillagecoders.com';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Village Coders | World-Class Web & Software Developers',
    template: '%s | Village Coders'
  },
  description: 'Village Coders (thevillagecoders.com) is an elite IT engineering team and software studio. We design high-performance Next.js web platforms, enterprise software, cloud infrastructure, and mobile applications from the roots up.',
  keywords: [
    'Village Coders',
    'thevillagecoders.com',
    'Village Coders Web & Software Developers',
    'Next.js 16 Expert Developers',
    'React 19 Software Engineers',
    'Enterprise SaaS Development',
    'Cross-Platform Mobile App Development',
    'Cloud Architecture & DevOps CI/CD',
    'Custom Web Development Studio',
    'Full Stack IT Team',
    'African Tech Talent Global IT',
    'High-Performance Web Applications',
    'Full-Stack Software Architecture'
  ],
  authors: [{ name: 'Village Coders Engineering Collective', url: siteUrl }],
  creator: 'Village Coders',
  publisher: 'Village Coders Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Village Coders | Elite Web & Software Developers',
    description: 'Engineering high-performance digital products from the roots up. Specialized in Next.js, enterprise SaaS, cloud microservices, and mobile apps.',
    siteName: 'Village Coders',
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Village Coders - Web & Software Developers Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Coders | Elite Web & Software Developers',
    description: 'Engineering high-performance digital products from the roots up with Next.js, TypeScript, and modern cloud stacks.',
    images: [`${siteUrl}/logo.png`],
    creator: '@thevillagecoders'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.jpg', sizes: '512x512', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: '3ZIgLUsJlhK5Pwqs5pN6tUd4WSvzB2PDq-MMo3i3GV0',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Structured Data JSON-LD for Google Knowledge Graph & SEO Ranking
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#organization`,
        name: 'Village Coders',
        alternateName: 'Village Coders',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        description: 'Elite IT collective and web & software development studio specializing in high-speed Next.js web applications, scalable backends, and mobile engineering.',
        telephone: '+234-903-711-8808',
        email: 'hello@thevillagecoders.com',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lagos / Global Remote',
          addressCountry: 'Nigeria & International'
        },
        sameAs: [
          'https://twitter.com/thevillagecoders',
          'https://github.com/thevillagecoders',
          'https://linkedin.com/company/thevillagecoders'
        ],
        knowsAbout: [
          'Web Development',
          'Software Engineering',
          'Next.js 16',
          'React 19',
          'Cloud Architecture',
          'Mobile App Development',
          'DevOps & CI/CD',
          'Cybersecurity Audits'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Village Coders',
        description: 'Official website of Village Coders - Web & Software Developers (thevillagecoders.com)',
        publisher: {
          '@id': `${siteUrl}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="3ZIgLUsJlhK5Pwqs5pN6tUd4WSvzB2PDq-MMo3i3GV0" />
        <link rel="icon" href="/favicon.ico" sizes="48x48 32x32 16x16" type="image/x-icon" />
        <link rel="icon" href="/icon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <StyledJsxRegistry>
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
