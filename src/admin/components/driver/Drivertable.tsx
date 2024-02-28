import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";
import { AllDriver, Driver } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import _ from "lodash";

declare type TableProp = {
  filterByVerification: string;
  filterByOnline: string;
  drivers: AllDriver;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};
function Drivertable({
  filterByVerification,
  drivers,
  handleNextPage,
  handlePrevPage,
  currentPage,
  filterByOnline,
}: TableProp) {
  let filteredDrivers;
  if (filterByVerification === "all") {
    // No filtering required, all drivers are included
    filteredDrivers = drivers.list;
  } else {
    // Filter based on the accountVerifyStatus attribute
    const isVerified = filterByVerification === "verified";
    filteredDrivers = drivers.list.filter(
      (driver) => driver.accountVerifyStatus === isVerified
    );
  }
  if (filterByOnline !== "all") {
    const isOnline = filterByOnline === "online";
    filteredDrivers = filteredDrivers.filter(
      (driver) => driver.availabilityStatus === isOnline
    );
  }
  return (
    <>
      <div className="text-center">
        <table className="min-w-full">
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
