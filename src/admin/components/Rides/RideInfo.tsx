import {
  GoogleMap,
  MarkerF,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const RideInfo = () => {
  const location = useLocation();
  const libraries: ["places"] = ["places"];
  const rideInfo = location.state?.rideDetails;
  console.log(rideInfo);
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: rideInfo.pickupLocation_latitude,
    lng: rideInfo.pickupLocation_longitude,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2hVQsKcF5QA_kMTt9rBiR8YYt2icM3KA",
    libraries,
  });
  const [routeCoordinates, setRouteCoordinates] = useState<
    google.maps.LatLng[] | null
  >(null);

  const calculateAndDisplayRoute = () => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: {
          lat: rideInfo.pickupLocation_latitude,
          lng: rideInfo.pickupLocation_longitude,
        },
        destination: {
          lat: rideInfo.dropLocation_latitude,
          lng: rideInfo.dropLocation_longitude,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          if (result) {
            const route = result.routes[0].overview_path;
            setRouteCoordinates(route);
          }
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }
  return (
    <div className="mb-20">
      <div className="container mx-auto py-2">
        <div className="flex flex-col gap-y-4">
          <div className="w-full">
            <div className="bg-white shadow rounded-lg p-6 flex flex-row gap-x-16">
              <ul>
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Ride Details
                </span>
                <hr className="my-2" />
                <li className="mb-2">
                  Ride Status:{" "}
                  <span className="font-semibold">{rideInfo.status}</span>
                </li>
                <li className="mb-2">
                  No. of Passenger:{" "}
                  <span className="font-semibold">
                    {rideInfo.numberOfPassenger}
                  </span>
                </li>
                <li className="mb-2">
                  Ride Type:{" "}
                  <span className="font-semibold">
                    {rideInfo.rideType ? "Single" : "Shared"}{" "}
                  </span>
                </li>
                <li className="mb-2">
                  Message:{" "}
                  <span className="font-semibold">{rideInfo.message}</span>
                </li>
                <li className="mb-2">
                  Driver Name:{" "}
                  <span className="font-semibold">{`${rideInfo.driver.firstName} ${rideInfo.driver.lastName}`}</span>
                </li>
                <li className="mb-2">
                  Booked By:{" "}
                  <span className="font-semibold">
                    {`${rideInfo.user.firstName} ${rideInfo.user.lastName}`}
                  </span>
                </li>
                <li className="mb-2">
                  Channel Id:{" "}
                  <span className="font-semibold">{rideInfo.channelId}</span>
                </li>
              </ul>
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Driver Image
                </span>
                <hr className="my-2" />
                <img
                  src={rideInfo.driver.userImage}
                  alt="Vehicle Image"
                  className="h-72 w-72 bg-gray-300 rounded mb-4 shrink-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Passenger Image
                </span>
                <hr className="my-2" />
                <img
                  src={rideInfo.user.userImage}
                  alt="Liscence Image"
                  className="h-72 w-72 bg-gray-300 rounded mb-4 shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] bg-white rounded-lg">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={center}
              onLoad={calculateAndDisplayRoute}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <MarkerF
                position={{
                  lat: rideInfo.pickupLocation_latitude,
                  lng: rideInfo.pickupLocation_longitude,
                }}
                title="PickUp Location"
              />
              <MarkerF
                position={{
                  lat: rideInfo.dropLocation_latitude,
                  lng: rideInfo.dropLocation_longitude,
                }}
                title="Drop Location"
              />
              {routeCoordinates && (
                <Polyline
                  path={routeCoordinates}
                  options={{
                    strokeColor: "#FF0000",
                    strokeOpacity: 1,
                    strokeWeight: 2,
                  }}
                />
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};
