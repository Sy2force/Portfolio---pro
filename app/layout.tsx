import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shay Acoca | Full Stack Developer",
  description: "Full Stack Developer based in Jerusalem, Israel. Building modern web applications with React, Next.js, Node.js, MongoDB and Django, with a background in digital marketing and web design.",
  keywords: ["Shay Acoca", "Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "Web Developer Israel", "Digital Marketing", "Startup Developer", "MongoDB", "Django"],
  openGraph: {
    title: "Shay Acoca — Full Stack Developer",
    description: "Portfolio of Shay Acoca, Full Stack Developer focused on React, Next.js, Node.js, MongoDB, Django and modern web applications.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
