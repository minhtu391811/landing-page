import Image from "next/image"
import { StoresSection } from "@/components/stores-section"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">

      {/* HERO */}
      <div className="relative w-full aspect-[1920/2134]">
        <Image
          src="/images/background.jpeg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <StoresSection />
      </div>

    </main>
  )
}