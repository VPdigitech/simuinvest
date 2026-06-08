import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function PlacementSenior() {
  return (
    <>
      <SeoHead
        title="Meilleurs placements pour seniors et retraités 2026 🏆"
        description="SCPI, assurance vie, livrets garantis — les meilleurs placements pour les seniors qui veulent des revenus réguliers sans risque excessif. Guide complet par David A."
        slug="blog/placement-senior-retraite-2026"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#faf5e4,#f0e8cc)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Placements seniors 2026</span></div>
            <span className="tag">Seniors & Retraite</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Meilleurs placements pour seniors et retraités en 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              Vous avez des économies à faire travailler ou vous préparez votre retraite ? Voici les placements les plus adaptés aux seniors français en 2026 — sécurité, revenus réguliers, fiscalité optimisée.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ En résumé :</strong> Pour les seniors, la priorité est la sécurité du capital et des revenus réguliers. Notre recommandation : <strong>30% en livrets garantis</strong> (Raisin), <strong>40% en assurance vie fonds euros</strong> (Linxea), <strong>30% en SCPI</strong> (Louve Invest) pour les revenus mensuels.
          </div>

          <div className="article-body">
            <h2>Les besoins spécifiques des seniors en matière d'investissement</h2>
            <p>Quand on approche ou qu'on est à la retraite, les priorités changent. On ne cherche plus à "accumuler" à tout prix — on cherche à <strong>préserver son capital</strong> et à générer des <strong>revenus complémentaires réguliers</strong> pour maintenir son niveau de vie.</p>
            <p>Les 3 critères prioritaires pour un senior investisseur :</p>
            <ul>
              <li><strong>Sécurité</strong> — pas question de perdre ses économies d'une vie</li>
              <li><strong>Revenus réguliers</strong> — compléter sa retraite chaque mois</li>
              <li><strong>Liquidité</strong> — pouvoir récupérer son argent si nécessaire (santé, aide à domicile...)</li>
            </ul>

            <h2>Les 4 placements recommandés pour les seniors</h2>

            <h3>1. Les livrets et comptes à terme — la base sécurisée</h3>
            <p>Indispensables pour la partie "sécurisée" de votre épargne. <strong>Raisin</strong> permet d'accéder aux meilleurs taux garantis européens (jusqu'à 4,5%) avec un capital protégé. Idéal pour l'épargne de précaution et la partie "sans risque" de votre portefeuille.</p>
            <p>Pour les seniors, je recommande de garder <strong>au moins 12 mois de dépenses</strong> en livrets sécurisés — plus que les 3 mois habituels, car les imprévus (santé, logement) peuvent être plus importants.</p>

            <h3>2. L'assurance vie fonds euros — le compromis parfait</h3>
            <p>Le fonds euros d'une assurance vie est <strong>garanti en capital</strong> et offre un rendement supérieur au Livret A (jusqu'à 4,5% chez Linxea). Contrairement à une idée reçue, vous pouvez retirer votre argent à tout moment.</p>
            <p>Avantage majeur pour la transmission : l'assurance vie permet de transmettre jusqu'à <strong>152 500€ par bénéficiaire en franchise de droits</strong> de succession. Un outil patrimonial puissant.</p>

            <h3>3. La SCPI — des revenus mensuels sans gestion</h3>
            <p>C'est mon placement préféré pour les seniors qui cherchent des revenus complémentaires. La SCPI verse des loyers tous les mois, directement sur votre compte, sans que vous ayez à gérer quoi que ce soit.</p>
            <p>Avec <strong>50 000€ investis en SCPI à 6%</strong>, vous touchez environ <strong>250€ par mois</strong> de revenus complémentaires. C'est concret.</p>
            <p><strong>Point de vigilance :</strong> La SCPI est un investissement long terme (recommandé 10 ans minimum) et comporte un risque de perte en capital. Si vous avez plus de 75 ans, réfléchissez bien à l'horizon de placement.</p>

            <h3>4. Le crowdfunding immobilier — pour diversifier avec des durées courtes</h3>
            <p>Si vous avez un capital à faire travailler sur 12-24 mois, le crowdfunding immobilier (Homunity) offre des rendements de 8 à 12%. Les durées courtes sont adaptées aux seniors qui ne veulent pas bloquer leur argent 10 ans.</p>
            <p><strong>Attention :</strong> Le risque est plus élevé que les livrets ou le fonds euros. Ne mettez qu'une petite partie de votre épargne (maximum 10-15%).</p>

            <h2>Exemple de répartition pour 100 000€ de capital</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Placement</th><th>Montant</th><th>Rendement</th><th>Revenus/mois</th><th>Risque</th></tr></thead>
                <tbody>
                  {[
                    ['Livrets (Raisin)','30 000€','4%','100€','Nul'],
                    ['AV fonds euros (Linxea)','40 000€','4%','133€','Très faible'],
                    ['SCPI (Louve Invest)','25 000€','6%','125€','Modéré'],
                    ['Crowdfunding (Homunity)','5 000€','9%','37€','Élevé'],
                    ['TOTAL','100 000€','~4,7%','~395€/mois','Équilibré'],
                  ].map(([p,m,r,rev,ri],i)=>(
                    <tr key={i} style={{background:i===4?'var(--gold-light)':i%2===0?'#fff':'var(--bg)',fontWeight:i===4?700:400}}>
                      <td>{p}</td><td>{m}</td><td style={{color:'var(--green)',fontWeight:600}}>{r}</td>
                      <td style={{fontWeight:600}}>{rev}</td><td>{ri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="box-green" style={{marginTop:'20px'}}>
              <strong>💡 Note de David :</strong> Cette répartition est un exemple. Chaque situation est différente selon votre âge, votre santé, vos héritiers, votre TMI. Consultez un conseiller financier agréé pour une stratégie personnalisée.
            </div>

            <div className="box-warn">
              <strong>⚠️ Avertissement obligatoire :</strong> Ce contenu est informatif uniquement. SimuInvest.fr n'est pas agréé ORIAS et ne fournit pas de conseil en investissement personnalisé. Consultez un professionnel avant toute décision. Tout investissement comporte des risques dont la perte en capital.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Trouvez votre placement idéal en 5 questions</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Quiz gratuit · Résultat personnalisé · Sans inscription</p>
              <Link href="/comparateur" className="btn btn-gold btn-lg">Faire le quiz →</Link>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/meilleure-assurance-vie-2026',e:'🛡️',t:'Meilleure assurance vie',d:'Comparer Linxea, Yomoni, Nalo'},
                {href:'/blog/meilleur-livret-epargne-2026',e:'🏦',t:'Meilleur livret 2026',d:'Raisin vs Livret A'},
                {href:'/scpi',e:'🏢',t:'Investir en SCPI',d:'Revenus mensuels sans gestion'},
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
