import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { LIENS } from '../../data/config'

export default function ScpiDebutant() {
  return (
    <>
      <SeoHead
        title="SCPI pour débutant : investir avec moins de 1 000€ en 2026 🏢"
        description="Vous voulez investir en SCPI mais vous ne savez pas par où commencer ? On vous explique tout simplement — dès 187€, sans jargon, avec les vrais chiffres."
        slug="blog/scpi-pour-debutant-moins-1000-euros"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,var(--gold-light),rgba(200,169,110,0.05))',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>SCPI pour débutant</span></div>
            <span className="tag">SCPI</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              SCPI pour débutant : comment investir avec moins de 1 000€ en 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              La SCPI, c'est souvent présenté comme un truc compliqué réservé aux riches. Faux. Aujourd'hui on peut commencer avec moins de 200€. Voilà comment ça marche vraiment.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 7 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div style={{background:'rgba(192,57,43,0.06)',border:'1px solid rgba(192,57,43,0.2)',borderRadius:'10px',padding:'14px 18px',marginBottom:'28px',fontSize:'13px',color:'#c0392b',fontWeight:500}}>
            ℹ️ <strong>Page informative.</strong> SimuInvest n'a pas de partenariat SCPI direct. Les plateformes citées sont des liens publics gratuits.
          </div>

          <div className="box-gold">
            <strong>Ce qu'il faut retenir :</strong> La SCPI permet d'investir dans l'immobilier sans acheter de bien, dès quelques centaines d'euros. Vous touchez des loyers proportionnels à votre mise. C'est passif, c'est long terme (10 ans minimum), et ça comporte des risques.
          </div>

          <div className="article-body">
            <h2>La SCPI c'est quoi — en 2 minutes chrono</h2>
            <p>La SCPI c'est simple : une société achète des immeubles (bureaux, commerces, entrepôts) avec l'argent de plein d'investisseurs. Elle gère tout — les locataires, les travaux, la comptabilité. Et chaque trimestre, elle reverse les loyers proportionnellement à chaque investisseur.</p>
            <p>Vous, vous avez juste acheté des "parts" — comme des actions mais dans de l'immobilier. D'où le nom <strong>pierre papier</strong> : de la pierre (immobilier réel) sur du papier (vos parts).</p>
            <p>Ça veut dire quoi concrètement ? Vous pouvez avoir accès à des immeubles de bureau à Paris, des centres commerciaux en Allemagne, des entrepôts en Espagne — avec 200€ de mise de départ.</p>

            <h2>Combien faut-il vraiment pour commencer ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {plateforme:'Louve Invest',min:'187€',type:'Par part',url:'https://www.louveinvest.com'},
                {plateforme:'Iroko Zen',min:'200€',type:'1 part',url:'https://www.iroko.fr'},
                {plateforme:'Ramify',min:'1 000€',type:'Via AV/PER',url:'https://www.ramify.fr'},
              ].map(({plateforme,min,type,url})=>(
                <div key={plateforme} style={{background:'var(--bg2)',borderRadius:'12px',padding:'16px',textAlign:'center',border:'1px solid var(--border2)'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:900,color:'var(--gold2)',marginBottom:'4px'}}>{min}</div>
                  <div style={{fontWeight:600,color:'var(--dark)',marginBottom:'2px',fontSize:'14px'}}>{plateforme}</div>
                  <div style={{fontSize:'11px',color:'var(--text2)',marginBottom:'10px'}}>{type}</div>
                  <a href={url} target="_blank" rel="noopener noreferrer" style={{fontSize:'12px',color:'var(--gold2)',fontWeight:600,textDecoration:'none'}}>Voir →</a>
                </div>
              ))}
            </div>

            <h2>Ce que ça rapporte vraiment</h2>
            <p>Les meilleures SCPI affichent entre 5 et 7% de rendement par an. Iroko Zen par exemple a distribué 7,12% en 2025. C'est un des meilleurs taux du marché.</p>
            <p>Mais attention — et c'est important — ce n'est pas garanti. Le rendement dépend des loyers perçus, des vacances locatives, du marché immobilier. Les années peuvent varier.</p>

            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Mise initiale</th><th>Rendement 6%</th><th>Revenus/an</th><th>Revenus/mois</th></tr></thead>
                <tbody>
                  {[['500€','6%','30€','2,50€'],['1 000€','6%','60€','5€'],['5 000€','6%','300€','25€'],['10 000€','6%','600€','50€'],['50 000€','6%','3 000€','250€']].map(([m,r,a,mo],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{m}</td><td style={{color:'var(--green)',fontWeight:600}}>{r}</td>
                      <td style={{fontWeight:600}}>{a}</td><td style={{color:'var(--text2)'}}>{mo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic',marginTop:'8px'}}>Simulation à 6% annuel brut, avant impôts. Non garanti.</p>

            <h2>Les risques — on ne les cache pas</h2>
            <ul>
              <li><strong>Perte en capital possible.</strong> Si le marché immobilier baisse, la valeur de vos parts peut baisser aussi. Votre capital n'est pas garanti comme sur un Livret A.</li>
              <li><strong>Liquidité faible.</strong> Vendre ses parts peut prendre plusieurs semaines ou mois. Ce n'est pas comme retirer de l'argent d'un livret.</li>
              <li><strong>Horizon long terme.</strong> La durée recommandée est 10 ans minimum. Si vous avez besoin de cet argent dans 2 ans, la SCPI n'est pas faite pour vous.</li>
              <li><strong>Frais de souscription.</strong> Certaines SCPI prennent 8-10% de frais à l'entrée. Préférez les SCPI sans frais comme Iroko Zen (0%).</li>
            </ul>

            <h2>SCPI en direct vs via assurance vie — quelle différence ?</h2>
            <p>C'est la vraie question que peu de débutants se posent. Vous pouvez investir en SCPI de deux façons :</p>
            <ul>
              <li><strong>En direct</strong> (via Louve Invest, Iroko) : vous êtes propriétaire de parts. Les revenus sont imposés comme des revenus fonciers — potentiellement lourdement selon votre tranche d'imposition.</li>
              <li><strong>Via assurance vie</strong> (via Linxea par exemple) : vos revenus restent dans l'enveloppe fiscale de l'AV. Après 8 ans, vous bénéficiez de l'abattement de 4 600€/an. Fiscalement bien plus avantageux si vous êtes à 30%+.</li>
            </ul>
            <div className="box-green">
              <strong>💡 Si vous êtes débutant :</strong> Commencez par une petite mise en direct (Louve Invest ou Iroko) pour comprendre le fonctionnement. Ensuite, pour les montants plus importants, regardez la SCPI via assurance vie chez Linxea — vous économiserez beaucoup d'impôts sur le long terme.
            </div>

            <div className="box-warn">
              <strong>⚠️ Important :</strong> Cet article est informatif. SimuInvest.fr n'est pas agréé ORIAS et ne fournit pas de conseil financier personnalisé. Tout investissement comporte des risques dont la perte en capital. Les performances passées ne préjugent pas des performances futures.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>SCPI via assurance vie — la solution fiscalement optimale</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Investissez en SCPI dans une enveloppe fiscale avantageuse avec Linxea</p>
              <a href={LIENS.linxea.spiritAV} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Découvrir Linxea Spirit 2 →</a>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,.35)',marginTop:'10px'}}>Lien commercial — commission perçue si souscription</p>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap"><div className="g3">
            {[{href:'/blog/combien-rapporte-vraiment-une-scpi',e:'💰',t:'Combien rapporte une SCPI ?',d:'Les vrais chiffres sans filtre'},{href:'/scpi',e:'🏢',t:'Guide SCPI complet',d:'Tout comprendre sur la pierre papier'},{href:'/blog/investir-scpi-depuis-assurance-vie',e:'🛡️',t:'SCPI via assurance vie',d:'Optimiser la fiscalité'}].map(a=>(
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
