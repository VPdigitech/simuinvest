import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function FiscaliteAV() {
  return (
    <>
      <SeoHead
        title="Fiscalité assurance vie après 8 ans : tout comprendre en 2026 🏆"
        description="Abattement 4 600€, PFU 7,5%, prélèvements sociaux 17,2% — la fiscalité de l assurance vie après 8 ans expliquée simplement avec des exemples chiffrés."
        slug="blog/fiscalite-assurance-vie-apres-8-ans"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#faf5e4,#f0e8cc)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Fiscalité AV après 8 ans</span></div>
            <span className="tag">Fiscalité</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Fiscalité assurance vie après 8 ans : tout comprendre en 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Abattement de 4 600€, PFU à 7,5%, prélèvements sociaux — la fiscalité de l assurance vie après 8 ans est l une des plus avantageuses de l épargne française.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>
        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>L essentiel :</strong> Après 8 ans, abattement de <strong>4 600€/an</strong> (9 200€ couple) sur vos gains. Au-delà, taxation à <strong>24,7% maximum</strong> — bien moins que votre TMI si vous êtes à 30%+.
          </div>
          <div className="article-body">
            <h2>Pourquoi 8 ans est une date clé</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Durée</th><th>Taxation gains</th><th>Abattement</th></tr></thead>
                <tbody>
                  {[
                    ['Moins de 8 ans','PFU 30%','Aucun'],
                    ['Plus de 8 ans','7,5% IR + 17,2% PS = 24,7%','4 600€/an (seul)'],
                    ['Dans abattement','Juste 17,2% PS','4 600€/an'],
                  ].map(([d,t,a],i)=>(<tr key={i} style={{background:i>0?'rgba(31,110,74,0.05)':'#fff',fontWeight:i>0?600:400}}><td>{d}</td><td style={{color:i>0?'var(--green)':'var(--text2)'}}>{t}</td><td style={{color:i>0?'var(--green)':'var(--text2)'}}>{a}</td></tr>))}
                </tbody>
              </table>
            </div>
            <h2>L abattement de 4 600€ : exemple concret</h2>
            <div className="box-green">
              <strong>Exemple :</strong> 50 000€ sur AV de 10 ans, dont 10 000€ de gains. Vous retirez 5 000€ dont 1 000€ de gains.<br/>
              → Abattement couvre les 1 000€ → <strong>0€ d impôt sur le revenu</strong><br/>
              → Mais 17,2% de PS sur 1 000€ = <strong>172€ seulement</strong>
            </div>
            <h2>L avantage successoral</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',margin:'16px 0'}}>
              <div style={{background:'var(--bg2)',borderRadius:'12px',padding:'18px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:900,color:'var(--green)',marginBottom:'8px'}}>152 500€</div>
                <div style={{fontSize:'12px',color:'var(--text2)'}}>Par bénéficiaire, versements avant 70 ans</div>
              </div>
              <div style={{background:'var(--bg2)',borderRadius:'12px',padding:'18px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:900,color:'var(--gold2)',marginBottom:'8px'}}>30 500€</div>
                <div style={{fontSize:'12px',color:'var(--text2)'}}>Total versements après 70 ans (gains exonérés)</div>
              </div>
            </div>
            <div className="box-warn">
              <strong>Avertissement :</strong> Article informatif. La fiscalité peut évoluer. SimuInvest.fr n est pas agréé ORIAS. Consultez un conseiller fiscal avant toute décision.
            </div>
            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Comparez les meilleures assurances vie 2026</p>
              <Link href="/assurance-vie" className="btn btn-gold btn-lg">Voir le comparatif →</Link>
            </div>
          </div>
        </div>
        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🏆',t:'Meilleure AV 2026',d:'Linxea, Yomoni, Nalo'},
                {href:'/blog/assurance-vie-vs-per-retraite-2026',e:'⚖️',t:'AV vs PER retraite',d:'Lequel choisir'},
                {href:'/blog/placement-senior-retraite-2026',e:'👴',t:'Placements seniors',d:'Les meilleures options'},
              ].map(a=>(<Link key={a.href} href={a.href} style={{textDecoration:'none'}}><div className="card card-p"><div style={{fontSize:'28px',marginBottom:'10px'}}>{a.e}</div><div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div><div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div></div></Link>))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  )
}
