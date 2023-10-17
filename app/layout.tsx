import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'ContriQuest',
  description: 'A platform that enables developers to track and showcase their work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <main className='h-full'>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
