import { fetchLocation } from "@/actions/action";

import LocationList from "./LocationList";

import { locationCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LocationContainer = async ({ search }: { search?: string }) => {
  const locations: locationCardProps[] = await fetchLocation({ search });
  console.log(search);
  return (
    <div>
      {search ? (
        <LocationList locations={locations} />
      ) : (
        <div>
          <Hero locations={locations} />
          <LocationList locations={locations} />
        </div>
      )}
    </div>
  );
};

export default LocationContainer;
