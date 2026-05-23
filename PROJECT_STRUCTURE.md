# Structure du Projet Portfolio

## Racine du Projet

### Fichiers de Configuration

- package.json - Dependances et scripts du projet
- tsconfig.json - Configuration TypeScript
- next.config.js - Configuration Next.js
- tailwind.config.ts - Configuration Tailwind CSS
- postcss.config.js - Configuration PostCSS
- .eslintrc.json - Configuration ESLint
- jest.config.js - Configuration Jest pour les tests
- jest.setup.js - Setup initial pour les tests
- .gitignore - Fichiers ignores par Git
- .env.local - Variables d environnement locales
- .env.example - Exemple de variables d environnement
- next-env.d.ts - Types TypeScript pour Next.js

### Fichiers de Documentation

- README.md - Documentation principale du projet
- PROJECT_STRUCTURE.md - Ce fichier, structure du projet
- RENDER_DEPLOYMENT_GUIDE.md - Guide de deploiement sur Render
- RENDER_SETUP_INSTRUCTIONS.md - Instructions de setup Render
- LINKEDIN_TEXTS.md - Textes pour LinkedIn
- PORTFOLIO_COMPLETE_CONTENT.md - Contenu complet du portfolio

### Fichiers de Deploiement

- render.yaml - Configuration de deploiement Render
- vercel.json - Configuration de deploiement Vercel

## Dossier app

### Fichiers Principaux

- layout.tsx - Layout principal de l application
- page.tsx - Page d accueil du portfolio
- globals.css - Styles globaux CSS

### Dossier admin

- page.tsx - Page d administration pour gerer le contenu

### Dossier api

#### Dossier auth
- Contient les endpoints d authentification

#### Dossier comments
- Contient les endpoints pour les commentaires

#### Dossier contact
- Contient les endpoints pour le formulaire de contact

### Dossier resume

- page.tsx - Page de telechargement des CV avec traduction

## Dossier components

### Composants de l Interface

- about.tsx - Section a propos
- contact.tsx - Formulaire de contact
- experience.tsx - Section experience professionnelle
- footer.tsx - Pied de page
- hero.tsx - Section principale avec titre et description
- navbar.tsx - Barre de navigation
- other-projects.tsx - Section autres projets
- project-card.tsx - Carte de projet individuelle
- project-comments.tsx - Systeme de commentaires sur projets
- projects.tsx - Section projets
- section-title.tsx - Titre de section reutilisable
- skills.tsx - Section competences techniques
- why-hire-me.tsx - Section pourquoi me recruter

## Dossier lib

### Fichiers de Logique

- cv-content.ts - Contenu des CV anglais et francais
- cv-template.tsx - Template pour generer les CV en PDF
- language-context.tsx - Contexte React pour la gestion des langues
- mongodb.ts - Configuration de la connexion MongoDB
- translations.ts - Traductions pour tout le site
- utils.ts - Fonctions utilitaires

### Dossier models

- Contient les schemas de donnees MongoDB

## Dossier data

### Donnees du Portfolio

- experience.ts - Donnees de l experience professionnelle
- projects.ts - Donnees des projets
- skills.ts - Donnees des competences techniques

## Dossier public

### Fichiers Statiques

- Shay_Acoca_CV_EN.pdf - CV en anglais
- Shay_Acoca_CV_FR.pdf - CV en francais
- Autres assets statiques (images, icones, etc.)

## Dossier scripts

- Contient les scripts d automatisation

## Dossiers Generes

- .next/ - Fichiers de build Next.js
- .swc/ - Fichiers de compilation SWC
- .vercel/ - Fichiers de configuration Vercel
- node_modules/ - Dependances npm

## Architecture

### Frameworks et Technologies

- Next.js 14 - Framework React
- React 18 - Library UI
- TypeScript - Typage statique
- Tailwind CSS - Framework CSS
- Framer Motion - Animations
- MongoDB - Base de donnees
- Mongoose - ODM pour MongoDB

### Fonctionnalites Principales

- Site bilingue anglais et francais
- Systeme de traduction dynamique
- Generation de CV en PDF
- Formulaire de contact
- Systeme de commentaires sur projets
- Panel d administration
- Responsive design mobile et desktop
- Tests unitaires avec Jest

### Deploiement

- Vercel - Deploiement principal
- Render - Deploiement alternatif
- Support de variables d environnement
- Configuration automatique
