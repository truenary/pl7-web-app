import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { useRepository } from "@/hooks/CustomHook";
import { useEffect, useState } from "react";
import { AllPassenger, Passenger } from "@/types/data";

export default function PassengerTable() {
  const { repo } = useRepository();
  const [passengers, setPassengers] = useState<AllPassenger>({
    list: [],
    pagination: {
      totalPage: 0,
      totalItem: 0,
      previousPageNumber: null,
      currentPageNumber: 0,
      nextPageNumber: null,
    },
  });
  const [currentPage, setCurrentPage] = useState(
    passengers.pagination.currentPageNumber
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      passengers.pagination.nextPageNumber ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      passengers.pagination.previousPageNumber ? prevPage - 1 : prevPage
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllPassengers();
        if (data && "list" in data && "pagination" in data) {
          console.log(data);
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
  if (passengers) {
    console.log(passengers);
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
              passengers.list.map((passenger: Passenger, index: number) => (
                <PassengerTableRow
                  user={passenger}
                  index={index}
                  key={passenger._id}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={handlePrevPage}
          disabled={!passengers.pagination.previousPageNumber}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {passengers.pagination.totalPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={!passengers.pagination.nextPageNumber}
        >
          Next
        </button>
      </div>
    </>
  );
}
