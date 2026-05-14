export interface Project {
  id: number
  title: string
  type: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
  problemSolved: {
    en: string
    fr: string
  }
  role: {
    en: string
    fr: string
  }
  techStack: string[]
  keyFeatures: {
    en: string[]
    fr: string[]
  }
  demonstrates: {
    en: string
    fr: string
  }
  liveUrl: string
  githubUrl: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FitWell",
    type: {
      en: "Fitness & Wellness SaaS Platform",
      fr: "Plateforme SaaS Fitness & Bien-être"
    },
    description: {
      en: "FitWell is a full stack fitness and wellness platform built around workout tracking, wellness features, gamification and analytics.",
      fr: "FitWell est une plateforme full stack de fitness et bien-être construite autour du suivi d'entraînement, de fonctionnalités de bien-être, de la gamification et de l'analyse."
    },
    problemSolved: {
      en: "Fitness users often need a structured way to follow their progress, stay engaged and access wellness features in one place. FitWell explores how a SaaS platform can organize fitness, motivation and analytics into a single experience.",
      fr: "Les utilisateurs de fitness ont souvent besoin d'une méthode structurée pour suivre leurs progrès, rester engagés et accéder aux fonctionnalités de bien-être en un seul endroit. FitWell explore comment une plateforme SaaS peut organiser le fitness, la motivation et l'analyse en une seule expérience."
    },
    role: {
      en: "Full stack development, backend architecture, frontend integration, documentation and deployment workflow.",
      fr: "Développement full stack, architecture backend, intégration frontend, documentation et workflow de déploiement."
    },
    techStack: ["Python", "Django", "HTML", "JavaScript", "CSS", "PostgreSQL", "GitHub Actions", "Vercel"],
    keyFeatures: {
      en: [
        "Fitness and wellness platform structure",
        "User-oriented dashboard",
        "Gamification logic",
        "Analytics-oriented features",
        "Backend architecture",
        "Documentation",
        "Deployment configuration",
        "CI workflow"
      ],
      fr: [
        "Structure de plateforme fitness et bien-être",
        "Tableau de bord orienté utilisateur",
        "Logique de gamification",
        "Fonctionnalités orientées analyse",
        "Architecture backend",
        "Documentation",
        "Configuration de déploiement",
        "Workflow CI"
      ]
    },
    demonstrates: {
      en: "Backend-heavy architecture, real project organization, documentation quality, deployment process, ability to handle a larger codebase, product thinking",
      fr: "Architecture backend lourde, organisation de projet réel, qualité de documentation, processus de déploiement, capacité à gérer une base de code plus importante, raisonnement produit"
    },
    liveUrl: "https://fitwell-swci.onrender.com/fr/",
    githubUrl: "https://github.com/Sy2force/Fitwell",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "OpticGlass",
    type: {
      en: "Premium Eyewear E-commerce Project",
      fr: "Projet E-commerce Lunettes Premium"
    },
    description: {
      en: "OpticGlass is a modern e-commerce project for browsing and buying premium eyewear, focused on clean product presentation, dark visual identity and a smooth shopping experience.",
      fr: "OpticGlass est un projet e-commerce moderne pour parcourir et acheter des lunettes premium, axé sur une présentation de produit propre, une identité visuelle sombre et une expérience d'achat fluide."
    },
    problemSolved: {
      en: "Premium products need a strong visual identity and a clear browsing experience. OpticGlass focuses on creating a clean, elegant and product-focused e-commerce interface.",
      fr: "Les produits premium ont besoin d'une forte identité visuelle et d'une expérience de navigation claire. OpticGlass se concentre sur la création d'une interface e-commerce propre, élégante et axée sur le produit."
    },
    role: {
      en: "Frontend development, backend setup, product UI, authentication and e-commerce structure.",
      fr: "Développement frontend, configuration backend, UI produit, authentification et structure e-commerce."
    },
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "Node.js", "Express.js", "MongoDB", "JWT"],
    keyFeatures: {
      en: [
        "Product listing",
        "Product detail pages",
        "Authentication",
        "Backend API",
        "MongoDB database",
        "Responsive design",
        "Premium dark UI",
        "E-commerce layout"
      ],
      fr: [
        "Liste de produits",
        "Pages de détails de produit",
        "Authentification",
        "API backend",
        "Base de données MongoDB",
        "Design responsive",
        "UI sombre premium",
        "Layout e-commerce"
      ]
    },
    demonstrates: {
      en: "MERN stack foundation, product-focused frontend, authentication logic, API integration, responsive UI, visual hierarchy",
      fr: "Fondation MERN stack, frontend axé produit, logique d'authentification, intégration API, UI responsive, hiérarchie visuelle"
    },
    liveUrl: "https://optic-glass.vercel.app",
    githubUrl: "https://github.com/Sy2force/OpticGlass",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=800&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Food App",
    type: {
      en: "Full Stack Restaurant Discovery Platform",
      fr: "Plateforme Full Stack de Découverte de Restaurants"
    },
    description: {
      en: "Food App is a full stack platform focused on Israeli gastronomy, connecting food lovers with restaurants, recipes and culinary experiences.",
      fr: "Food App est une plateforme full stack axée sur la gastronomie israélienne, connectant les amateurs de cuisine aux restaurants, recettes et expériences culinaires."
    },
    problemSolved: {
      en: "Food discovery can be fragmented across many platforms. This project explores how to create a centralized and localized experience around Israeli food, restaurants and recipes.",
      fr: "La découverte culinaire peut être fragmentée sur plusieurs plateformes. Ce projet explore comment créer une expérience centralisée et localisée autour de la nourriture israélienne, des restaurants et des recettes."
    },
    role: {
      en: "Full stack development, frontend implementation, backend APIs, localization and deployment configuration.",
      fr: "Développement full stack, implémentation frontend, APIs backend, localisation et configuration de déploiement."
    },
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Vercel", "Render"],
    keyFeatures: {
      en: [
        "Restaurant and food discovery interface",
        "Full Hebrew localization and RTL support",
        "Frontend and backend structure",
        "API routes",
        "Responsive layout",
        "Deployment configuration",
        "Documentation guides"
      ],
      fr: [
        "Interface de découverte de restaurants et de nourriture",
        "Localisation complète en hébreu et support RTL",
        "Structure frontend et backend",
        "Routes API",
        "Layout responsive",
        "Configuration de déploiement",
        "Guides de documentation"
      ]
    },
    demonstrates: {
      en: "Full stack project structure, internationalization/localization, RTL design considerations, API and frontend integration, practical product thinking, deployment problem solving",
      fr: "Structure de projet full stack, internationalisation/localisation, considérations de design RTL, intégration API et frontend, raisonnement produit pratique, résolution de problèmes de déploiement"
    },
    liveUrl: "https://restaurant-app-phi-gray.vercel.app",
    githubUrl: "https://github.com/Sy2force/Restaurant-app",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
    ]
  }
]
