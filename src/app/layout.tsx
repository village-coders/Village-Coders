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
  applicationName: 'Village Coders',
  category: 'Software Development & Web Engineering',
  title: {
    default: 'Village Coders | World-Class Web & Software Developers',
    template: '%s | Village Coders'
  },
  description:
    'Village Coders (thevillagecoders.com) is an elite software engineering studio and web development company. We design, architect, and build custom websites, enterprise SaaS platforms, mobile apps (iOS & Android), and cloud systems for ambitious businesses worldwide.',
  keywords: [
    'Village Coders',
    'The Village Coders',
    'thevillagecoders.com',
    'Village Coders Web & Software Developers',
    'Custom Software Development Company',
    'Web Design and Development Agency',
    'Software Development Company in Nigeria',
    'Best Web Developers in Lagos Nigeria',
    'Hire Full Stack Software Engineers',
    'Enterprise SaaS Development Studio',
    'Next.js & React Web Application Developers',
    'TypeScript & Node.js Backend Engineers',
    'Java & Spring Boot Enterprise Architects',
    'Cross-Platform Mobile App Development',
    'React Native & Flutter App Developers',
    'iOS and Android Mobile Application Studio',
    'E-Commerce & FinTech Software Engineering',
    'Certification Portal & Audit Software Developers',
    'Laboratory Information Management System (LIMS) Developers',
    'Sports Club & Football Association Web Portals',
    'Cloud Architecture & DevOps CI/CD Automation',
    'AWS & Azure Cloud Infrastructure Engineers',
    'High-Throughput APIs and Microservices',
    'UI/UX Product Design & Figma Design Systems',
    'Cybersecurity, Penetration Testing & Code Audits',
    'Website Redesign & SEO Optimization Agency',
    'Outsource Software Development Africa to UK & US'
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
    title: 'Village Coders | World-Class Web & Software Developers',
    description:
      'Engineering high-performance web applications, enterprise SaaS platforms, cross-platform mobile apps (iOS & Android), and resilient cloud backends from the roots up.',
    siteName: 'Village Coders',
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Village Coders - World-Class Web & Software Developers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Coders | World-Class Web & Software Developers',
    description:
      'Engineering high-performance web applications, enterprise SaaS platforms, cross-platform mobile apps (iOS & Android), and resilient cloud backends.',
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
      { url: '/favicon.ico?v=2', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/icon-48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
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
        alternateName: ['The Village Coders', 'Village Coders Web & Software Developers'],
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        description:
          'Elite software engineering studio and digital product collective specializing in custom web platforms, scalable cloud backends, cross-platform mobile apps, and enterprise software.',
        telephone: '+234-903-711-8808',
        email: 'villagecoders7@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lagos',
          addressCountry: 'NG'
        },
        areaServed: [
          { '@type': 'Country', name: 'Nigeria' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Place', name: 'Worldwide' }
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+234-903-711-8808',
            contactType: 'sales',
            email: 'villagecoders7@gmail.com',
            availableLanguage: ['English'],
            areaServed: 'Worldwide'
          },
          {
            '@type': 'ContactPoint',
            telephone: '+234-808-574-2261',
            contactType: 'technical support',
            email: 'villagecoders7@gmail.com',
            availableLanguage: ['English'],
            areaServed: 'Worldwide'
          }
        ],
        sameAs: [
          'https://twitter.com/thevillagecoders',
          'https://github.com/thevillagecoders',
          'https://linkedin.com/company/thevillagecoders'
        ],
        knowsAbout: [
          'Custom Software Development',
          'Next.js & React Web Engineering',
          'Enterprise Java & Spring Boot',
          'Node.js & TypeScript APIs',
          'Enterprise SaaS Platforms',
          'Mobile App Development (iOS & Android)',
          'Cloud Architecture & DevOps CI/CD',
          'UI/UX Product Design Systems',
          'Cybersecurity & Code Audits'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software & Web Engineering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web & SaaS Engineering',
                description: 'Full-stack web platforms, custom SaaS architectures, and Next.js applications.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Enterprise Software & Microservices',
                description: 'High-throughput backends, APIs, and database systems in Node.js, Java, Go, and Python.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cross-Platform Mobile App Development',
                description: 'iOS and Android mobile applications built with React Native and Flutter.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Infrastructure & DevOps CI/CD',
                description: 'AWS, Azure, and GCP cloud architecture, Docker, Kubernetes, and automated CI/CD.'
              }
            }
          ]
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Village Coders',
        description: 'Official website of Village Coders - World-Class Web & Software Development Studio (thevillagecoders.com)',
        publisher: {
          '@id': `${siteUrl}/#organization`
        },
        hasPart: [
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/about#webpage`,
            url: `${siteUrl}/about`,
            name: 'About Us',
            description: 'Meet the Village Coders software engineering collective, our leadership team, and our engineering philosophy.'
          },
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/contact#webpage`,
            url: `${siteUrl}/contact`,
            name: 'Contact Us',
            description: 'Contact Village Coders directly via phone, WhatsApp, or email to start your web or software engineering project.'
          }
        ]
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#navigation`,
        name: 'Main Site Navigation',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'About Us',
            description: 'Learn about the Village Coders software engineering team and philosophy',
            url: `${siteUrl}/about`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Contact Us',
            description: 'Speak directly with our software architects to start your project',
            url: `${siteUrl}/contact`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Services',
            description: 'Custom web platforms, enterprise SaaS, mobile apps, and cloud architecture',
            url: `${siteUrl}/#services`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Case Studies & Work',
            description: 'Explore our production software engineering projects and client results',
            url: `${siteUrl}/#portfolio`
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="3ZIgLUsJlhK5Pwqs5pN6tUd4WSvzB2PDq-MMo3i3GV0" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="48x48 32x32 16x16" type="image/x-icon" />
        <link rel="icon" href="/icon-48.png?v=2" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-192.png?v=2" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png?v=2" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);`,
          }}
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
