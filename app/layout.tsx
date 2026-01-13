import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAV WRAPPER (CENTER POSITION) */}
        <nav className="fixed top-[45px] left-1/2 -translate-x-1/2 z-50">

          {/* PILL NAV BAR */}
          <ul
            className="
              flex items-center justify-between
              w-[627px] h-[60px]
              px-10
              rounded-[80px]
              bg-white
              text-black
              shadow-lg
            "
          >
            {/* ACTIVE LINK */}
            <li className="font-medium cursor-pointer text-[#FC530A]">
              Home
            </li>

            {/* NORMAL LINKS */}
            <li className="font-medium cursor-pointer hover:text-[#FC530A] transition">
              Skills
            </li>
            <li className="font-medium cursor-pointer hover:text-[#FC530A] transition">
              Experience
            </li>
            <li className="font-medium cursor-pointer hover:text-[#FC530A] transition">
              Contact
            </li>
          </ul>
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-40">
          {children}
        </main>

      </body>
    </html>
  );
}
