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
      en: "FitWell is a full stack fitness and wellness platform designed to bring workout tracking, wellness features, user engagement and analytics into one structured experience.",
      fr: "FitWell est une plateforme full stack dédiée au fitness et au bien-être, pensée pour regrouper le suivi d'entraînement, les fonctionnalités wellness, l'engagement utilisateur et les statistiques dans une seule expérience."
    },
    problemSolved: {
      en: "Fitness users often need a clear space to track their progress, stay motivated and access their data. FitWell explores how to organize fitness, wellness and analytics inside a structured and easy-to-use platform.",
      fr: "Les utilisateurs de fitness ont souvent besoin d'un espace clair pour suivre leur progression, rester motivés et accéder à leurs données. FitWell explore comment organiser le fitness, le bien-être et l'analyse dans une plateforme structurée et facile à utiliser."
    },
    role: {
      en: "Full stack development, backend architecture, frontend integration, product logic, documentation and deployment workflow.",
      fr: "Développement full stack, architecture backend, intégration frontend, logique produit, documentation et workflow de déploiement."
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
      en: "Backend architecture, product thinking, dashboard logic, complete project organization, documentation, deployment and the ability to handle a larger codebase.",
      fr: "Architecture backend, raisonnement produit, logique de dashboard, organisation d'un projet complet, documentation, déploiement et capacité à gérer une base de code plus large."
    },
    liveUrl: "https://app-fitwell.onrender.com",
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
      en: "OpticGlass is a premium eyewear e-commerce project focused on clean product presentation, elegant visual identity and a smooth shopping experience.",
      fr: "OpticGlass est un projet e-commerce de lunettes premium, axé sur une présentation produit claire, une identité visuelle élégante et une expérience d'achat fluide."
    },
    problemSolved: {
      en: "Premium products need a strong visual identity, clear navigation and trustworthy product presentation. OpticGlass focuses on a modern, responsive and user-oriented e-commerce experience.",
      fr: "Les produits premium ont besoin d'une forte identité visuelle, d'une navigation claire et d'une présentation produit rassurante. OpticGlass se concentre sur une expérience e-commerce moderne, responsive et orientée utilisateur."
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
      en: "Frontend quality, e-commerce structure, authentication logic, API connection, responsive design, visual hierarchy and product presentation.",
      fr: "Qualité frontend, structure e-commerce, logique d'authentification, connexion API, design responsive, hiérarchie visuelle et présentation produit."
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
      en: "Food App is a full stack food discovery platform focused on Israeli gastronomy, restaurants, recipes and localized user experience.",
      fr: "Food App est une plateforme full stack de découverte culinaire autour de la gastronomie israélienne, des restaurants, des recettes et d'une expérience utilisateur localisée."
    },
    problemSolved: {
      en: "Food discovery can be spread across multiple platforms. This project explores how to create a centralized experience around restaurants, recipes and food content, with special attention to localization.",
      fr: "La découverte culinaire peut être dispersée entre plusieurs plateformes. Ce projet explore la création d'une expérience centralisée autour des restaurants, recettes et contenus gastronomiques, avec une attention particulière à la localisation."
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
      en: "Full stack structure, localization, RTL design, API integration, deployment problem solving and practical product thinking.",
      fr: "Structure full stack, localisation, design RTL, intégration API, résolution de problèmes de déploiement et réflexion produit concrète."
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
