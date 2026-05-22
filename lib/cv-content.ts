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
    text: "Full Stack Developer based in Jerusalem, Israel, with a background in digital marketing, web design and content creation. I build modern, responsive web applications using React, Next.js, Node.js, Express, MongoDB and Django. My projects include e-commerce platforms, dashboards, REST APIs, authentication systems and clean user interfaces. I am looking for a developer role where I can contribute to real products, learn from a professional team and continue growing as a developer."
  },
  skills: {
    title: "TECHNICAL SKILLS",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design, Framer Motion"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, Django REST Framework, REST APIs, JWT Authentication, MongoDB, PostgreSQL"
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
        stack: "Django, Django REST Framework, PostgreSQL, JWT, Swagger, Docker",
        description: "Built a full stack health and fitness platform focused on backend API structure, content management and user-oriented features.",
        bullets: [
          "Developed REST API logic for articles, comments and user-related features.",
          "Implemented authentication structure and backend data management.",
          "Added API documentation and deployment-ready project organization.",
          "Focused on clean architecture, maintainability and practical backend workflows."
        ]
      },
      {
        title: "OpticGlass — Luxury E-commerce Web Application",
        stack: "React, Vite, Tailwind CSS, Node.js, Express, MongoDB",
        description: "Built a modern e-commerce web application for premium eyewear with a strong focus on product presentation, responsive UI and user experience.",
        bullets: [
          "Created product catalog, product detail pages and responsive frontend layouts.",
          "Structured frontend and backend logic for an e-commerce-style application.",
          "Worked on authentication structure, admin-oriented logic and reusable components.",
          "Focused on clean visual design, premium branding and deployment-ready architecture."
        ]
      },
      {
        title: "Food App — Restaurant & Food Ordering Interface",
        stack: "React, JavaScript, CSS, API Logic",
        description: "Built a responsive food application designed to present meals, categories and ordering flows through a clean and user-friendly interface.",
        bullets: [
          "Developed a modern responsive interface for food browsing and ordering.",
          "Built reusable components and category-based UI structure.",
          "Focused on mobile-friendly layouts and simple user experience.",
          "Improved visual hierarchy and frontend organization."
        ]
      },
      {
        title: "Digital Business Card App — Full Stack SaaS-style Application",
        stack: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
        description: "Built a digital business card platform with authentication, dashboard logic, protected routes and dynamic card management.",
        bullets: [
          "Implemented user authentication and protected routes.",
          "Built dashboard-oriented features and role-based logic.",
          "Created responsive interfaces for card creation and management.",
          "Connected frontend and backend logic with a structured full stack approach."
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
          "Built and deployed several web applications using React, Next.js, Node.js, Express, MongoDB and Django.",
          "Developed frontend interfaces, backend APIs, authentication systems and database-connected features.",
          "Improved project structure, UI consistency and responsive user experience across multiple applications.",
          "Used Git, GitHub, Vercel, Render and MongoDB Atlas for development and deployment workflows."
        ]
      },
      {
        title: "Digital Marketing & Web Creator — Personal Projects",
        date: "2024 – Present",
        bullets: [
          "Created digital concepts combining web design, branding, landing pages and content strategy.",
          "Applied marketing principles to improve messaging, visual hierarchy and project presentation.",
          "Worked on digital positioning, user experience and business-oriented website structure."
        ]
      },
      {
        title: "IDF Service — Guivati Unit",
        date: "2019 – 2022",
        bullets: [
          "Completed full military service in a structured and high-responsibility environment.",
          "Developed discipline, reliability, teamwork and the ability to stay focused under pressure.",
          "Learned to adapt quickly and work effectively in demanding conditions."
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
        description: "Training focused on frontend and backend web development, including React, Node.js, MongoDB, APIs, authentication, project architecture and deployment."
      },
      {
        title: "Habetzefer, Tel Aviv — Digital Marketing & Content Creation",
        date: "2024",
        description: "Studied digital marketing strategy, content creation, social media, branding and campaign structure."
      }
    ]
  },
  languages: {
    title: "LANGUAGES",
    items: [
      "French: Native",
      "Hebrew: Professional working proficiency",
      "English: Professional working proficiency"
    ]
  },
  footer: "Portfolio: shay-acoca-portfolio.vercel.app"
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
    text: "Développeur Full Stack basé à Jérusalem, avec un parcours en marketing digital, web design et création de contenu. Je conçois des applications web modernes et responsives avec React, Next.js, Node.js, Express, MongoDB et Django. Mes projets incluent des plateformes e-commerce, des dashboards, des API REST, des systèmes d'authentification et des interfaces utilisateur claires. Je recherche une opportunité en développement web où je pourrai contribuer à des produits concrets, apprendre au sein d'une équipe professionnelle et continuer à progresser techniquement."
  },
  skills: {
    title: "COMPÉTENCES TECHNIQUES",
    categories: [
      {
        name: "Frontend",
        skills: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design, Framer Motion"
      },
      {
        name: "Backend",
        skills: "Node.js, Express.js, Django, Django REST Framework, API REST, Authentification JWT, MongoDB, PostgreSQL"
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
        stack: "Django, Django REST Framework, PostgreSQL, JWT, Swagger, Docker",
        description: "Développement d'une plateforme full stack orientée santé et fitness, centrée sur la structure backend, la gestion de contenu et des fonctionnalités utilisateur.",
        bullets: [
          "Développement d'une logique API REST pour les articles, commentaires et fonctionnalités liées aux utilisateurs.",
          "Mise en place d'une structure d'authentification et de gestion des données backend.",
          "Ajout d'une documentation API et d'une organisation prête pour le déploiement.",
          "Travail axé sur une architecture propre, maintenable et adaptée à des workflows backend réels."
        ]
      },
      {
        title: "OpticGlass — Application E-commerce de Lunettes Premium",
        stack: "React, Vite, Tailwind CSS, Node.js, Express, MongoDB",
        description: "Développement d'une application e-commerce moderne pour lunettes premium, avec un fort accent sur la présentation produit, le responsive design et l'expérience utilisateur.",
        bullets: [
          "Création d'un catalogue produit, de pages détail produit et de layouts responsives.",
          "Structuration de la logique frontend et backend pour une application de type e-commerce.",
          "Travail sur l'authentification, la logique orientée administration et les composants réutilisables.",
          "Mise en avant d'un design visuel propre, d'un branding premium et d'une architecture prête au déploiement."
        ]
      },
      {
        title: "Food App — Interface Restaurant & Commande",
        stack: "React, JavaScript, CSS, API Logic",
        description: "Développement d'une application responsive destinée à présenter des plats, des catégories et un parcours de commande simple à travers une interface claire.",
        bullets: [
          "Développement d'une interface moderne et responsive pour la navigation de plats et la commande.",
          "Création de composants réutilisables et d'une structure par catégories.",
          "Optimisation de l'expérience mobile et de la simplicité d'utilisation.",
          "Amélioration de la hiérarchie visuelle et de l'organisation frontend."
        ]
      },
      {
        title: "Digital Business Card App — Application Full Stack Type SaaS",
        stack: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
        description: "Développement d'une plateforme de cartes de visite numériques avec authentification, dashboard, routes protégées et gestion dynamique des cartes.",
        bullets: [
          "Mise en place de l'authentification utilisateur et des routes protégées.",
          "Développement de fonctionnalités orientées dashboard et logique de rôles.",
          "Création d'interfaces responsives pour la création et la gestion de cartes.",
          "Connexion entre frontend et backend dans une approche full stack structurée."
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
          "Développement et déploiement de plusieurs applications web avec React, Next.js, Node.js, Express, MongoDB et Django.",
          "Création d'interfaces frontend, d'API backend, de systèmes d'authentification et de fonctionnalités connectées à des bases de données.",
          "Amélioration de la structure des projets, de la cohérence UI et de l'expérience responsive.",
          "Utilisation de Git, GitHub, Vercel, Render et MongoDB Atlas dans les workflows de développement et déploiement."
        ]
      },
      {
        title: "Marketing Digital & Création Web — Projets personnels",
        date: "2024 – Présent",
        bullets: [
          "Création de concepts digitaux combinant web design, branding, landing pages et stratégie de contenu.",
          "Application de principes marketing pour améliorer les messages, la hiérarchie visuelle et la présentation des projets.",
          "Travail sur le positionnement digital, l'expérience utilisateur et la structure de sites orientés business."
        ]
      },
      {
        title: "Service Militaire — Unité Guivati, IDF",
        date: "2019 – 2022",
        bullets: [
          "Service militaire complet dans un environnement structuré et à haute responsabilité.",
          "Développement de la discipline, de la fiabilité, du travail d'équipe et de la capacité à rester concentré sous pression.",
          "Apprentissage de l'adaptation rapide et du travail efficace dans des conditions exigeantes."
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
        description: "Formation axée sur le développement web frontend et backend : React, Node.js, MongoDB, API, authentification, architecture de projet et déploiement."
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
  footer: "Portfolio : shay-acoca-portfolio.vercel.app"
}
