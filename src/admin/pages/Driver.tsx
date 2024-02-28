import { useEffect, useState } from "react";
import Drivertable from "../components/driver/Drivertable";
import { searchIcon } from "../components/shared/Icons";
import { AllDriver } from "@/types/data";
import { InitialStateData } from "@/utils/utilities";
import { useRepository } from "@/hooks/CustomHook";

function Driver() {
  const [filterByAccountVerification, setFilterByAccountVerification] =
    useState("all");
  const [filterByOnline, setFilterByOnline] = useState("all");
  const [drivers, setDrivers] = useState<AllDriver>(InitialStateData);

  const { repo } = useRepository();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (drivers.meta.nextPageNumber) {
      setCurrentPage(drivers.meta.nextPageNumber);
    }
  };

  const handlePrevPage = () => {
    if (drivers.meta.previousPageNumber) {
      setCurrentPage(drivers.meta.previousPageNumber);
    }
  };

  // Derived state. These are the posts that will actually be displayed
  let searchedDrivers;
  if (searchQuery.length > 0) {
    const data = drivers.list.filter((driver) =>
      `${driver.user.firstName} ${driver.user.lastName} ${driver.user.phoneNumber}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    searchedDrivers = {
      list: data,
      meta: drivers.meta,
    };
  } else {
    searchedDrivers = drivers;
  }
  useEffect(() => {
    const fetchData = async (pageNumber: number) => {
      try {
        const data = await repo.getAllDriver(pageNumber);
        // Check if data is an array
        if (data && "list" in data && "meta" in data) {
          console.log("at driver table: ", data);
          setDrivers(data);
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
      <div className="flex flex-row items-center align-middle gap-4 sticky top-0 bg-white py-4  px-4">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <div className="relative">
          <input
            type="text"
            id="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or phone number"
            className="bg-white h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchIcon}
          </div>
        </div>
        <div className="flex flex-row gap-2 align-middle items-center">
          <label htmlFor="accountVerify" className="text-base font-medium">
            By Account Verification :
          </label>
          <select
            id="accountVerify"
            className="text-base font-medium p-2 rounded border focus:border-green-700"
            onChange={(e) => setFilterByAccountVerification(e.target.value)}
          >
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="notVerified">Not Verified</option>
          </select>
          <label htmlFor="online" className="text-base font-medium">
            By Online or Offline :
          </label>
          <select
            id="online"
            className="text-base font-medium p-2 rounded border focus:border-green-700"
            onChange={(e) => setFilterByOnline(e.target.value)}
          >
            <option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <Drivertable
          filterByVerification={filterByAccountVerification}
          filterByOnline={filterByOnline}
          drivers={searchedDrivers}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
}

export default Driver;
