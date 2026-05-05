import { fetchLocation, fetchLocationHero } from "@/actions/action";
import LocationList from "./LocationList";
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
  const [locations, heroLocations] = await Promise.all([
    fetchLocation({ search, category }),
    fetchLocationHero(),
  ]);

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