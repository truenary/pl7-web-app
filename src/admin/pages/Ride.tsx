import { useRepository } from "@/hooks/CustomHook";
import Ridestable from "../components/Rides/Ridestable";
import { useEffect, useState } from "react";
import { ALLRides } from "@/types/data";
import { InitialStateData } from "@/utils/utilities";
import { searchIcon } from "../components/shared/Icons";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Ride() {
  const { repo } = useRepository();
  const [rides, setRides] = useState<ALLRides>(InitialStateData);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const currentPage = Number(searchParam.get("page")) || 1;
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // useEffect(() => {
  //   setCurrentPage(cp);
  // }, [cp]);
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
            onChange={(e) => navigate(`?searchQuery=${e.target.value}`)}
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
            onChange={(e) => navigate(`?filterByRideType=${e.target.value}`)}
          >
            <option value="all" defaultChecked>
              All
            </option>
            <option value="single">Single</option>
            <option value="sharing">Sharing</option>
          </select>
          <label htmlFor="online" className="text-base font-medium">
            By Ride Status:
          </label>
          <select
            id="online"
            className="text-base font-medium  p-2 rounded border   "
            onChange={(e) => navigate(`?filterByStatus=${e.target.value}`)}
          >
            <option value="all" defaultChecked>
              All
            </option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Cancelled">Canceled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <Ridestable rides={rides} currentPage={currentPage} />
      </div>
    </div>
  );
}

export default Ride;
