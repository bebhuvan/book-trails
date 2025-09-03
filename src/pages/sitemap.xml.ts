import type { APIRoute } from 'astro';
import { bookMentions } from '../data/mentions';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://booktrails.rabbitholes.garden';
  
  // Static pages
  const staticPages = [
    '',
    '/search',
    '/archive',
    '/books',
    '/authors',
    '/about'
  ];
  
  // Dynamic mention pages
  const mentionPages = bookMentions.map(mention => `/mentions/${mention.slug}`);
  
  const allPages = [...staticPages, ...mentionPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => {
  const url = `${siteUrl}${page}`;
  const lastmod = new Date().toISOString().split('T')[0];
  const priority = page === '' ? '1.0' : page.startsWith('/mentions/') ? '0.8' : '0.7';
  const changefreq = page === '' ? 'weekly' : page.startsWith('/mentions/') ? 'monthly' : 'monthly';
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};