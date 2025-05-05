import { fetchLocation } from "@/actions/action";

import LocationList from "./LocationList";

import { locationCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";

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
  return (
    <div>
      <Hero locations={locations} />
      <CategoryList search={search} category={category} />
      <LocationList locations={locations} />
    </div>
  );
};

export default LocationContainer;
