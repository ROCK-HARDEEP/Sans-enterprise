import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sans Enterprise - Study Abroad Consultants',
  description: 'Want to Study Abroad? Contact Sans Enterprise, India\'s Leading Study Overseas Education Consultants Offering Various Abroad Study Options Globally. Free Counselling Available.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 