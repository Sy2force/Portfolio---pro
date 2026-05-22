import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"
import { CVContent } from "./cv-content"

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.4,
    color: "#111111",
    backgroundColor: "#ffffff",
  },
  topBar: {
    backgroundColor: "#000000",
    height: 5,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  sidebar: {
    width: "32%",
    backgroundColor: "#F5F5F5",
    padding: 22,
  },
  mainContent: {
    width: "68%",
    padding: 30,
  },
  avatarCircle: {
    width: 55,
    height: 55,
    backgroundColor: "#000000",
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    display: "flex",
  },
  avatarText: {
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    textAlign: "center",
  },
  sidebarSection: {
    marginBottom: 18,
  },
  sidebarSectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111111",
    marginBottom: 7,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  sidebarText: {
    fontSize: 8.2,
    lineHeight: 1.4,
    color: "#222222",
    marginBottom: 2.5,
  },
  sidebarTextBold: {
    fontSize: 8.2,
    fontWeight: 600,
    color: "#111111",
    marginBottom: 2,
  },
  sidebarCategory: {
    fontSize: 8.2,
    fontWeight: 600,
    color: "#000000",
    marginBottom: 2.5,
  },
  mainHeader: {
    marginBottom: 16,
  },
  mainName: {
    fontSize: 23,
    fontWeight: 700,
    letterSpacing: 0.8,
    color: "#111111",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: "#333333",
    marginTop: 6,
    marginBottom: 16,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#111111",
    marginBottom: 8,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  text: {
    fontSize: 8.9,
    lineHeight: 1.4,
    color: "#222222",
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#111111",
    marginBottom: 2.5,
  },
  projectStack: {
    fontSize: 8.2,
    fontStyle: "italic",
    color: "#444444",
    marginBottom: 2.5,
  },
  bullet: {
    fontSize: 8.4,
    lineHeight: 1.35,
    marginBottom: 2.5,
    marginLeft: 15,
    color: "#222222",
  },
  experienceTitle: {
    fontSize: 8.9,
    fontWeight: 700,
    color: "#111111",
    marginBottom: 2,
  },
  experienceDate: {
    fontSize: 8.2,
    color: "#555555",
    marginBottom: 3,
    fontWeight: 600,
  },
})

interface CVDocumentProps {
  content: CVContent
}

export const CVDocument: React.FC<CVDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Top Bar */}
      <View style={styles.topBar} />

      {/* Container */}
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Avatar */}
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>SA</Text>
          </View>

          {/* Contact */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>Contact</Text>
            <Text style={styles.sidebarText}>{content.header.location}</Text>
            <Text style={styles.sidebarText}>{content.header.phone}</Text>
            <Text style={styles.sidebarText}>{content.header.email}</Text>
          </View>

          {/* Skills */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{content.skills.title}</Text>
            {content.skills.categories.map((category, index) => (
              <View key={index} style={{ marginBottom: 6 }}>
                <Text style={styles.sidebarCategory}>{category.name}</Text>
                <Text style={styles.sidebarText}>{category.skills}</Text>
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{content.education.title}</Text>
            {content.education.items.map((item, index) => (
              <View key={index}>
                <Text style={styles.sidebarTextBold}>{item.title}</Text>
                <Text style={styles.sidebarText}>{item.date}</Text>
              </View>
            ))}
          </View>

          {/* Languages */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>{content.languages.title}</Text>
            {content.languages.items.map((item, index) => (
              <Text key={index} style={styles.sidebarText}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Header */}
          <View style={styles.mainHeader}>
            <Text style={styles.mainName}>{content.header.name}</Text>
            <Text style={styles.mainTitle}>{content.header.title}</Text>
          </View>

          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{content.summary.title}</Text>
            <Text style={styles.text}>
              {content.summary.text}
            </Text>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{content.projects.title}</Text>
            {content.projects.items.slice(0, 3).map((project, index) => (
              <View key={index} wrap={false}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectStack}>{project.stack}</Text>
                <Text style={styles.text}>
                  {project.description}
                </Text>
                {project.bullets.slice(0, 2).map((bullet, bIndex) => (
                  <Text key={bIndex} style={styles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{content.experience.title}</Text>
            {content.experience.items.map((item, index) => (
              <View key={index} wrap={false}>
                <Text style={styles.experienceTitle}>{item.title}</Text>
                <Text style={styles.experienceDate}>{item.date}</Text>
                {item.bullets.slice(0, 3).map((bullet, bIndex) => (
                  <Text key={bIndex} style={styles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
