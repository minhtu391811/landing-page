import { Button } from "@/components/ui/button"

const foods = [
  {
    name: "CHÈ DỪA DẦM",
    image: "/vietnamese-che-dua-dam-coconut-dessert.jpg",
  },
  {
    name: "SÚI DỊN HẢI PHONG",
    image: "/vietnamese-sui-din-hai-phong-soup.jpg",
  },
]

export function FoodSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto mb-12">
        {foods.map((food, index) => (
          <div
            key={food.name}
            className="relative group"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Pin marker decoration */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-yellow-400" />
            </div>

            {/* Food image */}
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-full object-cover" />
            </div>

            {/* Food name */}
            <h3 className="text-white font-bold text-xl md:text-2xl text-center mt-8 mb-4 drop-shadow-lg leading-tight">
              {food.name}
            </h3>

            {/* Button */}
            <div className="flex justify-center">
              <Button
                size="sm"
                className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold rounded-full px-6 shadow-lg transform hover:scale-105 transition-all"
              >
                ẨN NGON NGAY
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom mascot with CTA */}
      <div className="relative max-w-md mx-auto">
        <div className="relative">
          {/* Curved path decoration */}
          <svg className="absolute left-0 top-0 w-32 h-32" viewBox="0 0 100 100">
            <path
              d="M 10,50 Q 30,20 50,50"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.5"
            />
          </svg>

          {/* Mascot */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-lime-400 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-green-700 rounded-full w-32 h-32 flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-white text-5xl">🛵</div>
                </div>
              </div>
              {/* Food decorations */}
              <div className="absolute bottom-4 left-0 w-20 h-20">
                <img
                  src="/vietnamese-pho-soup-bowl.jpg"
                  alt="Food"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <div className="absolute bottom-4 right-0 w-20 h-20">
                <img
                  src="/vietnamese-bun-noodles-bowl.jpg"
                  alt="Food"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              ĐẶT NGAY MÓN HOT ĐỊA PHƯƠNG
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
