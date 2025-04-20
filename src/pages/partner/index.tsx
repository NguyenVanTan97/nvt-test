import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const partners = [
  { name: "EA Games", logo: "/images/ea.png" },
  { name: "GAME", logo: "/images/game.png" },
  { name: "FIRST Power Up", logo: "/images/power.png" },
  { name: "Walt Disney", logo: "/images/disney.png" },
  { name: "Book Pro", logo: "/images/book.png" },
  { name: "Sega", logo: "/images/sega.png" },
  { name: "2K", logo: "/images/2k.png" },
];

export function PartnerSlider() {
  const { t } = useTranslation("other") as {
    t: (key: string) => string;
  };
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div id="partner" className="bg-[#F6F6F6] py-10 md:py-16 relative">
      <h2 className="md:text-6xl font-black text-5xl font-playfair text-center mb-6 md:mb-14">
        {t("partner")}
      </h2>
      <div className="max-w-6xl md:max-w-4xl xl:max-w-6xl mx-4 md:mx-auto px-4 relative">
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-lg  hover:bg-gray-100 transition shadow-md"
        >
          <svg
            className="w-5 h-5 "
            fill="none"
            stroke="gray"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="gray"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full object-contain transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PartnerSlider;
