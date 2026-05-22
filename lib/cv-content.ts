export interface CVContent {
  header: {
    name: string
    title: string
    stack: string
    location: string
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
    email: "shayacoca20@gmail.com",
    portfolio: "shay-acoca-portfolio.vercel.app",
    linkedin: "linkedin.com/in/shay-acoca-046311302",
    github: "github.com/Sy2force"
  },
  summary: {
    title: "PROFESSIONAL SUMMARY",
    text: "Full Stack Developer based in Jerusalem, with a background in digital marketing, web design and content creation. I build responsive web applications using React, Next.js, Node.js, Express, MongoDB and Django, with a strong focus on clean interfaces, structured backend logic and practical user experience. I am looking for a web development opportunity where I can contribute to real products, collaborate within a professional team and continue growing technically."
  },
  skills: {
    title: "TECHNICAL SKILLS",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, Django REST Framework, REST APIs, JWT, MongoDB, PostgreSQL"
      },
      {
        name: "Tools & Deployment",
        skills: "Git, GitHub, Vercel, Render, MongoDB Atlas, Postman, Docker, Swagger"
      },
      {
        name: "Digital & Product",
        skills: "Web Design, Landing Pages, Digital Marketing, SEO Basics, Content Creation, UX Writing"
      }
    ]
  },
  projects: {
    title: "SELECTED PROJECTS",
    items: [
      {
        title: "FitWell — Full Stack Health & Fitness Platform",
        stack: "Django · Django REST Framework · PostgreSQL · JWT · Swagger · Docker",
        description: "Built a health and fitness platform focused on API structure, content management and user-oriented backend features.",
        bullets: [
          "Developed REST API logic for articles, comments and user-related features.",
          "Implemented authentication, documentation and deployment-ready project organization."
        ]
      },
      {
        title: "OpticGlass — Luxury Eyewear E-commerce Application",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Built a modern premium eyewear e-commerce application with a strong focus on product presentation and responsive UI.",
        bullets: [
          "Created product catalog, detail pages and reusable frontend components.",
          "Structured frontend and backend logic for an e-commerce-style application."
        ]
      },
      {
        title: "Food App — Restaurant & Ordering Interface",
        stack: "React · JavaScript · CSS · API Logic",
        description: "Built a responsive food application to present meals, categories and ordering flows in a clear interface.",
        bullets: [
          "Developed mobile-friendly layouts and category-based UI structure.",
          "Improved visual hierarchy, component organization and user experience."
        ]
      },
      {
        title: "Digital Business Card App — Full Stack SaaS-style Application",
        stack: "React · Node.js · Express · MongoDB · JWT · Tailwind CSS",
        description: "Built a digital business card platform with authentication, protected routes and dashboard-oriented features.",
        bullets: [
          "Implemented user authentication, protected routes and role-based logic.",
          "Connected frontend and backend features with a structured full stack approach."
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
          "Built and deployed web applications using React, Next.js, Node.js, Express, MongoDB and Django.",
          "Developed frontend interfaces, backend APIs, authentication systems and database-connected features.",
          "Used Git, GitHub, Vercel, Render and MongoDB Atlas for development and deployment workflows."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Created digital concepts combining web design, branding, landing pages and content strategy.",
          "Applied marketing principles to improve messaging, visual hierarchy and project presentation."
        ]
      },
      {
        title: "IDF Service — Guivati Unit",
        date: "2019 – 2022",
        bullets: [
          "Completed full military service in a structured and high-responsibility environment.",
          "Developed discipline, reliability, teamwork and the ability to stay focused under pressure."
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
        description: "Training in frontend and backend web development: React, Node.js, MongoDB, APIs, authentication, project architecture and deployment."
      },
      {
        title: "Habetzefer, Tel Aviv — Digital Marketing & Content Creation",
        date: "2024",
        description: "Training in digital marketing strategy, content creation, social media, branding and campaign structure."
      }
    ]
  },
  languages: {
    title: "LANGUAGES",
    items: [
      "French: Native",
      "Hebrew: Professional",
      "English: Professional"
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
    email: "shayacoca20@gmail.com",
    portfolio: "shay-acoca-portfolio.vercel.app",
    linkedin: "linkedin.com/in/shay-acoca-046311302",
    github: "github.com/Sy2force"
  },
  summary: {
    title: "PROFIL PROFESSIONNEL",
    text: "Développeur Full Stack basé à Jérusalem, avec un parcours en marketing digital, web design et création de contenu. Je conçois des applications web responsives avec React, Next.js, Node.js, Express, MongoDB et Django, avec une attention particulière portée aux interfaces propres, à la logique backend structurée et à l'expérience utilisateur. Je recherche une opportunité en développement web où contribuer à des produits concrets, collaborer au sein d'une équipe professionnelle et continuer à progresser techniquement."
  },
  skills: {
    title: "COMPÉTENCES TECHNIQUES",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, Django REST Framework, API REST, JWT, MongoDB, PostgreSQL"
      },
      {
        name: "Outils & Déploiement",
        skills: "Git, GitHub, Vercel, Render, MongoDB Atlas, Postman, Docker, Swagger"
      },
      {
        name: "Digital & Produit",
        skills: "Web Design, Landing Pages, Marketing Digital, Bases SEO, Création de Contenu, UX Writing"
      }
    ]
  },
  projects: {
    title: "PROJETS SÉLECTIONNÉS",
    items: [
      {
        title: "FitWell — Plateforme Full Stack Santé & Fitness",
        stack: "Django · Django REST Framework · PostgreSQL · JWT · Swagger · Docker",
        description: "Développement d'une plateforme santé et fitness centrée sur la structure API, la gestion de contenu et les fonctionnalités backend.",
        bullets: [
          "Création d'une logique API REST pour les articles, commentaires et fonctionnalités utilisateur.",
          "Mise en place de l'authentification, de la documentation et d'une organisation prête au déploiement."
        ]
      },
      {
        title: "OpticGlass — Application E-commerce de Lunettes Premium",
        stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB",
        description: "Développement d'une application e-commerce moderne pour lunettes premium, avec un focus sur la présentation produit et l'interface responsive.",
        bullets: [
          "Création du catalogue produit, des pages détail et de composants frontend réutilisables.",
          "Structuration de la logique frontend et backend pour une application de type e-commerce."
        ]
      },
      {
        title: "Food App — Interface Restaurant & Commande",
        stack: "React · JavaScript · CSS · API Logic",
        description: "Développement d'une application responsive pour présenter des plats, catégories et parcours de commande dans une interface claire.",
        bullets: [
          "Création de layouts mobile-friendly et d'une structure UI basée sur les catégories.",
          "Amélioration de la hiérarchie visuelle, de l'organisation des composants et de l'expérience utilisateur."
        ]
      },
      {
        title: "Digital Business Card App — Application Full Stack Type SaaS",
        stack: "React · Node.js · Express · MongoDB · JWT · Tailwind CSS",
        description: "Développement d'une plateforme de cartes de visite numériques avec authentification, routes protégées et fonctionnalités dashboard.",
        bullets: [
          "Mise en place de l'authentification utilisateur, des routes protégées et de la logique de rôles.",
          "Connexion des fonctionnalités frontend et backend dans une approche full stack structurée."
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
          "Développement et déploiement d'applications web avec React, Next.js, Node.js, Express, MongoDB et Django.",
          "Création d'interfaces frontend, d'API backend, de systèmes d'authentification et de fonctionnalités connectées aux bases de données.",
          "Utilisation de Git, GitHub, Vercel, Render et MongoDB Atlas dans les workflows de développement et déploiement."
        ]
      },
      {
        title: "Marketing Digital & Création Web — Projets personnels",
        date: "2024 – Présent",
        bullets: [
          "Création de concepts digitaux combinant web design, branding, landing pages et stratégie de contenu.",
          "Application de principes marketing pour améliorer les messages, la hiérarchie visuelle et la présentation des projets."
        ]
      },
      {
        title: "Service Militaire — Unité Guivati, IDF",
        date: "2019 – 2022",
        bullets: [
          "Service militaire complet dans un environnement structuré et à haute responsabilité.",
          "Développement de la discipline, de la fiabilité, du travail d'équipe et de la capacité à rester concentré sous pression."
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
        description: "Formation en développement web frontend et backend : React, Node.js, MongoDB, API, authentification, architecture de projet et déploiement."
      },
      {
        title: "Habetzefer, Tel Aviv — Marketing Digital & Création de Contenu",
        date: "2024",
        description: "Formation en stratégie marketing digital, création de contenu, réseaux sociaux, branding et structure de campagnes."
      }
    ]
  },
  languages: {
    title: "LANGUES",
    items: [
      "Français : Langue maternelle",
      "Hébreu : Niveau professionnel",
      "Anglais : Niveau professionnel"
    ]
  },
  footer: "Shay Acoca · Développeur Full Stack · shay-acoca-portfolio.vercel.app"
}
