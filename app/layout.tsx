import type { Metadata } from 'next'
import './globals.css'
import { ReduxProvider } from '../app/redux/provider';
import imgSrc2 from './img/Moviex.svg';
import Image from 'next/image';
import { LanguageProvider } from './providers/18nprovider';

export const metadata: Metadata = {
  title: 'Moviex',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='logo'>
          <div className='logo-content'>
            <Image src={imgSrc2} style={{ marginBottom: '15px' }} alt='logo' />
          </div>
        </div>
        <LanguageProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
