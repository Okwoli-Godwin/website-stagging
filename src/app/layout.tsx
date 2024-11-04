import { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import Footer from '@/app/_components/_landing-page/footer';
import TopNavbar from '@/app/_components/_layout/TopNavbar';
import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

const manrope = Manrope({
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-us' className={cn(manrope.variable, inter.variable)}>
      <body>
        <div className='min-h-screen flex flex-col'>
          <TopNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
