import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageDrawer from "@/app/components/pageDrawer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Md. Ariful Amin's Portfolio`,
  description: 'Software Engineer || Samsung R&D || C++',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
