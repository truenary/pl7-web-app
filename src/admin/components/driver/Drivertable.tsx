import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";
import { AllDriver, Driver } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import _ from "lodash";
import { useNavigate, useSearchParams } from "react-router-dom";

declare type TableProp = {
  drivers: AllDriver;
  currentPage: number;
};
function Drivertable({ drivers, currentPage }: TableProp) {
  const [s] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = s.get("searchQuery") || "";
  const filterByVerification = s.get("filterByV") || "all";
  const filterByOnline = s.get("filterByOF") || "all";

  const handleNextPage = () => {
    if (drivers.meta.nextPageNumber) {
      navigate(`?page=${drivers.meta.nextPageNumber}`);
    }
  };

  const handlePrevPage = () => {
    if (drivers.meta.previousPageNumber) {
      // setCurrentPage(drivers.meta.previousPageNumber);
      navigate(`?page=${drivers.meta.previousPageNumber}`);
    }
  };

  const filteredDrivers = drivers.list.filter((driver: Driver) => {
    // Filter by verification
    const isVerified = filterByVerification === "verified";
    if (
      filterByVerification !== "all" &&
      driver.accountVerifyStatus !== isVerified
    ) {
      return false;
    }
    // Filter by ride status
    const isOnline = filterByOnline === "online";
    if (filterByOnline !== "all" && driver.availabilityStatus !== isOnline) {
      return false;
    }
    // Search by passenger or driver name
    if (
      searchQuery &&
      !`${driver.user?.firstName} ${driver.user?.lastName} ${driver.user.phoneNumber}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
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
