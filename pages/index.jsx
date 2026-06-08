import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SeoHead from '../components/seo/SeoHead'
import { SITE, ARTICLES } from '../data/config'

const REDIRECT = {
  'assurance-vie': '/assurance-vie',
  'epargne': '/epargne',
  'crowdfunding': '/crowdfunding',
  'scpi': '/scpi',
}

export default function Home() {
  const router = useRouter()
  const [form, setForm] = useState({ produit:'', montant:'', objectif:'', horizon:'' })
  const [faq, setFaq] = useState(null)
  const featured = ARTICLES.filter(a => a.featured).slice(0, 6)

  const handleChange = (k, v) => setForm(f => ({...f, [k]: v}))

  const handleSubmit = () => {
    if (!form.produit) return
    router.push(REDIRECT[form.produit] || '/comparateur')
  }

  const faqs = [
    { q: 'Quelle différence entre assurance vie et livret épargne ?', a: 'Le livret (Livret A, Raisin...) est idéal pour l\'épargne de précaution — capital garanti, disponible immédiatement. L\'assurance vie est une enveloppe long terme (8 ans+) avec une fiscalité très avantageuse sur les gains et un avantage successoral important. Les deux sont complémentaires.' },
    { q: 'L\'assurance vie est-elle risquée ?', a: 'Ça dépend des supports. Le fonds euros est garanti en capital — zéro risque de perte. Les unités de compte (ETF, SCPI) comportent un risque de perte en capital mais offrent de meilleurs rendements. Vous choisissez votre répartition selon votre tolérance au risque.' },
    { q: 'Peut-on retirer son argent d\'une assurance vie quand on veut ?', a: 'Oui — l\'assurance vie n\'est pas bloquée. Vous pouvez faire des rachats partiels ou totaux à tout moment. La fiscalité est simplement plus avantageuse après 8 ans (abattement de 4 600€/an sur les gains).' },
    { q: 'Quel est le meilleur rendement garanti en 2026 ?', a: 'Les meilleurs comptes à terme via Raisin offrent jusqu\'à 4,5% garantis — contre 1,5% pour le Livret A. Les fonds euros des meilleures assurances vie atteignent 3 à 4,5%. Pour du rendement plus élevé non garanti, le crowdfunding immobilier (Homunity) offre 8 à 12% avec un risque de perte en capital.' },
    { q: 'SimuInvest est-il vraiment indépendant ?', a: 'SimuInvest.fr est un site d\'information indépendant édité par un particulier. Aucun partenariat commercial actif n\'a été établi à ce jour. Nos analyses sont objectives et basées sur les données publiques des contrats.' },
  ]

  const isComplete = form.produit !== ''

  return (
    <>
      <SeoHead
        title="SimuInvest — Comparez les meilleurs placements financiers 2026"
        description={SITE.description}
        slug=""
      />
      <Nav />

      {/* HERO */}
      <section style={{background:'linear-gradient(140deg,var(--bg) 55%,var(--bg2) 100%)',padding:'64px 0 72px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,right:0,width:'45%',height:'100%',backgroundImage:'radial-gradient(circle,rgba(200,169,110,0.13) 1px,transparent 0)',backgroundSize:'28px 28px',pointerEvents:'none'}} />

        <div className="wrap" style={{position:'relative',zIndex:1}}>
          <div className="g2" style={{gap:'56px',alignItems:'center'}}>

            {/* GAUCHE — TITRE */}
            <div>
              <div className="eyebrow" style={{marginBottom:'20px'}}>
                <span className="eyebrow-dot"/>Comparateur indépendant · 100% gratuit
              </div>
              <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(34px,5vw,58px)',fontWeight:900,color:'var(--dark)',marginBottom:'20px',lineHeight:'1.08'}}>
                Quel placement est{' '}
                <em style={{color:'var(--gold)',fontStyle:'italic'}}>fait pour vous</em> ?
              </h1>
              <p style={{fontSize:'17px',color:'var(--text2)',lineHeight:'1.75',marginBottom:'32px',fontWeight:300,maxWidth:'440px'}}>
                Assurance vie, livrets, crowdfunding, SCPI — trouvez votre placement idéal en 30 secondes. Gratuit, sans inscription.
              </p>

              {/* BADGES */}
              <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
                {[
                  ['🔍','100% indépendant'],
                  ['🇫🇷','France uniquement'],
                  ['⚠️','Risques mentionnés'],
                ].map(([e,l])=>(
                  <div key={l} style={{display:'flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'var(--text2)',fontWeight:500}}>
                    <span>{e}</span>{l}
                  </div>
                ))}
              </div>
            </div>

            {/* DROITE — FORMULAIRE QUIZ */}
            <div>
              {/* Bandeau titre formulaire */}
              <div style={{background:'var(--dark)',borderRadius:'16px 16px 0 0',padding:'20px 28px',display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'36px',height:'36px',background:'var(--gold)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>🎯</div>
                <div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'17px',fontWeight:700,color:'#fff'}}>Trouvez votre placement idéal</div>
                  <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',marginTop:'2px'}}>30 secondes · Sans inscription · Résultat immédiat</div>
                </div>
              </div>

              {/* Étapes */}
              <div style={{background:'#fff',border:'1px solid var(--border)',borderTop:'none',borderRadius:'0 0 16px 16px',padding:'28px',boxShadow:'var(--shadow-lg)'}}>

                {/* Indicateur étapes */}
                <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                    <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'var(--dark)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:700}}>1</div>
                    <span style={{fontSize:'12px',fontWeight:600,color:'var(--dark)'}}>Votre projet</span>
                  </div>
                  <div style={{flex:1,height:'1px',background:'var(--border)'}}/>
                  <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                    <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'var(--bg3)',color:'var(--text2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:700}}>2</div>
                    <span style={{fontSize:'12px',color:'var(--text2)'}}>Vos résultats</span>
                  </div>
                </div>

                <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)',marginBottom:'20px'}}>Décrivez votre projet</div>

                {/* CHAMP 1 */}
                <div className="field">
                  <label>Produit recherché</label>
                  <select value={form.produit} onChange={e=>handleChange('produit',e.target.value)}>
                    <option value="">Sélectionnez un produit...</option>
                    <option value="assurance-vie">🛡️ Assurance vie</option>
                    <option value="epargne">🏦 Livret / Compte à terme</option>
                    <option value="crowdfunding">🏗️ Crowdfunding immobilier</option>
                    <option value="scpi">🏢 SCPI (Pierre papier)</option>
                  </select>
                </div>

                {/* CHAMP 2 */}
                <div className="field">
                  <label>Montant à investir</label>
                  <select value={form.montant} onChange={e=>handleChange('montant',e.target.value)}>
                    <option value="">Sélectionnez un montant...</option>
                    <option value="petit">Moins de 1 000€</option>
                    <option value="moyen">1 000€ – 10 000€</option>
                    <option value="grand">10 000€ – 50 000€</option>
                    <option value="tres_grand">Plus de 50 000€</option>
                  </select>
                </div>

                {/* CHAMP 3 */}
                <div className="field">
                  <label>Votre objectif principal</label>
                  <select value={form.objectif} onChange={e=>handleChange('objectif',e.target.value)}>
                    <option value="">Sélectionnez un objectif...</option>
                    <option value="retraite">Préparer ma retraite</option>
                    <option value="revenus">Revenus complémentaires</option>
                    <option value="securite">Placer en sécurité</option>
                    <option value="rendement">Maximiser le rendement</option>
                    <option value="transmission">Transmettre mon patrimoine</option>
                  </select>
                </div>

                {/* CHAMP 4 */}
                <div className="field">
                  <label>Horizon de placement</label>
                  <select value={form.horizon} onChange={e=>handleChange('horizon',e.target.value)}>
                    <option value="">Sélectionnez une durée...</option>
                    <option value="court">Moins de 2 ans</option>
                    <option value="moyen">2 à 5 ans</option>
                    <option value="long">5 à 10 ans</option>
                    <option value="treslong">Plus de 10 ans</option>
                  </select>
                </div>

                {/* BOUTON */}
                <button
                  onClick={handleSubmit}
                  disabled={!isComplete}
                  style={{
                    width:'100%',
                    padding:'15px',
                    background:isComplete?'linear-gradient(135deg,var(--gold),var(--gold2))':'var(--bg3)',
                    color:isComplete?'#fff':'var(--text3)',
                    border:'none',
                    borderRadius:'10px',
                    fontSize:'15px',
                    fontWeight:700,
                    cursor:isComplete?'pointer':'not-allowed',
                    fontFamily:'var(--font-sans)',
                    transition:'all .2s',
                    marginTop:'4px',
                  }}>
                  Voir mes recommandations →
                </button>

                {/* BADGES CONFIANCE */}
                <div style={{display:'flex',justifyContent:'center',gap:'16px',marginTop:'16px',flexWrap:'wrap'}}>
                  {['🔒 Données sécurisées','✅ Aucune vente de données','🇫🇷 RGPD Art. 13'].map(b=>(
                    <span key={b} style={{fontSize:'11px',color:'var(--text2)'}}>{b}</span>
                  ))}
                </div>

                {/* NOTE LÉGALE */}
                <p style={{fontSize:'10px',color:'var(--text3)',textAlign:'center',marginTop:'12px',lineHeight:'1.5'}}>
                  ⚠️ Site informatif uniquement · Non agréé ORIAS · Ne constitue pas un conseil financier personnalisé
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-band">
        <div className="wrap g4">
          {[['4','Categories de placements'],['15+','Placements analyses'],['100%','Independant & gratuit'],['🇫🇷','France uniquement']].map(([n,l])=>(
            <div key={l} className="stat-item">
              <div className="stat-n" style={{fontSize:n==='🇫🇷'?'28px':'34px'}}>{n}</div>
              <div className="stat-l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CATÉGORIES */}
      <section className="section">
        <div className="wrap">
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <p className="tag" style={{marginBottom:'10px'}}>Tous les placements</p>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(24px,4vw,38px)',fontWeight:900,color:'var(--dark)',marginBottom:'10px'}}>Comparez par catégorie</h2>
            <p style={{fontSize:'16px',color:'var(--text2)',fontWeight:300}}>Chaque placement a ses avantages. On vous explique tout, simplement.</p>
          </div>
          <div className="g4">
            {[
              { href:'/assurance-vie', emoji:'🛡️', title:'Assurance vie', sub:'Épargne long terme', desc:'L\'enveloppe fiscale préférée des Français. Idéale pour préparer sa retraite.', rendement:'3 à 7%', horizon:'8+ ans', risque:'Faible à modéré', color:'rgba(31,110,74,0.08)', border:'rgba(31,110,74,0.25)', highlight:true },
              { href:'/epargne', emoji:'🏦', title:'Livrets & Épargne', sub:'Sécurité maximale', desc:'Capital garanti, taux fixe. L\'essentiel pour votre épargne de précaution.', rendement:'3 à 4,5%', horizon:'Flexible', risque:'Nul', color:'rgba(77,166,255,0.06)', border:'rgba(77,166,255,0.2)' },
              { href:'/crowdfunding', emoji:'🏗️', title:'Crowdfunding immo', sub:'Rendements élevés', desc:'Financez des projets immobiliers. 8 à 12% sur 12 à 24 mois.', rendement:'8 à 12%', horizon:'1 à 3 ans', risque:'Modéré à élevé', color:'rgba(168,85,247,0.06)', border:'rgba(168,85,247,0.2)' },
              { href:'/scpi', emoji:'🏢', title:'SCPI', sub:'Pierre papier', desc:'Investissez dans l\'immobilier sans acheter. Revenus mensuels, gestion déléguée.', rendement:'5 à 7%', horizon:'10 ans', risque:'Modéré', color:'var(--gold-light)', border:'var(--gold-border)' },
            ].map(cat=>(
              <Link key={cat.href} href={cat.href} style={{textDecoration:'none'}}>
                <div style={{background:cat.color,border:`${cat.highlight?'2px':'1.5px'} solid ${cat.border}`,borderRadius:'18px',padding:'24px',height:'100%',transition:'all .22s',cursor:'pointer',position:'relative'}}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 36px rgba(26,26,24,0.12)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
                  {cat.highlight && <div style={{position:'absolute',top:'12px',right:'12px',background:'var(--green)',color:'#fff',fontSize:'10px',fontWeight:700,padding:'3px 8px',borderRadius:'100px'}}>Populaire</div>}
                  <div style={{fontSize:'34px',marginBottom:'10px'}}>{cat.emoji}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:800,color:'var(--dark)',marginBottom:'2px'}}>{cat.title}</div>
                  <div style={{fontSize:'11px',color:'var(--text2)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'10px',fontWeight:600}}>{cat.sub}</div>
                  <p style={{fontSize:'13px',color:'var(--text)',lineHeight:'1.55',marginBottom:'16px'}}>{cat.desc}</p>
                  <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                    {[['Rendement',cat.rendement],['Horizon',cat.horizon],['Risque',cat.risque]].map(([k,v])=>(
                      <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:'12px'}}>
                        <span style={{color:'var(--text2)'}}>{k}</span>
                        <span style={{fontWeight:600,color:'var(--dark)'}}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'14px',fontSize:'12px',fontWeight:600,color:'var(--gold2)'}}>Comparer →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ARTICLES */}
      <section className="section" style={{background:'var(--bg2)'}}>
        <div className="wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'32px',flexWrap:'wrap',gap:'16px'}}>
            <div>
              <p className="tag" style={{marginBottom:'10px'}}>Guides & conseils</p>
              <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(24px,4vw,34px)',fontWeight:900,color:'var(--dark)'}}>Comprendre avant d'investir</h2>
              <p style={{fontSize:'15px',color:'var(--text2)',fontWeight:300,marginTop:'6px'}}>Des réponses claires, accessibles à tous — débutants, seniors, indépendants.</p>
            </div>
            <Link href="/blog" className="btn btn-outline">Voir tous les articles →</Link>
          </div>
          <div className="g3">
            {featured.map(art=>(
              <Link key={art.slug} href={`/blog/${art.slug}`} style={{textDecoration:'none'}}>
                <div className="card" style={{overflow:'hidden',height:'100%',cursor:'pointer'}}>
                  <div style={{height:'110px',background:'linear-gradient(135deg,var(--bg2),var(--bg3))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'38px'}}>{art.emoji}</div>
                  <div className="card-p">
                    <span className="tag" style={{marginBottom:'8px',display:'inline-block'}}>{art.category}</span>
                    <h3 style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)',lineHeight:'1.3',marginBottom:'6px'}}>{art.title}</h3>
                    <p style={{fontSize:'12px',color:'var(--text2)',lineHeight:'1.5',marginBottom:'10px'}}>{art.description.slice(0,90)}…</p>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'var(--text2)'}}>
                      <span>📖 {art.readTime}</span>
                      <span style={{fontWeight:600,color:'var(--gold2)'}}>Lire →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* FAQ */}
      <section className="section">
        <div className="wrap-sm">
          <div style={{textAlign:'center',marginBottom:'36px'}}>
            <p className="tag" style={{marginBottom:'10px'}}>Questions fréquentes</p>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(22px,4vw,34px)',fontWeight:900,color:'var(--dark)'}}>Vos questions, nos réponses honnêtes</h2>
          </div>
          {faqs.map((f,i)=>(
            <div key={i} className={`faq-item${faq===i?' open':''}`}>
              <div className="faq-q" onClick={()=>setFaq(faq===i?null:i)}>{f.q}<span className="faq-icon">+</span></div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BARRE LÉGALE */}
      <div style={{background:'var(--bg3)',padding:'14px 0',borderTop:'1px solid var(--border)'}}>
        <div className="wrap">
          <p style={{fontSize:'11px',color:'var(--text2)',lineHeight:'1.6',textAlign:'center',maxWidth:'880px',margin:'0 auto'}}>
            ⚠️ SimuInvest.fr est un site d'information indépendant, non agréé ORIAS, ne fournissant pas de conseil en investissement financier personnalisé. Tout investissement comporte des risques dont la perte en capital. Les performances passées ne préjugent pas des performances futures.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
