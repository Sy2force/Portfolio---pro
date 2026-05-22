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
      en: "Full Stack Health & Fitness Platform",
      fr: "Plateforme Full Stack Santé & Fitness"
    },
    description: {
      en: "A full stack web application focused on fitness, wellness and content management. The project includes backend API structure, user-focused features and a clean responsive interface.",
      fr: "Une application web full stack axée sur le fitness, le bien-être et la gestion de contenu. Le projet inclut une structure d'API backend, des fonctionnalités orientées utilisateur et une interface responsive propre."
    },
    problemSolved: {
      en: "FitWell provides a structured platform for tracking fitness goals and managing wellness content through a clean and organized user interface.",
      fr: "FitWell fournit une plateforme structurée pour suivre les objectifs fitness et gérer le contenu bien-être à travers une interface utilisateur propre et organisée."
    },
    role: {
      en: "Full stack development, backend architecture, frontend integration and API design.",
      fr: "Développement full stack, architecture backend, intégration frontend et conception d'API."
    },
    techStack: ["Django", "Django REST Framework", "PostgreSQL", "JWT", "Swagger", "Docker"],
    keyFeatures: {
      en: [
        "REST API architecture",
        "Authentication logic",
        "Articles and content structure",
        "Responsive frontend",
        "Backend data management"
      ],
      fr: [
        "Architecture REST API",
        "Logique d'authentification",
        "Structure d'articles et de contenu",
        "Frontend responsive",
        "Gestion de données backend"
      ]
    },
    demonstrates: {
      en: "This project demonstrates my ability to build a full stack application with Django REST Framework, PostgreSQL and structured API architecture.",
      fr: "Ce projet démontre ma capacité à construire une application full stack avec Django REST Framework, PostgreSQL et une architecture d'API structurée."
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
      en: "Luxury E-commerce Web Application",
      fr: "Application Web E-commerce de Luxe"
    },
    description: {
      en: "A modern e-commerce platform for premium eyewear, built with a strong focus on visual design, product presentation and user experience.",
      fr: "Une plateforme e-commerce moderne pour lunettes premium, construite avec un fort focus sur le design visuel, la présentation produit et l'expérience utilisateur."
    },
    problemSolved: {
      en: "OpticGlass presents premium products through a clean, responsive interface with product catalog, detail pages and authentication structure.",
      fr: "OpticGlass présente des produits premium à travers une interface propre et responsive avec catalogue produit, pages de détails et structure d'authentification."
    },
    role: {
      en: "Frontend development, backend setup, product UI implementation and e-commerce structure.",
      fr: "Développement frontend, configuration backend, implémentation UI produit et structure e-commerce."
    },
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    keyFeatures: {
      en: [
        "Product catalog",
        "Product detail pages",
        "Authentication structure",
        "Admin-oriented logic",
        "Responsive premium UI",
        "Deployment-ready architecture"
      ],
      fr: [
        "Catalogue produit",
        "Pages de détails produit",
        "Structure d'authentification",
        "Logique orientée admin",
        "UI premium responsive",
        "Architecture prête au déploiement"
      ]
    },
    demonstrates: {
      en: "This project showcases my skills in React, MongoDB, e-commerce structure and responsive design with a premium visual identity.",
      fr: "Ce projet présente mes compétences en React, MongoDB, structure e-commerce et design responsive avec une identité visuelle premium."
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
      en: "Restaurant & Food Ordering Interface",
      fr: "Interface de Commande Restaurant & Nourriture"
    },
    description: {
      en: "A responsive food application designed to present meals, categories and ordering flows through a clean and user-friendly interface.",
      fr: "Une application de nourriture responsive conçue pour présenter les repas, catégories et flux de commande à travers une interface propre et conviviale."
    },
    problemSolved: {
      en: "Food App provides a clean interface for browsing food items and categories with a focus on responsive design and user experience.",
      fr: "Food App fournit une interface propre pour parcourir les articles et catégories de nourriture avec un focus sur le design responsive et l'expérience utilisateur."
    },
    role: {
      en: "Frontend development, component design and responsive layout implementation.",
      fr: "Développement frontend, conception de composants et implémentation de layout responsive."
    },
    techStack: ["React", "JavaScript", "CSS", "API logic"],
    keyFeatures: {
      en: [
        "Modern responsive layout",
        "Product/category structure",
        "Reusable components",
        "Clean user interface",
        "Mobile-friendly experience"
      ],
      fr: [
        "Layout responsive moderne",
        "Structure produit/catégorie",
        "Composants réutilisables",
        "Interface utilisateur propre",
        "Expérience mobile-friendly"
      ]
    },
    demonstrates: {
      en: "This project demonstrates my ability to create clean, responsive interfaces with React and a focus on user experience.",
      fr: "Ce projet démontre ma capacité à créer des interfaces propres et responsives avec React et un focus sur l'expérience utilisateur."
    },
    liveUrl: "https://restaurant-app-phi-gray.vercel.app",
    githubUrl: "https://github.com/Sy2force/Restaurant-app",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "FuturistCards",
    type: {
      en: "Digital Business Cards Platform",
      fr: "Plateforme de Cartes de Visite Digitales"
    },
    description: {
      en: "A modern digital business card platform for creating, sharing and managing professional business cards with eco-friendly solutions.",
      fr: "Une plateforme moderne de cartes de visite digitales pour créer, partager et gérer des cartes professionnelles avec des solutions écologiques."
    },
    problemSolved: {
      en: "FuturistCards provides a modern solution for professionals to create and share digital business cards, reducing paper waste and improving networking efficiency.",
      fr: "FuturistCards fournit une solution moderne pour les professionnels afin de créer et partager des cartes de visite digitales, réduisant le gaspillage de papier et améliorant l'efficacité du networking."
    },
    role: {
      en: "Full stack development, UI/UX design and platform implementation.",
      fr: "Développement full stack, conception UI/UX et implémentation de plateforme."
    },
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Modern Web Technologies"],
    keyFeatures: {
      en: [
        "Digital card creation",
        "Professional templates",
        "Easy sharing",
        "Eco-friendly solution",
        "Modern interface",
        "Responsive design"
      ],
      fr: [
        "Création de cartes digitales",
        "Templates professionnels",
        "Partage facile",
        "Solution écologique",
        "Interface moderne",
        "Design responsive"
      ]
    },
    demonstrates: {
      en: "This project demonstrates my ability to build modern, user-friendly platforms with focus on sustainability and professional networking.",
      fr: "Ce projet démontre ma capacité à construire des plateformes modernes et conviviales avec un focus sur la durabilité et le networking professionnel."
    },
    liveUrl: "https://futurist-cards-frontend.vercel.app",
    githubUrl: "https://github.com/Sy2force/FuturistCards",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "Body Institut",
    type: {
      en: "Premium Conversion Micro-Site + CRM",
      fr: "Micro-Site de Conversion Premium + CRM"
    },
    description: {
      en: "Apple-grade marketing site with intelligent simulator, automated lead pipeline, and built-in admin CRM for beauty institute.",
      fr: "Site marketing de niveau Apple avec simulateur intelligent, pipeline de leads automatisé et CRM admin intégré pour institut de beauté."
    },
    problemSolved: {
      en: "Body Institut provides a complete conversion solution with cinematic hero, smart simulator, lead management, and admin dashboard for beauty institute operations.",
      fr: "Body Institut fournit une solution de conversion complète avec hero cinématographique, simulateur intelligent, gestion des leads et dashboard admin pour les opérations d'institut de beauté."
    },
    role: {
      en: "Full stack development with Next.js 14, TypeScript, SQLite database, authentication, and email automation.",
      fr: "Développement full stack avec Next.js 14, TypeScript, base de données SQLite, authentification et automatisation email."
    },
    techStack: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "Framer Motion", "SQLite", "Nodemailer", "Zod"],
    keyFeatures: {
      en: [
        "Cinematic parallax hero",
        "Apple-grade simulator",
        "6-step smart recommendation",
        "Lead pipeline automation",
        "Admin CRM dashboard",
        "Security & rate limiting"
      ],
      fr: [
        "Hero parallax cinématographique",
        "Simulateur de niveau Apple",
        "Recommandation intelligente 6 étapes",
        "Automatisation pipeline leads",
        "Dashboard CRM admin",
        "Sécurité et rate limiting"
      ]
    },
    demonstrates: {
      en: "This project demonstrates my ability to build premium marketing sites with advanced features like simulators, automated pipelines, and admin dashboards using modern Next.js.",
      fr: "Ce projet démontre ma capacité à construire des sites marketing premium avec fonctionnalités avancées comme simulateurs, pipelines automatisés et dashboards admin en utilisant Next.js moderne."
    },
    liveUrl: "https://bodyinstitut.vercel.app",
    githubUrl: "https://github.com/Sy2force/BodyInstitut",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
    ]
  }
]
