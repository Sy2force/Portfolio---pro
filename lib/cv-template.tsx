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
    lineHeight: 1.42,
    color: "#1F2933",
    backgroundColor: "#FFFFFF",
    paddingTop: 34,
    paddingBottom: 32,
    paddingHorizontal: 38,
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: 0.6,
    color: "#111827",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
    color: "#1F2937",
    marginBottom: 3,
  },
  stack: {
    fontSize: 10.5,
    color: "#4B5563",
    marginBottom: 8,
  },
  contacts: {
    fontSize: 9.5,
    color: "#374151",
    lineHeight: 1.4,
  },
  separator: {
    borderBottomColor: "#D1D5DB",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#111827",
    borderBottomColor: "#D1D5DB",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 6,
    marginTop: 14,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.42,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9.6,
    lineHeight: 1.35,
    marginBottom: 2.5,
    marginLeft: 12,
  },
  projectTitle: {
    fontSize: 10.4,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 2,
  },
  projectStack: {
    fontSize: 9,
    fontStyle: "italic",
    color: "#4B5563",
    marginBottom: 3,
  },
  experienceHeader: {
    fontSize: 10.2,
    fontWeight: 600,
    marginBottom: 1,
    color: "#111827",
  },
  experienceDate: {
    fontSize: 9.4,
    color: "#4B5563",
    marginBottom: 3,
  },
  languages: {
    fontSize: 10,
    lineHeight: 1.42,
  },
  footer: {
    marginTop: 20,
    fontSize: 9,
    color: "#9CA3AF",
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

      <View style={styles.separator} />

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
        <View key={index}>
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
        <View key={index}>
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
      <Text style={styles.footer}>
        {content.footer}
      </Text>
    </Page>
  </Document>
)
