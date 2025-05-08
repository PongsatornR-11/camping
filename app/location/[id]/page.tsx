import { fetchLocationDetailById } from "@/actions/action";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/location/Breadcrumbs";
import Description from "@/components/location/Description";
import ImageContainer from "@/components/location/ImageContainer";
import ShareButton from "@/components/location/ShareButton";
import MapLandMark from "@/components/map/MapLandMark";
import { redirect } from "next/navigation";
import React from "react";

const LocationDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const location = await fetchLocationDetailById({ id });
  if (!location) redirect("/");
  return (
    <section>
      <Breadcrumbs name={location.name} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-2xl font-bold capitalize">
          {location.name} - {location.category}
        </h1>
        <div className="flex items-center gap-x-4">
          <FavoriteToggleButton locationId={location.id} />
          <ShareButton locationId={location.id} name={location.name}/>
        </div>
      </header>
      {/* image */}
      <ImageContainer mainImage={location.image} name={location.name} />
      {/* detail */}
      <section>
        <div>
          <Description description={location.description} />
          <MapLandMark location={{ lat: location.lat, lng: location.lng }} />
        </div>
      </section>
    </section>
  );
};

export default LocationDetail;
