import { SITE, ARTICLES } from '../../data/config'

export default function handler(req, res) {
  const today = new Date().toISOString().split('T')[0]
  const pages = [
    { url: '/', priority: '1.0', freq: 'weekly' },
    { url: '/blog', priority: '0.8', freq: 'weekly' },
    { url: '/scpi', priority: '0.9', freq: 'monthly' },
    { url: '/assurance-vie', priority: '0.9', freq: 'monthly' },
    { url: '/epargne', priority: '0.8', freq: 'monthly' },
    { url: '/crowdfunding', priority: '0.8', freq: 'monthly' },
    { url: '/comparateur', priority: '0.9', freq: 'weekly' },
    { url: '/a-propos', priority: '0.5', freq: 'yearly' },
    ...ARTICLES.map(a => ({ url: `/blog/${a.slug}`, priority: a.priority || '0.8', freq: 'monthly', date: a.date })),
    { url: '/legal/mentions-legales', priority: '0.2', freq: 'yearly' },
    { url: '/legal/politique-confidentialite', priority: '0.2', freq: 'yearly' },
    { url: '/legal/politique-affiliation', priority: '0.3', freq: 'yearly' },
    { url: '/legal/cgu', priority: '0.2', freq: 'yearly' },
    { url: '/legal/contact', priority: '0.3', freq: 'yearly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE.domain}${p.url}</loc>
    <lastmod>${p.date || today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, max-age=86400')
  res.write(xml)
  res.end()
}
