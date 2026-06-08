import Head from 'next/head'
import { SITE } from '../../data/config'

export default function SeoHead({ title, description, slug = '', type = 'website', noindex = false }) {
  const url = `${SITE.domain}/${slug}`
  const fullTitle = `${title} | SimuInvest`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* GSC */}
      <meta name="google-site-verification" content={SITE.gscCode} />

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={`${SITE.domain}/og.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebSite', name: SITE.name, url: SITE.domain },
          {
            '@type': 'WebPage',
            name: title,
            description,
            url,
            publisher: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.domain },
              ...(slug ? [{ '@type': 'ListItem', position: 2, name: title, item: url }] : []),
            ],
          },
        ],
      })}} />

      {/* GA4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer=window.dataLayer||[];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','${SITE.gaId}',{anonymize_ip:true});
      `}} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
