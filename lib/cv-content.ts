export interface CVContent {
  header: {
    name: string
    location: string
    phone: string
    email: string
    age: string
  }
  summary: {
    title: string
    text: string
  }
  skills: {
    title: string
    categories: {
      name: string
      skills: string
    }[]
  }
  projects: {
    title: string
    items: {
      title: string
      stack: string
      description: string
      bullets: string[]
    }[]
  }
  experience: {
    title: string
    items: {
      title: string
      date: string
      bullets: string[]
    }[]
  }
  education: {
    title: string
    items: {
      title: string
      date: string
      description: string
    }[]
  }
  languages: {
    title: string
    items: string[]
  }
  footer: string
}

export const cvContentSummaryEN: CVContent = {
  header: {
    name: "SHAY ACOCA",
    location: "Jerusalem, Israel",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    age: "26 ans (1 juin 2000)"
  },
  summary: {
    title: "PROFESSIONAL SUMMARY",
    text: "Full Stack Developer based in Jerusalem with digital marketing background. I build responsive web applications using React, Next.js, Node.js, Express, MongoDB and Django with focus on clean interfaces and structured backend logic. Looking to contribute to real products in a professional team."
  },
  skills: {
    title: "TECHNICAL SKILLS",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, REST APIs, JWT, MongoDB, PostgreSQL"
      },
      {
        name: "Tools",
        skills: "Git, GitHub, Vercel, Render, Docker, Postman"
      }
    ]
  },
  projects: {
    title: "KEY PROJECTS",
    items: [
      {
        title: "FitWell — Health & Fitness Platform",
        stack: "Django · Django REST · PostgreSQL · JWT · Docker",
        description: "Complete backend platform for health and fitness content management with structured REST API.",
        bullets: [
          "Developed robust REST API for articles, comments and user features.",
          "Implemented JWT authentication, Swagger documentation and Docker configuration."
        ]
      },
      {
        title: "OpticGlass — Luxury E-commerce",
        stack: "React · Vite · Tailwind · Node.js · Express · MongoDB",
        description: "Premium e-commerce application for high-quality eyewear with responsive and modern user interface.",
        bullets: [
          "Developed complete product catalog and reusable frontend components.",
          "Structured frontend and backend architecture for optimal e-commerce experience."
        ]
      }
    ]
  },
  experience: {
    title: "EXPERIENCE",
    items: [
      {
        title: "Full Stack Developer — Personal Projects & Portfolio",
        date: "2024 – Present",
        bullets: [
          "Developed and deployed full-stack web applications using React, Next.js, Node.js, Express, MongoDB and Django.",
          "Created responsive user interfaces, REST APIs, JWT authentication systems and database features.",
          "Implemented Git workflows, GitHub version control, and deployed applications using Vercel and Render."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Designed and developed digital concepts combining web design, branding and content strategy.",
          "Applied digital marketing principles and UX writing to enhance messaging and project presentation."
        ]
      }
    ]
  },
  education: {
    title: "EDUCATION",
    items: [
      {
        title: "HackerU — Full Stack Development",
        date: "2024 – 2026",
        description: "Frontend and backend development: React, Node.js, MongoDB, APIs, authentication, architecture and deployment."
      }
    ]
  },
  languages: {
    title: "LANGUAGES",
    items: [
      "French: Native | Hebrew: Professional | English: Professional"
    ]
  },
  footer: "Shay Acoca · Full Stack Developer · shay-acoca-portfolio.vercel.app"
}

