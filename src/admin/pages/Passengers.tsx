import { useState } from "react";
import PassengerTable from "../components/passenger/PassengerTable";

function Passengers() {
  const [filterValue, setFilterValue] = useState<string>("");
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center mt-5 align-middle gap-x-[790px]">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <select
          className="text-lg font-medium px-4 py-2 rounded "
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="notActive">Not Active</option>
        </select>
      </div>
      <div className="mt-5 mb-5">
        <PassengerTable filterValue={filterValue} />
      </div>
    </div>
  );
}

export default Passengers;
