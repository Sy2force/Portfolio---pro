import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shay Acoca | Full Stack Developer & Digital Marketing",
  description: "Portfolio of Shay Acoca, a full stack developer and digital marketing specialist based in Jerusalem, Israel. Projects built with React, Next.js, Node.js, MongoDB and modern web technologies.",
  keywords: ["Shay Acoca", "Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "Junior Developer", "Web Developer Israel", "Digital Marketing", "Startup Developer", "HackerU"],
  openGraph: {
    title: "Shay Acoca | Full Stack Developer & Digital Marketing",
    description: "Portfolio of Shay Acoca, a full stack developer and digital marketing specialist based in Jerusalem, Israel.",
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
