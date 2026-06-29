import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { LIENS } from '../../data/config'

const contrats = [
  { rang:1, nom:'Linxea Spirit 2', badge:'N°1 SimuInvest', emoji:'🔥', assureur:'Spirica · CA Assurances', note:'9,4/10', fonds:'3,08%', frais:'0,50%/an', type:'Libre', ticket:'500€', lien:null, pour:'Profils autonomes qui veulent les frais les plus bas du marché', couleur:'rgba(200,169,110,0.1)', border:'rgba(200,169,110,0.3)' },
  { rang:2, nom:'Nalo', badge:'Meilleur personnalisé', emoji:'🎯', assureur:'Generali · ESG', note:'9,2/10', fonds:'2,90%', frais:'~1,65%/an', type:'Pilotée', ticket:'1 000€', lien:'https://www.nalo.fr', pour:'Ceux qui ont plusieurs objectifs financiers différents', couleur:'var(--bg)', border:'var(--border2)' },
  { rang:3, nom:'Yomoni', badge:'Meilleur débutant', emoji:'📈', assureur:'Suravenir · CM Arkéa', note:'9,0/10', fonds:'2,10%', frais:'1,60%/an', type:'Pilotée', ticket:'1 000€', lien:'https://www.yomoni.fr', pour:'Ceux qui veulent déléguer complètement sans réfléchir', couleur:'var(--bg)', border:'var(--border2)' },
  { rang:4, nom:'Goodvest', badge:'Meilleur ISR', emoji:'🌱', assureur:'SwissLife · ISR/ESG', note:'8,6/10', fonds:'2,40%', frais:'1,50%/an', type:'Pilotée ISR', ticket:'300€', lien:'https://www.goodvest.fr', pour:'Ceux qui veulent investir en accord avec leurs valeurs', couleur:'var(--bg)', border:'var(--border2)' },
  { rang:5, nom:'Belermain', badge:'Meilleur gros capital', emoji:'💎', assureur:'Apicil', note:'8,4/10', fonds:'2,70%', frais:'0,80%/an', type:'Libre', ticket:'5 000€', lien:'https://www.belermain.fr', pour:'Patrimoines importants (50 000€+) qui veulent un suivi', couleur:'var(--bg)', border:'var(--border2)' },
]

