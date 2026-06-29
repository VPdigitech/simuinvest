import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { LIENS } from '../../data/config'

export default function CombienRapporteScpi() {
  return (
    <>
      <SeoHead
        title="Combien rapporte vraiment une SCPI ? Les vrais chiffres 2026 💰"
        description="6%, 7%, 9%... les chiffres affichés par les SCPI sont-ils vrais ? On calcule tout : frais, impôts, inflation, délai de jouissance. Le rendement net réel vous surprendra."
        slug="blog/combien-rapporte-vraiment-une-scpi"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0faf4,#e0f2e9)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Combien rapporte une SCPI</span></div>
            <span className="tag">Simulation</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Combien rapporte vraiment une SCPI ? On fait les calculs honnêtement
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Les brochures annoncent 6, 7, parfois 9%. Mais une fois les frais déduits, les impôts payés, et le délai de jouissance absorbé — qu'est-ce qu'il reste vraiment dans votre poche ? On a tout calculé.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>La réponse courte :</strong> Une SCPI affichant 6% brut vous rapportera plutôt <strong>3 à 4% net</strong> après frais et impôts si vous êtes à la tranche 30%. C'est encore bien mieux que le Livret A à 1,5% — mais il faut savoir à quoi s'attendre.
          </div>

          <div className="article-body">
            <h2>Le taux affiché vs le taux réel — la différence qui compte</h2>
            <p>Quand une SCPI annonce un "taux de distribution" de 6%, c'est un taux brut. Entre ce chiffre et ce qui atterrit sur votre compte bancaire, il y a plusieurs étapes qui grignotent le rendement.</p>
            <p>Décortiquons tout ça avec un exemple concret : vous investissez <strong>10 000€</strong> dans une SCPI qui affiche <strong>6% de rendement brut</strong>.</p>

            <h2>Étape 1 — Les frais de souscription</h2>
            <p>La plupart des SCPI "classiques" prennent entre 8 et 10% de frais à l'entrée. Sur 10 000€, ça fait 800 à 1 000€ qui partent directement.</p>
            <p>Résultat : votre capital réellement investi est de 9 000 à 9 200€ — pas 10 000€.</p>
            <div className="box-green">
              <strong>La bonne nouvelle :</strong> Les nouvelles SCPI en ligne (Iroko Zen, certaines sur Louve Invest) proposent des frais à 0% ou très réduits. Si vous débutez, privilégiez ces contrats pour maximiser votre rendement réel.
            </div>

            <h2>Étape 2 — Le délai de jouissance</h2>
            <p>Voici quelque chose que peu de gens savent : quand vous achetez des parts de SCPI, vous ne touchez pas les premiers loyers immédiatement. Il y a un délai de jouissance — généralement de 3 à 6 mois — pendant lequel vous êtes propriétaire mais sans percevoir de revenus.</p>
            <p>Sur votre première année, vous ne touchez donc que 6 à 9 mois de loyers au lieu de 12. Ce qui ramène votre rendement effectif de la 1ère année à environ 4-4,5% au lieu de 6%.</p>

            <h2>Étape 3 — La fiscalité</h2>
            <p>Les revenus de SCPI sont imposés comme des <strong>revenus fonciers</strong> — c'est-à-dire à votre taux marginal d'imposition (TMI) + 17,2% de prélèvements sociaux.</p>

            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Votre TMI</th><th>Imposition totale</th><th>Sur 600€ de revenus</th><th>Il vous reste</th></tr></thead>
                <tbody>
                  {[['11%','28,2%','169€','431€'],['30%','47,2%','283€','317€'],['41%','58,2%','349€','251€'],['45%','62,2%','373€','227€']].map(([tmi,imp,prel,reste],i)=>(
                    <tr key={i} style={{background:i===1?'var(--gold-light)':i%2===0?'#fff':'var(--bg)',fontWeight:i===1?700:400}}>
                      <td>{tmi}</td><td style={{color:'rgba(192,57,43,0.8)'}}>{imp}</td><td>{prel}</td>
                      <td style={{color:'var(--green)',fontWeight:600}}>{reste}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic',marginTop:'8px'}}>Exemple sur 10 000€ investis avec 6% de rendement brut = 600€ brut/an.</p>

            <h2>Le calcul complet — simulation réaliste</h2>
            <p>Voici ce que donne vraiment un investissement de 10 000€ à 6% brut, pour un épargnant à TMI 30% :</p>

            <div style={{background:'var(--bg2)',borderRadius:'16px',padding:'24px',margin:'16px 0 24px'}}>
              {[
                {label:'Capital investi',valeur:'10 000€',note:''},
                {label:'Frais de souscription (5%)',valeur:'- 500€',note:'Variable selon SCPI'},
                {label:'Capital réellement placé',valeur:'9 500€',note:''},
                {label:'Revenus bruts annuels (6%)',valeur:'570€',note:'sur 9 500€'},
                {label:'Délai jouissance (4 mois)',valeur:'- 190€',note:'1ère année'},
                {label:'Revenus bruts 1ère année',valeur:'380€',note:''},
                {label:'Impôts + PS (47,2%)',valeur:'- 179€',note:'TMI 30%'},
                {label:'Revenus nets 1ère année',valeur:'201€',note:'2% net effectif'},
                {label:'Revenus nets années suivantes',valeur:'~301€/an',note:'3,2% net'},
              ].map(({label,valeur,note},i)=>(
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:i<8?'1px solid var(--border)':'none',fontWeight:i===8?700:400}}>
                  <div>
                    <span style={{fontSize:'14px',color:'var(--dark)'}}>{label}</span>
                    {note && <span style={{fontSize:'11px',color:'var(--text2)',marginLeft:'8px'}}>({note})</span>}
                  </div>
                  <span style={{fontSize:'15px',fontFamily:'var(--font-serif)',color:valeur.startsWith('-')?'rgba(192,57,43,0.8)':i===8?'var(--green)':'var(--dark)',fontWeight:600}}>{valeur}</span>
                </div>
              ))}
            </div>

            <h2>La solution pour améliorer le rendement net : la SCPI via assurance vie</h2>
            <p>C'est le secret que peu de gens utilisent. En investissant en SCPI via une assurance vie (comme Linxea Spirit 2), vous changez complètement la donne fiscale :</p>
            <ul>
              <li>Vos revenus restent dans l'enveloppe de l'AV — pas imposés tant que vous ne retirez pas</li>
              <li>Après 8 ans : abattement de 4 600€/an sur les gains (9 200€ pour un couple)</li>
              <li>Au-delà de l'abattement : PFU de 24,7% maximum — bien moins que les revenus fonciers classiques</li>
            </ul>

            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Mode d'investissement</th><th>Rendement brut</th><th>Imposition</th><th>Rendement net (TMI 30%)</th></tr></thead>
                <tbody>
                  {[['SCPI en direct','6%','47,2%','~3,2%'],['SCPI via AV (après 8 ans)','6%','24,7% max','~4,5%'],['SCPI via AV (dans abattement)','6%','17,2% (PS seuls)','~5%']].map(([m,b,i,n],idx)=>(
                    <tr key={idx} style={{background:idx>0?'rgba(31,110,74,0.05)':'#fff',fontWeight:idx>0?600:400}}>
                      <td>{m}</td><td style={{color:'var(--gold2)'}}>{b}</td>
                      <td style={{color:'rgba(192,57,43,0.7)'}}>{i}</td>
                      <td style={{color:'var(--green)',fontWeight:700}}>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Conclusion — la SCPI vaut-elle vraiment le coup ?</h2>
            <p>Avec un rendement net de 3 à 5% selon votre situation fiscale, la SCPI reste bien au-dessus du Livret A (1,5%) et dans la même zone que les meilleures assurances vie en ETF — avec l'avantage de revenus réguliers et prévisibles.</p>
            <p>Mais attention : ce n'est pas pour tout le monde. Si vous avez besoin de votre argent dans moins de 5 ans, ou si vous ne supportez pas l'idée de voir votre capital varier, la SCPI n'est pas adaptée à votre profil.</p>

            <div className="box-warn">
              <strong>⚠️ Rappel :</strong> Les simulations présentées sont indicatives. Les rendements passés ne préjugent pas des rendements futurs. La SCPI comporte un risque de perte en capital. SimuInvest.fr n'est pas agréé ORIAS.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Investir en SCPI avec une fiscalité optimisée</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Via Linxea Spirit 2 — la SCPI dans une enveloppe fiscale avantageuse</p>
              <a href={LIENS.linxea.spiritAV} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Découvrir Linxea →</a>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,.35)',marginTop:'10px'}}>Lien commercial — commission perçue si souscription</p>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap"><div className="g3">
            {[{href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI pour débutant',d:'Commencer avec moins de 1 000€'},{href:'/blog/investir-scpi-depuis-assurance-vie',e:'🛡️',t:'SCPI via assurance vie',d:'Optimiser la fiscalité'},{href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif honnête 2026'}].map(a=>(
              <Link key={a.href} href={a.href} style={{textDecoration:'none'}}>
                <div className="card card-p" style={{cursor:'pointer'}}>
                  <div style={{fontSize:'28px',marginBottom:'10px'}}>{a.e}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div>
                  <div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div>
                </div>
              </Link>
            ))}
          </div></div>
        </section>
      </article>
      <Footer />
    </>
  )
}
