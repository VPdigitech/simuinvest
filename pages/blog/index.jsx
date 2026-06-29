import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { ARTICLES } from '../../data/config'

export default function Blog() {
  return (
    <>
      <SeoHead title="Blog SimuInvest — Guides placements financiers 2026" description="Tous nos guides et comparatifs sur l'assurance vie, les livrets, la SCPI et le crowdfunding immobilier. Des réponses claires, sans jargon." slug="blog"/>
      <Nav/>
      <div style={{background:'linear-gradient(135deg,var(--bg),var(--bg2))',padding:'56px 0 40px'}}>
        <div className="wrap-sm">
          <span className="tag" style={{marginBottom:'12px',display:'inline-block'}}>Tous les articles</span>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,5vw,44px)',fontWeight:900,color:'var(--dark)',marginBottom:'12px'}}>Guides & comparatifs placements 2026</h1>
          <p style={{fontSize:'16px',color:'var(--text2)',fontWeight:300}}>Des réponses claires, honnêtes, sans jargon — pour investir en confiance.</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="g3">
            {ARTICLES.map(art=>(
              <Link key={art.slug} href={`/blog/${art.slug}`} style={{textDecoration:'none'}}>
                <div className="card" style={{overflow:'hidden',height:'100%',cursor:'pointer'}}>
                  <div style={{height:'100px',background:'linear-gradient(135deg,var(--bg2),var(--bg3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'36px'}}>{art.emoji}</div>
                  <div className="card-p">
                    <span className="tag" style={{marginBottom:'8px',display:'inline-block'}}>{art.category}</span>
                    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)',lineHeight:'1.3',marginBottom:'6px'}}>{art.title}</h2>
                    <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.5',marginBottom:'10px'}}>{art.description.slice(0,85)}…</p>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'var(--text2)'}}>
                      <span>📖 {art.readTime}</span>
                      <span style={{fontWeight:600,color:'var(--gold2)'}}>Lire →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
