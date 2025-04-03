import React from "react";
import Image from "next/image";
import { locationCardProps } from "@/utils/types";
import LocationRating from "./LocationRating";

const LocationCard = ({ location }: { location: locationCardProps }) => {
  console.log("location card", location);
  const { name, image, description, id, province, lat, lng, category } = location;
  return (
    <article className="group relative p-2 rounded-sm hover:scale-105 transition-transform duration-600 shadow-sm">
      <div className="relative h-[300px] rounded-md">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <h3 className="text-sm font-semibold ">{name}</h3>
        <p>
          <LocationRating />
        </p>
      </div>
    </article>
  );
};

export default LocationCard;