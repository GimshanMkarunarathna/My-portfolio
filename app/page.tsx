import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center px-20">
      
      {/* LEFT SIDE TEXT */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">Hi, I am Shan</h1>
        <p className="mt-5 text-xl text-gray-700">
          Frontend Developer | Next.js Enthusiast
        </p>
      </div>

      {/* RIGHT BOTTOM IMAGE */}
      <div className="absolute bottom-30 right-0">
        <Image
          src="/home.jpeg"
          alt="Home Image"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>

    </div>
  );
}
