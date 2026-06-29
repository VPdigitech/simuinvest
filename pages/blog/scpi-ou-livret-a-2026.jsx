import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function Article() {
  return (
    <>
      <SeoHead title="Article SimuInvest 2026" description="Guide complet sur les placements financiers français." slug="blog/scpi-ou-livret-a-2026" type="article"/>
      <Nav/>
      <article>
        <div style={{background:'linear-gradient(135deg,var(--bg),var(--bg2))',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Article</span></div>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,40px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>Guide complet 2026</h1>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px'}}><span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>Juin 2026</span></div>
          </div>
        </div>
        <div className="wrap-sm" style={{padding:'32px 24px 48px'}}>
          <div className="box-warn"><strong>Article en cours de rédaction.</strong> Revenez bientôt pour la version complète.</div>
          <div style={{marginTop:'32px',textAlign:'center'}}>
            <Link href="/blog" className="btn btn-gold">Voir tous nos articles →</Link>
          </div>
        </div>
      </article>
      <Footer/>
    </>
  )
}
