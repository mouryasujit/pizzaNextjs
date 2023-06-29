"use client";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/app/globals.css";

const Featured: React.FC = () => {
  const images = [
    "/img/pizzaoffer.jpeg",
    "/img/download.jpeg",
    "/img/mania.png",
  ];

  return (
    <div className="bg-[#d2411e] h-[55vh] md:h-[80vh]">
      <div className="main-div max-w-7xl h-full mx-auto p-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          centeredSlides // Add centeredSlides prop to center the slides
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="slide-content flex justify-center items-center h-[50vh]   w-full md:h-[75vh] my-auto  ">
                <Image
                  src={img}
                  alt="img"
                  fill
                  className="rounded-md w-full h-full  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
