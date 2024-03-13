import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'

const font = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'relative h-full text-black antialiased',
            font.className
          )}
        >
          <Navbar />
          <div className="w-full py-12">
            {children}
            <Toaster />
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
