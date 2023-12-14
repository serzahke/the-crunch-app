import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Crunch App',
  description: 'The Crunch App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="p-6">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
