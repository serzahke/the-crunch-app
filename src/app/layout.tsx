import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './context/AuthProvider'
import { ThemeProvider } from './context/ThemeProvider'
import ClientThemeWrapper from './context/clientThemeWrapper'

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
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <ClientThemeWrapper>
              <Navbar />
              <main className="p-6" style={{minHeight: '100vh'}}>
                {children}
              </main>
            </ClientThemeWrapper>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
