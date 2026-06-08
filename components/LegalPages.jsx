import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import SeoHead from './seo/SeoHead'

function LegalPage({ title, slug, children }) {
  return (
    <>
      <SeoHead title={title} description={`${title} — SimuInvest`} slug={slug} noindex={true} />
      <Nav />
      <div style={{background:'var(--bg)',minHeight:'60vh',padding:'56px 0'}}>
        <div className="wrap-sm">
          <div className="bc" style={{marginBottom:'24px'}}>
            <Link href="/">Accueil</Link><span>›</span><span>{title}</span>
          </div>
          <h1 style={{fontFamily:'var(--font-serif)',fontSize:'34px',fontWeight:900,color:'var(--dark)',marginBottom:'32px'}}>{title}</h1>
          <div style={{fontSize:'15px',color:'var(--text)',lineHeight:'1.85'}}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const H2 = ({children}) => <h2 style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:700,margin:'28px 0 10px',color:'var(--dark)'}}>{children}</h2>
const P = ({children}) => <p style={{marginBottom:'14px'}}>{children}</p>
const Ul = ({items}) => <ul style={{marginLeft:'20px',marginBottom:'16px',display:'flex',flexDirection:'column',gap:'6px'}}>{items.map((i,k)=><li key={k}>{i}</li>)}</ul>

export function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" slug="legal/mentions-legales">
      <P><strong>Dernière mise à jour :</strong> 5 juin 2026</P>

      <H2>Éditeur du site</H2>
      <P>Le site <strong>simuinvest.fr</strong> est édité par un particulier en son nom propre, non agréé ORIAS.</P>
      <P>Email : <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>

      <H2>Hébergement</H2>
      <P><strong>Vercel Inc.</strong> — 340 Pine Street, Suite 701, San Francisco, CA 94104, USA — vercel.com</P>

      <H2>Nature du site — Avertissement important</H2>
      <P>SimuInvest.fr est un <strong>site d'information et de comparaison indépendant</strong>. Il ne s'agit <strong>pas</strong> d'un conseiller en investissement financier (CIF), d'un courtier, d'un prestataire de services d'investissement, ni d'un intermédiaire en opérations de banque agréé par l'AMF ou l'ACPR.</P>
      <P><strong>SimuInvest.fr n'est pas enregistré à l'ORIAS.</strong></P>
      <P>Les informations publiées sur ce site sont à titre <strong>purement informatif et éducatif</strong> et ne constituent en aucun cas :</P>
      <Ul items={[
        'Un conseil en investissement personnalisé',
        'Une recommandation d\'achat ou de vente d\'instruments financiers',
        'Une sollicitation à souscrire à un produit financier',
        'Une garantie de performance ou de rendement',
      ]}/>
      <P style={{background:'rgba(192,57,43,0.06)',border:'1px solid rgba(192,57,43,0.2)',borderRadius:'10px',padding:'16px 20px',fontWeight:500}}>
        ⚠️ Tout investissement comporte des risques, dont le risque de perte en capital. Les performances passées ne préjugent pas des performances futures. Consultez un conseiller financier indépendant agréé avant toute décision d'investissement.
      </P>

      <H2>Liens d'affiliation — Transparence</H2>
      <P>SimuInvest.fr perçoit des <strong>commissions d'affiliation</strong> de ses partenaires commerciaux (Linxea, Yomoni, Nalo, Raisin, Homunity, etc.) lorsque vous accédez à leurs services via les liens présents sur ce site et effectuez une action (inscription, souscription, dépôt).</P>
      <P>Cette rémunération :</P>
      <Ul items={[
        'Est clairement indiquée sur les pages concernées',
        'N\'augmente pas les tarifs que vous payez',
        'N\'influence pas l\'indépendance éditoriale du site',
        'Est déclarée conformément aux obligations légales',
      ]}/>

      <H2>Propriété intellectuelle</H2>
      <P>L'ensemble du contenu (textes, code, structure) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</P>

      <H2>Responsabilité</H2>
      <P>SimuInvest.fr ne saurait être tenu responsable de toute décision d'investissement prise sur la base des informations publiées sur ce site. L'éditeur ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations présentées.</P>
    </LegalPage>
  )
}

export function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité & RGPD" slug="legal/politique-confidentialite">
      <P><strong>Dernière mise à jour :</strong> 5 juin 2026</P>

      <H2>Responsable du traitement</H2>
      <P>SimuInvest.fr — contact@simuinvest.fr</P>

      <H2>Données collectées</H2>
      <Ul items={[
        'Données de navigation anonymisées via Google Analytics 4 (IP masquée)',
        'Réponses au quiz (traitées localement, non transmises à nos serveurs)',
        'Données de formulaire de contact si vous nous écrivez',
      ]}/>

      <H2>Finalités</H2>
      <P>Vos données sont utilisées pour améliorer le contenu du site et répondre à vos demandes. Nous ne vendons jamais vos données personnelles.</P>

      <H2>Google Analytics 4</H2>
      <P>Ce site utilise Google Analytics 4 avec anonymisation IP activée. Vous pouvez désactiver le suivi via l'extension navigateur officielle Google.</P>

      <H2>Cookies</H2>
      <P>Nous utilisons uniquement des cookies analytiques (Google Analytics). Aucun cookie publicitaire ou de tracking commercial.</P>

      <H2>Vos droits (RGPD)</H2>
      <P>Vous disposez d'un droit d'accès, rectification, suppression et opposition. Contactez-nous : <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>

      <H2>Conservation</H2>
      <P>Données Analytics : 14 mois (paramètre GA4). Emails : 3 ans maximum.</P>
    </LegalPage>
  )
}

