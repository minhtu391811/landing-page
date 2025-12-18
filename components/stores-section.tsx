import { StoreCard } from "@/components/store-card"

const stores = [
  {
    name: "TIỆM NHÀ",
    address: "248 Lạc Trung",
    image: "/vietnamese-restaurant-storefront-matsunhan-red-sig.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Milo dầm", "Mỳ trộn"],
    variant: 1 as const,
  },
  {
    name: "TUKTUK",
    address: "35 Ngô Gia Tự - P.2",
    image: "/modern-minimalist-cafe-interior-white-walls-plants.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Milo trân châu đường đen"],
    variant: 2 as const,
  },
  {
    name: "META",
    address: "74 Trần Huy Liệu - P.12",
    image: "/cafe-storefront-glass-windows-meta-drip-signage.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Milo sữa gấu đá xay", "Bánh mỳ phô mai nướng"],
    variant: 3 as const,
  },
  {
    name: "HÍ HÉ",
    address: "251Bis Hậu Giang - P.5",
    image: "/cozy-cafe-interior-wooden-furniture-natural-light.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Milo dầm trân châu bánh flan", "Trà trái cây"],
    variant: 4 as const,
  },
  {
    name: "TIỆM CHÈ MÂY",
    address: "15 Dịch Vọng",
    image: "/vietnamese-dessert-shop-interior-bright-airy.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Milo dầm", "Chè hoa quả"],
    variant: 1 as const,
  },
  {
    name: "MR. CHIẾN",
    address: "49 Lê Thúc Hoạch - Phú Thọ Hòa",
    image: "/vietnamese-fried-food-shop-modern-interior.jpg",
    recommendation: "Món nên thử",
    recommendationDetail: ["Sữa gấu matcha", "Ăn vặt Hàn Quốc"],
    variant: 3 as const,
  },
]

export function StoresSection() {
  return (
    <section className="w-full px-[4vw] pt-[6vw] pb-[30vw]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[3vw] gap-y-[20vw] md:gap-y-[12vw] lg:gap-y-[8vw]">
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </div>
    </section>
  )
}
