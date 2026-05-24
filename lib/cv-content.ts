export interface CVContent {
  header: {
    name: string
    location: string
    phone: string
    email: string
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
    email: "shayacoca20@gmail.com"
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
    location: "Jérusalem, Israël",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com"
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
    location: "Jerusalem, Israel",
    phone: "+972 50 123 4567",
    email: "shayacoca20@gmail.com"
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
        description: "Backend platform for health and fitness content management.",
        bullets: [
          "Built REST API endpoints for articles, comments and users.",
          "Added JWT authentication, Swagger documentation and Docker setup."
        ]
      },
      {
        title: "OpticGlass — Premium E-commerce Application",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Premium e-commerce app focused on product presentation and user experience.",
        bullets: [
          "Built responsive product pages and reusable UI components.",
          "Connected the frontend to an Express API and MongoDB database."
        ]
      },
      {
        title: "Restaurant App — Discovery Platform",
        stack: "React · Vite · Tailwind CSS · Zustand · i18next",
        description: "Restaurant discovery app with multilingual support and responsive design.",
        bullets: [
          "Built restaurant and dish discovery with dark mode and SEO basics.",
          "Added state management, translations and testing setup."
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
          "Built and deployed web apps with React, Next.js, Node.js, Express, MongoDB, Django and PostgreSQL.",
          "Developed responsive interfaces, REST APIs, JWT authentication and protected routes."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Created landing pages, branding concepts and web design for online presence.",
          "Applied SEO, UX writing and marketing principles to digital projects."
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
    email: "shayacoca20@gmail.com"
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
        description: "Plateforme backend pour la gestion de contenus santé et fitness.",
        bullets: [
          "Création d'endpoints REST pour articles, commentaires et utilisateurs.",
          "Ajout de l'authentification JWT, documentation Swagger et configuration Docker."
        ]
      },
      {
        title: "OpticGlass — Application E-commerce Premium",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Application e-commerce premium centrée sur la présentation produit et l'expérience utilisateur.",
        bullets: [
          "Création de pages produits responsives et composants UI réutilisables.",
          "Connexion du frontend à une API Express et une base MongoDB."
        ]
      },
      {
        title: "Restaurant App — Plateforme de Découverte",
        stack: "React · Vite · Tailwind CSS · Zustand · i18next",
        description: "Application de découverte de restaurants avec support multilingue et design responsive.",
        bullets: [
          "Création d'une recherche restaurants/plats avec dark mode et bases SEO.",
          "Ajout de la gestion d'état, traductions et configuration de tests."
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
          "Développement et déploiement d'applications avec React, Next.js, Node.js, Express, MongoDB, Django et PostgreSQL.",
          "Création d'interfaces responsives, API REST, authentification JWT et routes protégées."
        ]
      },
      {
        title: "Marketing Digital & Web Creator — Projets Personnels",
        date: "2024 – Présent",
        bullets: [
          "Création de landing pages, concepts de branding et web design pour présence en ligne.",
          "Application du SEO, UX writing et principes marketing aux projets digitaux."
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
