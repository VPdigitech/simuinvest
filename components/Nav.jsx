import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(250,249,246,0.96)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(26,26,24,0.09)'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'64px',gap:'16px'}}>
        <Link href="/" style={{fontFamily:'var(--font-serif)',fontSize:'21px',fontWeight:900,color:'var(--dark)',letterSpacing:'-0.03em',textDecoration:'none',flexShrink:0}}>
          Simu<em style={{color:'var(--gold)',fontStyle:'normal'}}>Invest</em>
        </Link>
        <div style={{display:'flex',gap:'2px',alignItems:'center'}}>
          <NavDrop label="Assurance vie" emoji="🛡️" links={[
            {href:'/assurance-vie',label:'Comparer les contrats'},
            {href:'/blog/meilleure-assurance-vie-2026',label:'Meilleure AV 2026'},
            {href:'/blog/linxea-spirit-2-avis-2026',label:'Linxea Spirit 2 avis'},
            {href:'/blog/goodvest-avis-2026',label:'Goodvest avis 2026'},
            {href:'/blog/yomoni-vs-nalo-2026',label:'Yomoni vs Nalo'},
          ]}/>
          <NavDrop label="Épargne" emoji="🏦" links={[
            {href:'/epargne',label:'Comparer les livrets'},
            {href:'/blog/meilleur-livret-epargne-2026',label:'Meilleur livret 2026'},
            {href:'/blog/scpi-ou-livret-a-2026',label:'Livret A ou mieux ?'},
          ]}/>
          <NavDrop label="Crowdfunding" emoji="🏗️" links={[
            {href:'/crowdfunding',label:'Crowdfunding immobilier'},
            {href:'/blog/crowdfunding-immobilier-homunity-avis',label:'Homunity avis 2026'},
          ]}/>
          <NavDrop label="SCPI" emoji="🏢" links={[
            {href:'/scpi',label:'Guide SCPI (informatif)'},
            {href:'/blog/scpi-pour-debutant-moins-1000-euros',label:'SCPI débutant'},
            {href:'/blog/combien-rapporte-vraiment-une-scpi',label:'Simulation revenus'},
          ]}/>
          <Link href="/blog" style={{padding:'8px 10px',fontSize:'13px',fontWeight:500,color:'var(--text2)',textDecoration:'none'}}>Blog</Link>
        </div>
        <Link href="/comparateur" style={{background:'linear-gradient(135deg,var(--gold),var(--gold2))',color:'#fff',fontSize:'13px',fontWeight:600,padding:'10px 18px',borderRadius:'9px',textDecoration:'none',flexShrink:0,whiteSpace:'nowrap'}}>
          Comparer →
        </Link>
      </div>
      <style>{`
        .ndrop{position:relative;display:inline-block}
        .ndrop .ndmenu{display:none}
        .ndrop:hover .ndmenu{display:flex}
        .ndmenu{flex-direction:column;position:absolute;top:100%;left:0;padding-top:8px;z-index:200}
        .ndmenu-inner{background:#fff;border:1px solid rgba(26,26,24,0.1);border-radius:12px;padding:8px;min-width:220px;box-shadow:0 8px 32px rgba(26,26,24,0.12)}
        .ndmenu a{display:block;padding:10px 14px;font-size:13px;color:#3A3A35;text-decoration:none;border-radius:8px;font-weight:500;white-space:nowrap}
        .ndmenu a:hover{background:#F3F0E9;color:#1A1A18}
        .ndlabel{padding:8px 10px;font-size:13px;font-weight:500;color:#7A7A72;cursor:pointer;border-radius:8px;display:flex;align-items:center;gap:4px;border:none;background:none;font-family:var(--font-sans)}
        .ndlabel:hover{background:#F3F0E9;color:#3A3A35}
        @media(max-width:860px){.ndrop{display:none}}
      `}</style>
    </nav>
  )
}

function NavDrop({ label, emoji, links }) {
  return (
    <div className="ndrop">
      <button className="ndlabel">{emoji} {label} <span style={{fontSize:'9px',opacity:.6}}>▼</span></button>
      <div className="ndmenu">
        <div className="ndmenu-inner">
          {links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}
        </div>
      </div>
    </div>
  )
}
