import React from "react";
import Image from "next/image";
import { locationCardProps } from "@/utils/types";
import LocationRating from "./LocationRating";
import FavoriteToggleButton from "./FavoriteToggleButton";

const LocationCard = ({ location }: { location: locationCardProps }) => {
  const { name, image, description, price, id, province, lat, lng, category } =
    location;
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
        <h3 className="text-sm font-semibold ">{name.substring(0, 40)}</h3>
        <p>
          <LocationRating />
        </p>
      </div>

      <p className="text-sm mt-1 text-muted-foreground">
        {description.substring(0, 45)} ...
      </p>
      <div className="mt-1 flex items-center justify-between font-semibold text-sm">
        <span>{price} THB</span>
        <p>{province}</p>
      </div>

      <div className="absolute top-3 right-3">
        <FavoriteToggleButton locationId={id} />
      </div>
    </article>
  );
};

export default LocationCard;
