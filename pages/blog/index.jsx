import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { ARTICLES } from '../../data/config'

export default function Blog() {
  return (
    <>
      <SeoHead
        title="Blog SCPI — Guides et conseils pour investir en pierre papier 🏆"
        description="Tous nos guides pour comprendre et investir en SCPI : avis CORUM, débutants, fiscalité, comparatifs Livret A. Des réponses claires sans jargon."
        slug="blog"
      />
      <Nav />
      <div style={{background:'var(--bg2)',padding:'56px 0 44px'}}>
        <div className="wrap">
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,5vw,46px)',fontWeight:900,color:'var(--dark)',marginBottom:'12px'}}>Blog SCPI & Pierre Papier</h1>
          <p style={{fontSize:'16px',color:'var(--text2)',fontWeight:300}}>Des guides simples pour comprendre et investir intelligemment.</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="g3">
            {ARTICLES.map(art=>(
              <Link key={art.slug} href={`/blog/${art.slug}`}>
                <div className="card" style={{overflow:'hidden',height:'100%',cursor:'pointer'}}>
                  <div style={{height:'120px',background:'linear-gradient(135deg,var(--bg2),var(--bg3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'38px'}}>{art.emoji}</div>
                  <div className="card-p">
                    <span className="tag" style={{marginBottom:'8px',display:'inline-block'}}>{art.category}</span>
                    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)',lineHeight:'1.3',marginBottom:'6px'}}>{art.title}</h2>
                    <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.5',marginBottom:'10px'}}>{art.description.slice(0,90)}…</p>
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
      <Footer />
    </>
  )
}