export function PolitiqueAffiliation() {
  return (
    <LegalPage title="Politique d'affiliation & transparence commerciale" slug="legal/politique-affiliation">
      <P><strong>Dernière mise à jour :</strong> 5 juin 2026</P>

      <H2>Notre modèle économique</H2>
      <P>SimuInvest.fr est gratuit pour vous. Notre financement provient exclusivement de <strong>commissions d'affiliation</strong> versées par nos partenaires commerciaux lorsque vous utilisez leurs services via nos liens.</P>

      <H2>Nos partenaires actuels</H2>
      <Ul items={[
        'Assurance vie : Linxea, Yomoni, Nalo, Goodvest, Belermain, Altaprofits (via financeAds)',
        'Épargne : Raisin, PickTheBank, Distingo Bank (via financeAds)',
        'SCPI : Louve Invest, Iroko, Ramify (programmes directs)',
        'Crowdfunding : Homunity, Enerfip (via financeAds)',
      ]}/>

      <H2>Impact sur notre indépendance</H2>
      <P>Nos commissions n'influencent <strong>pas</strong> nos analyses. Nous mentionnons les avantages ET les inconvénients de chaque produit. Si un produit ne nous semble pas adapté à un profil, nous le disons clairement.</P>

      <H2>Identification des liens commerciaux</H2>
      <P>Tous les liens d'affiliation sont identifiés par l'attribut <code>rel="nofollow sponsored"</code> dans le code HTML, conformément aux directives de Google et aux bonnes pratiques.</P>

      <H2>Pas d'impact sur vos tarifs</H2>
      <P>Les commissions que nous percevons <strong>n'augmentent pas les prix</strong> que vous payez. Les conditions sont identiques en passant par nous ou directement.</P>

      <H2>Contact</H2>
      <P>Questions sur notre modèle : <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)'}}>contact@simuinvest.fr</a></P>
    </LegalPage>
  )
}

export function CGU() {
  return (
    <LegalPage title="Conditions Générales d'Utilisation" slug="legal/cgu">
      <P><strong>Dernière mise à jour :</strong> 5 juin 2026</P>

      <H2>Objet</H2>
      <P>Les présentes CGU régissent l'utilisation du site SimuInvest.fr. En accédant au site, vous acceptez ces conditions.</P>

      <H2>Services proposés</H2>
      <P>SimuInvest.fr propose des contenus informatifs sur les placements financiers (SCPI, assurance vie, épargne, crowdfunding), un outil de comparaison et un quiz d'orientation. Ces services sont fournis à titre informatif uniquement.</P>

      <H2>Absence de conseil financier</H2>
      <P>SimuInvest.fr <strong>ne fournit pas de conseil en investissement financier</strong>. Le site n'est pas agréé par l'AMF, l'ACPR ou l'ORIAS. Les informations présentées ne constituent pas des recommandations personnalisées.</P>
      <P>L'utilisateur est seul responsable de ses décisions d'investissement. Nous recommandons de consulter un conseiller financier indépendant agréé avant tout investissement.</P>

      <H2>Exactitude des informations</H2>
      <P>Nous faisons notre meilleur effort pour maintenir des informations exactes et à jour. Toutefois, les rendements, taux et conditions des partenaires peuvent évoluer. Vérifiez toujours les conditions directement auprès des prestataires.</P>

      <H2>Liens externes</H2>
      <P>Les liens vers des sites partenaires sont fournis à titre indicatif. SimuInvest.fr n'est pas responsable du contenu de ces sites ni des services proposés par ces partenaires.</P>

      <H2>Propriété intellectuelle</H2>
      <P>Tout le contenu du site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</P>

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
      <P>Pour toute question sur SimuInvest.fr, nos contenus, nos partenariats ou vos droits RGPD :</P>
      <div style={{background:'var(--gold-light)',border:'1px solid var(--gold-border)',borderRadius:'12px',padding:'24px',margin:'24px 0'}}>
        <P><strong>📧 Email :</strong> <a href="mailto:contact@simuinvest.fr" style={{color:'var(--gold2)',fontWeight:600}}>contact@simuinvest.fr</a></P>
        <P style={{marginBottom:0,fontSize:'13px',color:'var(--text2)'}}>Délai de réponse : 2-3 jours ouvrés. Pour les demandes RGPD, précisez "Demande RGPD" en objet.</P>
      </div>
      <P><strong>Important :</strong> Pour toute question sur les produits de nos partenaires (Linxea, Yomoni, Raisin, Homunity...), contactez directement ces sociétés — SimuInvest n'est pas leur service client.</P>
      <P>SimuInvest.fr est un site d'information indépendant, non agréé ORIAS, qui ne fournit pas de conseil en investissement personnalisé.</P>
    </LegalPage>
  )
}
