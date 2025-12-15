import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

const destinations = [
  {
    name: "Kỳ Sơn",
    image: "/vietnam-k--s-n-mountain-landscape.jpg",
  },
  {
    name: "Cát Bà",
    image: "/vietnam-cat-ba-island-beach.jpg",
  },
  {
    name: "Núi Phan Xi Păng",
    image: "/vietnam-fansipan-mountain-peak.jpg",
  },
  {
    name: "Vịnh Hạ Long",
    image: "/vietnam-halong-bay.jpg",
  },
]

export function DestinationSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={destination.name}
            className="relative group"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Pin marker decoration */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-yellow-400" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-green-900" />
                </div>
              </div>
            </div>

            {/* Sparkle decoration */}
            {index % 2 === 0 && (
              <div className="absolute -top-4 -right-4 z-20">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
              </div>
            )}

            {/* Card */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-300 border-4 border-white">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-xl mb-2 drop-shadow-lg">{destination.name}</p>
              </div>
            </div>

            {/* Button below card */}
            <div className="flex justify-center mt-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold rounded-full px-6 shadow-lg"
              >
                BẤT KỂ ĐẾN NGAY
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Center CTA */}
      <div className="flex justify-center mt-12">
        <Button
          size="lg"
          className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
        >
          ĐẶT XE ĐẾN NGAY
        </Button>
      </div>
    </section>
  )
}
