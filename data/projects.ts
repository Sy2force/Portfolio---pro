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
    title: "Digital Business Card App",
    type: {
      en: "Full Stack SaaS-style Application",
      fr: "Application de Style SaaS Full Stack"
    },
    description: {
      en: "A digital business card platform built with authentication, user roles, dashboard logic and dynamic card management.",
      fr: "Une plateforme de carte de visite digitale construite avec authentification, rôles utilisateur, logique dashboard et gestion dynamique de cartes."
    },
    problemSolved: {
      en: "Digital Business Card App provides a complete SaaS-style platform with user authentication, protected routes and role-based access control.",
      fr: "Digital Business Card App fournit une plateforme de style SaaS complète avec authentification utilisateur, routes protégées et contrôle d'accès basé sur les rôles."
    },
    role: {
      en: "Full stack development, authentication implementation, dashboard logic and role-based access control.",
      fr: "Développement full stack, implémentation d'authentification, logique dashboard et contrôle d'accès basé sur les rôles."
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    keyFeatures: {
      en: [
        "User authentication",
        "Protected routes",
        "Dashboard",
        "Role-based access",
        "Card creation and management",
        "Responsive design"
      ],
      fr: [
        "Authentification utilisateur",
        "Routes protégées",
        "Dashboard",
        "Accès basé sur les rôles",
        "Création et gestion de cartes",
        "Design responsive"
      ]
    },
    demonstrates: {
      en: "This project shows my ability to build a complete full stack application with authentication, role-based access control and dynamic content management.",
      fr: "Ce projet montre ma capacité à construire une application full stack complète avec authentification, contrôle d'accès basé sur les rôles et gestion de contenu dynamique."
    },
    liveUrl: "https://digital-business-card.vercel.app",
    githubUrl: "https://github.com/Sy2force/Digital-Business-Card",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  }
]
