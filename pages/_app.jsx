import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YYTLVFX2DV" strategy="afterInteractive"/>
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer=window.dataLayer||[];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','G-YYTLVFX2DV');
      `}</Script>
      <Component {...pageProps} />
    </>
  )
}
