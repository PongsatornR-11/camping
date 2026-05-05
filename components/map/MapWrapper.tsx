"use client";

import dynamic from "next/dynamic";

const MapLandMark = dynamic(() => import("@/components/map/MapLandMark"), {
  ssr: false,
  loading: () => <div className="h-[40vh] bg-muted rounded-md mt-4" />,
});

export default MapLandMark;