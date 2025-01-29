"use client";
import { markersType } from "@/app/(main)/contact/page";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Props {
  markers: markersType;
}
const Map: React.FC<Props> = ({ markers }) => {
  return (
    <LoadScript
      googleMapsApiKey={
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          : ""
      }
    >
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={markers["Liberty"].geoCode}
        zoom={16}
      >
        {Object.keys(markers).map((marker) => (
          <Marker
            key={marker}
            position={markers[marker].geoCode}
            title={markers[marker].popUp}
            
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
