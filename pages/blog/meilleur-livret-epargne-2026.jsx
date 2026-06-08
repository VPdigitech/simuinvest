import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { PARTENAIRES } from '../../data/config'

export default function MeilleurLivret() {
  const epargnePartners = Object.values(PARTENAIRES).filter(p => p.categorie === 'epargne')
  return (
    <>
      <SeoHead
        title="Meilleur livret épargne 2026 : Raisin, Distingo ou Livret A ? 🏆"
        description="Raisin jusqu'à 4,5% garanti contre Livret A à 1,5% : comparatif complet de tous les livrets et comptes à terme disponibles en France en 2026."
        slug="blog/meilleur-livret-epargne-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0f7ff,#e3f0ff)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Meilleur livret épargne 2026</span></div>
            <span className="tag">Épargne</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Meilleur livret épargne 2026 : Raisin, Distingo ou Livret A ?
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Le Livret A est tombé à 1,5% en 2026. Il existe des alternatives légales, sécurisées et bien mieux rémunérées. Notre comparatif complet.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 6 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Notre verdict :</strong> <strong>Raisin</strong> pour le meilleur taux garanti (jusqu'à 4,5%). <strong>PickTheBank</strong> comme alternative solide. <strong>Distingo Bank</strong> pour la simplicité. Le Livret A reste indispensable pour l'épargne de précaution immédiate.
          </div>

          <div className="article-body">
            <h2>Le Livret A à 1,5% : ce que ça veut dire vraiment</h2>
            <p>Depuis février 2026, le Livret A rapporte <strong>1,5% par an</strong>. Sur 10 000€, ça représente <strong>150€ par an</strong> soit 12,50€ par mois. Et avec une inflation autour de 2%, votre argent perd de la valeur en termes réels.</p>
            <p>C'est pourquoi il est important de distinguer deux types d'épargne :</p>
            <ul>
              <li><strong>Épargne de précaution</strong> (3-6 mois de dépenses) → Livret A obligatoire. Disponible immédiatement, garanti.</li>
              <li><strong>Épargne de rendement</strong> (le reste) → cherchez mieux. Raisin, comptes à terme, ou placements plus dynamiques.</li>
            </ul>

            <h2>Comparatif des meilleurs livrets et comptes à terme 2026</h2>

            {epargnePartners.map((p,i) => (
              <div key={p.nom} style={{border:'1.5px solid var(--border2)',borderRadius:'16px',padding:'24px',marginBottom:'16px',background:i===0?'var(--gold-light)':'var(--card)'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'10px',flexWrap:'wrap',gap:'10px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'28px'}}>{p.emoji}</span>
                    <div>
                      <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)'}}>{p.nom}</div>
                      <span className="tag">{p.badge}</span>
                    </div>
                    {i===0 && <span style={{background:'var(--gold)',color:'#fff',fontSize:'10px',fontWeight:700,padding:'3px 10px',borderRadius:'100px'}}>⭐ Meilleur taux</span>}
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--green)'}}>{p.rendement}</div>
                    <div style={{fontSize:'12px',color:'var(--text2)'}}>Dès {p.ticket}</div>
                  </div>
                </div>
                <p style={{fontSize:'14px',color:'var(--text2)',marginBottom:'12px'}}>{p.description}</p>
                <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'14px'}}>
                  {p.avantages.map(a=><span key={a} style={{fontSize:'11px',background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'6px',padding:'3px 9px',fontWeight:500}}>✓ {a}</span>)}
                </div>
                <a href={p.lien} target="_blank" rel="nofollow sponsored" className="btn btn-gold" style={{fontSize:'13px'}}>Ouvrir un compte →</a>
              </div>
            ))}

            <h2>Comparatif chiffré : 10 000€ sur 1 an</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Placement</th><th>Taux</th><th>Gain sur 10 000€</th><th>Capital garanti ?</th></tr></thead>
                <tbody>
                  {[
                    ['Livret A','1,5%','150€','✅ Oui'],
                    ['Distingo Bank','Jusqu\'à 3,5%','350€','✅ Oui'],
                    ['PickTheBank','Jusqu\'à 4,2%','420€','✅ Oui'],
                    ['Raisin','Jusqu\'à 4,5%','450€','✅ Oui'],
                    ['SCPI (Iroko)','~7%','700€','⚠️ Risque de perte'],
                  ].map(([p,t,g,c],i)=>(
                    <tr key={i} style={{background:i===3?'var(--gold-light)':i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:i===3?700:400}}>{p}</td>
                      <td style={{color:'var(--green)',fontWeight:600}}>{t}</td>
                      <td style={{fontWeight:600,color:i===3?'var(--gold2)':'var(--dark)'}}>{g}</td>
                      <td>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="box-green" style={{marginTop:'24px'}}>
              <strong>💡 La stratégie de David :</strong> Je garde 6 mois de dépenses sur Livret A (disponible immédiatement en cas d'urgence). Le reste, je le place en compte à terme sur Raisin et en SCPI via Louve Invest. Pas d'argent qui dort.
            </div>

            <div className="box-warn">
              <strong>⚠️ Note importante :</strong> Les taux des comptes à terme peuvent évoluer. Vérifiez toujours les conditions actuelles directement sur le site des partenaires. Les taux indiqués sont ceux au moment de la rédaction (juin 2026).
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif complet'},
                {href:'/blog/meilleure-assurance-vie-2026',e:'🛡️',t:'Meilleure assurance vie',d:'Pour le long terme'},
                {href:'/comparateur',e:'🎯',t:'Quiz placement',d:'Trouver votre placement idéal'},
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
