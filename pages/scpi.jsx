import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SeoHead from '../components/seo/SeoHead'

export default function ScpiPage() {
  return (
    <>
      <SeoHead
        title="Qu'est-ce qu'une SCPI ? Guide complet pierre papier 2026 🏆"
        description="La SCPI (pierre papier) expliquée simplement : comment ça marche, combien ça rapporte, quels sont les risques. Guide informatif complet pour débutants."
        slug="scpi"
      />
      <Nav />

      {/* HERO */}
      <div style={{background:'linear-gradient(135deg,var(--bg),var(--bg2))',padding:'64px 0 48px'}}>
        <div className="wrap-sm">
          <div style={{background:'rgba(192,57,43,0.07)',border:'1px solid rgba(192,57,43,0.2)',borderRadius:'10px',padding:'12px 18px',marginBottom:'24px',fontSize:'13px',color:'#c0392b',fontWeight:500}}>
            ℹ️ <strong>Page informative uniquement.</strong> SimuInvest.fr ne propose pas de SCPI en direct. Cette page explique le fonctionnement de la pierre papier. Pour investir dans l'immobilier, consultez nos alternatives disponibles ci-dessous.
          </div>
          <span className="tag" style={{marginBottom:'16px',display:'inline-block'}}>Guide informatif</span>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,5vw,48px)',fontWeight:900,color:'var(--dark)',marginBottom:'16px'}}>
            La SCPI (Pierre Papier) : tout comprendre avant d'investir
          </h1>
          <p style={{fontSize:'17px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
            La SCPI permet d'investir dans l'immobilier sans acheter de bien physique. Des professionnels gèrent tout et vous reversent des revenus réguliers. Voici comment ça fonctionne.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">

          {/* EXPLICATION */}
          <div className="g2" style={{marginBottom:'64px'}}>
            <div>
              <h2 style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:800,color:'var(--dark)',marginBottom:'16px'}}>C'est quoi une SCPI ?</h2>
              <p style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.8',marginBottom:'14px'}}>
                SCPI signifie <strong>Société Civile de Placement Immobilier</strong>. Des milliers d'investisseurs mettent leur argent en commun. Une société de gestion achète des immeubles (bureaux, commerces, entrepôts) avec cet argent, les loue à des entreprises, et reverse les loyers aux investisseurs.
              </p>
              <p style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.8',marginBottom:'14px'}}>
                C'est ce qu'on appelle la <strong>pierre papier</strong> : de l'immobilier réel, mais via des parts (du papier) — sans gérer quoi que ce soit.
              </p>
              <div style={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'20px'}}>
                {[
                  ['1','Vous achetez des parts','Comme des actions, mais dans de l\'immobilier. Dès quelques centaines d\'euros.'],
                  ['2','Des pros gèrent tout','Achats d\'immeubles, locataires, travaux — vous ne faites rien.'],
                  ['3','Vous recevez des loyers','Versés régulièrement sur votre compte, proportionnellement à vos parts.'],
                ].map(([n,t,d])=>(
                  <div key={n} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',minWidth:'32px',borderRadius:'50%',background:'var(--gold-light)',border:'1.5px solid var(--gold-border)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-serif)',fontWeight:700,color:'var(--gold2)',fontSize:'14px'}}>{n}</div>
                    <div>
                      <div style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)',marginBottom:'2px'}}>{t}</div>
                      <div style={{fontSize:'13px',color:'var(--text2)',lineHeight:'1.5'}}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,color:'var(--dark)',marginBottom:'16px'}}>SCPI vs autres placements</h2>
              <div style={{overflowX:'auto'}}>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
                  <thead>
                    <tr style={{background:'var(--bg2)'}}>
                      <th style={{padding:'10px 14px',textAlign:'left',fontFamily:'var(--font-serif)',borderBottom:'1px solid var(--border)'}}>Critère</th>
                      <th style={{padding:'10px 14px',textAlign:'center',borderBottom:'1px solid var(--border)',color:'var(--gold2)'}}>SCPI</th>
                      <th style={{padding:'10px 14px',textAlign:'center',borderBottom:'1px solid var(--border)',color:'var(--green)'}}>Assurance vie</th>
                      <th style={{padding:'10px 14px',textAlign:'center',borderBottom:'1px solid var(--border)'}}>Livret A</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Rendement moyen','5 à 7%','3 à 7%','1,5%'],
                      ['Capital garanti','❌ Non','Fonds € oui','✅ Oui'],
                      ['Liquidité','Faible','Bonne','Immédiate'],
                      ['Horizon','10 ans min','8 ans+','Flexible'],
                      ['Gestion','Déléguée','Déléguée','Aucune'],
                      ['Ticket entrée','Dès 200€','Dès 500€','Dès 1€'],
                    ].map(([c,a,b,d],i)=>(
                      <tr key={i} style={{background:i%2===0?'#fff':'var(--bg)'}}>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid var(--border2)',fontWeight:500}}>{c}</td>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid var(--border2)',textAlign:'center',color:'var(--gold2)',fontWeight:500}}>{a}</td>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid var(--border2)',textAlign:'center',color:'var(--green)',fontWeight:500}}>{b}</td>
                        <td style={{padding:'10px 14px',borderBottom:'1px solid var(--border2)',textAlign:'center',color:'var(--text2)'}}>{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RISQUES */}
          <div style={{background:'rgba(192,57,43,0.05)',border:'1px solid rgba(192,57,43,0.2)',borderLeft:'4px solid #c0392b',borderRadius:'12px',padding:'24px',marginBottom:'48px'}}>
            <h3 style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:700,color:'#c0392b',marginBottom:'12px'}}>⚠️ Les risques importants à connaître</h3>
            <div className="g2" style={{gap:'20px'}}>
              {[
                ['Perte en capital','Contrairement au Livret A, la valeur de vos parts peut baisser si le marché immobilier se retourne. Votre capital n\'est pas garanti.'],
                ['Risque de liquidité','Vous ne pouvez pas récupérer votre argent du jour au lendemain. La revente de parts peut prendre plusieurs mois.'],
                ['Horizon long','La durée recommandée est de 10 ans minimum. Ce n\'est pas un placement court terme.'],
                ['Fiscalité lourde','Les revenus SCPI sont imposés comme des revenus fonciers — TMI + 17,2% de prélèvements sociaux. Peut être allégé via assurance vie.'],
              ].map(([t,d])=>(
                <div key={t}>
                  <div style={{fontWeight:600,color:'var(--dark)',marginBottom:'4px',fontSize:'14px'}}>• {t}</div>
                  <div style={{fontSize:'13px',color:'var(--text2)',lineHeight:'1.6'}}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ALTERNATIVES DISPONIBLES */}
          <div style={{textAlign:'center',marginBottom:'32px'}}>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:900,color:'var(--dark)',marginBottom:'10px'}}>
              Vous cherchez à investir dans l'immobilier ?
            </h2>
            <p style={{fontSize:'16px',color:'var(--text2)',fontWeight:300,maxWidth:'540px',margin:'0 auto'}}>
              SimuInvest ne propose pas de SCPI en direct. Voici les alternatives immobilières disponibles sur notre comparateur — avec des commissions financeAds actives.
            </p>
          </div>

          <div className="g2" style={{marginBottom:'48px'}}>

            {/* HOMUNITY */}
            <div style={{background:'linear-gradient(135deg,rgba(168,85,247,0.06),rgba(168,85,247,0.02))',border:'2px solid rgba(168,85,247,0.2)',borderRadius:'20px',padding:'28px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'14px'}}>
                <span style={{fontSize:'36px'}}>🏗️</span>
                <div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)'}}>Homunity</div>
                  <span className="tag">Crowdfunding immobilier</span>
                </div>
              </div>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.65',marginBottom:'16px'}}>
                Investissez dans des projets immobiliers concrets (constructions, rénovations) dès 1 000€. Rendements de 8 à 12% sur 12 à 24 mois. Agréé AMF et ACPR.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'18px'}}>
                {[['Rendement','8 à 12%'],['Durée','12-24 mois'],['Ticket','Dès 1 000€'],['Garantie','Capital non garanti']].map(([k,v])=>(
                  <div key={k} style={{background:'rgba(255,255,255,0.7)',borderRadius:'8px',padding:'10px',textAlign:'center'}}>
                    <div style={{fontSize:'10px',color:'var(--text2)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'3px'}}>{k}</div>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)'}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <a href="https://www.homunity.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'13px'}}>
                  En savoir + sur Homunity →
                </a>
                <Link href="/blog/crowdfunding-immobilier-homunity-avis" className="btn btn-outline" style={{fontSize:'13px'}}>
                  Lire notre avis
                </Link>
              </div>
            </div>

            {/* ENERFIP */}
            <div style={{background:'linear-gradient(135deg,rgba(34,197,94,0.06),rgba(34,197,94,0.02))',border:'2px solid rgba(34,197,94,0.2)',borderRadius:'20px',padding:'28px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'14px'}}>
                <span style={{fontSize:'36px'}}>☀️</span>
                <div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:800,color:'var(--dark)'}}>Enerfip</div>
                  <span className="tag">Crowdfunding énergies renouvelables</span>
                </div>
              </div>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.65',marginBottom:'16px'}}>
                Financez des projets d'énergies renouvelables (solaire, éolien) et touchez des intérêts fixes. Dès 10€, rendements de 5 à 10%, avec un impact écologique positif.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'18px'}}>
                {[['Rendement','5 à 10%'],['Durée','12-60 mois'],['Ticket','Dès 10€'],['Garantie','Capital non garanti']].map(([k,v])=>(
                  <div key={k} style={{background:'rgba(255,255,255,0.7)',borderRadius:'8px',padding:'10px',textAlign:'center'}}>
                    <div style={{fontSize:'10px',color:'var(--text2)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'3px'}}>{k}</div>
                    <div style={{fontFamily:'var(--font-serif)',fontSize:'15px',fontWeight:700,color:'var(--dark)'}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <a href="https://www.enerfip.fr" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'13px'}}>
                  En savoir + sur Enerfip →
                </a>
                <Link href="/crowdfunding" className="btn btn-outline" style={{fontSize:'13px'}}>
                  Voir le comparatif
                </Link>
              </div>
            </div>
          </div>

          {/* AUSSI : SCPI VIA AV */}
          <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'16px',padding:'24px',marginBottom:'48px',display:'flex',gap:'20px',alignItems:'center',flexWrap:'wrap'}}>
            <div style={{flex:1,minWidth:'260px'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'18px',fontWeight:800,color:'var(--dark)',marginBottom:'8px'}}>💡 Vous voulez de la SCPI avec un avantage fiscal ?</div>
              <p style={{fontSize:'14px',color:'var(--text2)',lineHeight:'1.6',marginBottom:0}}>
                Certaines assurances vie permettent d'investir dans des SCPI avec une fiscalité très avantageuse après 8 ans. C'est ce qu'on appelle la SCPI via assurance vie — et c'est disponible chez Linxea et Yomoni.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'8px',flexShrink:0}}>
              <Link href="/blog/investir-scpi-depuis-assurance-vie" className="btn btn-gold" style={{fontSize:'13px'}}>
                SCPI via assurance vie →
              </Link>
              <Link href="/assurance-vie" className="btn btn-outline" style={{fontSize:'13px'}}>
                Comparer les AV
              </Link>
            </div>
          </div>

          {/* ARTICLES LIÉS */}
          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,marginBottom:'20px',color:'var(--dark)'}}>Nos articles sur la SCPI et l'immobilier</h2>
          <div className="g3">
            {[
              {href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI pour débutant',d:'Comprendre la pierre papier avec moins de 1 000€'},
              {href:'/blog/scpi-ou-livret-a-2026',e:'⚖️',t:'SCPI ou Livret A ?',d:'Comparatif complet après la baisse à 1,5%'},
              {href:'/blog/pierre-papier-auto-entrepreneur',e:'💼',t:'SCPI & auto-entrepreneur',d:'Fiscalité et stratégie pour les indépendants'},
              {href:'/blog/combien-rapporte-vraiment-une-scpi',e:'💰',t:'Combien rapporte une SCPI ?',d:'Les vrais chiffres sans enjolivements'},
              {href:'/blog/investir-scpi-depuis-assurance-vie',e:'🛡️',t:'SCPI via assurance vie',d:'Optimiser la fiscalité de son investissement'},
              {href:'/blog/scpi-defiscalisation-fin-annee',e:'📅',t:'SCPI et fin d\'année',d:'Investir avant le 31 décembre'},
            ].map(a=>(
              <Link key={a.href} href={a.href} style={{textDecoration:'none'}}>
                <div className="card card-p" style={{cursor:'pointer'}}>
                  <div style={{fontSize:'26px',marginBottom:'8px'}}>{a.e}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div>
                  <div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
