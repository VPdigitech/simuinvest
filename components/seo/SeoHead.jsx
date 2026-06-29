import Head from 'next/head'
import { SITE } from '../../data/config'

export default function SeoHead({ title, description, slug, type='website', noindex=false }) {
  const url = `${SITE.domain}/${slug}`
  const t = title || SITE.name
  const d = description || SITE.description

  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d}/>
      <meta name="robots" content={noindex?'noindex,nofollow':'index,follow'}/>
      <link rel="canonical" href={url}/>
      <meta property="og:title" content={t}/>
      <meta property="og:description" content={d}/>
      <meta property="og:url" content={url}/>
      <meta property="og:type" content={type}/>
      <meta property="og:site_name" content={SITE.name}/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
  )
}
