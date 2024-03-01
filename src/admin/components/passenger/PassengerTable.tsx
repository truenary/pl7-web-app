import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { AllPassenger, Passenger } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
declare type TableProp = {
  // filterValue: string;
  passengers: AllPassenger;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  currentPage: number;
};
export default function PassengerTable({
  // filterValue,
  passengers,
  handleNextPage,
  handlePrevPage,
  currentPage,
}: TableProp) {
  const [s] = useSearchParams();
  const searchQuery = s.get("searchQuery") || "";
  const filterValue = s.get("filter") || "all";
  let filterPassengers;
  if (_.isNull(filterValue)) {
    filterPassengers = passengers.list;
  }
  if (filterValue === "all") {
    // No filtering required, all drivers are included
    filterPassengers = passengers.list;
  } else {
    // Filter based on the accountVerifyStatus attribute
    const isActive = filterValue === "online";
    filterPassengers = passengers.list.filter(
      (passenger) => passenger.status === isActive
    );
  }
  let searchedPassengers;
  if (!_.isNull(searchQuery) && searchQuery.length > 0) {
    const data = filterPassengers.filter((passenger) =>
      `${passenger.firstName} ${passenger.lastName} ${passenger.phoneNumber}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    searchedPassengers = data;
  } else {
    searchedPassengers = filterPassengers;
  }

  return (
    <>
      <div className="text-center">
        <table className="min-w-full">
          <thead>
            <tr>
              <TableRow label="SN" />
              <TableRow label="Image" />
              <TableRow label="Name" />
              <TableRow label="Address" />
              <TableRow label="Phone" />
              <TableRow label="Joining Date" />
              <TableRow label="Total Rides" />
              <TableRow label="Status" />
              <TableRow label="Action" />
            </tr>
          </thead>
          <tbody>
            {typeof passengers === "undefined" ? (
              <tr>
                <td>The data is undefined</td>
              </tr>
            ) : (
              _.map(
                searchedPassengers,
                (passenger: Passenger, index: number) => (
                  <PassengerTableRow
                    user={passenger}
                    index={index}
                    key={passenger.userId}
                  />
                )
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <button
          title="Previous page"
          onClick={handlePrevPage}
          disabled={!passengers.meta.previousPageNumber}
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed cursor-pointer text-xl"
        >
          <span className="mr-8">{leftArrow}</span>
        </button>
        <span>
          Page {currentPage} of {passengers.meta.totalPage}
        </span>
        <button
          title="Next page"
          className="bg-transparent border-1  rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed  cursor-pointer text-xl"
          onClick={handleNextPage}
          disabled={!passengers.meta.nextPageNumber}
        >
          <span className="ml-8">{explore}</span>
        </button>
      </div>
    </>
  );
}
