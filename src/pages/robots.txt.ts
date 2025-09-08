import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const robotsTxt = `User-agent: *
Allow: /

# XML Sitemap
Sitemap: https://booktrails.rabbitholes.garden/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1

# Disallow admin areas (if any in future)
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /mentions/
Allow: /search
Allow: /archive
Allow: /books
Allow: /authors`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  });
};