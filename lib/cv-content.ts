export interface CVContent {
  header: {
    name: string
    title: string
    stack: string
    location: string
    phone: string
    email: string
    portfolio: string
    linkedin: string
    github: string
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
    title: "Full Stack Developer",
    stack: "React · Next.js · Node.js · MongoDB · Django",
    location: "Jerusalem, Israel",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    portfolio: "shay-acoca-portfolio.vercel.app",
    linkedin: "linkedin.com/in/shay-acoca-046311302",
    github: "github.com/Sy2force"
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
        description: "Full stack platform focused on API structure and user features.",
        bullets: [
          "Developed REST API logic for articles and user features.",
          "Implemented authentication and deployment-ready organization."
        ]
      },
      {
        title: "OpticGlass — Luxury E-commerce",
        stack: "React · Vite · Tailwind · Node.js · Express · MongoDB",
        description: "E-commerce application for premium eyewear with responsive UI.",
        bullets: [
          "Created product catalog and reusable frontend components.",
          "Structured frontend and backend logic for e-commerce."
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
          "Built web applications using React, Next.js, Node.js, Express, MongoDB and Django.",
          "Developed frontend interfaces, backend APIs, authentication systems and database features.",
          "Used Git, GitHub, Vercel, Render for development and deployment workflows."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Created digital concepts combining web design, branding and content strategy.",
          "Applied marketing principles to improve messaging and project presentation."
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
    title: "Développeur Full Stack",
    stack: "React · Next.js · Node.js · MongoDB · Django",
    location: "Jérusalem, Israël",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    portfolio: "shay-acoca-portfolio.vercel.app",
    linkedin: "linkedin.com/in/shay-acoca-046311302",
    github: "github.com/Sy2force"
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
        description: "Plateforme centrée sur la structure API et fonctionnalités utilisateur.",
        bullets: [
          "Création d'une logique API REST pour articles et fonctionnalités.",
          "Mise en place de l'authentification et organisation prête au déploiement."
        ]
      },
      {
        title: "OpticGlass — E-commerce Premium",
        stack: "React · Vite · Tailwind · Node.js · Express · MongoDB",
        description: "Application e-commerce pour lunettes premium avec interface responsive.",
        bullets: [
          "Création du catalogue produit et composants frontend réutilisables.",
          "Structuration de la logique frontend et backend pour e-commerce."
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
          "Développement d'applications web avec React, Next.js, Node.js, Express, MongoDB et Django.",
          "Création d'interfaces frontend, API backend, systèmes d'authentification et fonctionnalités base de données.",
          "Utilisation de Git, GitHub, Vercel, Render dans les workflows de développement."
        ]
      },
      {
        title: "Marketing Digital & Création Web — Projets personnels",
        date: "2024 – Présent",
        bullets: [
          "Création de concepts digitaux combinant web design, branding et stratégie de contenu.",
          "Application de principes marketing pour améliorer les messages et présentation."
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
    title: "Full Stack Developer",
    stack: "React · Next.js · Node.js · MongoDB · Django",
    location: "Jerusalem, Israel",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    portfolio: "",
    linkedin: "",
    github: ""
  },
  summary: {
    title: "Professional Profile",
    text: "Full Stack Developer with modern web applications experience (React, Next.js, Node.js, Express, MongoDB, Django). Skilled in responsive interfaces, REST APIs, authentication systems. Committed to high-quality, maintainable code with focus on UX and performance."
  },
  skills: {
    title: "Skills",
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
        skills: "Git, GitHub, Vercel, Render, Postman, Docker, Swagger"
      },
      {
        name: "Digital",
        skills: "Web Design, Landing Pages, Digital Marketing, SEO, UX Writing"
      }
    ]
  },
  projects: {
    title: "Selected Projects",
    items: [
      {
        title: "FitWell — Health & Fitness Platform",
        stack: "Django · Django REST Framework · PostgreSQL · JWT · Swagger · Docker",
        description: "Backend health/fitness platform with REST API, content management, deployment-ready structure.",
        bullets: [
          "API endpoints for articles, comments, user management with JWT authentication.",
          "Swagger documentation, Docker containerization for production deployment."
        ]
      },
      {
        title: "OpticGlass — Premium E-commerce Application",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Modern premium eyewear e-commerce with product presentation and UX focus.",
        bullets: [
          "Responsive product catalog, detail pages, reusable components with Tailwind CSS.",
          "Scalable frontend/backend architecture with MongoDB integration and Express API."
        ]
      },
      {
        title: "Restaurant App — Discovery Platform",
        stack: "React 18 · Vite · Tailwind CSS · Zustand · i18next · Framer Motion",
        description: "Modern React portfolio for discovering Israeli restaurants with responsive design, multilingual support (FR/EN/HE), comprehensive testing.",
        bullets: [
          "Responsive restaurant/dish discovery with dark mode, authentication, SEO optimization.",
          "React 18 with Zustand state management, i18next multilingual support, Vitest/Playwright testing."
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
          "Built/deployed modern web apps (React, Next.js, Node.js, Express, MongoDB, Django).",
          "Responsive frontend interfaces, RESTful backend APIs, JWT authentication systems.",
          "Git, GitHub, Vercel, Render, MongoDB Atlas for version control and deployment."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Digital concepts combining web design, branding, landing pages for online presence.",
          "Marketing principles for project presentation and user engagement strategies."
        ]
      },
      {
        title: "IDF Service — Guivati Unit",
        date: "2019 – 2022",
        bullets: [
          "Full military service in structured, demanding environment requiring discipline.",
          "Teamwork skills, reliability, ability to work under pressure in challenging conditions."
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
    title: "Développeur Full Stack",
    stack: "React · Next.js · Node.js · MongoDB · Django",
    location: "Jérusalem, Israël",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com",
    portfolio: "",
    linkedin: "",
    github: ""
  },
  summary: {
    title: "Profil professionnel",
    text: "Développeur Full Stack avec expérience applications web modernes (React, Next.js, Node.js, Express, MongoDB, Django). Compétent en interfaces responsives, API REST, systèmes d'authentification. Engagement code haute qualité, maintenable, focus UX et performances."
  },
  skills: {
    title: "Compétences",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, API REST, JWT, MongoDB, PostgreSQL"
      },
      {
        name: "Outils",
        skills: "Git, GitHub, Vercel, Render, Postman, Docker, Swagger"
      },
      {
        name: "Digital",
        skills: "Web Design, Landing Pages, Marketing Digital, SEO, UX Writing"
      }
    ]
  },
  projects: {
    title: "Projets sélectionnés",
    items: [
      {
        title: "FitWell — Plateforme Santé & Fitness",
        stack: "Django · Django REST Framework · PostgreSQL · JWT · Swagger · Docker",
        description: "Backend santé/fitness avec API REST, gestion contenu, structure prête déploiement.",
        bullets: [
          "Endpoints API pour articles, commentaires, gestion utilisateurs avec authentification JWT.",
          "Documentation Swagger, conteneurisation Docker pour déploiement production."
        ]
      },
      {
        title: "OpticGlass — E-commerce Premium",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "E-commerce moderne lunettes premium, focus présentation produit et UX.",
        bullets: [
          "Catalogue produit responsive, pages détail, composants réutilisables avec Tailwind CSS.",
          "Architecture frontend/backend scalable avec intégration MongoDB et API Express."
        ]
      },
      {
        title: "Restaurant App — Plateforme de Découverte",
        stack: "React 18 · Vite · Tailwind CSS · Zustand · i18next · Framer Motion",
        description: "Portfolio React moderne pour découvrir restaurants israéliens avec design responsive, support multilingue (FR/EN/HE), tests complets.",
        bullets: [
          "Découverte responsive restaurants/plats avec mode sombre, authentification, optimisation SEO.",
          "React 18 avec gestion état Zustand, i18next support multilingue, tests Vitest/Playwright."
        ]
      }
    ]
  },
  experience: {
    title: "Expérience",
    items: [
      {
        title: "Développeur Full Stack — Projets personnels & Portfolio",
        date: "2024 – Présent",
        bullets: [
          "Développé/déployé apps web modernes (React, Next.js, Node.js, Express, MongoDB, Django).",
          "Interfaces frontend responsives, API backend RESTful, systèmes authentification JWT.",
          "Git, GitHub, Vercel, Render, MongoDB Atlas pour contrôle version et déploiement."
        ]
      },
      {
        title: "Marketing Digital & Création Web — Projets personnels",
        date: "2024 – Présent",
        bullets: [
          "Concepts digitaux combinant web design, branding, landing pages pour présence en ligne.",
          "Principes marketing pour présentation projets et stratégies engagement utilisateur."
        ]
      },
      {
        title: "Service Militaire — Unité Guivati, IDF",
        date: "2019 – 2022",
        bullets: [
          "Service militaire complet dans environnement structuré, exigeant nécessitant discipline.",
          "Compétences travail d'équipe, fiabilité, capacité travailler sous pression conditions exigeantes."
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
