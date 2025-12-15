import { HeroSection } from "@/components/hero-section"
import { FoodSection } from "@/components/food-section"
import { DestinationSection } from "@/components/destination-section"
import { HotDishesSection } from "@/components/hot-dishes-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 relative overflow-hidden flex flex-col">
      {/* Animated glow effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-lime-300/30 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 h-[30vh] flex items-center">
        <HeroSection />
      </div>

      <div className="relative z-10 h-[70vh] overflow-y-auto">
        <FoodSection />
        <DestinationSection />
        <HotDishesSection />
      </div>
    </main>
  )
}
