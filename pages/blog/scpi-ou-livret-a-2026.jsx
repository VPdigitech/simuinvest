import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { SITE } from '../../data/config'

export default function ScpiOuLivretA() {
  return (
    <>
      <SeoHead
        title="SCPI ou Livret A 2026 : comparatif complet 🏆"
        description="Le Livret A est tombé à 1,5% en 2026. La SCPI CORUM affiche 6,5%. On compare honnêtement les deux placements pour vous aider à décider selon votre situation."
        slug="blog/scpi-ou-livret-a-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>SCPI ou Livret A 2026</span>
            </div>
            <span className="tag">Comparatif</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              SCPI ou Livret A 2026 : où placer son argent après la baisse à 1,5% ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300,marginBottom:'16px'}}>
              Le Livret A est passé à 1,5% en février 2026. La SCPI CORUM affiche 6,5%. On compare honnêtement les deux pour vous aider à décider.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',flexWrap:'wrap'}}>
              <span>⚖️ Comparatif</span><span>•</span><span>📖 7 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> Livret A = épargne de précaution (3 mois de dépenses max). SCPI = faire fructifier le reste sur 10 ans. Les deux sont complémentaires, pas concurrents.
          </div>

          <div className="article-body">
            <h2>Pourquoi cette comparaison est cruciale en 2026</h2>
            <p>En février 2026, le taux du Livret A est passé de 3% à <strong>1,5%</strong> — son niveau le plus bas depuis 2022. En parallèle, CORUM Origin a affiché <strong>6,5% en 2025</strong>, soit plus de 4 fois le Livret A. Cette situation pousse de plus en plus d'épargnants à s'interroger.</p>

            <h2>Le comparatif chiffré</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr><th>Critère</th><th>Livret A</th><th style={{color:'var(--gold2)'}}>SCPI CORUM</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Taux 2026','1,5% net','6,5% (2025)*'],
                    ['Fiscalité','Exonéré d\'impôt','Revenus fonciers (TMI+17,2%)'],
                    ['Plafond','22 950€','Aucun'],
                    ['Disponibilité','Immédiate','10 ans recommandés'],
                    ['Risque','0% (garanti État)','Risque de perte en capital'],
                    ['Ticket d\'entrée','0€','Dès 200€ (R Start)'],
                    ['Revenus','Intérêts annuels','Loyers mensuels'],
                  ].map(([c,a,b],i)=>(
                    <tr key={i}><td style={{fontWeight:500}}>{c}</td><td style={{color:'var(--text2)'}}>{a}</td><td style={{color:'var(--gold2)',fontWeight:500}}>{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic'}}>*Performances passées non garanties. Risque de perte en capital.</p>

            <h2>Simulation : 10 000€ placés pendant 10 ans</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {l:'Livret A (1,5%)',v:'11 604€',g:'+1 604€',c:'var(--text2)'},
                {l:'Assurance vie fonds € (3%)',v:'13 439€',g:'+3 439€',c:'var(--gold2)'},
                {l:'SCPI CORUM (6,5%)*',v:'18 771€',g:'+8 771€',c:'var(--green)'},
              ].map(({l,v,g,c})=>(
                <div key={l} style={{background:'var(--card)',border:'1px solid var(--border2)',borderRadius:'12px',padding:'16px',textAlign:'center'}}>
                  <div style={{fontSize:'11px',color:'var(--text2)',marginBottom:'8px',lineHeight:'1.4'}}>{l}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)',marginBottom:'4px'}}>{v}</div>
                  <div style={{fontSize:'13px',fontWeight:600,color:c}}>{g}</div>
                </div>
              ))}
            </div>
            <p style={{fontSize:'11px',color:'var(--text2)',fontStyle:'italic'}}>*Simulation basée sur le rendement 2025. Hors fiscalité et frais. Non garanti.</p>

            <h2>Quand garder son Livret A ?</h2>
            <p>Le Livret A reste <strong>irremplaçable pour votre épargne de précaution</strong>. La règle : gardez l'équivalent de 3 mois de dépenses sur votre Livret A — argent disponible immédiatement, sans risque, pour les urgences.</p>
            <div className="box-gold">
              <strong>Exemple :</strong> Vos dépenses mensuelles sont de 2 000€. Conservez 6 000€ sur Livret A. Le reste peut être investi en SCPI pour vraiment travailler.
            </div>

            <h2>Quand préférer la SCPI ?</h2>
            <p>La SCPI est pertinente dès que votre épargne de précaution est constituée et que vous pouvez immobiliser de l'argent 10 ans. Elle convient si :</p>
            <ul>
              <li>Votre Livret A est plein ou presque (plafond 22 950€)</li>
              <li>Vous avez une épargne dormante non utilisée</li>
              <li>Vous préparez votre retraite sur le long terme</li>
              <li>Vous voulez des revenus complémentaires mensuels</li>
            </ul>

            <h2>La vraie réponse : les deux sont complémentaires</h2>
            <p>Ce n'est pas SCPI <em>ou</em> Livret A — c'est SCPI <em>et</em> Livret A. Ils jouent des rôles différents :</p>
            <ul>
              <li><strong>Livret A</strong> = filet de sécurité, disponible immédiatement, sans risque</li>
              <li><strong>SCPI</strong> = moteur de croissance, revenus réguliers, horizon long terme</li>
            </ul>

            <div className="box-warn">
              <strong>⚠️ Rappel :</strong> Contrairement au Livret A dont le capital est garanti par l'État, la valeur de vos parts SCPI peut baisser. Durée recommandée : 10 ans minimum. Ce contenu est informatif, pas un conseil en investissement.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Simulez ce que rapporterait votre épargne en SCPI</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Gratuit · Sans engagement · Conseiller CORUM sous 3 jours</p>
              <a href={SITE.affiliateLink} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Calculer mes revenus SCPI →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/corum-avis-2026',e:'🔍',t:'Avis CORUM 2026',d:'Notre analyse complète et indépendante'},
                {href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI débutant moins 1 000€',d:'Commencer avec un petit budget'},
                {href:'/blog/pierre-papier-auto-entrepreneur',e:'💼',t:'Pierre papier auto-entrepreneur',d:'Guide pour les indépendants'},
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
