"use client";
import styles from "./Map.module.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type MapTypes = {
  marker: {
    geoCode: LatLngExpression;
    popUp: string;
  };
};

const Map: React.FC<MapTypes> = ({ marker }) => {
  const customIcon = new Icon({
    iconUrl: "/assets/location_map_icon.png", 
    iconSize: [42, 42],
  });

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={marker.geoCode}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={marker.geoCode} icon={customIcon}>
          <Popup>
            <h2>{marker.popUp}</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
