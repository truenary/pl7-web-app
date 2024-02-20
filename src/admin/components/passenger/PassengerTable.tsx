import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { useRepository } from "@/hooks/CustomHook";
import { useEffect, useState } from "react";
import { AllPassenger, Passenger, TableProp } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import { InitialStateData } from "@/utils/utilities";
import _ from "lodash";

export default function PassengerTable({ filterValue }: TableProp) {
  const { repo } = useRepository();
  const [passengers, setPassengers] = useState<AllPassenger>(InitialStateData);
  const [currentPage, setCurrentPage] = useState(
    passengers.meta.currentPageNumber
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      passengers.meta.nextPageNumber ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      passengers.meta.previousPageNumber ? prevPage - 1 : prevPage
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllPassengers();
        if (data && "list" in data && "meta" in data) {
          setPassengers(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [repo]);
  let filterPassengers;
  if (filterValue === "all") {
    // No filtering required, all drivers are included
    filterPassengers = passengers.list;
  } else {
    // Filter based on the accountVerifyStatus attribute
    const isActive = filterValue === "active";
    filterPassengers = passengers.list.filter(
      (passenger) => passenger.status === isActive
    );
  }
  return (
    <>
      <div className="overflow-x-auto text-center">
        <table className='min-w-full bg-white border border-gray-300"'>
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
                _.map(passengers,(passenger :Passenger,index:number)=>(
            <PassengerTableRow
                  user={passenger}
                  index={index}
                  key={passenger._id}
                />))
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
