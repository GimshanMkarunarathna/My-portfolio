import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-5 bg-gray-900 text-white flex justify-between">
          <h1 className="text-xl font-bold">Shan Portfolio</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-5">{children}</main>
        <footer className="p-5 text-center bg-gray-900 text-white mt-10">
          &copy; 2026 Shan. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
