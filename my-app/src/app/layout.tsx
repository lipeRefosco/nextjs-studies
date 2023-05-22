import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users of Github - A lipeRefosco project.',
  description: 'This web page is a study project using only Next.js documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-fit flex flex-col justify-center m-auto border border-green-300">
        {children}
        </main>
      </body>
    </html>
  )
}
