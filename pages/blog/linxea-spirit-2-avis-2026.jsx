import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { LIENS } from '../../data/config'

export default function LinxeaSpirit2Avis() {
  const lien = LIENS.linxea.spiritAV

  return (
    <>
      <SeoHead
        title="Linxea Spirit 2 avis 2026 : la meilleure assurance vie en ligne ? 🏆"
        description="Notre avis complet sur Linxea Spirit 2 : fonds euros à 3,08%, 0% de frais, plus de 700 supports. Est-ce vraiment la meilleure assurance vie en ligne en 2026 ?"
        slug="blog/linxea-spirit-2-avis-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#fff8f0,#fff0e0)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Linxea Spirit 2 avis 2026</span></div>
            <span className="tag">Avis & Analyse</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Linxea Spirit 2 avis 2026 : la meilleure assurance vie en ligne ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Fonds euros à 3,08%, zéro frais d'entrée, plus de 700 supports disponibles — Linxea Spirit 2 est souvent cité comme le meilleur contrat en ligne. On vérifie tout ça ensemble, honnêtement.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 9 min</span><span>•</span><span>Juin 2026</span>
            </div>

            {/* NOTE GLOBALE */}
            <div style={{background:'#fff',border:'1.5px solid rgba(200,169,110,0.3)',borderRadius:'16px',padding:'20px 24px',marginTop:'28px',display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap'}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:900,color:'var(--green)',lineHeight:1}}>9,4</div>
                <div style={{fontSize:'12px',color:'var(--text2)',marginTop:'4px'}}>Note SimuInvest /10</div>
                <div style={{color:'var(--gold)',fontSize:'16px',letterSpacing:'2px',marginTop:'4px'}}>★★★★★</div>
              </div>
              <div style={{flex:1,minWidth:'200px'}}>
                {[['Frais','10/10 — Zéro frais d\'entrée, 0,5%/an gestion'],['Fonds euros','9/10 — 3,08% en 2025, top du marché'],['Supports','9/10 — 700+ ETF, SCPI, fonds'],['Interface','9/10 — Claire, simple, tout en ligne'],['Service client','8,5/10 — Réactif, compétent']].map(([l,n])=>(
                  <div key={l} style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px',gap:'12px'}}>
                    <span style={{color:'var(--text2)',flexShrink:0}}>{l}</span>
                    <span style={{fontWeight:600,color:'var(--green)',textAlign:'right'}}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> Linxea Spirit 2 est, selon nous, <strong>le meilleur contrat d'assurance vie en ligne en 2026</strong> pour la grande majorité des épargnants français. Frais au plancher, fonds euros compétitif, choix de supports immense. Le seul vrai reproche : la gestion libre demande un minimum d'implication. Si vous préférez tout déléguer, Yomoni ou Nalo sont plus adaptés.
          </div>

          <div className="article-body">
            <h2>C'est quoi Linxea Spirit 2 exactement ?</h2>
            <p>Linxea Spirit 2 est un contrat d'assurance vie en ligne distribué par <strong>Linxea</strong> et géré par <strong>Spirica</strong> (filiale du Crédit Agricole). C'est l'un des contrats les plus populaires en France, avec plusieurs centaines de milliers de souscripteurs.</p>
            <p>Ce qui le rend si populaire ? Une combinaison de frais ultra-bas, d'un fonds euros parmi les meilleurs du marché, et d'un accès à plus de 700 supports différents — ETF, SCPI, fonds actifs, fonds ISR...</p>
            <p>Bref, c'est le couteau suisse de l'assurance vie en ligne.</p>

            <h2>Les chiffres clés — sans embellissement</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Caractéristique</th><th>Linxea Spirit 2</th><th>Moyenne marché</th></tr></thead>
                <tbody>
                  {[
                    ['Frais de versement','0%','0-3%'],
                    ['Frais de gestion annuels','0,50%/an','0,5-1%/an'],
                    ['Frais d\'arbitrage','0%','0-1%'],
                    ['Fonds euros 2025','3,08%','2-3%'],
                    ['Nombre de supports','700+','100-500'],
                    ['Versement minimum','500€','500-1 000€'],
                    ['Versements programmés','Dès 50€/mois','Dès 50-100€/mois'],
                    ['Assureur','Spirica (Crédit Agricole)','—'],
                  ].map(([c,a,b],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{c}</td>
                      <td style={{color:'var(--green)',fontWeight:600}}>{a}</td>
                      <td style={{color:'var(--text2)'}}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Le fonds euros à 3,08% — pourquoi c'est important</h2>
            <p>Le fonds euros c'est la partie "sécurisée" de votre assurance vie. Votre capital est garanti, vous ne pouvez pas perdre d'argent. En échange, le rendement est plus modeste que les unités de compte.</p>
            <p>Avec <strong>3,08% en 2025</strong>, Linxea Spirit 2 est en tête du marché. C'est deux fois le Livret A (1,5%) et nettement mieux que la plupart des autres fonds euros en France.</p>
            <div className="box-green">
              <strong>Exemple concret :</strong> Vous placez 20 000€ sur le fonds euros de Linxea Spirit 2.<br/>
              → Après un an : 20 000 × 1,0308 = <strong>20 616€</strong><br/>
              → Sur le Livret A à 1,5% : 20 300€<br/>
              → Différence : <strong>316€ de plus</strong> avec Linxea — et votre capital reste garanti dans les deux cas.
            </div>

            <h2>Les 700+ supports — c'est vraiment utile ?</h2>
            <p>Oui, si vous savez quoi en faire. Sinon, ça peut être intimidant. Voici les grandes familles disponibles :</p>
            <ul>
              <li><strong>ETF (fonds indiciels)</strong> — MSCI World, S&P 500, Euro Stoxx... Les moins chers et souvent les plus performants sur le long terme</li>
              <li><strong>SCPI</strong> — investissement immobilier directement depuis votre assurance vie, avec la fiscalité de l'AV</li>
              <li><strong>Fonds actifs</strong> — gérés par des équipes de professionnels, généralement plus chers</li>
              <li><strong>Fonds ISR / ESG</strong> — investissement responsable, impact environnemental</li>
              <li><strong>Private equity</strong> — pour les profils avertis avec un horizon très long</li>
            </ul>
            <p>Si vous débutez : commencez par le fonds euros + un ETF MSCI World. Simple, efficace, peu de frais.</p>

            <h2>L'offre en cours — 150€ offerts sur Linxea Spirit PER</h2>
            <div style={{background:'linear-gradient(135deg,rgba(200,169,110,0.15),rgba(200,169,110,0.05))',border:'2px solid var(--gold-border)',borderRadius:'16px',padding:'24px',margin:'16px 0 24px'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)',marginBottom:'8px'}}>🎁 Offre de bienvenue jusqu'au 20 août 2026</div>
              <p style={{fontSize:'14px',color:'var(--text)',lineHeight:'1.65',marginBottom:'12px'}}>
                Linxea propose actuellement <strong>150€ offerts</strong> pour toute souscription au contrat <strong>Linxea Spirit PER</strong> avec un versement initial minimum de 3 000€ (dont au moins 30% en unités de compte). Code promo : <strong>SPIRITPER26</strong>
              </p>
              <p style={{fontSize:'13px',color:'var(--text2)',marginBottom:'16px'}}>
                Et aussi jusqu'à <strong>200€ offerts sur Linxea Vie</strong> (offre valable jusqu'au 26 juin 2026).
              </p>
              <a href={LIENS.linxea.per} target="_blank" rel="nofollow sponsored" className="btn btn-gold" style={{fontSize:'13px'}}>
                Profiter de l'offre Linxea →
              </a>
              <p style={{fontSize:'11px',color:'var(--text3)',marginTop:'10px'}}>Lien commercial — nous percevons une commission si vous souscrivez. Cela ne change pas les conditions de l'offre.</p>
            </div>

            <h2>Les points forts de Linxea Spirit 2</h2>
            <ul>
              <li><strong>Zéro frais d'entrée</strong> — 100% de votre argent est investi dès le premier jour</li>
              <li><strong>Zéro frais d'arbitrage</strong> — vous pouvez changer de supports gratuitement</li>
              <li><strong>Fonds euros compétitif</strong> — 3,08% en 2025, garanti en capital</li>
              <li><strong>700+ supports</strong> — ETF, SCPI, fonds actifs, ISR... pour tous les profils</li>
              <li><strong>Interface claire</strong> — tout se fait en ligne, intuitive même pour les débutants</li>
              <li><strong>Souscription 100% en ligne</strong> — pas de rendez-vous, pas de paperasse inutile</li>
              <li><strong>Versements programmés</strong> — à partir de 50€/mois pour investir progressivement</li>
            </ul>

            <h2>Les points faibles — soyons honnêtes</h2>
            <ul>
              <li><strong>Gestion libre uniquement</strong> — vous choisissez vos supports vous-même. Si vous voulez qu'on gère tout pour vous, Yomoni ou Nalo sont mieux adaptés</li>
              <li><strong>Pas de gestion pilotée native</strong> — il faut souscrire un mandat de gestion séparé si vous voulez déléguer</li>
              <li><strong>700 supports c'est beaucoup</strong> — ça peut être paralysant si on ne sait pas quoi choisir</li>
            </ul>

            <h2>Linxea Spirit 2 vs les autres — comparatif</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th style={{color:'var(--gold)'}}>Linxea Spirit 2</th>
                    <th>Yomoni</th>
                    <th>Nalo</th>
                    <th>Goodvest</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Frais gestion','0,50%/an','1,60%/an','1,65%/an','1,50%/an'],
                    ['Fonds euros','3,08%','2,10%','2,90%','2,40%'],
                    ['Gestion','Libre','Pilotée','Pilotée','Pilotée ISR'],
                    ['Ticket min','500€','1 000€','1 000€','300€'],
                    ['Meilleur pour','Autonomes','Débutants','Multi-projets','Écolos'],
                  ].map(([c,a,b,d,e],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{c}</td>
                      <td style={{color:'var(--gold2)',fontWeight:600}}>{a}</td>
                      <td style={{color:'var(--text2)'}}>{b}</td>
                      <td style={{color:'var(--text2)'}}>{d}</td>
                      <td style={{color:'var(--text2)'}}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Pour qui est fait Linxea Spirit 2 ?</h2>
            <p>Linxea Spirit 2 c'est le choix idéal si :</p>
            <ul>
              <li>Vous voulez <strong>les frais les plus bas</strong> du marché</li>
              <li>Vous êtes à l'aise pour choisir vos supports (ou vous êtes prêt à apprendre)</li>
              <li>Vous voulez accéder à des ETF ou à des SCPI dans une enveloppe fiscale avantageuse</li>
              <li>Vous avez un horizon long terme (8 ans+) et vous cherchez à optimiser la fiscalité</li>
            </ul>
            <p>En revanche, si vous préférez qu'un expert gère tout à votre place sans que vous ayez à vous en préoccuper, regardez plutôt du côté de Yomoni (gestion pilotée automatique) ou Nalo (très personnalisé).</p>

            <div className="box-warn">
              <strong>⚠️ Rappel important :</strong> Cet article est informatif et ne constitue pas un conseil en investissement personnalisé. SimuInvest.fr n'est pas agréé ORIAS. Les rendements passés (fonds euros à 3,08%) ne préjugent pas des rendements futurs. Tout investissement comporte des risques.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Ouvrir un Linxea Spirit 2</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'6px'}}>0% frais · Fonds euros 3,08% · 700+ supports · 100% en ligne</p>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,.4)',marginBottom:'18px'}}>Lien commercial — commission perçue si souscription. Ne change pas vos conditions.</p>
              <a href={lien} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">
                Découvrir Linxea Spirit 2 →
              </a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🏆',t:'Meilleure AV 2026',d:'Linxea vs Yomoni vs Nalo'},
                {href:'/blog/fiscalite-assurance-vie-apres-8-ans',e:'🧾',t:'Fiscalité AV après 8 ans',d:'Tout comprendre sur l\'abattement'},
                {href:'/blog/assurance-vie-vs-per-retraite-2026',e:'⚖️',t:'AV vs PER retraite',d:'Lequel choisir selon votre profil'},
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
