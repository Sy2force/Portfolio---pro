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
    fontSize: 10,
    lineHeight: 1.6,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 45,
  },
  header: {
    marginBottom: 22,
  },
  name: {
    fontSize: 27,
    fontWeight: 700,
    letterSpacing: 2.5,
    color: "#111111",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    color: "#2563eb",
    marginBottom: 6,
  },
  stack: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 10,
    letterSpacing: 0.4,
    fontStyle: "italic",
  },
  contacts: {
    fontSize: 8,
    color: "#444444",
    lineHeight: 1.9,
    letterSpacing: 0.2,
  },
  headerSeparator: {
    borderBottomColor: "#2563eb",
    borderBottomWidth: 2.5,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: "#111111",
    borderBottomColor: "#2563eb",
    borderBottomWidth: 2,
    paddingBottom: 6,
    marginBottom: 14,
    marginTop: 20,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 5,
    color: "#333333"
  },
  bullet: {
    fontSize: 9.5,
    lineHeight: 1.5,
    marginBottom: 3.5,
    marginLeft: 20,
    color: "#333333"
  },
  projectTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    color: "#111111",
    marginBottom: 4,
  },
  projectStack: {
    fontSize: 8.5,
    fontStyle: "italic",
    color: "#2563eb",
    marginBottom: 4,
    letterSpacing: 0.4,
  },
  experienceHeader: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 3,
    color: "#111111",
  },
  experienceDate: {
    fontSize: 9,
    color: "#2563eb",
    marginBottom: 5,
    fontWeight: 600,
  },
  languages: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#333333"
  },
  footer: {
    position: "absolute",
    bottom: 18,
    left: 45,
    right: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#e5e7eb",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 7,
    color: "#888888",
    letterSpacing: 0.3,
  },
  pageNumber: {
    fontSize: 7,
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
