import { Inter } from 'next/font/google'
import './globals.css'

// TODO - update font here
const inter = Inter({ subsets: ['latin'] })

// TODO - update title and description here
export const metadata = {
  title: 'Bansal RealEstate',
  description: 'Your Properties Exepert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
