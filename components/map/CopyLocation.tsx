"use client";
import React from "react";
import { Button } from "../ui/button";

const CopyLocation = ({ lat, lng }: { lat: number; lng: number }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <Button
      asChild
      variant="outline"
      className="mt-2"
    >
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        Search in Google Maps
      </a>
    </Button>
  );
};

export default CopyLocation;
