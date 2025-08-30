import type { Metadata } from 'next';
import './globals.css';
// Navbar and Footer live in `app/components` — use relative imports from this file
import Navbar from './components/Navbar';
// Or, if you need to create the Navbar component, create a file at 'components/Navbar.tsx' with a basic component like:

// components/Navbar.tsx
// import React from 'react';
// const Navbar = () => <nav>Navbar</nav>;
// export default Navbar;
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Next.js + Tailwind Starter',
  description: 'A simple Next.js app with Tailwind CSS, navigation, links, and images.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="container-max py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}