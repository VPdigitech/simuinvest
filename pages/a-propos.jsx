import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SeoHead from '../components/seo/SeoHead'

export default function APropos() {
  return (
    <>
      <SeoHead title="À propos de SimuInvest — David A., investisseur indépendant" description="SimuInvest.fr est créé par David A., ancien entrepreneur BTP reconverti investisseur. Site d'information indépendant sur les placements financiers français." slug="a-propos"/>
      <Nav/>
      <div style={{background:'var(--bg)',minHeight:'60vh',padding:'56px 0'}}>
        <div className="wrap-sm">
          <div className="bc"><Link href="/">Accueil</Link><span>›</span><span>À propos</span></div>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'34px',fontWeight:900,color:'var(--dark)',marginBottom:'32px'}}>À propos de SimuInvest</h1>
          <div style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.85'}}>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,margin:'0 0 16px',color:'var(--dark)'}}>Qui est derrière SimuInvest ?</h2>
            <p style={{marginBottom:'16px'}}>Je m'appelle David A. Pendant 15 ans, j'ai géré une entreprise dans le BTP. Quand j'ai commencé à vouloir faire fructifier mes économies, j'ai réalisé à quel point le monde des placements financiers était opaque, jargonneux, et souvent orienté vers les intérêts des vendeurs plutôt que des épargnants.</p>
            <p style={{marginBottom:'16px'}}>J'ai créé SimuInvest pour que n'importe qui — qu'il soit salarié, indépendant, retraité ou débutant — puisse comprendre simplement où et comment investir son argent en France.</p>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,margin:'28px 0 16px',color:'var(--dark)'}}>Notre philosophie</h2>
            <p style={{marginBottom:'16px'}}>On dit les choses comme elles sont. Si un produit a des frais élevés, on le dit. Si un placement comporte des risques, on le dit. Si on perçoit une commission sur un lien, on le dit (et c'est écrit clairement).</p>
            <p style={{marginBottom:'16px'}}>SimuInvest.fr est édité par Paulo V., particulier, non agréé ORIAS. Les contenus éditoriaux sont rédigés par David A. Le site ne fournit pas de conseil en investissement financier personnalisé.</p>
            <h2 style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,margin:'28px 0 16px',color:'var(--dark)'}}>Nos partenaires commerciaux</h2>
            <p style={{marginBottom:'16px'}}>Nous percevons actuellement des commissions de <strong>Linxea</strong> via financeAds lorsque vous souscrivez via nos liens. D'autres partenariats sont en cours. Ces commissions ne modifient pas nos analyses — nous mentionnons toujours les avantages ET les inconvénients de chaque produit.</p>
            <div style={{marginTop:'32px'}}>
              <Link href="/legal/mentions-legales" className="btn btn-outline" style={{marginRight:'12px'}}>Mentions légales</Link>
              <Link href="/legal/contact" className="btn btn-gold">Nous contacter</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
