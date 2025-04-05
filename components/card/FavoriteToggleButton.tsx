import React from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInFavButton } from "../form/Buttons";
import { fetchFavoriteID } from "@/actions/action";


const FavoriteToggleButton = async({ locationId }: { locationId: string }) => {
  
    const { userId } = await auth()
    if(!userId) return <SignInFavButton/>
    const favoriteId = await fetchFavoriteID({locationId})
    console.log('favoriteId',favoriteId)
    return (
    <Button size='icon' variant='outline'>
      <Heart fill="pink"/>
    </Button>
  );
};

export default FavoriteToggleButton;
