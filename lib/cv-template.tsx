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
    lineHeight: 1.35,
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
    paddingTop: 24,
    paddingBottom: 28,
    paddingHorizontal: 32,
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: 800,
    letterSpacing: 2,
    color: "#0f172a",
    textTransform: "uppercase",
    marginBottom: 3,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    color: "#3b82f6",
    marginBottom: 2,
  },
  stack: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  contacts: {
    fontSize: 8,
    color: "#475569",
    lineHeight: 1.5,
    letterSpacing: 0.2,
  },
  headerSeparator: {
    borderBottomColor: "#3b82f6",
    borderBottomWidth: 2,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#0f172a",
    borderBottomColor: "#3b82f6",
    borderBottomWidth: 1.5,
    paddingBottom: 3,
    marginBottom: 7,
    marginTop: 10,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.38,
    marginBottom: 3,
    color: "#334155",
  },
  bullet: {
    fontSize: 8.5,
    lineHeight: 1.33,
    marginBottom: 2,
    marginLeft: 14,
    color: "#334155",
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 2,
  },
  projectStack: {
    fontSize: 8.5,
    fontStyle: "italic",
    color: "#3b82f6",
    marginBottom: 2,
    letterSpacing: 0.2,
  },
  experienceHeader: {
    fontSize: 9.5,
    fontWeight: 700,
    marginBottom: 1,
    color: "#0f172a",
  },
  experienceDate: {
    fontSize: 8.5,
    color: "#3b82f6",
    marginBottom: 3,
    fontWeight: 600,
  },
  languages: {
    fontSize: 9,
    lineHeight: 1.38,
    color: "#334155",
  },
  footer: {
    position: "absolute",
    bottom: 14,
    left: 32,
    right: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#3b82f6",
    borderTopWidth: 1.5,
    paddingTop: 5,
  },
  footerText: {
    fontSize: 7,
    color: "#64748b",
    letterSpacing: 0.3,
  },
  pageNumber: {
    fontSize: 7,
    color: "#3b82f6",
    fontWeight: 600,
  },
})

interface CVDocumentProps {
  content: CVContent
}

export const CVDocument: React.FC<CVDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{content.header.name}</Text>
        <Text style={styles.title}>{content.header.title}</Text>
        <Text style={styles.stack}>{content.header.stack}</Text>
        <Text style={styles.contacts}>
          {content.header.location} | {content.header.email} | {content.header.portfolio} | {content.header.linkedin} | {content.header.github}
        </Text>
      </View>

      <View style={styles.headerSeparator} />

      {/* Summary */}
      <Text style={styles.sectionTitle}>{content.summary.title}</Text>
      <Text style={styles.text}>
        {content.summary.text}
      </Text>

      {/* Skills */}
      <Text style={styles.sectionTitle}>{content.skills.title}</Text>
      {content.skills.categories.map((category, index) => (
        <Text key={index} style={styles.text}>
          <Text style={{ fontWeight: 600 }}>{category.name}:</Text> {category.skills}
        </Text>
      ))}

      {/* Projects */}
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

      {/* Experience */}
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

      {/* Education */}
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

      {/* Languages */}
      <Text style={styles.sectionTitle}>{content.languages.title}</Text>
      {content.languages.items.map((item, index) => (
        <Text key={index} style={styles.languages}>
          {item}
        </Text>
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{content.footer}</Text>
        <Text style={styles.pageNumber}>Page 1 / 1</Text>
      </View>
    </Page>
  </Document>
)
