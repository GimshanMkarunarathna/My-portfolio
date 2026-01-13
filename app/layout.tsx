import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 px-12 py-6 flex justify-between items-center
                        bg-black/60 backdrop-blur-md border-b border-white/10">

          {/* LOGO / NAME */}
          <h1 className="text-xl font-bold tracking-wide">
            gima<span className="text-[#ffffff]">.</span>
          </h1>

          {/* NAV LINKS */}
          <ul className="flex gap-10 text-sm font-medium text-gray-300">
            <li className="hover:text-[#FC530A] transition cursor-pointer">Home</li>
            <li className="hover:text-[#FC530A] transition cursor-pointer">Skills</li>
            <li className="hover:text-[#FC530A] transition cursor-pointer">Experience</li>
            <li className="hover:text-[#FC530A] transition cursor-pointer">Contact</li>
          </ul>

        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-28">
          {children}
        </main>

      </body>
    </html>
  );
}
