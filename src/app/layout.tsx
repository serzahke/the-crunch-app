import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import AuthProvider from './context/AuthProvider'
import { ThemeProvider } from './context/ThemeProvider'
import ClientThemeWrapper from './context/clientThemeWrapper'
import { SpeedInsights } from '@vercel/speed-insights/next';

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
                <SpeedInsights />
              </main>
            </ClientThemeWrapper>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
