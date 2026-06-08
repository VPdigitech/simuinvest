import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { SITE } from '../../data/config'

export default function CombienRapporteScpi() {
  return (
    <>
      <SeoHead
        title="Combien rapporte vraiment une SCPI ? Simulation honnête 2026 🏆"
        description="J'ai investi en SCPI et voici ce que ça rapporte vraiment. Simulation concrète avec 1 000€, 5 000€ et 20 000€. Les chiffres réels, sans enjolivements."
        slug="blog/combien-rapporte-vraiment-une-scpi"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#faf5e4,#f0e8cc)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>Combien rapporte une SCPI ?</span>
            </div>
            <span className="tag">Simulation</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Combien rapporte vraiment une SCPI ? Ma simulation honnête 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300,marginBottom:'16px'}}>
              J'ai investi mes propres économies en SCPI. Voici les vrais chiffres — pas les chiffres marketing, pas les projections idéales. Ce que ça rapporte vraiment, avec les frais et les impôts.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span>
              <span>📖 7 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Les chiffres clés :</strong> Avec CORUM Origin à 6,5% de rendement 2025, 5 000€ investis rapportent environ <strong>27€ par mois</strong> avant impôts. Après une TMI de 11%, il reste environ <strong>19€ nets par mois</strong>. Pas de quoi vivre, mais un vrai complément qui s'accumule.
          </div>

          <div className="article-body">
            <h2>Pourquoi je vous parle des vrais chiffres</h2>
            <p>
              Quand on cherche "combien rapporte une SCPI", on tombe souvent sur des simulations optimistes qui ne mentionnent pas les frais, pas les impôts, pas le délai avant les premiers loyers. C'est agaçant. Moi qui ai investi en SCPI, je vais vous donner les vrais chiffres — ceux que j'aurais voulu trouver avant d'investir.
            </p>

            <h2>Le rendement brut : 6,5% pour CORUM en 2025</h2>
            <p>
              Le taux de distribution (TD) est le chiffre que les SCPI affichent. Pour CORUM Origin en 2025, c'était <strong>6,50%</strong>. Ça veut dire que pour 10 000€ investis, la SCPI a distribué 650€ dans l'année, soit environ 54€ par mois.
            </p>
            <p>
              Mais attention — ce chiffre est <strong>brut</strong>. Il ne tient pas compte des frais de souscription ni des impôts.
            </p>

            <h2>Les simulations concrètes selon votre budget</h2>
            <div style={{overflowX:'auto',margin:'8px 0 24px'}}>
              <table>
                <thead>
                  <tr>
                    <th>Montant investi</th>
                    <th>Revenus bruts/an</th>
                    <th>Revenus bruts/mois</th>
                    <th>Nets/mois (TMI 11%)*</th>
                    <th>Nets/mois (TMI 30%)*</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1 000€','65€','5,4€','3,9€','2,8€'],
                    ['5 000€','325€','27€','19€','14€'],
                    ['10 000€','650€','54€','39€','28€'],
                    ['20 000€','1 300€','108€','78€','57€'],
                    ['50 000€','3 250€','271€','194€','143€'],
                  ].map(([m,a,bm,n11,n30],i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:600,color:'var(--dark)'}}>{m}</td>
                      <td>{a}</td>
                      <td style={{fontWeight:500}}>{bm}</td>
                      <td style={{color:'var(--green)',fontWeight:600}}>{n11}</td>
                      <td style={{color:'var(--gold2)',fontWeight:500}}>{n30}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic'}}>*Simulation basée sur CORUM Origin 6,5% (2025), hors frais de souscription, après TMI + 17,2% PS. Non garanti.</p>

            <h2>Ce qu'on ne vous dit pas toujours : les frais de souscription</h2>
            <p>
              Sur CORUM Origin, il y a <strong>12% de frais de souscription</strong>. Ça veut dire que si vous investissez 10 000€, seulement <strong>8 800€</strong> travaillent vraiment pour vous au départ. Les 1 200€ restants, c'est les frais.
            </p>
            <p>
              Ces frais s'amortissent sur environ 1,5 à 2 ans de rendement. C'est pourquoi la SCPI est un investissement long terme — sur 10 ans, ces frais représentent seulement 1,2% par an, ce qui reste raisonnable.
            </p>
            <div className="box-green">
              <strong>💡 Mon conseil :</strong> Si vous voulez éviter les frais de souscription, commencez par <strong>CORUM R Start</strong> (0€ de frais, dès 200€). Vous pouvez passer à CORUM Origin ensuite quand vous avez testé et êtes convaincu.
            </div>

            <h2>Le délai avant les premiers loyers</h2>
            <p>
              Attention à ne pas vous faire avoir par l'impatience. Sur CORUM Origin, il y a un <strong>délai de jouissance d'environ 5 mois</strong> avant de toucher les premiers loyers. Ce n'est pas un problème — c'est le temps que CORUM investit votre argent dans des immeubles. Mais ne vous attendez pas à voir des revenus le premier mois.
            </p>
            <p>
              Avec CORUM R Start, ce délai est différent et potentiellement plus court — mais comme c'est une SCPI récente, je n'ai pas encore de retour d'expérience personnel sur ce point.
            </p>

            <h2>Ma propre expérience</h2>
            <p>
              J'ai investi dans CORUM Origin en 2023. Après le délai de jouissance, j'ai commencé à recevoir des virements mensuels réguliers. Ce n'est pas une fortune — mais c'est <strong>de l'argent qui rentre sans rien faire</strong>, et ça change la psychologie. Voir chaque mois un virement tomber, même petit, ça motive à continuer d'investir progressivement.
            </p>
            <p>
              Ce que j'aurais fait différemment : commencer plus tôt et investir progressivement dès le début plutôt qu'une grosse somme d'un coup.
            </p>

            <div className="box-warn">
              <strong>⚠️ Rappel important :</strong> Ces chiffres sont basés sur les performances 2025 de CORUM Origin. Les performances passées ne préjugent pas des performances futures. Investir en SCPI comporte un risque de perte en capital. Ce n'est pas adapté à tout le monde.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Calculez ce que rapporterait VOTRE épargne</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Simulateur gratuit sur la page d'accueil · Sans engagement</p>
              <a href={SITE.affiliateLink} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Simuler mes revenus SCPI →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/corum-avis-2026',e:'🔍',t:'Avis CORUM 2026',d:'Mon analyse complète et indépendante'},
                {href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif après la baisse à 1,5%'},
                {href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI pour débutant',d:'Commencer avec moins de 1 000€'},
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
