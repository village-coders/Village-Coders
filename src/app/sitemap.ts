import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thevillagecoders.com';
  const lastModified = '2026-10-19T00:00:00.000Z';

  const routes = [
    '',
    '#services',
    '#portfolio',
    '#estimator',
    '#process',
    '#team',
    '#testimonials',
    '#faq',
    '#contact',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
