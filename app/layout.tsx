import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, PT_Mono, Cinzel, EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EcclesiasticalFrame } from "@/components/ecclesiastical-frame"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
})

const _cinzel = Cinzel({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
})

const _ebGaramond = EB_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "VolpinVeritas",
  description: "Imprenditore. Cattolico. Militante.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${_ptMono.variable} ${_cinzel.variable} ${_ebGaramond.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        <EcclesiasticalFrame />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
