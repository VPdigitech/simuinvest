import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import SeoHead from './seo/SeoHead'

function LegalPage({ title, slug, children }) {
  return (
    <>
      <SeoHead title={title} description={title + " — SimuInvest"} slug={slug} noindex={true}/>
      <Nav/>
      <div style={{background:'var(--bg)',minHeight:'60vh',padding:'56px 0'}}>
        <div className="wrap-sm">
          <div className="bc" style={{marginBottom:'24px'}}><Link href="/">Accueil</Link><span>›</span><span>{title}</span></div>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'34px',fontWeight:900,color:'var(--dark)',marginBottom:'32px'}}>{title}</h1>
          <div style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.85'}}>{children}</div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

const H2 = ({children}) => <h2 style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,margin:'28px 0 10px',color:'var(--dark)'}}>{children}</h2>
const P = ({children,style}) => <p style={{marginBottom:'14px',...style}}>{children}</p>

export function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" slug="legal/mentions-legales">
      <P><strong>Dernière mise à jour :</strong> 22 juin 2026</P>
      <H2>Éditeur du site</H2>
      <P>Le site simuinvest.fr est édité par Paulo V., particulier, non agréé ORIAS.</P>
      <P>Email : <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>
      <H2>Hébergement</H2>
      <P>Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</P>
      <H2>Nature du site</H2>
      <P>SimuInvest.fr est un site d'information et de comparaison indépendant. Il ne s'agit pas d'un conseiller en investissement financier agréé par l'AMF ou l'ACPR. SimuInvest.fr n'est pas enregistré à l'ORIAS.</P>
      <P style={{background:'rgba(192,57,43,0.06)',border:'1px solid rgba(192,57,43,0.2)',borderRadius:'10px',padding:'16px 20px',fontWeight:500}}>
        Tout investissement comporte des risques, dont le risque de perte en capital. Les performances passées ne préjugent pas des performances futures. Consultez un conseiller financier agréé avant toute décision.
      </P>
      <H2>Liens commerciaux</H2>
      <P>SimuInvest.fr perçoit des commissions d'affiliation de certains partenaires commerciaux (notamment Linxea via financeAds) lorsque vous accédez à leurs services via nos liens et effectuez une action. Cette rémunération n'augmente pas les tarifs que vous payez et n'influence pas nos analyses éditoriales.</P>
      <H2>Responsabilité</H2>
      <P>SimuInvest.fr ne saurait être tenu responsable de toute décision d'investissement prise sur la base des informations publiées sur ce site.</P>
    </LegalPage>
  )
}

export function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité & RGPD" slug="legal/politique-confidentialite">
      <P><strong>Dernière mise à jour :</strong> 22 juin 2026</P>
      <H2>Responsable du traitement</H2>
      <P>SimuInvest.fr — contact@simuinvest.fr</P>
      <H2>Données collectées</H2>
      <P>Données de navigation anonymisées via Google Analytics 4 (IP masquée). Réponses au quiz traitées localement. Emails de contact si vous nous écrivez.</P>
      <H2>Vos droits RGPD</H2>
      <P>Vous disposez d'un droit d'accès, rectification, suppression et opposition. Contactez-nous : <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>
      <H2>Cookies</H2>
      <P>Uniquement des cookies analytiques Google Analytics. Aucun cookie publicitaire ou de tracking commercial.</P>
    </LegalPage>
  )
}

export function PolitiqueAffiliation() {
  return (
    <LegalPage title="Politique d'affiliation & transparence" slug="legal/politique-affiliation">
      <P><strong>Dernière mise à jour :</strong> 22 juin 2026</P>
      <H2>Notre modèle économique</H2>
      <P>SimuInvest.fr est gratuit pour vous. Nous percevons des commissions d'affiliation de partenaires commerciaux acceptés (actuellement Linxea via financeAds) lorsque vous utilisez leurs services via nos liens.</P>
      <H2>Partenaires actifs</H2>
      <P>Linxea (assurance vie, PER) — via financeAds. D'autres partenariats sont en cours d'établissement.</P>
      <H2>Impact sur notre indépendance</H2>
      <P>Nos analyses sont objectives et mentionnent toujours les avantages ET les inconvénients de chaque produit. Cette rémunération n'augmente pas les tarifs que vous payez.</P>
      <H2>Contact</H2>
      <P><a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>
    </LegalPage>
  )
}

export function CGU() {
  return (
    <LegalPage title="Conditions Générales d'Utilisation" slug="legal/cgu">
      <P><strong>Dernière mise à jour :</strong> 22 juin 2026</P>
      <H2>Objet</H2>
      <P>Les présentes CGU régissent l'utilisation du site SimuInvest.fr.</P>
      <H2>Absence de conseil financier</H2>
      <P>SimuInvest.fr ne fournit pas de conseil en investissement financier. Le site n'est pas agréé par l'AMF, l'ACPR ou l'ORIAS. Les informations présentées ne constituent pas des recommandations personnalisées. L'utilisateur est seul responsable de ses décisions d'investissement.</P>
      <H2>Droit applicable</H2>
      <P>Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</P>
      <H2>Contact</H2>
      <P><a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>
    </LegalPage>
  )
}

export function Contact() {
  return (
    <LegalPage title="Nous contacter" slug="legal/contact">
      <P>Pour toute question sur SimuInvest.fr, nos contenus ou vos droits RGPD :</P>
      <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'24px',margin:'24px 0'}}>
        <P><strong>Email :</strong> <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)',fontWeight:600}}>contact@simuinvest.fr</a></P>
        <P style={{marginBottom:0,fontSize:'13px',color:'var(--text2)'}}>Délai de réponse : 2-3 jours ouvrés.</P>
      </div>
      <P>SimuInvest.fr est un site d'information indépendant, non agréé ORIAS, qui ne fournit pas de conseil en investissement personnalisé.</P>
    </LegalPage>
  )
}