export default function MeilleureAssuranceVie() {
  return (
    <>
      <SeoHead
        title="Meilleure assurance vie 2026 : Linxea, Yomoni ou Nalo ? Comparatif complet 🏆"
        description="On compare les 5 meilleures assurances vie en ligne 2026 : Linxea Spirit 2, Nalo, Yomoni, Goodvest, Belermain. Frais, rendements, gestion — tout est là."
        slug="blog/meilleure-assurance-vie-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Meilleure assurance vie 2026</span></div>
            <span className="tag">Comparatif</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Meilleure assurance vie 2026 : Linxea, Yomoni ou Nalo ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              On a épluché les contrats, comparé les frais, testé les interfaces. Voici notre palmarès honnête des meilleures assurances vie en ligne en 2026 — avec les bons et les mauvais côtés de chacun.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 9 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> <strong>Linxea Spirit 2</strong> pour les profils autonomes (frais les plus bas, fonds euros 3,08%). <strong>Yomoni</strong> pour ceux qui veulent tout déléguer. <strong>Nalo</strong> pour une gestion par objectifs. <strong>Goodvest</strong> pour l'investissement responsable.
          </div>

          <div className="article-body">
            <h2>Pourquoi ouvrir une assurance vie en 2026 ?</h2>
            <p>Avec le Livret A tombé à 1,5%, l'assurance vie s'impose comme l'une des meilleures alternatives pour faire fructifier son épargne. Surtout après 8 ans, où la fiscalité devient très avantageuse : un abattement de 4 600€/an sur les gains (9 200€ pour un couple).</p>
            <p>Mais tous les contrats ne se valent pas. Les différences de frais entre les meilleurs et les moins bons peuvent amputer votre rendement de 1 à 2% par an — soit des milliers d'euros sur 20 ans.</p>

            <h2>Notre comparatif des 5 meilleures assurances vie 2026</h2>

            {contrats.map((c, i) => (
              <div key={c.nom} style={{background:c.couleur, border:`${i===0?'2px':'1.5px'} solid ${c.border}`, borderRadius:'16px', padding:'24px', marginBottom:'16px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'12px',marginBottom:'12px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'var(--bg2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>{c.emoji}</div>
                    <div>
                      <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <span style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)'}}>{c.rang}. {c.nom}</span>
                        <span style={{fontSize:'10px',background:i===0?'var(--gold)':'var(--bg3)',color:i===0?'#fff':'var(--text2)',padding:'2px 8px',borderRadius:'100px',fontWeight:600}}>{c.badge}</span>
                      </div>
                      <div style={{fontSize:'12px',color:'var(--text2)'}}>{c.assureur}</div>
                    </div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--green)'}}>{c.note}</div>
                    <div style={{fontSize:'11px',color:'var(--text2)'}}>fonds € : {c.fonds}</div>
                  </div>
                </div>
                <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'12px'}}>
                  {[['Frais',c.frais],['Type',c.type],['Dès',c.ticket]].map(([k,v])=>(
                    <span key={k} style={{fontSize:'11px',background:'rgba(255,255,255,0.7)',border:'1px solid var(--border)',borderRadius:'6px',padding:'3px 10px',color:'var(--text)'}}>
                      <strong>{k} :</strong> {v}
                    </span>
                  ))}
                </div>
                <p style={{fontSize:'13px',color:'var(--text2)',marginBottom:'12px'}}>✅ <strong>Idéal pour :</strong> {c.pour}</p>
                {i === 0 ? (
                  <a href={LIENS.linxea.spiritAV} target="_blank" rel="nofollow sponsored" className="btn btn-gold" style={{fontSize:'13px'}}>
                    Découvrir Linxea Spirit 2 →
                  </a>
                ) : (
                  <a href={c.lien} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{fontSize:'13px'}}>
                    Voir {c.nom} →
                  </a>
                )}
              </div>
            ))}

            <h2>Comment choisir selon votre profil ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {profil:'Je débute, je veux faire simple',reco:'Yomoni',raison:'Quiz rapide, gestion 100% automatique, on s\'occupe de tout'},
                {profil:'Je veux les frais les plus bas',reco:'Linxea Spirit 2',raison:'0,50%/an seulement, fonds euros à 3,08%, 700+ supports'},
                {profil:'J\'ai plusieurs objectifs (retraite + achat immo)',reco:'Nalo',raison:'Gestion par projet, chaque objectif a son propre portefeuille'},
                {profil:'L\'écologie c\'est important pour moi',reco:'Goodvest',raison:'100% ISR, score carbone affiché, aligné Accord de Paris'},
              ].map(({profil,reco,raison})=>(
                <div key={profil} style={{background:'var(--bg2)',borderRadius:'12px',padding:'16px',border:'1px solid var(--border2)'}}>
                  <div style={{fontSize:'12px',color:'var(--text2)',marginBottom:'6px'}}>{profil}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--gold2)',marginBottom:'4px'}}>→ {reco}</div>
                  <div style={{fontSize:'12px',color:'var(--text2)'}}>{raison}</div>
                </div>
              ))}
            </div>

            <div className="box-warn">
              <strong>⚠️ Important :</strong> Cet article est informatif. SimuInvest.fr perçoit une commission sur Linxea (lien commercial marqué). Les autres liens sont des liens publics sans commission. Tout investissement comporte des risques. SimuInvest.fr n'est pas agréé ORIAS.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Notre recommandation n°1 : Linxea Spirit 2</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'6px'}}>0% frais · Fonds euros 3,08% · 700+ supports · Offre jusqu'au 26 juin</p>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,.35)',marginBottom:'16px'}}>Lien commercial — commission perçue si souscription</p>
              <a href={LIENS.linxea.home} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">
                Découvrir Linxea →
              </a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/linxea-spirit-2-avis-2026',e:'🔥',t:'Linxea Spirit 2 avis',d:'Notre analyse complète du contrat'},
                {href:'/blog/fiscalite-assurance-vie-apres-8-ans',e:'🧾',t:'Fiscalité AV après 8 ans',d:'Abattement, PFU, tout comprendre'},
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
