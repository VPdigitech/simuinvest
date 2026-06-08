import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { PARTENAIRES } from '../../data/config'

export default function HomunityAvis() {
  const p = PARTENAIRES.homunity
  return (
    <>
      <SeoHead
        title="Crowdfunding immobilier Homunity avis 2026 : notre analyse 🏆"
        description="Homunity permet d'investir dans l'immobilier dès 1 000€ avec des rendements de 8 à 12%. Notre avis complet, honnête, avec les risques et les points forts."
        slug="blog/crowdfunding-immobilier-homunity-avis"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f5f0fa,#ede5f5)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Crowdfunding immobilier Homunity avis</span></div>
            <span className="tag">Crowdfunding immobilier</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Crowdfunding immobilier Homunity avis 2026 : notre analyse complète
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Homunity permet d'investir dans des projets immobiliers dès 1 000€ avec des rendements de 8 à 12%. Mais est-ce vraiment sérieux ? Notre analyse honnête.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 7 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> Homunity est une plateforme sérieuse et reconnue du crowdfunding immobilier français. Les rendements de 8 à 12% sont réels mais le risque de perte en capital existe. À réserver à une petite partie de votre épargne (10-15% maximum).
          </div>

          <div className="article-body">
            <h2>Qu'est-ce que le crowdfunding immobilier ?</h2>
            <p>Le crowdfunding immobilier consiste à <strong>prêter de l'argent à des promoteurs immobiliers</strong> pour financer leurs projets (construction, rénovation, marchand de biens). En échange, vous recevez des intérêts fixes sur la durée du projet (généralement 12 à 24 mois).</p>
            <p>C'est différent de la SCPI où vous devenez propriétaire de parts d'immeubles. Ici, vous êtes <strong>créancier</strong> — vous prêtez, et le promoteur vous rembourse avec intérêts à la fin du projet.</p>

            <h2>Homunity en chiffres</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {l:'Fondée en',v:'2014'},
                {l:'Agréée CIP',v:'AMF & ACPR'},
                {l:'Montant financé',v:'+300M€'},
                {l:'Rendement moyen',v:'8 à 12%'},
                {l:'Durée moyenne',v:'18 mois'},
                {l:'Dépôt minimum',v:'1 000€'},
              ].map(({l,v})=>(
                <div key={l} style={{background:'var(--bg2)',borderRadius:'10px',padding:'14px',textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)',marginBottom:'3px'}}>{v}</div>
                  <div style={{fontSize:'11px',color:'var(--text2)',textTransform:'uppercase',letterSpacing:'.06em'}}>{l}</div>
                </div>
              ))}
            </div>

            <h2>Les points forts d'Homunity</h2>
            <ul>
              <li><strong>Agréée par l'AMF et l'ACPR</strong> — régulation française stricte, plateforme sérieuse</li>
              <li><strong>Sélection rigoureuse des projets</strong> — Homunity analyse chaque dossier et ne finance qu'une petite fraction des projets présentés</li>
              <li><strong>Rendements élevés</strong> — 8 à 12% fixe garanti contractuellement par le promoteur</li>
              <li><strong>Durées courtes</strong> — 12 à 24 mois, pas de capital bloqué 10 ans comme la SCPI</li>
              <li><strong>Ticket d'entrée accessible</strong> — dès 1 000€ par projet, vous pouvez diversifier sur plusieurs</li>
            </ul>

            <h2>Les risques à connaître</h2>
            <div className="box-warn">
              <strong>⚠️ Risques réels :</strong><br/>
              • <strong>Risque de perte en capital</strong> — si le promoteur fait défaut, vous pouvez perdre tout ou partie de votre investissement<br/>
              • <strong>Risque de retard</strong> — les projets peuvent prendre plus de temps que prévu (délais de construction fréquents)<br/>
              • <strong>Illiquidité</strong> — votre argent est bloqué jusqu'à la fin du projet, impossible de récupérer en cours de route<br/>
              • <strong>Pas de garantie des dépôts</strong> — contrairement à un livret bancaire, pas de protection de l'État
            </div>

            <h2>Crowdfunding vs SCPI : quand choisir quoi ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',margin:'16px 0 24px'}}>
              <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--gold2)',marginBottom:'10px'}}>Crowdfunding (Homunity)</div>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {['Horizon 12-24 mois','Rendement 8-12% fixe','Risque concentré','Idéal petite partie du patrimoine'].map(i=><li key={i} style={{fontSize:'13px',display:'flex',gap:'6px'}}><span style={{color:'var(--gold2)'}}>→</span>{i}</li>)}
                </ul>
              </div>
              <div style={{background:'var(--green-light)',border:'1px solid rgba(31,110,74,0.2)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--green)',marginBottom:'10px'}}>SCPI (Louve Invest)</div>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {['Horizon 10 ans+','Rendement 5-7% variable','Risque mutualisé','Revenus mensuels réguliers'].map(i=><li key={i} style={{fontSize:'13px',display:'flex',gap:'6px'}}><span style={{color:'var(--green)'}}>→</span>{i}</li>)}
                </ul>
              </div>
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Découvrir Homunity — Dès 1 000€</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Agréé AMF · Projets sélectionnés · 8 à 12% de rendement</p>
              <a href={p.lien} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Voir les projets disponibles →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/scpi',e:'🏢',t:'SCPI — Pierre papier',d:'L\'alternative long terme'},
                {href:'/blog/meilleure-assurance-vie-2026',e:'🛡️',t:'Assurance vie',d:'Pour le très long terme'},
                {href:'/comparateur',e:'🎯',t:'Quiz placement',d:'Quel placement pour vous ?'},
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
