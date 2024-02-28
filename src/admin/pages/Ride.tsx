import { useRepository } from "@/hooks/CustomHook";
import Ridestable from "../components/Rides/Ridestable";
import { useEffect, useState } from "react";
import { ALLRides } from "@/types/data";
import { InitialStateData } from "@/utils/utilities";
import { searchIcon } from "../components/shared/Icons";

function Ride() {
  const [filterByRideType, setFilterByRideType] = useState("single");
  const [filterByStatus, setFilterByStatus] = useState("pending");
  const { repo } = useRepository();
  const [rides, setRides] = useState<ALLRides>(InitialStateData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (rides.meta.nextPageNumber) {
      setCurrentPage(rides.meta.nextPageNumber);
    }
  };

  const handlePrevPage = () => {
    if (rides.meta.previousPageNumber) {
      setCurrentPage(rides.meta.previousPageNumber);
    }
  };
  let searchedRides;
  if (searchQuery.length > 0) {
    const data = rides.list.filter((ride) =>
      `${ride.user?.firstName} ${ride.user?.lastName} ${ride.user?.phoneNumber}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    searchedRides = {
      list: data,
      meta: rides.meta,
    };
  } else {
    searchedRides = rides;
  }
  useEffect(() => {
    const fetchData = async (pageNumber: number) => {
      try {
        console.log(pageNumber);
        const data = await repo.getAllRides(pageNumber);
        // Check if data is an array
        if (data && "list" in data && "meta" in data) {
          setRides(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(currentPage);
  }, [repo, currentPage]);
  return (
    <div className="mb-28 align-middle">
      <div className="flex flex-row items-center py-4  px-4 align-middle gap-10 sticky top-0 bg-white">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <div className="relative">
          <input
            type="text"
            id="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name of passenger or driver"
            className="bg-white h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchIcon}
          </div>
        </div>
        <div className="flex flex-row gap-4 align-middle items-center">
          <label htmlFor="accountVerify" className="text-base font-medium">
            By Ride Type :
          </label>
          <select
            id="accountVerify"
            className="text-base font-medium p-2 rounded border"
            onChange={(e) => setFilterByRideType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="sharing">Sharing</option>
          </select>
          <label htmlFor="online" className="text-base font-medium">
            By Ride Status:
          </label>
          <select
            id="online"
            className="text-base font-medium  p-2 rounded border   "
            onChange={(e) => setFilterByStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Cancelled">Canceled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <Ridestable
          filterByRideType={filterByRideType}
          filterByStatus={filterByStatus}
          rides={searchedRides}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
}

export default Ride;
