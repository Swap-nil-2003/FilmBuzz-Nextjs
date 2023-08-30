import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie App using Next.js',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <nav className='px-10 pt-5'>
          <Link prefetch href="/" className="text-xl font-bold">
            Film<span className='text-teal-600'>Buzz</span>
          </Link>
       </nav>
        {children}</body>
    </html>
  )
}
