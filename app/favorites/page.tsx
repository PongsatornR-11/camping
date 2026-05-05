import { fetchFavoriteByUser } from "@/actions/action";
import LocationList from "@/components/home/LocationList";
import Hero from "@/components/hero/Hero";
import EmptyList from "@/components/home/EmptyList";

const FavoritesPage = async () => {
  const favorites = await fetchFavoriteByUser();

  return (
    <div>
      {favorites.length === 0 ? (
        <EmptyList
          heading="No favorites yet"
          message="Add some locations to your favorites to see them here."
          btnText="Browse locations"
        />
      ) : (
        <div>
          <Hero locations={favorites} />
          <LocationList locations={favorites} />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;