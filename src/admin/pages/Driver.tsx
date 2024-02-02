import { useState } from "react";
import Drivertable from "../components/driver/Drivertable";

function Driver() {
  const [filterValue, setFilterValue] = useState("all");
  console.log(filterValue);
  return (
    <div className="mb-4">
      <div className="flex flex-row relative items-center mt-5 align-middle">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <select
          className="text-lg absolute right-24 font-medium px-4 py-2 rounded"
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all">All</option>
          <option value="verified">Verified</option>
          <option value="not_verified">Not Verified</option>
        </select>
        <button className="text-lg absolute right-4 font-medium bg-green-500 hover:bg-green-600 px-4 py-1 rounded">
          filter
        </button>
      </div>
      <div className="mt-5 mb-5">
        <Drivertable filterValue={filterValue} />
      </div>
    </div>
  );
}

export default Driver;
