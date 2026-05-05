import React from "react";
import Image from "next/image";
import { locationCardProps } from "@/utils/types";
import FavoriteToggleButton from "./FavoriteToggleButton";
import Link from "next/link";

const LocationCard = ({ location }: { location: locationCardProps }) => {
  const { name, image, description, price, id, province } = location;
  return (
    <article className="group relative p-2 rounded-sm hover:scale-105 transition-transform duration-500 shadow-sm">
      <Link href={`/location/${id}`}>
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
          <h3 className="text-sm font-semibold">{name.length > 40 ? `${name.substring(0, 40)}...` : name}</h3>
        </div>

        <p className="text-sm mt-1 text-muted-foreground">
          {description.length > 45 ? `${description.substring(0, 45)}...` : description}
        </p>
        <div className="mt-1 flex items-center justify-between font-semibold text-sm">
          <span>{price} THB</span>
          <p>{province}</p>
        </div>
      </Link>
      <div className="absolute top-3 right-3">
        <FavoriteToggleButton locationId={id} />
      </div>
    </article>
  );
};

export default LocationCard;