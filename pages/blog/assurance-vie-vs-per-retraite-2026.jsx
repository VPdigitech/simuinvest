import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function AvVsPer() {
  return (
    <>
      <SeoHead
        title="Assurance vie vs PER : lequel choisir pour la retraite 2026 ? 🏆"
        description="Assurance vie ou PER pour préparer sa retraite ? On compare les deux enveloppes fiscales avec des simulations chiffrées pour 3 profils types. Guide complet 2026."
        slug="blog/assurance-vie-vs-per-retraite-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>AV vs PER retraite</span></div>
            <span className="tag">Comparatif</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Assurance vie vs PER : lequel choisir pour préparer sa retraite en 2026 ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Deux enveloppes fiscales très différentes mais complémentaires. On compare avec des simulations concrètes pour vous aider à choisir — ou combiner les deux.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 10 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>
        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Verdict rapide :</strong> Le PER est plus avantageux si votre TMI est élevé (30%+). L assurance vie est plus souple. Dans la plupart des cas, <strong>combiner les deux est la meilleure stratégie</strong>.
          </div>
          <div className="article-body">
            <h2>Les deux enveloppes en un coup d œil</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Critère</th><th style={{color:'var(--green)'}}>Assurance vie</th><th style={{color:'var(--gold2)'}}>PER</th></tr></thead>
                <tbody>
                  {[
                    ['Avantage fiscal entrée','Aucun','Déduction revenu imposable'],
                    ['Avantage fiscal sortie','Abattement 4 600€/an après 8 ans','Imposé comme revenu'],
                    ['Disponibilité','À tout moment','Bloqué jusqu à la retraite'],
                    ['Transmission','Très avantageux (152 500€/bénéf.)','Moins avantageux'],
                  ].map(([c,a,b],i)=>(
                    <tr key={i}><td style={{fontWeight:500}}>{c}</td><td style={{color:'var(--green)'}}>{a}</td><td style={{color:'var(--gold2)'}}>{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>L avantage clé du PER : la déduction fiscale</h2>
            <p>Le PER permet de déduire vos versements de votre revenu imposable.</p>
            <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'20px',margin:'16px 0'}}>
              <strong>Exemple :</strong> TMI 30%, versement de 5 000€ sur un PER → économie de <strong>1 500€ d impôts</strong>. L investissement ne vous coûte que 3 500€ nets.
            </div>
            <h2>L avantage clé de l assurance vie : souplesse et transmission</h2>
            <ul>
              <li><strong>Disponible à tout moment</strong> — pas de blocage</li>
              <li><strong>Abattement 4 600€/an</strong> sur les gains après 8 ans</li>
              <li><strong>152 500€ par bénéficiaire</strong> hors succession</li>
            </ul>
            <h2>Simulation 3 profils</h2>
            <div className="box-green"><strong>Salarié 45 ans, TMI 30% :</strong> PER en priorité + AV en complément</div>
            <div className="box-gold" style={{marginTop:'10px'}}><strong>Retraité 65 ans, TMI 11% :</strong> Assurance vie uniquement</div>
            <div style={{background:'rgba(168,85,247,0.06)',border:'1px solid rgba(168,85,247,0.2)',borderLeft:'4px solid #a855f7',borderRadius:'10px',padding:'18px',margin:'10px 0'}}>
              <strong>Entrepreneur 50 ans, TMI 41% :</strong> PER au maximum + AV pour la liquidité
            </div>
            <div className="box-warn">
              <strong>Avertissement :</strong> Article informatif. SimuInvest.fr n est pas agréé ORIAS. Consultez un conseiller financier agréé avant toute décision.
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
                {href:'/blog/meilleure-assurance-vie-2026',e:'🏆',t:'Meilleure AV 2026',d:'Linxea, Yomoni, Nalo comparés'},
                {href:'/blog/fiscalite-assurance-vie-apres-8-ans',e:'🧾',t:'Fiscalité AV après 8 ans',d:'Tout comprendre'},
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
