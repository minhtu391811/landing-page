import { Button } from "@/components/ui/button"

const hotDishes = [
  {
    name: "BÁNH ĐA CUA",
    image: "/vietnamese-banh-da-cua-noodles-crab.jpg",
    bgColor: "bg-emerald-800",
  },
  {
    name: "NEM CUA BÉ",
    image: "/vietnamese-nem-cua-be-spring-rolls.jpg",
    bgColor: "bg-green-800",
  },
  {
    name: "BÚN CÁ CAY",
    image: "/vietnamese-bun-ca-cay-spicy-fish-noodles.jpg",
    bgColor: "bg-emerald-700",
  },
  {
    name: "BÁNH MÌ CAY/QUE",
    image: "/vietnamese-banh-mi-sandwich-spicy.jpg",
    bgColor: "bg-green-700",
  },
]

export function HotDishesSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section header */}
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 px-12 py-4 rounded-full shadow-2xl transform -rotate-1 inline-block mx-auto">
          <h2 className="text-green-900 font-bold text-2xl md:text-3xl text-center">Quán ăn HOT</h2>
        </div>
      </div>

      {/* Dishes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
        {hotDishes.map((dish, index) => (
          <div
            key={dish.name}
            className="relative group"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Pin marker decoration */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-yellow-400" />
            </div>

            {/* Dish card */}
            <div
              className={`relative ${dish.bgColor} rounded-3xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4 text-center leading-tight">{dish.name}</h3>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Button below card */}
            <div className="flex justify-center mt-10">
              <Button
                size="sm"
                className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold rounded-full px-6 shadow-lg"
              >
                ẨN MÓN NAY
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
