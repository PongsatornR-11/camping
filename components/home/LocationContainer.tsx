import { fetchLocation, fetchLocationHero } from "@/actions/action";

import LocationList from "./LocationList";

import { locationCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";

const LocationContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const locations: locationCardProps[] = await fetchLocation({
    search,
    category,
  });

  const heroLocations: locationCardProps[] = await fetchLocationHero()

  return (
    <div>
      <Hero locations={heroLocations} />
      <CategoryList search={search} category={category} />
      {locations.length === 0 ? (
        <EmptyList />
      ) : (
        <LocationList locations={locations} />
      )}
    </div>
  );
};

export default LocationContainer;
