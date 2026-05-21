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
      en: "Fitness & wellness platform with dashboard, backend and user progression tracking. Built with Python and Django, this project provides a complete solution for tracking fitness goals and user progress.",
      fr: "Plateforme fitness & bien-être avec dashboard, backend et suivi de progression utilisateur. Construite avec Python et Django, cette solution complète permet de suivre les objectifs fitness et la progression utilisateur."
    },
    problemSolved: {
      en: "FitWell organizes tracking, motivation and user data into a clear and structured experience. The platform simplifies fitness management through an intuitive dashboard and organized data visualization.",
      fr: "FitWell organise le suivi, la motivation et les données utilisateur dans une expérience claire et structurée. La plateforme simplifie la gestion fitness grâce à un tableau de bord intuitif et une visualisation organisée des données."
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
      en: "This project shows my ability to structure a complete application, organize a backend and create a clear user experience using Django and PostgreSQL.",
      fr: "Ce projet montre ma capacité à structurer une application complète, organiser un backend et créer une expérience utilisateur claire avec Django et PostgreSQL."
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
      en: "Premium eyewear e-commerce project with modern visual identity and a smooth shopping experience. Built with React and Node.js, this project showcases product management and secure authentication.",
      fr: "Boutique e-commerce premium dédiée aux lunettes, avec une identité visuelle moderne et une expérience d'achat fluide. Construite avec React et Node.js, cette solution met en valeur la gestion produit et l'authentification sécurisée."
    },
    problemSolved: {
      en: "OpticGlass presents premium products with clear navigation, strong visual identity and a trustworthy shopping experience. The project demonstrates e-commerce structure with secure user authentication.",
      fr: "OpticGlass présente des produits premium avec une navigation claire, une identité visuelle forte et une expérience rassurante. Le projet démontre une structure e-commerce avec authentification utilisateur sécurisée."
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
      en: "This project shows my skills in responsive design, e-commerce structure, product presentation, API and authentication using React and MongoDB.",
      fr: "Ce projet montre mes compétences en design responsive, structure e-commerce, présentation produit, API et authentification avec React et MongoDB."
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
      en: "Food discovery application around restaurants, recipes and local content, with Hebrew localization and RTL support. Built with React and Node.js, this project handles multilingual content and right-to-left layouts.",
      fr: "Application de découverte culinaire autour des restaurants, recettes et contenus locaux, avec localisation hébreu et support RTL. Construite avec React et Node.js, cette solution gère le contenu multilingue et les layouts droite-à-gauche."
    },
    problemSolved: {
      en: "Food App brings restaurants, recipes and food content into a localized and easy-to-use experience. The project demonstrates RTL support and API integration for localized content.",
      fr: "Food App regroupe restaurants, recettes et contenus culinaires dans une expérience localisée et facile à utiliser. Le projet démontre le support RTL et l'intégration API pour le contenu localisé."
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
      en: "This project shows my ability to build a localized application, handle RTL, connect an API and solve deployment issues using React and MongoDB.",
      fr: "Ce projet montre ma capacité à créer une application localisée, gérer le RTL, connecter une API et résoudre des problèmes de déploiement avec React et MongoDB."
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
