"use client";
import React from "react";
import { locationCardProps } from "@/utils/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
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
        }}
        loop={locations.length > 1}
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
              <Image
                src={location.image}
                alt={location.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                <OtherInfo location={location} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;