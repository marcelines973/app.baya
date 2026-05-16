# 🔮 Lithothérapie — Guide des pierres naturelles

Application web de référence sur les pierres naturelles et cristaux :
vertus, chakras, signes astrologiques et méthodes de purification.

---

## 📁 Structure du projet

```
lithotherapie/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles
├── js/
│   ├── data.js         ← Données des 35 pierres
│   └── app.js          ← Logique de l'application
├── images/
│   └── (vos photos ici)
└── README.md
```

---

## 🖼️ Ajouter vos photos

1. Placez vos photos dans le dossier `images/`
   - Format recommandé : JPG ou WebP
   - Taille recommandée : 400×400 px minimum
   - Nommage suggéré : `amethyste.jpg`, `quartz-rose.jpg`, etc.

2. Dans `js/data.js`, trouvez la pierre concernée et remplacez :
   ```js
   img: ""
   ```
   par :
   ```js
   img: "images/amethyste.jpg"
   ```

---

## 🚀 Mise en ligne — GitHub + Cloudflare Pages

### Étape 1 — Créer le dépôt GitHub

1. Créez un compte sur [github.com](https://github.com) si ce n'est pas fait
2. Cliquez sur **New repository**
3. Nommez-le `lithotherapie` (ou autre)
4. Laissez-le **Public**
5. Cliquez **Create repository**

### Étape 2 — Uploader les fichiers

**Option A — Interface web (plus simple) :**
1. Dans votre dépôt GitHub, cliquez **Add file → Upload files**
2. Glissez-déposez tous vos fichiers en respectant la structure
3. Cliquez **Commit changes**

**Option B — Git en ligne de commande :**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_NOM/lithotherapie.git
git push -u origin main
```

### Étape 3 — Connecter Cloudflare Pages

1. Créez un compte sur [cloudflare.com](https://cloudflare.com) (gratuit)
2. Allez dans **Workers & Pages → Pages**
3. Cliquez **Connect to Git**
4. Autorisez Cloudflare à accéder à votre GitHub
5. Sélectionnez votre dépôt `lithotherapie`
6. Paramètres de build :
   - **Framework preset** : `None`
   - **Build command** : *(laisser vide)*
   - **Build output directory** : `/` (ou laisser vide)
7. Cliquez **Save and Deploy**

✅ Votre site est en ligne à une adresse du type :
`https://lithotherapie.pages.dev`

---

## 🔄 Mettre à jour le site

À chaque fois que vous modifiez un fichier sur GitHub (ajout de photo, texte, etc.), Cloudflare Pages re-déploie automatiquement le site en moins de 60 secondes.

---

## 📝 Ajouter une nouvelle pierre

Dans `js/data.js`, copiez un bloc existant et remplissez les champs :

```js
{
  name:   "Nom de la pierre",
  emoji:  "💎",
  img:    "images/nom-pierre.jpg",
  origin: "Pays d'origine",
  group:  ["protection", "équilibre"],   // catégories de filtre
  chakras: [
    { n: "Cœur", c: "#27AE60" }
  ],
  signs:  ["Taureau", "Cancer"],
  tagBg:  "#EAF3DE", tagTx: "#27500A",  // couleurs des badges
  desc:   "Description de la pierre...",
  vertus: ["Vertu 1", "Vertu 2", "Vertu 3", "Vertu 4"],
  purif:  "Méthode de purification"
},
```

---

## 🎨 Catégories disponibles

| Catégorie    | Valeur dans `group` |
|--------------|---------------------|
| Protection   | `"protection"`      |
| Amour        | `"amour"`           |
| Clarté       | `"clarté"`          |
| Énergie      | `"énergie"`         |
| Équilibre    | `"équilibre"`       |
| Ancrage      | `"ancrage"`         |
| Chance       | `"chance"`          |
