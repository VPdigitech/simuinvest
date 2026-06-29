import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SeoHead from '../components/seo/SeoHead'

export default function ScpiPage() {
  return (
    <>
      <SeoHead title="SCPI 2026 : guide complet pierre papier — SimuInvest" description="Tout comprendre sur la SCPI (pierre papier) : comment ça marche, combien ça rapporte, quels sont les risques. Page informative uniquement." slug="scpi"/>
      <Nav/>
      <div style={{background:'var(--bg)',minHeight:'60vh',padding:'56px 0'}}>
        <div className="wrap">
          <div style={{background:'rgba(192,57,43,0.06)',border:'1px solid rgba(192,57,43,0.2)',borderRadius:'10px',padding:'14px 18px',marginBottom:'32px',fontSize:'13px',color:'#c0392b',fontWeight:500}}>
            ℹ️ <strong>Page informative uniquement.</strong> SimuInvest.fr ne propose pas de SCPI en direct et n'a pas de partenariat SCPI actif. Pour investir dans l'immobilier, consultez nos alternatives ci-dessous.
          </div>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,5vw,44px)',fontWeight:900,color:'var(--dark)',marginBottom:'16px'}}>La SCPI (Pierre Papier) : tout comprendre</h1>
          <p style={{fontSize:'17px',color:'var(--text2)',lineHeight:'1.75',marginBottom:'40px',fontWeight:300,maxWidth:'640px'}}>La SCPI permet d'investir dans l'immobilier sans acheter de bien. Des professionnels gèrent tout et vous reversent des revenus réguliers. Voici comment ça fonctionne.</p>

          <div className="g2" style={{marginBottom:'48px',gap:'40px'}}>
            <div>
              <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,color:'var(--dark)',marginBottom:'16px'}}>C'est quoi une SCPI ?</h2>
              <p style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.8',marginBottom:'14px'}}>SCPI = Société Civile de Placement Immobilier. Des milliers d'investisseurs mettent leur argent en commun. Une société achète des immeubles, les loue, et reverse les loyers proportionnellement à chacun.</p>
              <p style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.8',marginBottom:'14px'}}>C'est la <strong>pierre papier</strong> : vous investissez dans de l'immobilier réel, sans gérer quoi que ce soit.</p>
            </div>
            <div>
              <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,color:'var(--dark)',marginBottom:'16px'}}>Les risques à connaître</h2>
              <div style={{background:'rgba(192,57,43,0.05)',border:'1px solid rgba(192,57,43,0.2)',borderLeft:'4px solid #c0392b',borderRadius:'10px',padding:'18px'}}>
                <p style={{fontSize:'14px',color:'var(--text)',lineHeight:'1.7',marginBottom:'10px'}}>• <strong>Perte en capital possible</strong> — pas garanti comme le Livret A</p>
                <p style={{fontSize:'14px',color:'var(--text)',lineHeight:'1.7',marginBottom:'10px'}}>• <strong>Liquidité faible</strong> — difficile de revendre rapidement</p>
                <p style={{fontSize:'14px',color:'var(--text)',lineHeight:'1.7',marginBottom:'10px'}}>• <strong>Horizon 10 ans minimum</strong> recommandé</p>
                <p style={{fontSize:'14px',color:'var(--text)',lineHeight:'1.7'}}>• <strong>Fiscalité lourde</strong> en direct (revenus fonciers)</p>
              </div>
            </div>
          </div>

          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:800,color:'var(--dark)',marginBottom:'24px',textAlign:'center'}}>Alternatives disponibles sur SimuInvest</h2>
          <div className="g2" style={{marginBottom:'48px'}}>
            <div style={{background:'rgba(168,85,247,0.06)',border:'2px solid rgba(168,85,247,0.2)',borderRadius:'20px',padding:'28px'}}>
              <div style={{fontSize:'36px',marginBottom:'12px'}}>🏗️</div>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)',marginBottom:'8px'}}>Homunity</div>
              <span className="tag">Crowdfunding immobilier</span>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.65',margin:'12px 0 16px'}}>Investissez dans des projets immobiliers dès 1 000€. Rendements de 8 à 12% sur 12 à 24 mois. Agréé AMF.</p>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'16px'}}>
                {['8-12% rendement','Dès 1 000€','12-24 mois','Agréé AMF'].map(t=><span key={t} style={{fontSize:'11px',background:'rgba(255,255,255,0.7)',border:'1px solid var(--border)',borderRadius:'6px',padding:'3px 9px'}}>✓ {t}</span>)}
              </div>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <a href="https://www.homunity.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'13px'}}>Voir Homunity →</a>
                <Link href="/blog/crowdfunding-immobilier-homunity-avis" className="btn btn-outline" style={{fontSize:'13px'}}>Notre avis</Link>
              </div>
            </div>
            <div style={{background:'rgba(34,197,94,0.06)',border:'2px solid rgba(34,197,94,0.2)',borderRadius:'20px',padding:'28px'}}>
              <div style={{fontSize:'36px',marginBottom:'12px'}}>☀️</div>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)',marginBottom:'8px'}}>Enerfip</div>
              <span className="tag">Crowdfunding énergies</span>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.65',margin:'12px 0 16px'}}>Financez des projets d'énergies renouvelables. Dès 10€, rendements 5 à 10%, impact écologique positif.</p>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'16px'}}>
                {['5-10% rendement','Dès 10€','Impact écolo','Agréé AMF'].map(t=><span key={t} style={{fontSize:'11px',background:'rgba(255,255,255,0.7)',border:'1px solid var(--border)',borderRadius:'6px',padding:'3px 9px'}}>✓ {t}</span>)}
              </div>
              <a href="https://www.enerfip.fr" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'13px'}}>Voir Enerfip →</a>
            </div>
          </div>

          <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'16px',padding:'24px',marginBottom:'48px',display:'flex',gap:'20px',alignItems:'center',flexWrap:'wrap'}}>
            <div style={{flex:1,minWidth:'260px'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)',marginBottom:'8px'}}>💡 SCPI via assurance vie — le meilleur des deux mondes</div>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.6'}}>Certaines assurances vie permettent d'investir en SCPI avec une fiscalité très avantageuse après 8 ans. Disponible chez Linxea.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'8px',flexShrink:0}}>
              <Link href="/blog/investir-scpi-depuis-assurance-vie" className="btn btn-gold" style={{fontSize:'13px'}}>SCPI via AV →</Link>
              <Link href="/assurance-vie" className="btn btn-outline" style={{fontSize:'13px'}}>Comparer les AV</Link>
            </div>
          </div>

          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,marginBottom:'20px',color:'var(--dark)'}}>Nos articles sur la SCPI</h2>
          <div className="g3">
            {[{href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI pour débutant',d:'Moins de 1 000€ pour commencer'},{href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif honnête 2026'},{href:'/blog/combien-rapporte-vraiment-une-scpi',e:'💰',t:'Combien ça rapporte ?',d:'Les vrais chiffres'}].map(a=>(
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
      </div>
      <Footer/>
    </>
  )
}
