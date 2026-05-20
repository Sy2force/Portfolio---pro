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
      en: "Fitness & wellness full stack platform with dashboard, backend and user progression tracking.",
      fr: "Plateforme fitness & bien-être full stack, dashboard, backend et suivi de progression utilisateur."
    },
    problemSolved: {
      en: "Fitness users need a clear space to track progress, stay motivated and access their data. FitWell organizes fitness, wellness and analytics in a structured platform.",
      fr: "Les utilisateurs de fitness ont besoin d'un espace clair pour suivre leur progression, rester motivés et accéder à leurs données. FitWell organise le fitness, le bien-être et l'analyse dans une plateforme structurée."
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
      en: "Backend architecture, product thinking, dashboard logic, project organization, documentation and deployment.",
      fr: "Architecture backend, réflexion produit, logique de dashboard, organisation de projet, documentation et déploiement."
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
      en: "Premium eyewear e-commerce with visual identity, product presentation and smooth shopping experience.",
      fr: "E-commerce premium de lunettes avec identité visuelle, présentation produit et expérience d'achat fluide."
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
      en: "Frontend quality, e-commerce structure, authentication logic, API connection, responsive design and product presentation.",
      fr: "Qualité frontend, structure e-commerce, logique d'authentification, connexion API, design responsive et présentation produit."
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
      en: "Food discovery application with restaurants, recipes and Hebrew / RTL localization.",
      fr: "Application de découverte culinaire avec restaurants, recettes et localisation hébreu / RTL."
    },
    problemSolved: {
      en: "Food discovery can be spread across multiple platforms. This project creates a centralized experience around restaurants and recipes, with attention to localization.",
      fr: "La découverte culinaire peut être dispersée entre plusieurs plateformes. Ce projet crée une expérience centralisée autour des restaurants et recettes, avec une attention à la localisation."
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
      en: "Full stack structure, localization, RTL design, API integration and deployment problem solving.",
      fr: "Structure full stack, localisation, design RTL, intégration API et résolution de problèmes de déploiement."
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
