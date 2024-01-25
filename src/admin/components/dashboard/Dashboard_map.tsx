import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries: ["places"] = ["places"];
const mapContainerStyle = {
  width: "79vw",
  height: "80vh",
};
const center = {
  lat: 27.431353305174838, // default latitude
  lng: 85.03178229329563, // default longitude
};

function Dashboard_map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCaYa9vMmqtJyBo47znD-vZrNRSVuOKJz4",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="my-4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Dashboard_map;
