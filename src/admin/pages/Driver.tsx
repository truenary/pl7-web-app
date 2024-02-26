import { useEffect, useState } from "react";
import Drivertable from "../components/driver/Drivertable";
import { searchIcon } from "../components/shared/Icons";
import { AllDriver } from "@/types/data";
import { InitialStateData } from "@/utils/utilities";
import { useRepository } from "@/hooks/CustomHook";

function Driver() {
  const [filterValue, setFilterValue] = useState("all");
  const [drivers, setDrivers] = useState<AllDriver>(InitialStateData);

  const { repo } = useRepository();
  const [searchQuery, setSearchQuery] = useState("");

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
    const fetchData = async () => {
      try {
        const data = await repo.getAllDriver();
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

    fetchData();
  }, [repo]);
  console.log(filterValue);
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center mt-5 align-middle gap-48">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <div className="relative left-16 ">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Here"
            className="bg-white h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchIcon}
          </div>
        </div>
        <select
          className="text-lg font-medium px-4 py-2 rounded "
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all">All</option>
          <option value="verified">Verified</option>
          <option value="notVerified">Not Verified</option>
        </select>
      </div>
      <div className="mt-5 mb-5">
        <Drivertable filterValue={filterValue} drivers={searchedDrivers} />
      </div>
    </div>
  );
}

export default Driver;
