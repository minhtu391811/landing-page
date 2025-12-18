import { StoresSection } from "@/components/stores-section"

export default function Home() {
  return (
    <main
      className="min-h-screen w-full relative overflow-y-auto overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >

      <div className="relative z-10 pt-[110vw]">
        <StoresSection />
      </div>
    </main>
  )
}
