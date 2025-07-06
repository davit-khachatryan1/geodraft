import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://geodraft.am'),
  title: 'GeoDraft - Չափագրական և Կադաստրային Ծառայություններ',
  description: 'Մասնագիտական չափագրական և կադաստրային ծառայություններ Հայաստանում։ Ճշգրիտ չափագրություն, կադաստրային գործեր և իրավական ծառայություններ։',
  keywords: 'չափագրություն, կադաստր, հողափաստագրություն, Հայաստան, surveying, cadastral, Armenia',
  authors: [{ name: 'GeoDraft' }],
  creator: 'GeoDraft',
  publisher: 'GeoDraft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
      openGraph: {
      type: 'website',
      locale: 'hy_AM',
      url: 'https://geodraft.am',
      title: 'GeoDraft - Չափագրական և Կադաստրային Ծառայություններ',
      description: 'Մասնագիտական չափագրական և կադաստրային ծառայություններ Հայաստանում։',
      siteName: 'GeoDraft',
    },
    twitter: {
      card: 'summary',
      title: 'GeoDraft - Surveying and Cadastral Services',
      description: 'Professional surveying and cadastral services in Armenia.',
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hy" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
} 