"use client";

import React, { useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.gridlayer.googlemutant";
import { Label } from "../ui/label";
import CopyLocation from "./CopyLocation";

const DEFAULT_ICON_URL = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png";
const markerIcon = L.icon({
  iconUrl: DEFAULT_ICON_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

type Latlng = [number, number];
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      e.target.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>
        {`Lat: ${position[0].toFixed(4)}`}<br />
        {`Lng: ${position[1].toFixed(4)}`}
      </Popup>
    </Marker>
  );
}

const MapLandMark = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const defaultLocation: Latlng = [13.7457, 100.534];
  const [position, setPosition] = useState<Latlng | null>(
    location ? [location.lat, location.lng] : null
  );

  return (
    <div className="mt-4">
      <MapContainer
        className="h-[40vh] rounded-md z-0 relative"
        center={location || defaultLocation}
        zoom={8}
        scrollWheelZoom={true}
      >
        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name="Google Maps" checked>
            <TileLayer
              attribution="&copy; Google Maps"
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Esri WorldImagery">
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>

      <div className="flex items-center gap-4 mt-2">
        <input type="hidden" name="lat" value={position ? position[0] : ""} />
        <input type="hidden" name="lng" value={position ? position[1] : ""} />
        {position && (
          <>
            <Label>Lat: {position[0].toFixed(4)}</Label>
            <Label>Lng: {position[1].toFixed(4)}</Label>
            <CopyLocation lat={position[0]} lng={position[1]} />
          </>
        )}
      </div>
    </div>
  );
};

export default MapLandMark;