import { useEffect, useState } from "react";
import PassengerTable from "../components/passenger/PassengerTable";
import { useRepository } from "@/hooks/CustomHook";
import { AllPassenger } from "@/types/data";
import { InitialStateData } from "@/utils/utilities";
import { searchIcon } from "../components/shared/Icons";

function Passengers() {
  const [filterValue, setFilterValue] = useState<string>("");
  const { repo } = useRepository();
  const [passengers, setPassengers] = useState<AllPassenger>(InitialStateData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNextPage = () => {
    if (passengers.meta.nextPageNumber) {
      setCurrentPage(passengers.meta.nextPageNumber);
    }
  };

  const handlePrevPage = () => {
    if (passengers.meta.previousPageNumber) {
      setCurrentPage(passengers.meta.previousPageNumber);
    }
  };
  let searchedPassengers;
  if (searchQuery.length > 0) {
    const data = passengers.list.filter((passenger) =>
      `${passenger.firstName} ${passenger.lastName} ${passenger.phoneNumber}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    searchedPassengers = {
      list: data,
      meta: passengers.meta,
    };
  } else {
    searchedPassengers = passengers;
  }
  useEffect(() => {
    const fetchData = async (pageNumber: number) => {
      try {
        const data = await repo.getAllPassengers(pageNumber);
        if (data && "list" in data && "meta" in data) {
          console.log("at passenger table", data);
          setPassengers(data);
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
    <div className="mb-28">
      <div className="flex flex-row items-center p-4 align-middle gap-10 sticky top-0 bg-white">
        <h1 className="text-lg font-medium">All Passenger</h1>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or phone number"
            className="bg-white h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchIcon}
          </div>
        </div>
        <div className="flex flex-row gap-4 align-middle items-center">
          <label htmlFor="online" className="text-base font-medium">
            By Online or Offline :
          </label>
          <select
            id="online"
            className="text-lg font-medium p-2 rounded border focus:border-green-700"
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <PassengerTable
          filterValue={filterValue}
          passengers={searchedPassengers}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
}

export default Passengers;
