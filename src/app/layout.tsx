import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-Commerce',
  description: 'Next E-Commerce app latest version',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ clsx(inter.className, 'bg-slate-700')}>
        <Navbar />
        <main className='h-screen p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
