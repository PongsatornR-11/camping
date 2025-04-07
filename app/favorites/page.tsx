import React from "react";
import { fetchFavoriteByUser } from "@/actions/action";
import LocationList from "@/components/home/LocationList";
import Hero from "@/components/hero/Hero";

const FavoritesPage = async () => {
  const favorites = await fetchFavoriteByUser();

  return (
    <div>
      <Hero locations={favorites} />
      <LocationList locations={favorites} />
    </div>
  );
};

export default FavoritesPage;
