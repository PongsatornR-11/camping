import React from "react";
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
          heading="You don't have favorite Location.."
          message="Please add some location to your favorite first"
          btnText="Go to Home page"
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
