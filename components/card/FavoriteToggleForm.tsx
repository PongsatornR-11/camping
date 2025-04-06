"use client";
import React from "react";
import { toggleFavoriteAction } from "@/actions/action";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { FavoriteCardButton } from "../form/Buttons";

const FavoriteToggleForm = ({
  favoriteId,
  locationId,
}: {
  favoriteId: string | null;
  locationId: string;
}) => {
  const pathname = usePathname(); // get path

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    locationId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <FavoriteCardButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
