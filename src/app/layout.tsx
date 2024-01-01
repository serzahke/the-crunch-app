import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import AuthProvider from './context/AuthProvider'
import { ThemeProvider } from './context/ThemeProvider'
import ClientThemeWrapper from './context/clientThemeWrapper'
import { SpeedInsights } from '@vercel/speed-insights/next';

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from './api/uploadthing/core'
import "@uploadthing/react/styles.css";


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
              <main className="p-6" style={{ minHeight: '100vh' }}>
                <NextSSRPlugin
                  /**
                   * The `extractRouterConfig` will extract **only** the route configs
                   * from the router to prevent additional information from being
                   * leaked to the client. The data passed to the client is the same
                   * as if you were to fetch `/api/uploadthing` directly.
                   */
                  routerConfig={extractRouterConfig(ourFileRouter)}
                />
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
