import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer style={{background:'var(--dark)',padding:'52px 0 28px'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'32px',marginBottom:'0',flexWrap:'wrap'}}>
            <div>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:900,color:'#fff',marginBottom:'10px'}}>
                Simu<em style={{color:'var(--gold)',fontStyle:'normal'}}>Invest</em>
              </div>
              <p style={{fontSize:'12px',color:'rgba(255,255,255,0.38)',lineHeight:'1.65',maxWidth:'220px',marginBottom:'14px'}}>
                Comparateur indépendant de placements financiers pour particuliers français. Rémunéré par nos partenaires.
              </p>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.35)'}}>
                📧 <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold)',textDecoration:'none'}}>contact@simuinvest.fr</a>
              </div>
            </div>

            <div>
              <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Placements</h4>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {[
                  ['/scpi','SCPI — Pierre papier'],
                  ['/assurance-vie','Assurance vie'],
                  ['/epargne','Livrets & CAT'],
                  ['/crowdfunding','Crowdfunding immo'],
                  ['/comparateur','Comparateur quiz'],
                ].map(([href,label])=>(
                  <Link key={href} href={href} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}
                    onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
                    onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}>{label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Articles</h4>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {[
                  ['/blog/meilleure-assurance-vie-2026','Meilleure AV 2026'],
                  ['/blog/meilleur-livret-epargne-2026','Meilleur livret 2026'],
                  ['/blog/scpi-ou-livret-a-2026','SCPI ou Livret A ?'],
                  ['/blog/scpi-pour-debutant-moins-1000-euros','SCPI débutant'],
                  ['/blog/placement-senior-retraite-2026','Placements seniors'],
                ].map(([href,label])=>(
                  <Link key={href} href={href} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>{label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Légal</h4>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {[
                  ['/legal/mentions-legales','Mentions légales'],
                  ['/legal/politique-confidentialite','Confidentialité & RGPD'],
                  ['/legal/politique-affiliation','Politique d\'affiliation'],
                  ['/legal/cgu','CGU'],
                  ['/legal/contact','Contact'],
                  ['/a-propos','À propos — David A.'],
                ].map(([href,label])=>(
                  <Link key={href} href={href} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>{label}</Link>
                ))}
              </div>
            </div>
          </div>

          <div style={{borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:'20px',marginTop:'36px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'8px',fontSize:'11px',color:'rgba(255,255,255,0.28)'}}>
            <span>© 2026 SimuInvest.fr — Site d'information indépendant non agréé ORIAS</span>
            <span>Rémunéré par nos partenaires · RGPD · contact@simuinvest.fr</span>
          </div>
        </div>
      </footer>
    </>
  )
}
