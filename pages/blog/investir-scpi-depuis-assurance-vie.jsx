import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { SITE } from '../../data/config'

export default function InvestirScpiAssuranceVie() {
  return (
    <>
      <SeoHead
        title="Investir en SCPI depuis une assurance vie 2026 🏆"
        description="Comment investir en SCPI via une assurance vie ? Avantages fiscaux après 8 ans, fonctionnement de CORUM Life, et pourquoi c'est intéressant selon votre TMI."
        slug="blog/investir-scpi-depuis-assurance-vie"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f5f0fa,#ede5f5)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>SCPI via assurance vie</span>
            </div>
            <span className="tag">Guide fiscal</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Investir en SCPI depuis une assurance vie : le guide 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300,marginBottom:'16px'}}>
              SCPI en direct ou via assurance vie ? Les deux ont leurs avantages. On vous explique quand l'enveloppe assurance vie change tout — notamment pour votre fiscalité.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',flexWrap:'wrap'}}>
              <span>🛡️ Fiscalité</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ En résumé :</strong> SCPI en direct = revenus mensuels immédiats, fiscalité standard. SCPI via assurance vie (CORUM Life) = pas d'impôt pendant la phase d'accumulation, fiscalité très avantageuse après 8 ans. Idéal si votre TMI est à 30% ou plus.
          </div>

          <div className="article-body">
            <h2>SCPI en direct vs SCPI en assurance vie : c'est quoi la différence ?</h2>
            <p>Quand vous achetez des parts SCPI <strong>en direct</strong>, vous êtes propriétaire de parts. Les loyers vous sont versés chaque mois et imposés comme des revenus fonciers (votre TMI + 17,2% de prélèvements sociaux).</p>
            <p>Quand vous investissez en SCPI via une <strong>assurance vie</strong> comme CORUM Life, l'assureur achète les parts à votre place. Vous détenez un contrat d'assurance vie investi en SCPI. Les revenus s'accumulent à l'intérieur du contrat sans être imposés immédiatement.</p>

            <h2>L'avantage fiscal de l'assurance vie après 8 ans</h2>
            <p>C'est là que tout change. Après 8 ans de détention d'un contrat d'assurance vie, vous bénéficiez d'un <strong>abattement fiscal annuel</strong> sur vos gains lors des rachats :</p>
            <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'20px',margin:'16px 0 24px'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:700,color:'var(--dark)',marginBottom:'12px'}}>Abattement après 8 ans</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                <div style={{textAlign:'center',background:'var(--card)',borderRadius:'10px',padding:'14px'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:800,color:'var(--gold2)'}}>4 600€</div>
                  <div style={{fontSize:'12px',color:'var(--text2)',marginTop:'4px'}}>de gains exonérés/an<br/>pour une personne seule</div>
                </div>
                <div style={{textAlign:'center',background:'var(--card)',borderRadius:'10px',padding:'14px'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:800,color:'var(--gold2)'}}>9 200€</div>
                  <div style={{fontSize:'12px',color:'var(--text2)',marginTop:'4px'}}>de gains exonérés/an<br/>pour un couple</div>
                </div>
              </div>
            </div>
            <p>Au-delà de l'abattement, les gains sont taxés à seulement <strong>7,5% + 17,2% de PS</strong> (soit 24,7% maximum) au lieu de votre TMI habituel qui peut atteindre 41% ou 45%.</p>

            <h2>Comparaison fiscale selon votre TMI</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr><th>TMI</th><th>SCPI en direct<br/>(imposition des loyers)</th><th style={{color:'var(--gold2)'}}>SCPI via AV après 8 ans<br/>(sur rachats)</th></tr>
                </thead>
                <tbody>
                  {[
                    ['11%','28,2%','24,7% max (souvent 0% avec abattement)'],
                    ['30%','47,2%','24,7% max (souvent 0% avec abattement)'],
                    ['41%','58,2%','24,7% max'],
                    ['45%','62,2%','24,7% max'],
                  ].map(([t,d,a],i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:500}}>{t}</td>
                      <td style={{color:'var(--text2)'}}>{d}</td>
                      <td style={{color:'var(--green)',fontWeight:500}}>{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>CORUM Life : la solution SCPI en assurance vie</h2>
            <p>CORUM propose son propre contrat d'assurance vie appelé <strong>CORUM Life</strong>. Il permet d'investir dans les SCPI CORUM (Origin, XL, USA) directement depuis une enveloppe assurance vie.</p>
            <ul>
              <li><strong>Dès 50€</strong> pour ouvrir le contrat</li>
              <li><strong>0€ de frais sur versements</strong></li>
              <li><strong>0€ de frais d'arbitrage</strong></li>
              <li>Fonds euros disponible pour sécuriser une partie</li>
              <li>Accessible 100% en ligne</li>
            </ul>

            <h2>Quand choisir SCPI en direct vs assurance vie ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',margin:'16px 0 24px'}}>
              <div style={{background:'var(--green-light)',border:'1px solid rgba(31,110,74,0.2)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--green)',marginBottom:'10px'}}>✅ SCPI en direct si…</div>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {['Votre TMI est à 11% ou moins','Vous voulez des loyers mensuels immédiats','Vous investissez dans des SCPI européennes (avantage PS)','Vous avez besoin de visibilité sur vos revenus'].map(i=>(
                    <li key={i} style={{fontSize:'13px',color:'var(--text)',display:'flex',gap:'6px'}}><span style={{color:'var(--green)'}}>✓</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--gold2)',marginBottom:'10px'}}>✅ Assurance vie si…</div>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {['Votre TMI est à 30% ou plus','Vous préparez votre retraite (horizon 8+ ans)','Vous souhaitez optimiser la transmission de patrimoine','Vous n\'avez pas besoin des revenus immédiatement'].map(i=>(
                    <li key={i} style={{fontSize:'13px',color:'var(--text)',display:'flex',gap:'6px'}}><span style={{color:'var(--gold2)'}}>✓</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="box-warn">
              <strong>⚠️ Avertissement :</strong> Investir en SCPI via une assurance vie comporte les mêmes risques que la SCPI en direct : risque de perte en capital, risque de liquidité, horizon 10 ans recommandé. La fiscalité décrite est celle en vigueur en 2026 et peut évoluer. Consultez un conseiller fiscal pour votre situation personnelle.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Découvrir CORUM Life — assurance vie SCPI</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Dès 50€ · 0€ frais sur versements · Conseiller gratuit</p>
              <a href={SITE.affiliateLink} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Ouvrir mon contrat CORUM Life →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/corum-avis-2026',e:'🔍',t:'Avis CORUM 2026',d:'Analyse complète et indépendante'},
                {href:'/blog/pierre-papier-auto-entrepreneur',e:'💼',t:'Pierre papier auto-entrepreneur',d:'Fiscalité SCPI pour indépendants'},
                {href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif complet 2026'},
              ].map(a=>(
                <Link key={a.href} href={a.href}>
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
