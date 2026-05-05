import React from "react";
import LocationCard from "../card/LocationCard";
import { locationCardProps } from "@/utils/types";

const LocationList = ({ locations }: { locations: locationCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </section>
  );
};

export default LocationList;