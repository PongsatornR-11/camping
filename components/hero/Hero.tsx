'use client'
import React from "react";
import { locationCardProps } from "@/utils/types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import OtherInfo from "./OtherInfo";


const Hero = ({ locations }: { locations: locationCardProps[] }) => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        pagination={{
          type: "progressbar",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper rounded-md"
      >
        {locations.map((location) => (
          <SwiperSlide key={location.id} className="group">
            <div className="relative h-[500px] w-full overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="h-full w-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white hover:brightness-110">
                <OtherInfo location={location}/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
