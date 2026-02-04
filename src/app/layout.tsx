import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raon-world solutions',
  description: 'Raon World Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" /> */}
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
