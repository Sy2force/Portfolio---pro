import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from "@react-pdf/renderer"

Font.register({
  family: "Helvetica",
  fonts: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf", fontWeight: 400 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf", fontWeight: 500 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Bold.ttf", fontWeight: 700 },
  ],
})

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10.5,
    lineHeight: 1.45,
    color: "#1f2933",
    backgroundColor: "#ffffff",
    padding: 40,
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: 0.5,
    color: "#111827",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    color: "#374151",
    marginBottom: 8,
  },
  contact: {
    fontSize: 10.5,
    color: "#4b5563",
    marginBottom: 12,
  },
  separator: {
    borderBottomColor: "#d1d5db",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111827",
    borderBottomColor: "#d1d5db",
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 10.5,
    lineHeight: 1.45,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 10.2,
    lineHeight: 1.4,
    marginBottom: 3,
    marginLeft: 12,
  },
  projectTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    marginBottom: 2,
  },
  stack: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#4b5563",
    marginBottom: 4,
  },
  experienceHeader: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
  },
  experienceDate: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 4,
  },
  languages: {
    fontSize: 10.5,
    lineHeight: 1.45,
  },
  footer: {
    marginTop: 20,
    fontSize: 9,
    color: "#9ca3af",
    textAlign: "center",
  },
})

