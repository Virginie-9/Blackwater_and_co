# Blackwater & Co.

Site vitrine fictif de Blackwater & Co., maison de whiskey irlandais de Caoimhe Fitzgerald (univers RP *Lords, Likes & Letters*).

## Structure

```
.
├── index.html        Contenu de la page et symboles SVG (triquetra, bouteille)
├── css/
│   └── style.css     Toute la mise en forme (couleurs dans :root, en haut)
├── js/
│   ├── main.js       Vérification d'âge, menu, animations, citations, newsletter
│   └── quiz.js       Quiz « Quel whiskey vous ressemble ? »
└── img/
    ├── caoimhe.jpg   Photo de la fondatrice
    └── favicon.svg   Icône d'onglet
```

## Déploiement (GitHub Pages)

1. Pousser tous les fichiers à la racine du dépôt (en gardant les dossiers).
2. Settings → Pages → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`.

## Modifier

- **Couleurs** : variables `--ink`, `--amber`, `--moss`… en haut de `css/style.css`.
- **Whiskeys de la collection** : section `#collection` dans `index.html`.
- **Questions et résultats du quiz** : tableaux `QUESTIONS` et `WHISKEYS` dans `js/quiz.js`.
- **Photo** : remplacer `img/caoimhe.jpg` (format portrait 3:4 de préférence).
