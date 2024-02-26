import { useState } from "react";
import Drivertable from "../components/driver/Drivertable";

function Driver() {
  const [filterValue, setFilterValue] = useState("all");
  console.log(filterValue);
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center mt-5 align-middle gap-x-[790px]">
        <h1 className="text-lg font-medium">All Drivers</h1>
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
        <Drivertable filterValue={filterValue} />
      </div>
    </div>
  );
}

export default Driver;
