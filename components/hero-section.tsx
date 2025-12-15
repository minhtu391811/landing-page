import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 w-full">
      <div className="relative">
        {/* Hero mascot and promotional banner */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="text-white text-center mb-3">
              <h1 className="text-2xl md:text-3xl font-bold mb-1 text-balance leading-tight">
                Du hí cùng Grab
                <br />
                <span className="text-yellow-300">ăn ngon "Lô cò"</span>
              </h1>
            </div>

            <div className="relative w-40 h-40 mx-auto mb-3">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-green-700 rounded-full w-24 h-24 flex items-center justify-center">
                  <div className="text-white text-4xl">👨‍🍳</div>
                </div>
              </div>
              {/* Food bowl decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-16">
                <img
                  src="/vietnamese-soup-bowl.jpg"
                  alt="Food"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16">
                <img
                  src="/vietnamese-noodles-bowl.jpg"
                  alt="Food"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-400 px-6 py-2 rounded-full shadow-2xl transform -rotate-2 mb-3">
            <p className="text-green-900 font-bold text-base md:text-lg text-center">Địa điểm CHẤT</p>
          </div>

          <Button
            size="default"
            className="bg-gradient-to-r from-lime-400 to-yellow-300 hover:from-lime-500 hover:to-yellow-400 text-green-900 font-bold text-base px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
          >
            ĐẶT XE ĐẾN NGAY
          </Button>
        </div>
      </div>
    </section>
  )
}
