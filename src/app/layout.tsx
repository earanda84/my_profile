import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio | Eric Aranda',
  description: 'Eric Aranda, profesional Ingeniero Mecánico con experiencia en proyectos de gases combustibles y desarrollo web fullstack JavaScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen min-w-full bg-[#0c070f] text-slate-400`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
