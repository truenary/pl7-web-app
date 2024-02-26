import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";

import { useState } from "react";
import { AllDriver, Driver } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import _ from "lodash";

declare type TableProp = {
  filterValue: string;
  drivers: AllDriver;
};
function Drivertable({ filterValue, drivers }: TableProp) {
  console.log(filterValue);

  const [currentPage, setCurrentPage] = useState(
    drivers.meta.currentPageNumber
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      drivers.meta.nextPageNumber ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      drivers.meta.previousPageNumber ? prevPage - 1 : prevPage
    );
  };
  let filteredDrivers;
  if (filterValue === "all") {
    // No filtering required, all drivers are included
    filteredDrivers = drivers.list;
  } else {
    // Filter based on the accountVerifyStatus attribute
    const isVerified = filterValue === "verified";
    filteredDrivers = drivers.list.filter(
      (driver) => driver.accountVerifyStatus === isVerified
    );
  }
  return (
    <>
      <div className="text-center">
        <table className='min-w-full bg-white border border-gray-300"'>
          <thead>
            <tr>
              <TableHeading label="SN" />
              <TableHeading label="Image" />
              <TableHeading label="Name" />
              <TableHeading label="Phone" />
              <TableHeading label="Total Rides" />
              <TableHeading label="Ratings" />
              <TableHeading label="Account Status" />
              <TableHeading label="Driver Status" />
              <TableHeading label="Action" />
            </tr>
          </thead>
          <tbody>
            {_.map(filteredDrivers, (driver: Driver, index: number) => (
              <DriverTableRow
                user={driver}
                index={index}
                key={driver.driverId}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <button
          title="Previous page"
          onClick={handlePrevPage}
          disabled={!drivers.meta.previousPageNumber}
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed cursor-pointer text-xl"
        >
          <span className="mr-8">{leftArrow}</span>
        </button>
        <span>
          Page {currentPage} of {drivers.meta.totalPage}
        </span>
        <button
          title="Next page"
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed  cursor-pointer text-xl"
          onClick={handleNextPage}
          disabled={!drivers.meta.nextPageNumber}
        >
          <span className="ml-8">{explore}</span>
        </button>
      </div>
    </>
  );
}

export default Drivertable;
