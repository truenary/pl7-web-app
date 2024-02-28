import { useState } from "react";
import DashboardMap from "../components/dashboard/Dashboard_map";
import OnlineDriverTable from "../components/OnlineDriver/OnlineDriverTable";
import { searchIcon } from "../components/shared/Icons";

function Onlinedriver() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  return (
    <div className="mb-28">
      <div className="flex flex-row items-center p-4 align-middle gap-10 sticky top-0 bg-white">
        <h1 className="text-lg font-medium">All Online Driver</h1>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="bg-white h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchIcon}
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 flex flex-row gap-4 w-full">
        <div className="w-[40%]">
          <OnlineDriverTable />
        </div>
        <div className="w-[60%]">
          <DashboardMap />
        </div>
      </div>
    </div>
  );
}

export default Onlinedriver;
