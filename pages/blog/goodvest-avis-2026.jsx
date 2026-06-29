import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function GoodvestAvis() {
  return (
    <>
      <SeoHead
        title="Goodvest avis 2026 : l'assurance vie responsable vaut-elle le coup ? 🏆"
        description="Notre avis complet sur Goodvest : rendements, frais, impact écologique, comparaison avec Yomoni et Nalo. L'assurance vie ISR est-elle vraiment intéressante en 2026 ?"
        slug="blog/goodvest-avis-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>Goodvest avis 2026</span>
            </div>
            <span className="tag">Avis & Analyse</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Goodvest avis 2026 : l'assurance vie responsable vaut-elle vraiment le coup ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Goodvest promet une assurance vie 100% alignée avec l'Accord de Paris. Mais les rendements sont-ils au rendez-vous ? Les frais raisonnables ? Notre analyse honnête.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span>
              <span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>

            {/* NOTE */}
            <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'16px',padding:'20px 24px',marginTop:'28px',display:'flex',gap:'20px',alignItems:'center',flexWrap:'wrap'}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:900,color:'var(--green)',lineHeight:1}}>8,6</div>
                <div style={{fontSize:'12px',color:'var(--text2)',marginTop:'4px'}}>Note SimuInvest /10</div>
              </div>
              <div style={{flex:1,minWidth:'200px'}}>
                {[
                  ['Impact écologique','10/10'],
                  ['Transparence','9/10'],
                  ['Rendement','7/10'],
                  ['Frais','7,5/10'],
                  ['Interface','8/10'],
                ].map(([l,n])=>(
                  <div key={l} style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'5px'}}>
                    <span style={{color:'var(--text2)'}}>{l}</span>
                    <span style={{fontWeight:600,color:'var(--green)'}}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> Goodvest est <strong>la meilleure assurance vie ISR du marché</strong> si l'impact écologique est votre priorité. Les rendements sont corrects sans être exceptionnels. À choisir si vous voulez que votre argent ait un sens, pas uniquement maximiser le rendement.
          </div>

          <div className="article-body">
            <h2>C'est quoi Goodvest exactement ?</h2>
            <p>Goodvest est une assurance vie lancée en 2021, portée par SwissLife. Sa promesse : investir <strong>uniquement dans des fonds alignés avec l'Accord de Paris</strong> — c'est-à-dire des entreprises dont le modèle est compatible avec une trajectoire de réchauffement inférieure à 2°C.</p>
            <p>Concrètement, Goodvest exclut automatiquement les secteurs fossiles (pétrole, gaz, charbon), les armes, le tabac et le jeu. Chaque portefeuille affiche son "score carbone" — la température de réchauffement associée à vos investissements.</p>

            <h2>Les caractéristiques clés</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Caractéristique</th><th>Goodvest</th></tr></thead>
                <tbody>
                  {[
                    ['Assureur','SwissLife'],
                    ['Frais de versement','0%'],
                    ['Frais de gestion','1,5%/an (contrat) + frais fonds'],
                    ['Ticket minimum','300€'],
                    ['Gestion','100% pilotée'],
                    ['Fonds euros','2,40% en 2025'],
                    ['Profils disponibles','Prudent, Équilibré, Dynamique, 100% Actions'],
                    ['Label ISR','Oui — tous les fonds'],
                    ['Score carbone affiché','Oui — transparence totale'],
                  ].map(([c,v],i)=>(
                    <tr key={i}><td style={{fontWeight:500}}>{c}</td><td style={{color:'var(--dark)',fontWeight:500}}>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Les rendements : ce qu'on peut attendre</h2>
            <p>Goodvest propose plusieurs profils d'investissement. Voici les performances indicatives sur les dernières années :</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {p:'Prudent',r:'~3,5%',d:'80% fonds euros / 20% actions ISR'},
                {p:'Équilibré',r:'~5,0%',d:'50% fonds euros / 50% actions ISR'},
                {p:'Dynamique',r:'~6,5%',d:'20% fonds euros / 80% actions ISR'},
                {p:'100% Actions',r:'~8%*',d:'100% actions ISR mondiales'},
              ].map(({p,r,d})=>(
                <div key={p} style={{background:'var(--bg2)',borderRadius:'12px',padding:'16px',border:'1px solid var(--border2)'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'16px',fontWeight:700,color:'var(--dark)',marginBottom:'4px'}}>{p}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:900,color:'var(--green)',marginBottom:'4px'}}>{r}</div>
                  <div style={{fontSize:'11px',color:'var(--text2)'}}>{d}</div>
                </div>
              ))}
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic'}}>*Performances passées non garanties. Variable selon les marchés.</p>

            <h2>Ce qui distingue vraiment Goodvest</h2>
            <h3>1. La transparence sur l'impact</h3>
            <p>C'est le point fort absolu de Goodvest. Dans votre espace client, vous voyez en temps réel :</p>
            <ul>
              <li>La <strong>température de réchauffement</strong> de votre portefeuille (ex: 1,8°C)</li>
              <li>Les secteurs exclus et pourquoi</li>
              <li>Les entreprises dans lesquelles vous investissez</li>
              <li>L'impact estimé en CO2 évité</li>
            </ul>
            <p>Aucune autre assurance vie en France ne propose ce niveau de transparence écologique.</p>

            <h3>2. La rigueur de la sélection</h3>
            <p>Goodvest ne se contente pas du label ISR (Investissement Socialement Responsable) — qui est parfois critiqué pour manquer de rigueur. Ils appliquent leurs propres critères d'exclusion, plus stricts, et font valider leur approche par des experts climatiques indépendants.</p>

            <h2>Les points faibles à connaître</h2>
            <ul>
              <li><strong>Frais de gestion plus élevés</strong> — 1,5%/an contre 0,5-0,8% chez Linxea. Sur le long terme, ça pèse sur le rendement net.</li>
              <li><strong>Pas de gestion libre</strong> — vous ne choisissez pas vos fonds individuellement. Goodvest gère pour vous selon votre profil.</li>
              <li><strong>Fonds euros moins compétitif</strong> — 2,40% contre 3,08% chez Linxea Spirit 2.</li>
              <li><strong>Gamme de fonds limitée</strong> — moins de choix que les assurances vie généralistes.</li>
            </ul>

            <h2>Goodvest vs Yomoni vs Linxea : le comparatif</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th style={{color:'var(--green)'}}>Goodvest</th>
                    <th style={{color:'var(--gold2)'}}>Yomoni</th>
                    <th>Linxea</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Fonds euros','2,40%','2,10%','3,08%'],
                    ['Frais gestion','1,5%/an','1,6%/an','0,5%/an'],
                    ['Gestion','Pilotée ISR','Pilotée ETF','Libre + pilotée'],
                    ['Impact écologique','⭐⭐⭐⭐⭐','⭐⭐⭐','⭐⭐'],
                    ['Ticket min','300€','1 000€','500€'],
                    ['Score carbone','✅ Affiché','❌ Non','❌ Non'],
                  ].map(([c,a,b,d],i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:500}}>{c}</td>
                      <td style={{color:'var(--green)',fontWeight:500}}>{a}</td>
                      <td style={{color:'var(--gold2)',fontWeight:500}}>{b}</td>
                      <td style={{color:'var(--text2)'}}>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Pour qui est fait Goodvest ?</h2>
            <ul>
              <li>Vous voulez que votre épargne ait un <strong>impact positif sur le climat</strong></li>
              <li>Vous préférez déléguer complètement la gestion</li>
              <li>Vous acceptez des frais légèrement plus élevés pour plus de valeurs</li>
              <li>Vous êtes à l'aise avec un horizon long terme (8 ans+)</li>
            </ul>
            <div className="box-green">
              <strong>💡 Mon avis personnel :</strong> Si le rendement brut est votre seule priorité, Linxea ou Yomoni font mieux. Mais si vous cherchez à investir en accord avec vos valeurs sans sacrifier complètement le rendement — Goodvest est la meilleure option du marché. Et la transparence sur l'impact est genuinement impressionnante.
            </div>

            <div className="box-warn">
              <strong>⚠️ Avertissement :</strong> Tout investissement comporte des risques dont la perte en capital. Les performances passées ne préjugent pas des performances futures. SimuInvest.fr est un site informatif indépendant, non agréé ORIAS.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Comparez toutes les assurances vie 2026</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Goodvest, Linxea, Yomoni, Nalo — notre comparatif indépendant</p>
              <Link href="/assurance-vie" className="btn btn-gold btn-lg">Voir le comparatif complet →</Link>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🏆',t:'Meilleure AV 2026',d:'Linxea, Yomoni, Nalo, Goodvest comparés'},
                {href:'/blog/assurance-vie-vs-per-retraite-2026',e:'⚖️',t:'AV vs PER retraite',d:'Lequel choisir selon votre profil'},
                {href:'/blog/fiscalite-assurance-vie-apres-8-ans',e:'🧾',t:'Fiscalité AV après 8 ans',d:'Tout comprendre sur l\'abattement'},
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
