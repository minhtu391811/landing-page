import type React from "react"
export const runtime = "edge"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Milo Street",
  description: "Milo Street",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
