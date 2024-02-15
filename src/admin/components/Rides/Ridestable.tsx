import { useEffect, useState } from "react";
import { useRepository } from "@/hooks/CustomHook";
import { ALLRides, Ride } from "@/types/data";
import { explore } from "../shared/Icons";
import { useNavigate } from "react-router-dom";
import ridesData from "@/utils/RideTableData.json";
function Ridestable() {
  const { repo } = useRepository();
  const [rides, setRides] = useState<ALLRides>({
    list: [],
    pagination: {
      totalPage: 0,
      totalItem: 0,
      previousPageNumber: null,
      currentPageNumber: 0,
      nextPageNumber: null,
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllRides();
        // Check if data is an array
        if (data && "list" in data && "pagination" in data) {
          setRides(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [repo]);
  const data = ridesData.data;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full  text-center">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b">SN</th>
            <th className="py-2 px-4 border-b">Number Of Passenger</th>
            <th className="py-2 px-4 border-b">Ride Type</th>
            <th className="py-2 px-4 border-b"> status </th>
            <th className="py-2 px-4 border-b"> Price</th>
            <th className="py-2 px-4 border-b">Driver Name</th>
            <th className="py-2 px-4 border-b">Booked By</th>
            <th className="py-2 px-4 border-b">Message</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {rides.list.map((ride: Ride, index: number) => (
            <tr key={ride.rideId}>
              <td className="py-2 px-4 ">{index + 1}</td>
              <td className="py-2 px-4 ">{ride.numberOfPassenger}</td>
              <td className="py-2 px-4 ">
                {ride.rideType ? "Single" : "Shared"}
              </td>
              <td className="py-2 px-4 ">{ride.status}</td>
              <td className="py-2 px-4 ">{ride.price}</td>
              <td className="py-2 px-4 ">{`${ride.driver?.user.firstName} ${ride.driver?.user.lastName}`}</td>
              <td className="py-2 px-4 ">{`${ride.user?.firstName} ${ride.user?.lastName}`}</td>
              <td className="py-2 px-4 ">{ride.message}</td>
              <td className="px-2 py-4">
                <button
                  onClick={() =>
                    navigate("/admin/rideInfo", {
                      state: { rideDetails: ride },
                    })
                  }
                  title="View"
                  className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-green-600 border-green-600 hover:bg-green-600 hover:text-white  text-base"
                >
                  {explore}
                </button>
              </td>
            </tr>
          ))} */}
          {data.map((ride, index: number) => (
            <tr key={ride.rideId}>
              <td className="py-2 px-4 ">{index + 1}</td>
              <td className="py-2 px-4 ">{ride.numberOfPassenger}</td>
              <td className="py-2 px-4 ">
                {ride.rideType ? "Single" : "Shared"}
              </td>
              <td className="py-2 px-4 ">{ride.status}</td>
              <td className="py-2 px-4 ">{ride.price}</td>
              <td className="py-2 px-4 ">{`${ride.driver.firstName} ${ride.driver.lastName}`}</td>
              <td className="py-2 px-4 ">{`${ride.user?.firstName} ${ride.user?.lastName}`}</td>
              <td className="py-2 px-4 ">{ride.message}</td>
              <td className="px-2 py-4">
                <button
                  onClick={() =>
                    navigate("/admin/rideInfo", {
                      state: { rideDetails: ride },
                    })
                  }
                  title="View"
                  className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-green-600 border-green-600 hover:bg-green-600 hover:text-white  text-base"
                >
                  {explore}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Ridestable;
