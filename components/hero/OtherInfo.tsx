import React from "react";
import { locationCardProps } from "@/utils/types";

const OtherInfo = ({ location }: { location: locationCardProps }) => {
  return (
    <div >
      <h2 className="text-2xl font-bold">{location.name}</h2>
      <p className="text-sm font-medium">{location.province}</p>
      <p className="mt-2">{location.description}</p>
    </div>
  );
};

export default OtherInfo;
