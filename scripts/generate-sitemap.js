import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const DOMAIN = 'https://9ii.xyz';

// List of all primary pages & section anchors for search engines
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/#generator', priority: '0.9', changefreq: 'weekly' },
  { path: '/#features', priority: '0.8', changefreq: 'weekly' },
  { path: '/#faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/#contact', priority: '0.9', changefreq: 'weekly' }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const xmlUrls = routes.map((route) => {
    const loc = `${DOMAIN}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ [SEO] sitemap.xml successfully generated at ${sitemapPath}`);

  // If dist folder exists, copy it directly to dist as well
  const distDir = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');
    console.log(`✅ [SEO] Copied sitemap.xml directly into dist/`);
  }
}

generateSitemap();
