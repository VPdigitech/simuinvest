import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function OuPlacer50000() {
  return (
    <>
      <SeoHead
        title="Où placer 50 000€ en 2026 ? Notre guide complet par profil 🏆"
        description="Profil prudent, équilibré ou dynamique : répartition optimale entre AV fonds euros, ETF, SCPI et comptes à terme. Simulations chiffrées pour chaque cas."
        slug="blog/ou-placer-50000-euros-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f5f0fa,#ede5f5)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Où placer 50 000€ 2026</span></div>
            <span className="tag">Simulation</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Où placer 50 000€ en 2026 ? Notre guide complet par profil
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              3 stratégies concrètes selon votre profil — prudent, équilibré ou dynamique — avec les simulations de revenus annuels.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 9 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>
        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>Règle de base :</strong> Gardez toujours <strong>6 mois de dépenses en Livret A</strong> avant d investir. Pour la plupart des Français c est 8 000 à 15 000€.
          </div>
          <div className="article-body">
            <h2>Profil 1 — Prudent : sécurité maximale</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Placement</th><th>Montant</th><th>Taux</th><th>Revenus/an</th></tr></thead>
                <tbody>
                  {[['Livret A','10 000€','1,5%','150€'],['Compte à terme Raisin','20 000€','4,5%','900€'],['AV fonds euros Linxea','20 000€','3,5%','700€'],['TOTAL','50 000€','~3,5%','~1 750€/an']].map(([p,m,t,r],i)=>(
                    <tr key={i} style={{background:i===3?'var(--gold-light)':'#fff',fontWeight:i===3?700:400}}>
                      <td>{p}</td><td>{m}</td><td style={{color:'var(--green)',fontWeight:600}}>{t}</td><td style={{fontWeight:600}}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="box-green" style={{marginTop:'12px'}}>~1 750€/an soit <strong>146€/mois</strong> — capital 100% garanti</div>

            <h2>Profil 2 — Équilibré : rendement + sécurité</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Placement</th><th>Montant</th><th>Taux</th><th>Revenus/an</th></tr></thead>
                <tbody>
                  {[['Livret A','10 000€','1,5%','150€'],['Raisin compte à terme','10 000€','4,5%','450€'],['AV ETF (Yomoni)','20 000€','5% moy.','1 000€'],['SCPI (informatif)','10 000€','6%','600€'],['TOTAL','50 000€','~4,4%','~2 200€/an']].map(([p,m,t,r],i)=>(
                    <tr key={i} style={{background:i===4?'var(--gold-light)':'#fff',fontWeight:i===4?700:400}}>
                      <td>{p}</td><td>{m}</td><td style={{color:'var(--green)',fontWeight:600}}>{t}</td><td style={{fontWeight:600}}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="box-green" style={{marginTop:'12px'}}>~2 200€/an soit <strong>183€/mois</strong></div>

            <h2>Profil 3 — Dynamique : maximiser le rendement</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Placement</th><th>Montant</th><th>Taux cible</th><th>Revenus/an</th></tr></thead>
                <tbody>
                  {[['Livret A','5 000€','1,5%','75€'],['AV ETF monde (Nalo)','25 000€','7%*','1 750€'],['SCPI (informatif)','15 000€','6,5%','975€'],['Crowdfunding (Homunity)','5 000€','10%','500€'],['TOTAL','50 000€','~6,6%','~3 300€/an']].map(([p,m,t,r],i)=>(
                    <tr key={i} style={{background:i===4?'var(--gold-light)':'#fff',fontWeight:i===4?700:400}}>
                      <td>{p}</td><td>{m}</td><td style={{color:'var(--green)',fontWeight:600}}>{t}</td><td style={{fontWeight:600}}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="box-green" style={{marginTop:'12px'}}>~3 300€/an soit <strong>275€/mois</strong> — avec risque de perte en capital</div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic'}}>*Rendement ETF variable et non garanti.</p>

            <div className="box-warn">
              <strong>Avertissement :</strong> Simulations basées sur les taux actuels pouvant évoluer. Tout investissement comporte des risques dont la perte en capital. SimuInvest.fr n est pas agréé ORIAS.
            </div>
            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Trouvez votre répartition idéale</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Notre quiz gratuit vous guide en 30 secondes</p>
              <Link href="/comparateur" className="btn btn-gold btn-lg">Faire le quiz →</Link>
            </div>
          </div>
        </div>
        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🛡️',t:'Meilleure AV 2026',d:'Pour la partie long terme'},
                {href:'/blog/meilleur-livret-epargne-2026',e:'🏦',t:'Meilleur livret 2026',d:'Pour la partie sécurisée'},
                {href:'/blog/crowdfunding-immobilier-homunity-avis',e:'🏗️',t:'Crowdfunding immo',d:'Pour les profils dynamiques'},
              ].map(a=>(<Link key={a.href} href={a.href} style={{textDecoration:'none'}}><div className="card card-p"><div style={{fontSize:'28px',marginBottom:'10px'}}>{a.e}</div><div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div><div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div></div></Link>))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  )
}
