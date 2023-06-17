import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import ToasterProvider from '@/providers/ToasterProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import Player from '@/components/Player'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Nabz',
  description: 'Music platform for the people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={font.className}>
            <ToasterProvider />
            <SupabaseProvider>
                <UserProvider>
                    <ModalProvider />
                    <Sidebar>
                        {children}
                    </Sidebar>
                    <Player />
                </UserProvider>
            </SupabaseProvider>
        </body>
    </html>
  )
}