export const cvContentSummaryFR: CVContent = {
  header: {
    name: "SHAY ACOCA",
    location: "Jérusalem, Israël",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    age: "26 ans (1 juin 2000)"
  },
  summary: {
    title: "PROFIL PROFESSIONNEL",
    text: "Développeur Full Stack basé à Jérusalem avec parcours en marketing digital. Je conçois des applications web responsives avec React, Next.js, Node.js, Express, MongoDB et Django, avec attention aux interfaces propres et logique backend structurée. Recherche opportunité pour contribuer à des produits concrets."
  },
  skills: {
    title: "COMPÉTENCES TECHNIQUES",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, API REST, Authentification JWT, MongoDB, PostgreSQL"
      },
      {
        name: "Outils",
        skills: "Git, GitHub, Vercel, Render, Docker, Postman"
      }
    ]
  },
  projects: {
    title: "PROJETS CLÉS",
    items: [
      {
        title: "FitWell — Plateforme Santé & Fitness",
        stack: "Django · Django REST · PostgreSQL · JWT · Docker",
        description: "Plateforme backend complète pour la gestion de contenus santé et fitness avec API REST structurée.",
        bullets: [
          "Développement d'une API REST robuste pour articles, commentaires et utilisateurs.",
          "Implémentation de l'authentification JWT, documentation Swagger et configuration Docker."
        ]
      },
      {
        title: "OpticGlass — E-commerce Premium",
        stack: "React · Vite · Tailwind · Node.js · Express · MongoDB",
        description: "Application e-commerce premium pour lunettes de haute qualité avec interface utilisateur responsive et moderne.",
        bullets: [
          "Développement du catalogue produit complet et composants frontend réutilisables.",
          "Architecture frontend et backend structurée pour expérience e-commerce optimale."
        ]
      }
    ]
  },
  experience: {
    title: "EXPÉRIENCE",
    items: [
      {
        title: "Développeur Full Stack — Projets personnels & Portfolio",
        date: "2024 – Présent",
        bullets: [
          "Développement et déploiement d'applications web complètes avec React, Next.js, Node.js, Express, MongoDB et Django.",
          "Création d'interfaces utilisateur responsives, API REST, systèmes d'authentification JWT et fonctionnalités base de données.",
          "Implémentation de workflows Git, contrôle de version GitHub et déploiement d'applications via Vercel et Render."
        ]
      },
      {
        title: "Marketing Digital & Création Web — Projets personnels",
        date: "2024 – Présent",
        bullets: [
          "Conception et développement de concepts digitaux combinant web design, branding et stratégie de contenu.",
          "Application de principes de marketing digital et rédaction UX pour améliorer les messages et présentation."
        ]
      }
    ]
  },
  education: {
    title: "FORMATION",
    items: [
      {
        title: "HackerU — Développement Full Stack",
        date: "2024 – 2026",
        description: "Développement web frontend et backend : React, Node.js, MongoDB, API, authentification, architecture et déploiement."
      }
    ]
  },
  languages: {
    title: "LANGUES",
    items: [
      "Français : Langue maternelle | Hébreu : Professionnel | Anglais : Professionnel"
    ]
  },
  footer: "Shay Acoca · Développeur Full Stack · shay-acoca-portfolio.vercel.app"
}

export const cvContentEN: CVContent = {
  header: {
    name: "SHAY ACOCA",
    location: "Jerusalem, Israel",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    age: "26 ans (1 juin 2000)"
  },
  summary: {
    title: "Professional Profile",
    text: "Full Stack Developer focused on building clear and functional web applications. I work with React, Node.js, Express, Django, MongoDB and PostgreSQL, with experience in REST APIs, authentication, responsive interfaces and deployment."
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, TypeScript, JavaScript\nHTML5, CSS3, Tailwind CSS"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Python, Django\nDRF, REST APIs, JWT Auth\nMongoDB, PostgreSQL"
      },
      {
        name: "Tools",
        skills: "Git, GitHub, Docker\nVercel, Render, Swagger"
      },
      {
        name: "Design",
        skills: "Web Design, Landing Pages\nUX Writing, SEO"
      }
    ]
  },
  projects: {
    title: "Selected Projects",
    items: [
      {
        title: "FitWell — Health & Fitness Platform",
        stack: "Django · DRF · PostgreSQL · JWT · Swagger · Docker",
        description: "Complete backend platform for health and fitness content management with structured REST API.",
        bullets: [
          "Built robust REST API endpoints for articles, comments and users.",
          "Implemented JWT authentication, Swagger documentation and Docker configuration."
        ]
      },
      {
        title: "OpticGlass — Premium E-commerce Application",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Premium e-commerce application focused on high-quality product presentation and seamless user experience.",
        bullets: [
          "Built responsive product pages with reusable UI components and modern design patterns.",
          "Connected frontend to Express API and MongoDB database for complete e-commerce functionality."
        ]
      },
      {
        title: "Restaurant App — Discovery Platform",
        stack: "React · Vite · Tailwind CSS · Zustand · i18next",
        description: "Restaurant discovery application with multilingual support, responsive design and modern user experience.",
        bullets: [
          "Implemented restaurant and dish discovery features with dark mode support and SEO optimization.",
          "Integrated state management with Zustand, internationalization with i18next and testing setup."
        ]
      }
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        title: "Full Stack Developer — Personal Projects & Portfolio",
        date: "2024 – Present",
        bullets: [
          "Developed and deployed full-stack web applications using React, Next.js, Node.js, Express, MongoDB, Django and PostgreSQL.",
          "Created responsive user interfaces, REST APIs, JWT authentication systems and protected routes.",
          "Implemented Git workflows, GitHub version control, and deployed applications using Vercel and Render."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Designed and developed landing pages, branding concepts and web design for online presence.",
          "Applied SEO optimization, UX writing and digital marketing principles to enhance project presentation."
        ]
      },
      {
        title: "IDF Service — Guivati Unit",
        date: "2019 – 2022",
        bullets: [
          "Completed full military service in a structured and demanding environment.",
          "Developed discipline, teamwork, reliability and ability to work under pressure."
        ]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        title: "HackerU",
        date: "Full Stack Development",
        description: "2024 – 2026"
      },
      {
        title: "Habetzefer, Tel Aviv",
        date: "Digital Marketing & Content Creation",
        description: "2024"
      }
    ]
  },
  languages: {
    title: "Languages",
    items: [
      "French (Native)",
      "Hebrew (Professional)",
      "English (Professional)"
    ]
  },
  footer: "Shay Acoca · Full Stack Developer · shay-acoca-portfolio.vercel.app"
}

