import React from "react";
import Image from "next/image";
import { locationCardProps } from "@/utils/types";

const LocationCard = ({ location }: { location: locationCardProps }) => {
  console.log("location card", location);
  const { name, image, id, province, lat, lng, category } = location;
  return (
    <article className="group relative">
      <div className="relative h-[300px] rounded-md">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={name}
          fill
          className="object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {name}
    </article>
  );
};

export default LocationCard;
