import { AppContextProvider } from './context/context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyDgiiAPP',
  description: 'Facturador',
}

export default function RootLayout({ children }) {
  return (
    <AppContextProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AppContextProvider>
  )
}
