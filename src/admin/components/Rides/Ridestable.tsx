import { ALLRides, Ride } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import { useNavigate } from "react-router-dom";
declare type TableProp = {
  filterByRideType: string;
  filterByStatus: string;
  rides: ALLRides;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};
function Ridestable({
  filterByRideType,
  filterByStatus,
  rides,
  currentPage,
  handleNextPage,
  handlePrevPage,
}: TableProp) {
  const navigate = useNavigate();
  let filteredRides;
  if (filterByRideType === "all") {
    // No filtering required, all drivers are included
    filteredRides = rides.list;
  } else {
    // Filter based on the accountVerifyStatus attribute
    const isActive = filterByRideType === "single";
    filteredRides = rides.list.filter((ride) => ride.rideType === isActive);
  }
  if (filterByStatus !== "all") {
    if (filterByStatus === "Accepted") {
      filteredRides = filteredRides.filter(
        (ride) => ride.status === "Accepted"
      );
    }
    if (filterByStatus === "Rejected") {
      filteredRides = filteredRides.filter(
        (ride) => ride.status === "Rejected"
      );
    }
    if (filterByStatus === "Cancelled") {
      filteredRides = filteredRides.filter(
        (ride) => ride.status === "Cancelled"
      );
    }
    if (filterByStatus === "Pending") {
      filteredRides = filteredRides.filter((ride) => ride.status === "Pending");
    }
  }
  return (
    <>
      <div>
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
            {filteredRides.map((ride: Ride, index: number) => (
              <tr key={ride.rideId}>
                <td className="py-2 px-4 ">{index + 1}</td>
                <td className="py-2 px-4 ">{ride.numberOfPassenger}</td>
                <td className="py-2 px-4 ">
                  {ride.rideType ? "Single" : "Shared"}
                </td>
                <td className="py-2 px-4 ">{ride.status}</td>
                <td className="py-2 px-4 ">{ride.price}</td>
                <td className="py-2 px-4 ">{`${ride.driver?.firstName} ${ride.driver?.lastName}`}</td>
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
      <div className="text-center mt-5">
        <button
          title="Previous page"
          onClick={handlePrevPage}
          disabled={!rides.meta.previousPageNumber}
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed cursor-pointer text-xl"
        >
          <span className="mr-8">{leftArrow}</span>
        </button>
        <span>
          Page {currentPage} of {rides.meta.totalPage}
        </span>
        <button
          title="Next page"
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed  cursor-pointer text-xl"
          onClick={handleNextPage}
          disabled={!rides.meta.nextPageNumber}
        >
          <span className="ml-8">{explore}</span>
        </button>
      </div>
    </>
  );
}
export default Ridestable;
