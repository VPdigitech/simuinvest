import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SeoHead from '../components/seo/SeoHead'

export default function APropos() {
  return (
    <>
      <SeoHead
        title="À propos de SimuInvest — David, constructeur devenu investisseur SCPI"
        description="Qui se cache derrière SimuInvest.fr ? David, ancien entrepreneur du BTP reconverti dans l'investissement immobilier pierre papier. Mon parcours et pourquoi j'ai créé ce site."
        slug="a-propos"
      />
      <Nav />

      <div style={{background:'linear-gradient(135deg,var(--bg),var(--bg2))',padding:'64px 0 48px'}}>
        <div className="wrap-sm">
          <span className="tag" style={{marginBottom:'16px',display:'inline-block'}}>À propos</span>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,5vw,46px)',fontWeight:900,color:'var(--dark)',marginBottom:'16px',lineHeight:'1.15'}}>
            Bonjour, je suis David
          </h1>
          <p style={{fontSize:'17px',color:'var(--text2)',lineHeight:'1.75',fontWeight:300}}>
            Ancien entrepreneur du BTP, aujourd'hui investisseur en pierre papier. Voici pourquoi j'ai créé SimuInvest.fr.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap-sm">

          {/* PROFIL */}
          <div style={{display:'flex',gap:'32px',alignItems:'flex-start',marginBottom:'48px',flexWrap:'wrap'}}>
            <div style={{width:'120px',height:'120px',minWidth:'120px',background:'linear-gradient(135deg,var(--gold-light),var(--bg3))',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'52px',border:'3px solid var(--gold-border)'}}>
              👷
            </div>
            <div style={{flex:1,minWidth:'240px'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:800,color:'var(--dark)',marginBottom:'4px'}}>David A.</div>
              <div style={{fontSize:'14px',color:'var(--gold2)',fontWeight:600,marginBottom:'8px'}}>Ancien entrepreneur BTP · Investisseur SCPI · Fondateur SimuInvest.fr</div>
              <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
                {['20+ ans dans le BTP','Entrepreneur depuis 2001','Investisseur pierre papier','Fondateur SimuInvest 2026'].map(t=>(
                  <span key={t} style={{fontSize:'12px',background:'var(--gold-light)',color:'var(--gold2)',padding:'4px 12px',borderRadius:'100px',border:'1px solid var(--gold-border)',fontWeight:500}}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{fontSize:'16px',color:'var(--text)',lineHeight:'1.85'}}>

            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:800,color:'var(--dark)',margin:'0 0 16px'}}>
              Du chantier à la pierre papier
            </h2>
            <p>
              J'ai passé plus de <strong>20 ans dans le bâtiment</strong>. Entrepreneur depuis 2001, j'ai dirigé ma propre entreprise de construction — des fondations aux finitions. J'ai tout connu : les bons chantiers, les mauvais payeurs, les périodes creuses, les coups de rush en fin d'année. Le BTP, c'est un métier passion mais c'est aussi une vie à flux tendus.
            </p>
            <p>
              Pendant toutes ces années, j'ai mis de l'argent de côté — sur un Livret A, puis un PEL, comme tout le monde. Et puis un jour, j'ai fait le calcul. Mon Livret A me rapportait <strong>moins que l'inflation</strong>. Mes économies perdaient de la valeur sans que je m'en rende compte.
            </p>

            <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderLeft:'4px solid var(--gold)',borderRadius:'10px',padding:'20px 24px',margin:'28px 0'}}>
              <p style={{margin:0,fontStyle:'italic',fontSize:'15px'}}>
                "J'avais passé 20 ans à construire des immeubles pour les autres. Il était temps que l'immobilier travaille pour moi — sans que j'aie à poser une seule brique."
              </p>
            </div>

            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:800,color:'var(--dark)',margin:'36px 0 16px'}}>
              Ma découverte de la SCPI
            </h2>
            <p>
              C'est un ami gestionnaire de patrimoine qui m'a parlé de la SCPI pour la première fois. Au début, j'étais sceptique — j'ai l'habitude du concret, du tangible, du mètre carré qu'on peut toucher. Mais en creusant le sujet, j'ai compris le concept : <strong>investir dans de l'immobilier réel, géré par des professionnels, sans aucune des contraintes de la gestion locative</strong>.
            </p>
            <p>
              Moi qui avais construit des bâtiments toute ma vie, je savais mieux que quiconque ce que ça représente de gérer un bien immobilier. Les locataires, les travaux, les charges, la vacance... La SCPI m'offrait l'immobilier <strong>sans tout ça</strong>. J'ai investi mes premières parts en 2023. Et j'ai touché mes premiers loyers quelques mois plus tard, sans rien faire.
            </p>

            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:800,color:'var(--dark)',margin:'36px 0 16px'}}>
              Pourquoi j'ai créé SimuInvest.fr
            </h2>
            <p>
              Quand j'ai voulu me renseigner sur la SCPI, j'ai trouvé deux types de sites : des sites ultra-techniques remplis de jargon financier incompréhensible, ou des sites commerciaux qui voulaient juste me vendre un produit sans m'expliquer les risques.
            </p>
            <p>
              J'aurais voulu trouver un site qui m'explique la SCPI <strong>comme un ami qui s'y connaît</strong> — simplement, honnêtement, avec les avantages mais aussi les pièges à éviter. Ce site n'existait pas vraiment. Alors je l'ai créé.
            </p>
            <p>
              SimuInvest.fr, c'est le site que j'aurais voulu trouver quand j'ai découvert la pierre papier. Écrit par quelqu'un qui a travaillé dans l'immobilier toute sa vie, qui a investi son propre argent en SCPI, et qui n'a aucun intérêt à vous cacher les risques.
            </p>

            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:800,color:'var(--dark)',margin:'36px 0 16px'}}>
              Ma philosophie
            </h2>
            <ul style={{marginLeft:'20px',display:'flex',flexDirection:'column',gap:'10px'}}>
              <li><strong>Transparence totale</strong> — je vous dis ce que je gagne (oui, je touche des commissions si vous souscrivez via mes liens), et je vous dis aussi quand un produit n'est pas fait pour vous.</li>
              <li><strong>Simplicité</strong> — pas de jargon inutile. Si je ne peux pas expliquer un concept en termes simples, c'est que je ne l'ai pas compris moi-même.</li>
              <li><strong>Honnêteté sur les risques</strong> — la SCPI n'est pas un placement miracle. Il y a des risques réels et je vous les explique clairement.</li>
              <li><strong>Expérience terrain</strong> — j'ai 20 ans d'expérience dans la construction et l'immobilier. Je sais ce que ça veut dire, un mètre carré.</li>
            </ul>

            <div style={{background:'var(--dark)',borderRadius:'16px',padding:'32px',margin:'40px 0',textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>
                Une question ? Un doute ?
              </div>
              <p style={{fontSize:'14px',color:'rgba(255,255,255,.55)',marginBottom:'20px'}}>
                Je lis tous les messages et je réponds personnellement. Pas de bot, pas d'assistante — c'est moi.
              </p>
              <a href="mailto:contact@simuinvest.fr" className="btn btn-gold btn-lg">
                Écrire à David →
              </a>
            </div>

            <div style={{background:'var(--bg2)',borderRadius:'14px',padding:'20px 24px',fontSize:'13px',color:'var(--text2)',lineHeight:'1.7'}}>
              <strong style={{color:'var(--dark)'}}>⚠️ Transparence et mentions légales :</strong> SimuInvest.fr est un site d'information indépendant. Je perçois des commissions d'affiliation lorsque vous souscrivez à des produits via mes liens (programme CORUM L'Épargne via Affilae). Ces commissions ne modifient pas les tarifs que vous payez. Je ne suis pas conseiller en investissement financier agréé. Les informations publiées sur ce site sont à titre informatif uniquement et ne constituent pas un conseil en investissement personnalisé. Consultez un professionnel agréé avant toute décision financière importante.
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{background:'var(--bg2)'}}>
        <div className="wrap">
          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:800,marginBottom:'20px',color:'var(--dark)'}}>Mes articles les plus lus</h2>
          <div className="g3">
            {[
              {href:'/blog/corum-avis-2026',e:'🔍',t:'Avis CORUM 2026',d:'Mon analyse complète après avoir investi'},
              {href:'/blog/scpi-pour-debutant-moins-1000-euros',e:'🌱',t:'SCPI avec moins de 1 000€',d:'Comment j\'ai commencé avec un petit budget'},
              {href:'/blog/pierre-papier-auto-entrepreneur',e:'💼',t:'Pierre papier & indépendants',d:'Ce que j\'aurais voulu savoir plus tôt'},
            ].map(a=>(
              <a key={a.href} href={a.href}>
                <div className="card card-p" style={{cursor:'pointer'}}>
                  <div style={{fontSize:'28px',marginBottom:'10px'}}>{a.e}</div>
                  <div style={{fontFamily:'var(--font-serif)',fontSize:'14px',fontWeight:700,marginBottom:'4px',color:'var(--dark)'}}>{a.t}</div>
                  <div style={{fontSize:'12px',color:'var(--text2)'}}>{a.d}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
