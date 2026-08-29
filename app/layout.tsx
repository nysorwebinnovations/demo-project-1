import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nexus.lk'),
  title: 'NEXUS — Premier Digital Agency & Web Presence for Sri Lanka',
  description:
    "Modern web presence for Sri Lanka's businesses. From innovative startups to established enterprises, NEXUS creates powerful digital solutions, e-commerce stores, PayHere integrations, and custom web applications that drive growth.",
  keywords: [
    'Sri Lanka digital agency',
    'web design Colombo',
    'Sri Lanka web development',
    'e-commerce Sri Lanka',
    'PayHere integration',
    'custom web application',
    'LKR payment gateway',
    'NEXUS digital studio',
  ],
  authors: [{ name: 'NEXUS Sri Lanka' }, { name: 'NYSOR Web Innovations' }],
  openGraph: {
    title: 'NEXUS — Modern Web Presence for Sri Lanka’s Businesses',
    description:
      'From innovative startups to established enterprises, NEXUS creates powerful digital solutions that drive growth.',
    type: 'website',
    locale: 'en_LK',
    siteName: 'NEXUS Sri Lanka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS — Modern Web Presence for Sri Lanka’s Businesses',
    description:
      'From innovative startups to established enterprises, NEXUS creates powerful digital solutions that drive growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
