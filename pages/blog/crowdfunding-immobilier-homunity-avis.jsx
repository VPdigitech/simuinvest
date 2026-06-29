import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SeoHead from '../../components/seo/SeoHead'

export default function HomunityAvis() {
  return (
    <>
      <SeoHead
        title="Homunity avis 2026 : crowdfunding immobilier honnête et sans filtre 🏗️"
        description="Notre avis complet sur Homunity : rendements réels, risques, sélection des projets, ce qui fonctionne vraiment. Le guide honnête avant d'investir."
        slug="blog/crowdfunding-immobilier-homunity-avis"
        type="article"
      />
      <Nav />
      <article>
        <div style={{background:'linear-gradient(135deg,#f5f0fa,#ede5f5)',padding:'56px 0 44px'}}>
          <div className="wrap-sm">
            <div className="bc"><Link href="/">Accueil</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Homunity avis 2026</span></div>
            <span className="tag">Crowdfunding immobilier</span>
            <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(26px,5vw,44px)',fontWeight:900,color:'var(--dark)',margin:'12px 0 14px',lineHeight:'1.15'}}>
              Homunity avis 2026 : on vous dit vraiment ce qu'on en pense
            </h1>
            <p style={{fontSize:'16px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
              8 à 12% de rendement sur 18 mois. Ça fait rêver, non ? Avant de vous lancer, voilà ce que vous devez absolument savoir sur Homunity — le bon et le moins bon.
            </p>
            <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'var(--text2)',marginTop:'14px',flexWrap:'wrap'}}>
              <span style={{color:'var(--gold2)',fontWeight:600}}>Par David A.</span><span>•</span><span>📖 8 min</span><span>•</span><span>Juin 2026</span>
            </div>

            {/* NOTE */}
            <div style={{background:'#fff',border:'1.5px solid rgba(168,85,247,0.25)',borderRadius:'16px',padding:'20px 24px',marginTop:'28px',display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap'}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:900,color:'#a855f7',lineHeight:1}}>8,8</div>
                <div style={{fontSize:'12px',color:'var(--text2)',marginTop:'4px'}}>Note SimuInvest /10</div>
              </div>
              <div style={{flex:1,minWidth:'200px'}}>
                {[['Sérieux & régulation','9,5/10'],['Sélection des projets','9/10'],['Rendement','8,5/10'],['Transparence','8,5/10'],['Risque maîtrisé','7,5/10']].map(([l,n])=>(
                  <div key={l} style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px'}}>
                    <span style={{color:'var(--text2)'}}>{l}</span>
                    <span style={{fontWeight:600,color:'#a855f7'}}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-sm" style={{padding:'32px 24px 0'}}>
          <div className="box-gold">
            <strong>✅ En résumé :</strong> Homunity est l'une des plateformes de crowdfunding immobilier les plus sérieuses de France. Les rendements de 8 à 12% sont réels — mais le risque de perte en capital aussi. À réserver à maximum 10-15% de votre épargne.
          </div>

          <div className="article-body">
            <h2>C'est quoi le crowdfunding immobilier, concrètement ?</h2>
            <p>Imaginez un promoteur immobilier qui veut construire 20 appartements. Il a besoin de 500 000€ pour financer une partie du projet avant de vendre les apparts. Plutôt que d'aller uniquement à la banque, il passe par une plateforme comme Homunity pour emprunter à des particuliers comme vous.</p>
            <p>En échange, il vous rembourse avec des intérêts fixes à la fin du projet — généralement 12 à 24 mois plus tard. C'est ça le crowdfunding immobilier : vous prêtez, il construit, il vous rembourse avec intérêts.</p>
            <p>Simple en théorie. Voyons ce que ça donne chez Homunity en pratique.</p>

            <h2>Homunity en chiffres — les vrais</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',margin:'16px 0 24px'}}>
              {[
                {l:'Fondée en',v:'2014'},
                {l:'Agrément',v:'CIP (AMF)'},
                {l:'Montant financé',v:'+500M€'},
                {l:'Taux de défaut',v:'<2%'},
                {l:'Rendement moyen',v:'9,2%'},
                {l:'Durée moyenne',v:'20 mois'},
              ].map(({l,v})=>(
                <div key={l} style={{background:'var(--bg2)',borderRadius:'10px',padding:'14px',textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)',marginBottom:'3px'}}>{v}</div>
                  <div style={{fontSize:'11px',color:'var(--text2)',textTransform:'uppercase',letterSpacing:'.06em'}}>{l}</div>
                </div>
              ))}
            </div>

            <h2>Ce qui m'a convaincu chez Homunity</h2>
            <h3>1. La rigueur de la sélection</h3>
            <p>Homunity ne finance pas n'importe quel projet. Ils analysent chaque dossier : situation financière du promoteur, garanties, localisation, marché local, permis de construire... Moins de 10% des projets présentés sont acceptés.</p>
            <p>C'est ce qui explique leur taux de défaut inférieur à 2% depuis 2014 — ce qui est remarquablement bas pour le secteur.</p>

            <h3>2. L'agrément AMF — pas du tout anodin</h3>
            <p>Homunity est agréée Conseiller en Investissements Participatifs (CIP) par l'AMF. Ça veut dire qu'ils sont contrôlés par le régulateur français, qu'ils ont des obligations légales envers vous, et qu'ils ne peuvent pas disparaître du jour au lendemain sans que personne ne s'en rende compte.</p>
            <p>Beaucoup de plateformes de crowdfunding n'ont pas cet agrément. Chez Homunity, c'est une vraie garantie de sérieux.</p>

            <h3>3. La transparence sur les projets</h3>
            <p>Pour chaque projet, vous avez accès à un mémorandum d'information complet : le business plan du promoteur, les garanties, les risques identifiés, les détails financiers. C'est dense, mais tout est là.</p>

            <h2>Ce que je n'aime pas — soyons honnêtes</h2>
            <ul>
              <li><strong>Le capital n'est pas garanti.</strong> Si le promoteur fait défaut, vous pouvez perdre tout ou partie de votre mise. Ça arrive rarement chez Homunity, mais ça arrive.</li>
              <li><strong>L'argent est bloqué.</strong> Contrairement à un livret, vous ne pouvez pas récupérer votre argent en cours de projet. Si vous avez un besoin urgent de liquidités, vous êtes coincés jusqu'au remboursement.</li>
              <li><strong>Les retards sont fréquents.</strong> Un projet prévu sur 18 mois peut facilement prendre 24 ou 30 mois. Les chantiers, ça prend du temps. Les retards ne signifient pas que vous perdez de l'argent — mais ça décale votre récupération.</li>
              <li><strong>Pas de diversification automatique.</strong> Contrairement à une SCPI qui mutualise sur des dizaines d'immeubles, ici chaque projet est une mise concentrée. D'où l'importance de répartir sur plusieurs projets.</li>
            </ul>

            <h2>Combien peut-on espérer gagner ?</h2>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead><tr><th>Montant investi</th><th>Durée</th><th>Taux</th><th>Gain brut</th><th>Après impôts (30%)</th></tr></thead>
                <tbody>
                  {[
                    ['1 000€','18 mois','9%','135€','94,50€'],
                    ['5 000€','18 mois','9%','675€','472,50€'],
                    ['10 000€','18 mois','10%','1 500€','1 050€'],
                    ['10 000€','24 mois','11%','2 200€','1 540€'],
                  ].map(([m,d,t,g,n],i)=>(
                    <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                      <td style={{fontWeight:500}}>{m}</td><td>{d}</td>
                      <td style={{color:'#a855f7',fontWeight:600}}>{t}</td>
                      <td style={{fontWeight:600}}>{g}</td>
                      <td style={{color:'var(--text2)'}}>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'12px',color:'var(--text2)',fontStyle:'italic',marginTop:'8px'}}>Les intérêts sont soumis à la flat tax de 30% (PFU). Simulations indicatives, non garanties.</p>

            <h2>Ma stratégie personnelle avec le crowdfunding</h2>
            <div className="box-green">
              <strong>💡 L'approche de David :</strong> Je ne mets jamais plus de 10-15% de mon épargne totale en crowdfunding. Et dans ce budget, je répartis sur 5 à 8 projets différents minimum — ça évite qu'un seul défaut plombe tout. Les 85-90% restants sont sur des placements plus sécurisés (assurance vie, Raisin).
            </div>

            <h2>Crowdfunding vs SCPI — lequel choisir ?</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',margin:'16px 0 24px'}}>
              <div style={{background:'rgba(168,85,247,0.06)',border:'1px solid rgba(168,85,247,0.2)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'#a855f7',marginBottom:'10px',fontSize:'16px'}}>Crowdfunding (Homunity)</div>
                {['Rendement 8-12% fixe','Durée 12-24 mois','Risque plus concentré','Idéal pour 10-15% du patrimoine','Parfait pour booster le rendement'].map(i=><div key={i} style={{fontSize:'13px',marginBottom:'5px',display:'flex',gap:'6px'}}><span style={{color:'#a855f7'}}>→</span>{i}</div>)}
              </div>
              <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'18px'}}>
                <div style={{fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--gold2)',marginBottom:'10px',fontSize:'16px'}}>SCPI (via AV Linxea)</div>
                {['Rendement 5-7% variable','Horizon 10 ans+','Risque mutualisé','Revenus mensuels réguliers','Fiscalité optimisée via AV'].map(i=><div key={i} style={{fontSize:'13px',marginBottom:'5px',display:'flex',gap:'6px'}}><span style={{color:'var(--gold2)'}}>→</span>{i}</div>)}
              </div>
            </div>

            <div className="box-warn">
              <strong>⚠️ Rappel important :</strong> Le crowdfunding immobilier comporte un risque réel de perte en capital. N'investissez que l'argent dont vous n'avez pas besoin à court terme. SimuInvest.fr est informatif et non agréé ORIAS.
            </div>

            <div className="cta-box">
              <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Découvrir Homunity</p>
              <p style={{fontSize:'13px',color:'rgba(255,255,255,.58)',marginBottom:'18px'}}>Agréé AMF · Projets sélectionnés · 8 à 12% · Dès 1 000€</p>
              <a href="https://www.homunity.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Voir les projets disponibles →</a>
            </div>
          </div>
        </div>

        <section className="section-sm" style={{background:'var(--bg2)'}}>
          <div className="wrap"><div className="g3">
            {[{href:'/blog/ou-placer-50000-euros-2026',e:'💎',t:'Où placer 50 000€ ?',d:'Guide complet par profil'},{href:'/blog/meilleure-assurance-vie-2026',e:'🛡️',t:'Meilleure AV 2026',d:'Pour la partie long terme'},{href:'/blog/meilleur-livret-epargne-2026',e:'🏦',t:'Meilleur livret 2026',d:'Pour la partie sécurisée'}].map(a=>(
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
