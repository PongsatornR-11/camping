import { fetchLocation } from "@/actions/action";

import LocationList from "./LocationList";

import { locationCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LocationContainer = async () => {
  const locations: locationCardProps[] = await fetchLocation();
  return (
    <div>
      <Hero locations={locations}/>
      <LocationList locations={locations} />
    </div>
  );
};

export default LocationContainer;
