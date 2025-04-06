import React from "react";

import { auth } from "@clerk/nextjs/server";
import { SignInFavButton } from "../form/Buttons";
import { fetchFavoriteID } from "@/actions/action";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ locationId }: { locationId: string }) => {
  const { userId } = await auth();
  if (!userId) return <SignInFavButton />;
  const favoriteId = await fetchFavoriteID({ locationId });
  return <FavoriteToggleForm favoriteId={favoriteId} locationId={locationId} />;
};

export default FavoriteToggleButton;
