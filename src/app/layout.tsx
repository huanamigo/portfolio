import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.scss';
import './reset.css';
import Navbar from '@/components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artur Furtak',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <Navbar />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
