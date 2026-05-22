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
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  sidebar: {
    width: 190,
    backgroundColor: "#f8fafc",
    borderRightColor: "#e5e7eb",
    borderRightWidth: 1,
    padding: 25,
  },
  mainContent: {
    flex: 1,
    padding: 25,
  },
  sidebarName: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 2,
    color: "#111111",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "#2563eb",
    marginBottom: 4,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarSectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111111",
    marginBottom: 6,
    borderBottomColor: "#2563eb",
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  sidebarText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: "#333333",
    marginBottom: 2,
  },
  sidebarContact: {
    fontSize: 7.5,
    lineHeight: 1.5,
    color: "#444444",
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#111111",
    borderBottomColor: "#2563eb",
    borderBottomWidth: 1.5,
    paddingBottom: 4,
    marginBottom: 8,
    marginTop: 12,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 3,
    color: "#333333"
  },
  bullet: {
    fontSize: 8,
    lineHeight: 1.3,
    marginBottom: 2,
    marginLeft: 15,
    color: "#333333"
  },
  projectTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#111111",
    marginBottom: 2,
  },
  projectStack: {
    fontSize: 7.5,
    fontStyle: "italic",
    color: "#2563eb",
    marginBottom: 2,
  },
  experienceHeader: {
    fontSize: 9,
    fontWeight: 700,
    marginBottom: 1,
    color: "#111111",
  },
  experienceDate: {
    fontSize: 8,
    color: "#2563eb",
    marginBottom: 3,
    fontWeight: 600,
  },
  footer: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#e5e7eb",
    borderTopWidth: 1,
    paddingTop: 6,
    paddingHorizontal: 25,
  },
  footerText: {
    fontSize: 6,
    color: "#888888",
    letterSpacing: 0.2,
  },
  pageNumber: {
    fontSize: 6,
    color: "#2563eb",
    fontWeight: 600,
  },
})

interface CVDocumentProps {
  content: CVContent
}

export const CVDocument: React.FC<CVDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarName}>{content.header.name}</Text>
        <Text style={styles.sidebarTitle}>{content.header.title}</Text>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Contact</Text>
          <Text style={styles.sidebarContact}>{content.header.location}</Text>
          <Text style={styles.sidebarContact}>{content.header.email}</Text>
          <Text style={styles.sidebarContact}>{content.header.portfolio}</Text>
          <Text style={styles.sidebarContact}>{content.header.linkedin}</Text>
          <Text style={styles.sidebarContact}>{content.header.github}</Text>
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>{content.languages.title}</Text>
          {content.languages.items.map((item, index) => (
            <Text key={index} style={styles.sidebarText}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>{content.skills.title}</Text>
          {content.skills.categories.map((category, index) => (
            <View key={index} style={{ marginBottom: 6 }}>
              <Text style={{ fontWeight: 600, fontSize: 9, color: "#111111" }}>{category.name}</Text>
              <Text style={styles.sidebarText}>{category.skills}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>{content.summary.title}</Text>
        <Text style={styles.text}>
          {content.summary.text}
        </Text>

        <Text style={styles.sectionTitle}>{content.projects.title}</Text>
        {content.projects.items.map((project, index) => (
          <View key={index} wrap={false}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectStack}>{project.stack}</Text>
            <Text style={styles.text}>
              {project.description}
            </Text>
            {project.bullets.map((bullet, bIndex) => (
              <Text key={bIndex} style={styles.bullet}>• {bullet}</Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{content.experience.title}</Text>
        {content.experience.items.map((item, index) => (
          <View key={index} wrap={false}>
            <Text style={styles.experienceHeader}>{item.title}</Text>
            <Text style={styles.experienceDate}>{item.date}</Text>
            {item.bullets.map((bullet, bIndex) => (
              <Text key={bIndex} style={styles.bullet}>• {bullet}</Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{content.education.title}</Text>
        {content.education.items.map((item, index) => (
          <View key={index}>
            <Text style={styles.experienceHeader}>{item.title}</Text>
            <Text style={styles.experienceDate}>{item.date}</Text>
            <Text style={styles.text}>
              {item.description}
            </Text>
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{content.footer}</Text>
          <Text style={styles.pageNumber}>Page 1 / 1</Text>
        </View>
      </View>
    </Page>
  </Document>
)
