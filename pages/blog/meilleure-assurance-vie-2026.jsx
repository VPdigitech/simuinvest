import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { PARTENAIRES } from '../../data/config'

export default function MeilleureAssuranceVie() {
  const avPartners = Object.values(PARTENAIRES).filter(p => p.categorie === 'assurance-vie')

  return (
    <>
      <SeoHead
        title="Meilleure assurance vie 2026 : Linxea, Yomoni ou Nalo ? 🏆"
        description="On compare Linxea, Yomoni, Nalo, Goodvest et Belermain pour trouver la meilleure assurance vie 2026 selon votre profil, budget et objectif."
        slug="blog/meilleure-assurance-vie-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Meilleure assurance vie 2026</span></div>
            <span className="tag">Assurance vie</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Meilleure assurance vie 2026 : Linxea, Yomoni ou Nalo ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              On compare les 5 meilleures assurances vie en ligne pour vous aider à choisir selon votre profil. Frais, rendements, gestion, fiscalité — tout est là.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 9 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict rapide :</strong> <strong>Linxea</strong> pour les profils autonomes (meilleurs frais, large choix). <strong>Yomoni</strong> pour ceux qui veulent déléguer complètement. <strong>Nalo</strong> pour une approche ultra-personnalisée. <strong>Goodvest</strong> pour l'investissement responsable.
          </div>

          <div className="article-body">
            <h2>Pourquoi ouvrir une assurance vie en 2026 ?</h2>
            <p>L'assurance vie reste <strong>le placement préféré des Français</strong> — et pour de bonnes raisons. C'est l'une des rares enveloppes fiscales qui combine flexibilité, transmission avantageuse et rendements corrects sur le long terme.</p>
            <p>Après 8 ans de détention, vous bénéficiez d'un abattement annuel de <strong>4 600€ sur les gains</strong> (9 200€ pour un couple). Au-delà, les gains sont taxés à 24,7% maximum — bien moins que votre TMI habituel.</p>
            <p>En 2026, avec le Livret A tombé à 1,5%, les fonds euros d'assurance vie offrent jusqu'à 4,5% — et les unités de compte (ETF, SCPI) peuvent dépasser les 6-7% sur le long terme.</p>

            <h2>Comparatif des 5 meilleures assurances vie en ligne</h2>

            {avPartners.map((p,i) => (
              <div key={p.nom} style={{border:'1.5px solid var(--border2)',borderRadius:'16px',padding:'24px',marginBottom:'20px',background:i===0?'var(--gold-light)':'var(--card)'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'12px',flexWrap:'wrap',gap:'10px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'28px'}}>{p.emoji}</span>
                    <div>
                      <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)'}}>{p.nom}</div>
                      <span className="tag">{p.badge}</span>
                    </div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:700,color:'var(--green)'}}>{p.rendement}</div>
                    <div style={{fontSize:'12px',color:'var(--text2)'}}>Ticket min : {p.ticket}</div>
                  </div>
                </div>
                <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.6',marginBottom:'12px'}}>{p.description}</p>
                <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'14px'}}>
                  {p.avantages.map(a=><span key={a} style={{fontSize:'11px',background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'6px',padding:'3px 9px',color:'var(--text)',fontWeight:500}}>✓ {a}</span>)}
                </div>
                <a href={p.lien} target="_blank" rel="nofollow sponsored" className="btn btn-gold" style={{fontSize:'13px'}}>
                  Découvrir {p.nom} →
                </a>
              </div>
            ))}

            <h2>Comment choisir son assurance vie ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',margin:'16px 0 24px'}}>
              {[
                {titre:'Vous débutez',reco:'Linxea Spirit 2 ou Yomoni',raison:'Interface simple, gestion possible en pilote automatique'},
                {titre:'Vous voulez déléguer',reco:'Yomoni ou Nalo',raison:'Gestion pilotée par des experts, vous ne faites rien'},
                {titre:'Vous êtes sensible à l\'écologie',reco:'Goodvest',raison:'100% ISR, aligné avec l\'Accord de Paris'},
                {titre:'Vous avez un gros capital (50k€+)',reco:'Belermain ou Nalo',raison:'Commissions plus élevées = meilleur accompagnement'},
              ].map(({titre,reco,raison})=>(
                <div key={titre} style={{background:'var(--bg2)',borderRadius:'12px',padding:'16px'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--dark)',marginBottom:'6px'}}>Si {titre}</div>
                  <div style={{fontSize:'13px',color:'var(--gold2)',fontWeight:600,marginBottom:'4px'}}>→ {reco}</div>
                  <div style={{fontSize:'12px',color:'var(--text2)'}}>{raison}</div>
                </div>
              ))}
            </div>

            <div className="box-warn">
              <strong>⚠️ Rappel important :</strong> Ce comparatif est informatif. Les performances passées ne garantissent pas les performances futures. Consultez un conseiller financier agréé pour un conseil personnalisé. SimuInvest.fr n'est pas agréé ORIAS.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Passez le quiz pour trouver votre assurance vie idéale</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>5 questions · Gratuit · Résultat personnalisé instantané</p>
              <Link href="/comparateur" className="btn btn-gold btn-lg">Faire le quiz →</Link>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/investir-scpi-depuis-assurance-vie',e:'🏢',t:'SCPI via assurance vie',d:'Combiner les deux placements'},
                {href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'Assurance vie ou Livret A ?',d:'Comparatif complet 2026'},
                {href:'/blog/placement-senior-retraite-2026',e:'👴',t:'Placements seniors',d:'Les meilleures options retraite'},
              ].map(a=>(
                <Link key={a.href} href={a.href} style={{textDecoration:'none'}}>
                  <div className="card card-p" style={{cursor:'pointer'}}>
                    <div style={{fontSize:'28px',marginBottom:'10px'}}>{a.e}</div>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div>
                    <div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  )
}
