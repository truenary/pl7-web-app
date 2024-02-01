import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { IOnlineDriver } from "../../../api/type";
import { OnlineDriverApi } from "../../../api/OnlineDriverApi";
import { OnlineDriverRepo } from "../../../repositories/OnlineDriverRepo";
import logo from '../../../../public/logo.jpg';
interface OnlineDriver {
  id: number;
  lat: number;
  lng: number;
}
const libraries: ["places"] = ["places"];
const mapContainerStyle = {
  width: "40vw",
  height: "70vh",
};
const center = {
  lat: 27.431353305174838,
  lng: 85.03178229329563,
};
function DashboardMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2hVQsKcF5QA_kMTt9rBiR8YYt2icM3KA",
    libraries,
  });
  const [Onlinedrivers, setOnlineDrivers] = useState<OnlineDriver[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api: IOnlineDriver = new OnlineDriverApi();
        const repo: IOnlineDriver = new OnlineDriverRepo(api);
        const data = await repo.getAllOnlineDriver();
        if (Array.isArray(data)) {
          setOnlineDrivers(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }
  return (
    <div className="my-4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
      >

        {Onlinedrivers.length > 0 &&
          Onlinedrivers.map((driver) => (
            <Marker
              key={driver.id}
              position={{ lat: driver.lat, lng: driver.lng }}
              icon={{
                url: logo,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
      </GoogleMap>
    </div>
  );
}
export default DashboardMap;
