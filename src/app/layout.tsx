import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

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
          <div className="w-full h-full">
            {children}
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
