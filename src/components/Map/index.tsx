"use client";
import styles from "./Map.module.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { FC } from "react";
import { markersType } from "@/app/(main)/contact/page";

type MapTypes = {
  markers: markersType;
};

const Map: FC<MapTypes> = ({ markers }) => {
  const customIcon = new Icon({
    iconUrl: "/assets/location_map_icon.png",
    iconSize: [42, 42],
  });

  const parkingIcon = new Icon({
    iconUrl: "/assets/parking_location.png",
    iconSize: [42, 42],
  });

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={markers.Liberty.geoCode}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={markers.Liberty.geoCode} icon={customIcon}>
          <Popup>
            <h2>{markers.Liberty.popUp}</h2>
          </Popup>
        </Marker>

        <Marker position={markers.Parking.geoCode} icon={parkingIcon}>
          <Popup>
            <h2>{markers.Parking.popUp}</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
