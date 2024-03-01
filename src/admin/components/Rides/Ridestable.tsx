import { ALLRides, Ride } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import { useNavigate, useSearchParams } from "react-router-dom";
// import _ from "lodash";
declare type TableProp = {
  rides: ALLRides;
  currentPage: number;
  // handleNextPage: () => void;
  // handlePrevPage: () => void;
};
function Ridestable({
  rides,
  currentPage,
}: // handleNextPage,
// handlePrevPage,
TableProp) {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const searchQuery = searchParam.get("searchQuery") || "";
  const filterByRideType = searchParam.get("filterByRideType") || "all";
  const filterByStatus = searchParam.get("filterByStatus") || "all";

  const filteredRides = rides.list.filter((ride: Ride) => {
    // Filter by ride type
    const isActive = filterByRideType === "single";
    if (filterByRideType !== "all" && ride.rideType !== isActive) {
      return false;
    }
    // Filter by ride status
    if (filterByStatus !== "all" && ride.status !== filterByStatus) {
      return false;
    }
    // Search by passenger or driver name
    if (
      searchQuery &&
      !`${ride.user?.firstName} ${ride.user?.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
  const handleNextPage = () => {
    if (rides.meta.nextPageNumber) {
      // setCurrentPage(rides.meta.nextPageNumber);
      navigate(`?page=${rides.meta.nextPageNumber}`);
    }
  };

  const handlePrevPage = () => {
    if (rides.meta.previousPageNumber) {
      // setCurrentPage(rides.meta.previousPageNumber);
      navigate(`?page=${rides.meta.previousPageNumber}`);
    }
  };

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
