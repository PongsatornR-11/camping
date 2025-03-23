"use client";

import React, { useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.gridlayer.googlemutant";
import { Label } from "../ui/label";

//load pin icon
const iconUrl =
  "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [30, 30],
});

type Latlng = [number, number];
type locationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

function LocationMarker({ position, setPosition }: locationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>Selected here</Popup>
    </Marker>
  );
}

const MapLandMark = ({location}: {location?: { lat: number; lng: number }}) => {
  const defaultLocation: Latlng = [13.745812730296755, 100.53410768508913];
  const [position, setPosition] = useState(null);
  console.log(position);
  return (
    <>
      <Label className="mt-2 capitalize">set location</Label>

      <MapContainer
        className="h-[50vh] rounded-md z-0 relative"
        center={location || defaultLocation}
        zoom={10}
        scrollWheelZoom={true}
      >
        <Marker position={location || defaultLocation} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name="Google map" checked>
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Openstreetmap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Esri WorldImagery">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>

      <div>
        <Label className="capitalize">latitude: </Label>
        <input name="lat" value={position ? position[0] : ""} />
        <Label className="capitalize">longitude: </Label>
        <input name="lng" value={position ? position[1] : ""} />
      </div>
    </>
  );
};

export default MapLandMark;