export const CVTemplate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>SHAY ACOCA</Text>
        <Text style={styles.title}>Full Stack Developer</Text>
        <Text style={styles.contact}>
          Jerusalem, Israel | shayacoca20@gmail.com | Portfolio: shay-acoca-portfolio.vercel.app |
          LinkedIn: linkedin.com/in/shay-acoca-046311302 | GitHub: github.com/Sy2force
        </Text>
      </View>

      <View style={styles.separator} />

      {/* Professional Summary */}
      <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
      <Text style={styles.text}>
        Full Stack Developer based in Jerusalem, Israel, with a background in digital marketing, web design and
        content creation. I build modern, responsive web applications using React, Next.js, Node.js, Express, MongoDB
        and Django. My projects include e-commerce platforms, dashboards, REST APIs, authentication systems and clean
        user interfaces. I am looking for a developer role where I can contribute to real products, learn from a
        professional team and continue growing as a developer.
      </Text>

      {/* Technical Skills */}
      <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 600 }}>Frontend:</Text> React, Next.js, JavaScript, TypeScript, HTML5, CSS3,
        Tailwind CSS, Responsive Design, Framer Motion
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 600 }}>Backend:</Text> Node.js, Express.js, Django, Django REST Framework, REST APIs,
        JWT Authentication, MongoDB, PostgreSQL
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 600 }}>Tools & Deployment:</Text> Git, GitHub, Vercel, Render, MongoDB Atlas,
        Postman, Docker, Swagger
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 600 }}>Digital & Product:</Text> Web Design, Landing Pages, Digital Marketing,
        SEO Basics, Content Creation, UX Writing
      </Text>

      {/* Selected Projects */}
      <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>

      <Text style={styles.projectTitle}>FitWell — Full Stack Health & Fitness Platform</Text>
      <Text style={styles.stack}>
        Django · Django REST Framework · PostgreSQL · JWT · Swagger · Docker
      </Text>
      <Text style={styles.text}>
        Built a full stack health and fitness platform focused on API structure, content management and user-oriented
        features.
      </Text>
      <Text style={styles.bullet}>• Developed REST API logic for articles, comments and user-related features.</Text>
      <Text style={styles.bullet}>• Implemented authentication structure and backend data management.</Text>
      <Text style={styles.bullet}>• Added API documentation and deployment-ready project organization.</Text>
      <Text style={styles.bullet}>• Focused on clean architecture, maintainability and practical backend workflows.</Text>

      <Text style={styles.projectTitle}>OpticGlass — Luxury E-commerce Web Application</Text>
      <Text style={styles.stack}>React · Vite · Tailwind CSS · Node.js · Express · MongoDB</Text>
      <Text style={styles.text}>
        Built a modern e-commerce web application for premium eyewear with a strong focus on product presentation,
        responsive UI and user experience.
      </Text>
      <Text style={styles.bullet}>• Created product catalog, product detail pages and responsive frontend layouts.</Text>
      <Text style={styles.bullet}>• Structured frontend and backend logic for an e-commerce-style application.</Text>
      <Text style={styles.bullet}>• Worked on authentication structure, admin-oriented logic and reusable components.</Text>
      <Text style={styles.bullet}>• Focused on clean visual design, premium branding and deployment-ready architecture.</Text>

      <Text style={styles.projectTitle}>Food App — Restaurant & Food Ordering Interface</Text>
      <Text style={styles.stack}>React · JavaScript · CSS · API Logic</Text>
      <Text style={styles.text}>
        Built a responsive food application designed to present meals, categories and ordering flows through a clean
        and user-friendly interface.
      </Text>
      <Text style={styles.bullet}>• Developed a modern responsive interface for food browsing and ordering.</Text>
      <Text style={styles.bullet}>• Built reusable components and category-based UI structure.</Text>
      <Text style={styles.bullet}>• Focused on mobile-friendly layouts and simple user experience.</Text>
      <Text style={styles.bullet}>• Improved visual hierarchy and frontend organization.</Text>

      <Text style={styles.projectTitle}>Digital Business Card App — Full Stack SaaS-style Application</Text>
      <Text style={styles.stack}>React · Node.js · Express · MongoDB · JWT · Tailwind CSS</Text>
      <Text style={styles.text}>
        Built a digital business card platform with authentication, dashboard logic, protected routes and dynamic
        card management.
      </Text>
      <Text style={styles.bullet}>• Implemented user authentication and protected routes.</Text>
      <Text style={styles.bullet}>• Built dashboard-oriented features and role-based logic.</Text>
      <Text style={styles.bullet}>• Created responsive interfaces for card creation and management.</Text>
      <Text style={styles.bullet}>• Connected frontend and backend logic with a structured full stack approach.</Text>

      {/* Experience */}
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>

      <Text style={styles.experienceHeader}>Full Stack Developer — Personal Projects & Portfolio</Text>
      <Text style={styles.experienceDate}>2024 – Present</Text>
      <Text style={styles.bullet}>• Built and deployed several web applications using React, Next.js, Node.js, Express, MongoDB and Django.</Text>
      <Text style={styles.bullet}>• Developed frontend interfaces, backend APIs, authentication systems and database-connected features.</Text>
      <Text style={styles.bullet}>• Improved project structure, UI consistency and responsive user experience across multiple applications.</Text>
      <Text style={styles.bullet}>• Used Git, GitHub, Vercel, Render and MongoDB Atlas for development and deployment workflows.</Text>

      <Text style={styles.experienceHeader}>Digital Marketing & Web Creator — Personal Projects</Text>
      <Text style={styles.experienceDate}>2024 – Present</Text>
      <Text style={styles.bullet}>• Created digital concepts combining web design, branding, landing pages and content strategy.</Text>
      <Text style={styles.bullet}>• Applied marketing principles to improve messaging, visual hierarchy and project presentation.</Text>
      <Text style={styles.bullet}>• Worked on digital positioning, user experience and business-oriented website structure.</Text>

      <Text style={styles.experienceHeader}>IDF Service — Guivati Unit</Text>
      <Text style={styles.experienceDate}>2019 – 2022</Text>
      <Text style={styles.bullet}>• Completed full military service in a structured and high-responsibility environment.</Text>
      <Text style={styles.bullet}>• Developed discipline, reliability, teamwork and the ability to stay focused under pressure.</Text>
      <Text style={styles.bullet}>• Learned to adapt quickly and work effectively in demanding conditions.</Text>

      {/* Education */}
      <Text style={styles.sectionTitle}>EDUCATION</Text>

      <Text style={styles.experienceHeader}>HackerU — Full Stack Development</Text>
      <Text style={styles.experienceDate}>2024 – 2026</Text>
      <Text style={styles.text}>
        Training focused on frontend and backend web development, including React, Node.js, MongoDB, APIs, authentication,
        project architecture and deployment.
      </Text>

      <Text style={styles.experienceHeader}>Habetzefer, Tel Aviv — Digital Marketing & Content Creation</Text>
      <Text style={styles.experienceDate}>2024</Text>
      <Text style={styles.text}>
        Studied digital marketing strategy, content creation, social media, branding and campaign structure.
      </Text>

      {/* Languages */}
      <Text style={styles.sectionTitle}>LANGUAGES</Text>
      <Text style={styles.languages}>French: Native</Text>
      <Text style={styles.languages}>Hebrew: Professional working proficiency</Text>
      <Text style={styles.languages}>English: Professional working proficiency</Text>

      {/* Footer */}
      <Text style={styles.footer}>Portfolio: shay-acoca-portfolio.vercel.app</Text>
    </Page>
  </Document>
)
