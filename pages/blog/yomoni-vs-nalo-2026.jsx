import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function YomoniVsNalo() {
  return (
    <>
      <SeoHead
        title="Yomoni vs Nalo 2026 : lequel choisir pour son assurance vie ? 🏆"
        description="Comparatif complet Yomoni vs Nalo 2026 : frais, rendements, gestion pilotée, profils investisseurs. Notre analyse honnête pour choisir la meilleure assurance vie pilotée."
        slug="blog/yomoni-vs-nalo-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0f4ff,#e0e8ff)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>Yomoni vs Nalo 2026</span>
            </div>
            <span className="tag">Comparatif</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Yomoni vs Nalo 2026 : lequel choisir pour son assurance vie ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Yomoni et Nalo sont les deux leaders de la gestion pilotée en France. Même concept, mais des différences importantes sur les frais, la personnalisation et les rendements. On compare tout.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span>
              <span>📖 9 min</span><span>•</span><span>Juin 2026</span>
            </div>

            {/* NOTES RAPIDES */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginTop:'28px'}}>
              {[
                {nom:'Yomoni',note:'9.0',couleur:'#4da6ff',points:['Frais transparents','ETF diversifiés','Interface simple','10 profils de risque']},
                {nom:'Nalo',note:'9.2',couleur:'var(--gold2)',points:['Ultra-personnalisé','Projets multiples','ETF ESG disponibles','Gestion par objectif']},
              ].map(({nom,note,couleur,points})=>(
                <div key={nom} style={{background:'var(--card)',border:`2px solid ${couleur}30`,borderRadius:'16px',padding:'20px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)'}}>{nom}</div>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:900,color:couleur}}>{note}<span style={{fontSize:'14px',color:'var(--text2)'}}>/10</span></div>
                  </div>
                  {points.map(p=>(
                    <div key={p} style={{fontSize:'12px',color:'var(--text2)',marginBottom:'4px',display:'flex',gap:'6px'}}>
                      <span style={{color:couleur}}>✓</span>{p}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Verdict rapide :</strong> <strong>Nalo</strong> est plus personnalisé et légèrement mieux noté — idéal si vous avez des projets précis (retraite ET achat immobilier par exemple). <strong>Yomoni</strong> est plus simple et direct — idéal si vous voulez déléguer sans vous poser de questions. Les deux sont excellents.
          </div>

          <div className="article-body">

            <h2>Yomoni et Nalo : même concept, des différences clés</h2>
            <p>Les deux proposent de la <strong>gestion pilotée en assurance vie</strong> — vous définissez votre profil de risque, ils investissent pour vous dans des ETF (fonds indiciels à bas coûts). Vous n'avez rien à faire.</p>
            <p>Mais sous ce concept similaire se cachent des différences importantes que la plupart des comparatifs ne mentionnent pas.</p>

            <h2>Tableau comparatif complet</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th style={{color:'#4da6ff'}}>Yomoni</th>
                    <th style={{color:'var(--gold2)'}}>Nalo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Assureur','Suravenir (CM Arkéa)','Generali'],
                    ['Frais de versement','0%','0%'],
                    ['Frais de gestion contrat','0,60%/an','0,55%/an'],
                    ['Frais ETF (moy.)','0,30%/an','0,25%/an'],
                    ['Frais totaux','~1,60%/an','~1,65%/an*'],
                    ['Fonds euros 2025','2,10%','2,90%'],
                    ['Ticket minimum','1 000€','1 000€'],
                    ['Versements prog.','Dès 50€/mois','Dès 50€/mois'],
                    ['Profils de risque','10 profils','Continu 0-100%'],
                    ['Gestion multi-projets','❌ Non','✅ Oui'],
                    ['ETF ESG/ISR','✅ Disponible','✅ Par défaut'],
                    ['Assurance décès','✅ Incluse','✅ Incluse'],
                  ].map(([c,a,b],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{c}</td>
                      <td style={{color:'#4da6ff',fontWeight:500}}>{a}</td>
                      <td style={{color:'var(--gold2)',fontWeight:500}}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic',marginTop:'8px'}}>*Les frais Nalo incluent un conseil plus personnalisé qui justifie la légère différence.</p>

            <h2>La grande différence : la personnalisation</h2>

            <h3>Yomoni — simple et efficace</h3>
            <p>Yomoni fonctionne avec <strong>10 profils numérotés</strong> de 1 à 10 (du plus prudent au plus dynamique). Vous répondez à un questionnaire, Yomoni vous attribue un profil et gère votre argent en conséquence.</p>
            <p>C'est simple, transparent, et ça marche bien. Mais vous n'avez qu'un seul portefeuille pour tous vos objectifs.</p>

            <h3>Nalo — gestion par projet</h3>
            <p>Nalo permet de créer <strong>plusieurs portefeuilles pour plusieurs objectifs</strong> dans le même contrat. Exemple :</p>
            <ul>
              <li>Portefeuille 1 — "Retraite dans 20 ans" → profil dynamique</li>
              <li>Portefeuille 2 — "Achat immobilier dans 5 ans" → profil prudent</li>
              <li>Portefeuille 3 — "Transmettre à mes enfants" → profil équilibré</li>
            </ul>
            <p>Chaque portefeuille a son propre horizon et son propre niveau de risque. C'est beaucoup plus sophistiqué — et plus adapté à la réalité des épargnants qui ont rarement un seul objectif.</p>

            <h2>Performances comparées</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr><th>Profil</th><th style={{color:'#4da6ff'}}>Yomoni</th><th style={{color:'var(--gold2)'}}>Nalo</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Prudent (20% actions)','~3,5%/an','~3,8%/an'],
                    ['Équilibré (50% actions)','~5,5%/an','~5,8%/an'],
                    ['Dynamique (80% actions)','~7,5%/an','~7,8%/an'],
                    ['100% actions','~9%/an*','~9,2%/an*'],
                  ].map(([p,y,n],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{p}</td>
                      <td style={{color:'#4da6ff',fontWeight:600}}>{y}</td>
                      <td style={{color:'var(--gold2)',fontWeight:600}}>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic',marginTop:'8px'}}>*Performances moyennes indicatives basées sur les marchés récents. Non garanties. Les performances passées ne préjugent pas des performances futures.</p>

            <h2>Les commissions selon le montant investi</h2>
            <p>Les deux plateformes sont dans financeAds avec des commissions progressives très intéressantes pour les gros montants :</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',margin:'16px 0 24px'}}>
              <div style={{background:'rgba(77,166,255,0.06)',border:'1px solid rgba(77,166,255,0.2)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'16px',fontWeight:700,color:'#4da6ff',marginBottom:'10px'}}>Yomoni</div>
                {[['1 000€+','50€'],['5 000€+','75€'],['10 000€+','100€'],['20 000€+','150€'],['50 000€+','200€'],['100 000€+','250€'],['350 000€+','350€']].map(([m,c])=>(
                  <div key={m} style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'4px'}}>
                    <span style={{color:'var(--text2)'}}>{m}</span>
                    <span style={{fontWeight:600,color:'#4da6ff'}}>{c} CPA</span>
                  </div>
                ))}
              </div>
              <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'16px',fontWeight:700,color:'var(--gold2)',marginBottom:'10px'}}>Nalo</div>
                {[['1 000€+','20€'],['1 000-4 999€','40€'],['5 000-9 999€','80€'],['10 000-19 999€','120€'],['20 000-49 999€','240€'],['50 000-99 999€','300€'],['100 000-249 999€','480€'],['250 000€+','720€']].map(([m,c])=>(
                  <div key={m} style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'4px'}}>
                    <span style={{color:'var(--text2)'}}>{m}</span>
                    <span style={{fontWeight:600,color:'var(--gold2)'}}>{c} CPA</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>Pour qui choisir Yomoni ?</h2>
            <ul>
              <li>Vous voulez la <strong>solution la plus simple</strong> — questionnaire rapide, un portefeuille, rien à gérer</li>
              <li>Vous avez <strong>un seul objectif</strong> (retraite, épargne générale)</li>
              <li>Vous débutez en investissement et voulez quelque chose de clair</li>
              <li>Votre budget est entre <strong>1 000€ et 20 000€</strong></li>
            </ul>

            <h2>Pour qui choisir Nalo ?</h2>
            <ul>
              <li>Vous avez <strong>plusieurs objectifs financiers</strong> différents</li>
              <li>Vous voulez une gestion plus <strong>personnalisée et sophistiquée</strong></li>
              <li>Vous êtes sensible à <strong>l'investissement responsable</strong> (ESG par défaut)</li>
              <li>Vous investissez des <strong>montants importants</strong> (20 000€+) — commissions Nalo deviennent très attractives</li>
            </ul>

            <div className="box-green">
              <strong>💡 L'avis de David :</strong> Personnellement, si j'avais à choisir entre les deux, je choisirais Nalo pour la gestion multi-projets. C'est plus proche de la vraie vie — on n'a jamais un seul objectif financier. Mais Yomoni reste excellent pour ceux qui veulent la simplicité absolue.
            </div>

            <div className="box-warn">
              <strong>⚠️ Important :</strong> Tout investissement comporte des risques dont la perte en capital. Les rendements sont variables et non garantis. SimuInvest.fr est un site informatif indépendant, non agréé ORIAS. Consultez un conseiller financier agréé avant toute décision.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Comparez toutes les assurances vie 2026</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Yomoni, Nalo, Linxea, Goodvest — notre tableau comparatif complet</p>
              <Link href="/assurance-vie" className="btn btn-gold btn-lg">Voir le comparatif →</Link>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🏆',t:'Meilleure AV 2026',d:'Tous les contrats comparés'},
                {href:'/blog/goodvest-avis-2026',e:'🌱',t:'Goodvest avis 2026',d:'L\'assurance vie responsable'},
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
