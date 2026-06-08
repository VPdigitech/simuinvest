# SimuInvest.fr — Guide de déploiement complet

Site d'information SCPI / pierre papier — Partenaire CORUM L'Épargne (Affilae)
Contact : contact@simuinvest.fr

---

## 🚀 ÉTAPE 1 — GitHub (3 min)

```bash
cd simuinvest/
git init
git add .
git commit -m "🚀 Initial commit SimuInvest"
git branch -M main
git remote add origin https://github.com/TON_USER/simuinvest.git
git push -u origin main
```

---

## 🌐 ÉTAPE 2 — Vercel (2 min)

1. vercel.com → "Add New Project"
2. Importer le repo `simuinvest`
3. Vercel détecte Next.js → Deploy (aucun réglage nécessaire)
4. Settings → Domains → Ajouter `simuinvest.fr` et `www.simuinvest.fr`

**DNS chez ton registrar (OVH/Gandi/Namecheap) :**
```
A     @   76.76.21.21
CNAME www cname.vercel-dns.com
```

---

## 🔑 ÉTAPE 3 — Les 3 codes à configurer dans data/config.js

**C'est le seul fichier à modifier pour tout activer.**

### A. Lien Affilae CORUM
1. app.affilae.com → Marketplace → "CORUM"
2. Postuler → attendre l'acceptation
3. Récupérer ton lien tracké unique
4. Remplacer dans data/config.js :
```js
affiliateLink: 'https://track.affilae.com/TON_VRAI_LIEN',
```

**Commissions CORUM :**
- 50€ CPL par souscription démarrée (7j tracking)
- 1,5% CPA par souscription complète (90j tracking)

### B. Google Analytics 4
1. analytics.google.com → Créer une propriété
2. Nom : SimuInvest · Plateforme : Web · URL : simuinvest.fr
3. Copier l'ID de mesure (G-XXXXXXXXXX)
4. Remplacer dans data/config.js :
```js
gaId: 'G-XXXXXXXXXX',
```

### C. Google Search Console
1. search.google.com/search-console
2. Ajouter propriété → Domaine → simuinvest.fr
3. Vérification par balise HTML → copier le code
4. Remplacer dans data/config.js :
```js
gscCode: 'TON_CODE_GSC',
```

**Après modification :**
```bash
git add . && git commit -m "Config GA4 + GSC + Affilae" && git push
```
→ Vercel redéploie en ~1 min

---

## 📊 ÉTAPE 4 — Google Search Console (5 min)

1. Vérifier la propriété (après avoir pushé le code GSC)
2. Sitemaps → Ajouter → `https://www.simuinvest.fr/api/sitemap.xml`
3. Inspection d'URL → Demander l'indexation pour ces pages prioritaires :
   - `https://www.simuinvest.fr/`
   - `https://www.simuinvest.fr/blog/corum-avis-2026`
   - `https://www.simuinvest.fr/blog/scpi-ou-livret-a-2026`
   - `https://www.simuinvest.fr/blog/scpi-pour-debutant-moins-1000-euros`
   - `https://www.simuinvest.fr/blog/pierre-papier-auto-entrepreneur`
   - `https://www.simuinvest.fr/blog/corum-r-start-avis-sans-frais`

---

## 📝 AJOUTER UN ARTICLE (workflow complet)

1. Créer `pages/blog/mon-article.jsx` (copier un article existant comme base)
2. Ajouter l'article dans `data/config.js` → tableau ARTICLES
3. Push :
```bash
git add . && git commit -m "Article: mon-article" && git push
```
4. Dans GSC → Inspection URL → Demander indexation

---

## 📄 PAGES INCLUSES

| URL | Statut |
|-----|--------|
| `/` | ✅ Accueil + simulateur |
| `/blog` | ✅ Liste articles |
| `/blog/corum-avis-2026` | 🔲 À créer (copier template) |
| `/blog/scpi-pour-debutant-moins-1000-euros` | ✅ Prêt |
| `/blog/corum-r-start-avis-sans-frais` | 🔲 À créer |
| `/blog/investir-scpi-depuis-assurance-vie` | 🔲 À créer |
| `/blog/scpi-ou-livret-a-2026` | 🔲 À créer |
| `/blog/pierre-papier-auto-entrepreneur` | ✅ Prêt |
| `/legal/mentions-legales` | ✅ Prêt |
| `/legal/politique-confidentialite` | ✅ Prêt |
| `/legal/politique-affiliation` | ✅ Prêt |
| `/legal/contact` | ✅ Prêt |
| `/api/sitemap.xml` | ✅ Auto-généré |
| `/robots.txt` | ✅ Prêt |

---

## 💰 PROJECTION REVENUS

| Mois | Visiteurs | Leads 50€ | CPA 1,5% | Total mois |
|------|-----------|-----------|----------|------------|
| 1–3 | 50–300 | 1–8 | 0–1 | 50–500€ |
| 4–6 | 300–800 | 8–20 | 1–4 | 500–1 500€ |
| 7–9 | 800–2000 | 20–50 | 4–12 | 1 200–3 500€ |
| 10–12 | 2000–4000 | 50–100 | 12–25 | 3 000–7 000€ |

*Basé sur EPC 11,46€ et taux de conversion 22% confirmés Affilae CORUM.*

---

## 🛠️ COMMANDES UTILES

```bash
npm install      # Installer les dépendances
npm run dev      # Dev local → http://localhost:3000
npm run build    # Build de test
git push         # Déploie automatiquement sur Vercel
```
