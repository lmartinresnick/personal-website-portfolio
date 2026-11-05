import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../index.css';
import '../App.css';
import '../components/header/Header.css';
import '../components/footer/Footer.css';
import '../screens/about/AboutPage.css';
import '../screens/projects/ProjectsPage.css';
import '../screens/contact/ContactPage.css';

export const metadata: Metadata = {
  title: 'Luke Martin Resnick',
  description: 'Luke Martin-Resnick is a software engineer who specializes in building exceptional digital experiences.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = { themeColor: '#000000' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="portfolio">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
