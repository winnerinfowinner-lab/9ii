import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const DOMAIN = 'https://9ii.xyz';

// Only include valid canonical URLs (NO # anchors allowed in sitemaps)
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' }
  // إذا قمت بإنشاء صفحات حقيقية مستقبلاً مثل /about أو /privacy أضفها هنا بدون #
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ [SEO] Clean sitemap.xml successfully generated at ${sitemapPath}`);

  // Copy directly into dist if built
  const distDir = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');
    console.log(`✅ [SEO] Copied clean sitemap.xml directly into dist/`);
  }
}

generateSitemap();
