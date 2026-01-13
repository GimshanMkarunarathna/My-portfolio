import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center px-12 pt-32 bg-black overflow-hidden">

      {/* 🔴 BLURRED ORANGE CIRCLE */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "#FC530A",
          opacity: 0.8,
          filter: "blur(600px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-1/2">
        <h2 className="text-sm tracking-widest text-white-500 "> Hey , I am
           <span className="text-orange-500"> Gimshan</span>
        </h2>

        <h1 className="text-6xl font-extrabold mt-4 leading-tight text-white">
           UI/UX designer
          
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          I design clean, modern, and user-focused digital experiences that
          connect people with products through intuitive UI and thoughtful UX.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-6 mt-8">
          <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-400 transition">
            Hire Me
          </button>

          {/* MAIL ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white-500 text-white-500 hover:bg-orange-500 hover:text-orange transition cursor-pointer">
            ✉
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="absolute right-16 bottom-10 z-10">
        <Image
          src="/home.jpeg"
          alt="Gimshan"
          width={420}
          height={420}
          className="rounded-2xl object-cover"
        />
      </div>

    </main>
  );
}
