import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'
import { SITE } from '../../data/config'

export default function PierrePapierAutoEntrepreneur() {
  return (
    <>
      <SeoHead
        title="Pierre papier auto-entrepreneur : investir en SCPI quand on est indépendant 🏆"
        description="Auto-entrepreneur et SCPI : est-ce compatible ? Fiscalité, timing, montants — le guide complet pour les indépendants et micro-entrepreneurs qui veulent investir en pierre papier."
        slug="blog/pierre-papier-auto-entrepreneur"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f0f4fa,#e5ecf5)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span>Pierre papier auto-entrepreneur</span>
            </div>
            <span className="tag">Niche</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Pierre papier et auto-entrepreneur : le guide complet 2026
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300,marginBottom:'16px'}}>
              Indépendant, freelance ou micro-entrepreneur — pouvez-vous investir en SCPI ? Oui, et voici comment optimiser fiscalement votre investissement pierre papier.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',flexWrap:'wrap'}}>
              <span>💼 Indépendants</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ Réponse courte :</strong> Oui, un auto-entrepreneur peut tout à fait investir en SCPI. La pierre papier est accessible à tous — salarié, indépendant, retraité. Il y a cependant des spécificités fiscales importantes à connaître selon votre situation.
          </div>

          <div className="article-body">
            <h2>Auto-entrepreneur et SCPI : aucune incompatibilité</h2>
            <p>Contrairement à une idée reçue, le statut d'auto-entrepreneur n'est pas un frein à l'investissement en SCPI. Vous pouvez acheter des parts SCPI à titre <strong>personnel</strong>, exactement comme n'importe quel particulier.</p>
            <p>Il n'y a pas de condition de revenus minimaux, pas de justificatif d'activité, pas de lien avec votre chiffre d'affaires. CORUM R Start par exemple demande simplement une pièce d'identité et un RIB — c'est tout.</p>

            <h2>La vraie question : comment sont imposés vos revenus SCPI ?</h2>
            <p>C'est ici que ça devient important pour les auto-entrepreneurs. Les revenus SCPI sont des <strong>revenus fonciers</strong> — ils s'ajoutent à vos revenus personnels et sont imposés à votre <strong>taux marginal d'imposition (TMI)</strong> + 17,2% de prélèvements sociaux.</p>

            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr><th>TMI</th><th>Imposition totale sur revenus SCPI France</th><th>Revenus nets sur 100€ bruts</th></tr>
                </thead>
                <tbody>
                  {[['11%','28,2% (11%+17,2%)','71,8€'],['30%','47,2%','52,8€'],['41%','58,2%','41,8€'],['45%','62,2%','37,8€']].map(([t,i,r],idx)=>(
                    <tr key={idx}><td>{t}</td><td>{i}</td><td style={{color:'var(--green)',fontWeight:500}}>{r}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Pour un auto-entrepreneur à la tranche 11% (revenus annuels entre 11 295€ et 28 797€), vous gardez environ 72% des revenus SCPI nets. Pour les tranches plus hautes, l'assurance vie devient plus intéressante fiscalement.</p>

            <h2>L'avantage méconnu des SCPI européennes</h2>
            <p>CORUM Origin investit dans des immeubles dans toute l'Europe — Pays-Bas, Allemagne, Espagne, Irlande… Ce détail change tout fiscalement :</p>
            <p><strong>Les revenus immobiliers de source étrangère ne sont pas soumis aux prélèvements sociaux français de 17,2%</strong>. Selon les conventions fiscales, ils sont soit exonérés, soit taxés à un taux réduit. En pratique, une partie significative des revenus CORUM Origin échappe aux 17,2%.</p>
            <p>Pour un auto-entrepreneur qui veut optimiser sa fiscalité SCPI, préférer des SCPI à forte exposition européenne est une stratégie simple et efficace.</p>

            <h2>SCPI en direct vs SCPI en assurance vie pour les indépendants</h2>
            <h3>SCPI en direct</h3>
            <p>Plus simple, revenus mensuels immédiats, mais imposés à votre TMI. Idéal si votre TMI est faible (11% ou moins) ou si vous visez les SCPI européennes pour limiter les prélèvements sociaux.</p>

            <h3>SCPI via CORUM Life (assurance vie)</h3>
            <p>Plus fiscal mais différé. Vous ne payez pas d'impôt sur les revenus tant que vous ne faites pas de rachat. Après 8 ans, vous bénéficiez d'un abattement de 4 600€/an (9 200€ pour un couple) sur les gains. Idéal si votre TMI est élevé ou si vous préparez votre retraite.</p>

            <div className="box-green">
              <strong>💡 Stratégie recommandée pour auto-entrepreneur :</strong><br/>
              TMI 11% → SCPI en direct (CORUM R Start ou Origin) — fiscalité douce, revenus immédiats.<br/>
              TMI 30%+ → CORUM Life (assurance vie) — différer la fiscalité, optimiser à 8 ans.
            </div>

            <h2>Peut-on déduire l'investissement SCPI de ses charges auto-entrepreneur ?</h2>
            <p>Non. L'investissement SCPI est personnel, pas professionnel. Vous ne pouvez pas le déduire de votre chiffre d'affaires en tant qu'auto-entrepreneur. En revanche, si vous empruntiez pour acheter des SCPI (ce qui est rare mais possible), les intérêts d'emprunt seraient déductibles des revenus fonciers — mais c'est une autre discussion.</p>

            <h2>Timing : quand investir quand on est indépendant ?</h2>
            <p>Un sujet que les salariés n'ont pas : les revenus d'un auto-entrepreneur sont irréguliers. Avant d'investir en SCPI, assurez-vous d'avoir :</p>
            <ul>
              <li><strong>6 mois de charges fixes</strong> en épargne de précaution (Livret A) — pas 3 comme un salarié, car vos revenus sont plus variables</li>
              <li><strong>Votre TVA et charges URSSAF</strong> provisionnées (si applicable)</li>
              <li>Un <strong>revenu régulier stabilisé</strong> depuis au moins 12 mois</li>
            </ul>
            <p>Une fois ces conditions remplies, investissez progressivement — les versements programmés à 50-100€/mois sont parfaits pour les indépendants qui préfèrent étaler dans le temps.</p>

            <div className="box-warn">
              <strong>⚠️ Avertissement :</strong> Investir en SCPI comporte un risque de perte en capital. Ce guide est informatif et ne constitue pas un conseil fiscal ou financier personnalisé. Consultez un expert-comptable ou un conseiller en gestion de patrimoine pour votre situation spécifique.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Commencer en SCPI en tant qu'indépendant</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>CORUM R Start · 0€ frais · Dès 200€ · Conseiller gratuit</p>
              <a href={SITE.affiliateLink} target="_blank" rel="nofollow sponsored" className="btn btn-gold btn-lg">Démarrer avec CORUM →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap">
            <div className="g3">
              {[
                {href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI débutant moins 1 000€',d:'Commencer avec un petit budget'},
                {href:'/blog/investir-scpi-depuis-assurance-vie',e:'🛡️',t:'SCPI via assurance vie',d:'Optimiser la fiscalité'},
                {href:'/blog/corum-avis-2026',e:'🔍',t:'Avis CORUM 2026',d:'Analyse complète et indépendante'},
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
