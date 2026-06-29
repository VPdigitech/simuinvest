import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{background:'var(--dark)',padding:'52px 0 28px'}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'32px',marginBottom:'36px'}}>
          <div>
            <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:900,color:'#fff',marginBottom:'10px'}}>
              Simu<em style={{color:'var(--gold)',fontStyle:'normal'}}>Invest</em>
            </div>
            <p style={{fontSize:'12px',color:'rgba(255,255,255,0.38)',lineHeight:'1.65',maxWidth:'220px',marginBottom:'14px'}}>
              Comparateur indépendant de placements financiers pour particuliers français.
            </p>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.35)'}}>
              📧 <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold)',textDecoration:'none'}}>contact@simuinvest.fr</a>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Placements</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
              {[['/assurance-vie','Assurance vie'],['/epargne','Livrets & CAT'],['/crowdfunding','Crowdfunding'],['/scpi','SCPI (informatif)'],['/comparateur','Quiz comparateur']].map(([h,l])=>(
                <Link key={h} href={h} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Top articles</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
              {[['/blog/meilleure-assurance-vie-2026','Meilleure AV 2026'],['/blog/linxea-spirit-2-avis-2026','Linxea Spirit 2 avis'],['/blog/goodvest-avis-2026','Goodvest avis'],['/blog/yomoni-vs-nalo-2026','Yomoni vs Nalo'],['/blog/meilleur-livret-epargne-2026','Meilleur livret 2026']].map(([h,l])=>(
                <Link key={h} href={h} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'.1em',color:'rgba(255,255,255,0.28)',marginBottom:'14px'}}>Légal</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
              {[['/legal/mentions-legales','Mentions légales'],['/legal/politique-confidentialite','Confidentialité'],['/legal/politique-affiliation','Affiliation'],['/legal/cgu','CGU'],['/legal/contact','Contact'],['/a-propos','À propos']].map(([h,l])=>(
                <Link key={h} href={h} style={{fontSize:'12px',color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:'20px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'8px',fontSize:'11px',color:'rgba(255,255,255,0.28)'}}>
          <span>© 2026 SimuInvest.fr — Site informatif indépendant non agréé ORIAS</span>
          <span>Site informatif indépendant · RGPD · contact@simuinvest.fr</span>
        </div>
      </div>
    </footer>
  )
}
