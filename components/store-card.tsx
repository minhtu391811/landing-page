import Image from "next/image"
import { Button } from "@/components/ui/button"

interface StoreCardProps {
  name: string
  address: string
  image: string
  recommendation: string
  recommendationDetail: string[]
  variant?: 1 | 2 | 3 | 4
}

export function StoreCard({ name, address, image, recommendation, recommendationDetail, variant = 1 }: StoreCardProps) {

  // Note Position (Horizontal) - Custom per variant
  let noteXPosition = "left-[61%]";
  if (variant === 1) noteXPosition = "left-[61%]";
  if (variant === 2) noteXPosition = "left-[63%]";
  if (variant === 3) noteXPosition = "left-[38%]";
  if (variant === 4) noteXPosition = "left-[61%]";

  // Note Rotation (Decoupled from orientation)
  let noteRotation = "-rotate-[6deg]";
  let noteOffset = "";
  if (variant === 2 || variant === 4) {
    noteRotation = "rotate-[6deg]";
    noteOffset = "translate-y-4";
  }
  const noteAlign = "gap-x-0";

  // Arrow Settings
  let arrowImg = "/vectors/arrow-1.png";
  let arrowPosition = "left-[0%] top-[55%]";

  if (variant === 2) {
    arrowImg = "/vectors/arrow-2.png";
    arrowPosition = "left-[0%] top-[40%]";
  }
  if (variant === 3) {
    arrowImg = "/vectors/arrow-3.png";
    arrowPosition = "right-[0%] top-[55%]";
  }
  if (variant === 4) {
    arrowImg = "/vectors/arrow-4.png";
    arrowPosition = "left-[0%] top-[50%]";
  }

  // Sticker Settings
  let stickerImg = "/images/milo-sticker-1.png";
  let stickerPosition = "-left-[25%] top-[20%]";

  if (variant === 2) {
    stickerImg = "/images/milo-sticker-2.png ";
    stickerPosition = "-left-[30%] top-[35%]";
  }
  if (variant === 3) {
    stickerPosition = "-right-[38%] top-[40%]";
  }
  if (variant === 4) {
    stickerImg = "/images/milo-sticker-3.png";
    stickerPosition = "-left-[30%] top-[40%]";
  }

  return (
    <div className="flex flex-col w-full group shrink-0 select-none min-w-[150px] [container-type:inline-size]">
      {/* 1. Square Item Box */}
      <div className="relative w-full aspect-square bg-[#289B43] shadow-xl overflow-visible z-10">

        {/* Top Header Section */}
        <div className="absolute -top-[9%] left-1/2 -translate-x-1/2 w-[88%] h-[18%] z-20">
          {/* Green Shadow/Under Layer */}
          <div
            className="absolute inset-0 bg-[#1D6F2D] translate-y-1 -translate-x-1"
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
          />
          {/* Orange Main Layer */}
          <div
            className="absolute inset-0 bg-[#E8A336] flex items-center justify-center p-1"
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
          >
            <div className="w-full text-center px-1" style={{ "--char-count": Math.max(name.length, 10) } as React.CSSProperties}>
              <h3 className="font-montserrat text-[calc(100cqw/var(--char-count))] font-black italic uppercase text-white drop-shadow-sm whitespace-nowrap overflow-hidden text-ellipsis leading-normal py-1 text-center">
                {name}
              </h3>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="absolute top-[11.5%] h-[14%] w-full text-center px-2 flex justify-center items-center" style={{ "--char-count": Math.max(address.length, 20) } as React.CSSProperties}>
          <p className="text-white font-montserrat text-[calc(140cqw/var(--char-count))] font-semibold text-center truncate w-full">{address}</p>
        </div>

        {/* Image Container - Centered in remaining space */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[89%] h-[66%] p-[1.5%] shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
          {/* Checkered pattern for transparent look */}
          <div className="w-full h-full bg-[#f0f0f0] overflow-hidden relative">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
              }}
            />
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover relative z-10"
            />
          </div>
        </div>
      </div>

      {/* 2. Bottom Frame & Button (positioned below the square) */}
      <div className="relative w-full mt-[-30%] z-20 aspect-[1.9/1] pointer-events-none">

        {/* Recommendation Note (Flexible Content, Fixed Anchor) */}
        <div className={`absolute top-[5%] ${noteXPosition} -translate-x-1/2 w-[70%] aspect-[136/80] ${noteAlign} px-3 pt-1 pb-2 flex flex-col items-center transform ${noteRotation} ${noteOffset} transition-transform duration-300 origin-bottom-right pointer-events-auto`}>
          {/* Background with cut corner */}
          <div
            className="absolute inset-0 bg-[#F0AA28] -z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
              filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))"
            }}
          />

          {/* Corner Vector */}
          <div className="absolute -bottom-[2%] -right-[2%] w-[15%] h-[30%] z-20 pointer-events-none -rotate-25">
            <Image
              src="/vectors/vector.png"
              alt="decoration"
              fill
              sizes="10vw"
              className="object-contain"
            />
          </div>


          <h4 className="flex-none text-[#1D6F2D] font-montserrat font-extrabold italic text-[8cqi] mb-[2%] tracking-tight text-center w-full truncate">{recommendation}</h4>
          <div
            className="flex-1 w-full h-full flex flex-col justify-center overflow-hidden text-white font-montserrat text-[calc(100cqw/var(--rec-list-count))] font-semibold gap-y-1 px-1 text-left"
            style={{ "--rec-list-count": Math.max(recommendationDetail.length, 20) } as React.CSSProperties}
          >
            {recommendationDetail.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1 justify-left w-full">
                <span className="opacity-80 text-[0.6em] align-middle mt-[0.3em] shrink-0">●</span>
                <span className="leading-tight break-words line-clamp-2">{item.trim()}</span>
              </div>
            ))}
          </div>
          {/* Drink/Food Sticker Associated with Note */}
          <div className={`absolute ${stickerPosition} -translate-y-[50%] drop-shadow-xl animate-bounce duration-1000 pointer-events-none ${variant === 3 ? "w-[55%] aspect-[1.5/1]" : "w-[40%] aspect-square"}`}>
            {variant === 3 ? (
              <div className="w-[100%] h-[100%] relative flex items-end justify-center">
                <div className="w-[60%] h-full relative left-13 bottom-1 z-0 rotate-45">
                  <Image src="/images/milo-sticker-1.png" alt="sticker 1" fill sizes="15vw" className="object-contain filter drop-shadow-lg" />
                </div>
                <div className="w-[60%] h-[90%] relative left-3 bottom-0 z-0">
                  <Image src="/images/milo-sticker-2.png" alt="sticker 2" fill sizes="15vw" className="object-contain filter drop-shadow-lg" />
                </div>
              </div>
            ) : (
              <div className="w-[100%] h-[100%] flex items-center justify-center relative">
                <Image src={stickerImg} alt="sticker" fill sizes="15vw" className="object-contain filter drop-shadow-lg" />
              </div>
            )}
          </div>
        </div>

        {/* Decorative Arrow connecting square to note */}
        <div className={`absolute z-10 w-[25%] aspect-square pointer-events-none ${arrowPosition}`}>
          <div className="w-full h-full relative">
            <Image src={arrowImg} alt="arrow" fill sizes="10vw" className="object-contain opacity-90" />
          </div>
        </div>

        {/* Button - Fixed at Bottom */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[63%] z-30 pointer-events-auto">
          <Button
            className="w-full aspect-[121/32] bg-[#C5FE55] hover:bg-[#b5f044] text-[#03390D] p-0 rounded-full shadow-[-2px_3px_0px_#289B43] active:shadow-none active:translate-y-[2px] transition-all h-auto whitespace-normal flex items-center justify-center text-center"
          >
            <span className="font-montserrat font-extrabold italic text-[8cqi] uppercase leading-none pb-[2px]">
              Đặt ngay
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