export const cvContentFR: CVContent = {
  header: {
    name: "SHAY ACOCA",
    location: "Jérusalem, Israël",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    age: "26 ans (1 juin 2000)"
  },
  summary: {
    title: "Profil professionnel",
    text: "Développeur Full Stack orienté vers la création d'applications web claires et fonctionnelles. Je travaille avec React, Node.js, Express, Django, MongoDB et PostgreSQL, avec de l'expérience en API REST, authentification, interfaces responsives et déploiement."
  },
  skills: {
    title: "Compétences",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, TypeScript, JavaScript\nHTML5, CSS3, Tailwind CSS"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Python, Django\nDRF, API REST, JWT Auth\nMongoDB, PostgreSQL"
      },
      {
        name: "Outils",
        skills: "Git, GitHub, Docker\nVercel, Render, Swagger"
      },
      {
        name: "Design",
        skills: "Web Design, Landing Pages\nRédaction UX, SEO"
      }
    ]
  },
  projects: {
    title: "Projets sélectionnés",
    items: [
      {
        title: "FitWell — Plateforme Santé & Fitness",
        stack: "Django · DRF · PostgreSQL · JWT · Swagger · Docker",
        description: "Plateforme backend complète pour la gestion de contenus santé et fitness avec API REST structurée.",
        bullets: [
          "Développement d'endpoints REST robustes pour articles, commentaires et utilisateurs.",
          "Implémentation de l'authentification JWT, documentation Swagger et configuration Docker."
        ]
      },
      {
        title: "OpticGlass — Application E-commerce Premium",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Application e-commerce premium centrée sur la présentation de produits de haute qualité et expérience utilisateur fluide.",
        bullets: [
          "Développement de pages produits responsives avec composants UI réutilisables et patterns de design modernes.",
          "Connexion du frontend à une API Express et base de données MongoDB pour fonctionnalité e-commerce complète."
        ]
      },
      {
        title: "Restaurant App — Plateforme de Découverte",
        stack: "React · Vite · Tailwind CSS · Zustand · i18next",
        description: "Application de découverte de restaurants avec support multilingue, design responsive et expérience utilisateur moderne.",
        bullets: [
          "Implémentation de fonctionnalités de découverte restaurants/plats avec support dark mode et optimisation SEO.",
          "Intégration de la gestion d'état avec Zustand, internationalisation avec i18next et configuration de tests."
        ]
      }
    ]
  },
  experience: {
    title: "Expérience",
    items: [
      {
        title: "Développeur Full Stack — Projets Personnels & Portfolio",
        date: "2024 – Présent",
        bullets: [
          "Développement et déploiement d'applications web complètes avec React, Next.js, Node.js, Express, MongoDB, Django et PostgreSQL.",
          "Création d'interfaces utilisateur responsives, API REST, systèmes d'authentification JWT et routes protégées.",
          "Implémentation de workflows Git, contrôle de version GitHub et déploiement d'applications via Vercel et Render."
        ]
      },
      {
        title: "Marketing Digital & Web Creator — Projets Personnels",
        date: "2024 – Présent",
        bullets: [
          "Conception et développement de landing pages, concepts de branding et web design pour présence en ligne.",
          "Application de l'optimisation SEO, rédaction UX et principes de marketing digital pour améliorer la présentation."
        ]
      },
      {
        title: "Service Militaire — Unité Guivati",
        date: "2019 – 2022",
        bullets: [
          "Service militaire complet dans un environnement structuré et exigeant.",
          "Développement de discipline, travail d'équipe, fiabilité et résistance à la pression."
        ]
      }
    ]
  },
  education: {
    title: "Formation",
    items: [
      {
        title: "HackerU",
        date: "Développement Full Stack",
        description: "2024 – 2026"
      },
      {
        title: "Habetzefer, Tel Aviv",
        date: "Marketing Digital & Création de Contenu",
        description: "2024"
      }
    ]
  },
  languages: {
    title: "Langues",
    items: [
      "Français (Natif)",
      "Hébreu (Professionnel)",
      "Anglais (Professionnel)"
    ]
  },
  footer: "Shay Acoca · Développeur Full Stack · shay-acoca-portfolio.vercel.app"
}
