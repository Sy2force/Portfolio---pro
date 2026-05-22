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
    color: "#111827",
    backgroundColor: "#ffffff",
  },
  topBar: {
    backgroundColor: "#8B5CF6",
    height: 6,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  sidebar: {
    width: "32%",
    backgroundColor: "#F5F3FF",
    padding: 20,
  },
  mainContent: {
    width: "68%",
    padding: 25,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#8B5CF6",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 700,
    color: "#ffffff",
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarSectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111827",
    marginBottom: 8,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  sidebarText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: "#4B5563",
    marginBottom: 3,
  },
  sidebarTextBold: {
    fontSize: 8,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 2,
  },
  sidebarCategory: {
    fontSize: 8,
    fontWeight: 600,
    color: "#8B5CF6",
    marginBottom: 3,
  },
  mainHeader: {
    marginBottom: 20,
  },
  mainName: {
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#111827",
    marginBottom: 5,
  },
  mainTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "#8B5CF6",
    marginBottom: 15,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111827",
    marginBottom: 10,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#4B5563",
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 3,
  },
  projectStack: {
    fontSize: 8,
    fontStyle: "italic",
    color: "#8B5CF6",
    marginBottom: 3,
  },
  bullet: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 2,
    marginLeft: 15,
    color: "#4B5563",
  },
  experienceTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 2,
  },
  experienceDate: {
    fontSize: 8,
    color: "#8B5CF6",
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
            <Text style={styles.sidebarSectionTitle}>{content.header.location}</Text>
            <Text style={styles.sidebarText}>{content.header.email}</Text>
            <Text style={styles.sidebarText}>{content.header.portfolio}</Text>
            <Text style={styles.sidebarText}>{content.header.linkedin}</Text>
            <Text style={styles.sidebarText}>{content.header.github}</Text>
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
