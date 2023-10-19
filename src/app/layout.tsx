import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Credits, NavbarApp } from '@/components'

const nunito = Nunito_Sans({
  weight: ['300', '500', '600', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rest Country API',
  description: 'This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor created by Rafael Sequeira Sandoval'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className} suppressHydrationWarning>
        <Providers>
          <NavbarApp />
          <main className="container mx-auto max-w-screen-lg px-6">
            {children}
          </main>
         <Credits />
        </Providers>
      </body>
    </html>
  )
}