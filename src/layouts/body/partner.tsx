import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const partners = [
  { name: "EA Games", logo: "/images/ea.png" },
  { name: "GAME", logo: "/images/game.png" },
  { name: "FIRST Power Up", logo: "/images/power.png" },
  { name: "Walt Disney", logo: "/images/disney.png" },
  { name: "Book Pro", logo: "/images/book.png" },
  { name: "Sega", logo: "/images/sega.png" },
  { name: "2K", logo: "/images/2k.png" },
];

const PartnerSlider = () => {
  return (
    <div className="bg-[#F6F6F6] py-16">
      <h2 className="text-5xl font-semibold text-center mb-14">Our Partners</h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          loop
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
                className="h-20 object-contain  transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSlider;
