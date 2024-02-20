import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { useRepository } from "@/hooks/CustomHook";
import { useEffect } from "react";
import { Passenger } from "@/types/data";
import { explore, leftArrow } from "../shared/Icons";
import usePaginationStore from "@/Storemanagement/Store";

export default function PassengerTable({ filterValue }: TableProp) {
  const { repo } = useRepository();
  const currentPage = usePaginationStore((state) => state.currentPage);
  const passengers = usePaginationStore((state) => state.passengers);
  const setPage = usePaginationStore((state) => state.setPage);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllPassengers();
        console.log(data);
        if (data && "list" in data) {
          usePaginationStore.setState({
            passengers: data,
          });
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [repo, setPage]);

  return (
    <>
      <div className="overflow-x-auto text-center">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <TableRow label="SN" />
              <TableRow label="Image" />
              <TableRow label="Name" />
              <TableRow label="PhoneNumber" />
              <TableRow label="created At" />
              <TableRow label="Updated At" />
              <TableRow label="Status" />
              <TableRow label="role" />
              <TableRow label="Action" />
            </tr>
          </thead>
          <tbody>
            {passengers && passengers.list ? (
              passengers.list.map((passenger: Passenger, index: number) => (
                <PassengerTableRow
                  user={passenger}
                  index={index}
                  key={passenger.userId}
                />
              ))
            ) : (
              <tr>
                <td colSpan={9}>The data is undefined</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <button
          title="Previous page"
          onClick={handlePrevPage}
          disabled={!passengers?.pagination?.meta.previousPageNumber}
          className="bg-transparent border-1 rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed cursor-pointer text-xl"
        >
          <span className="mr-2">{leftArrow}</span>
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {passengers?.pagination?.meta.totalPage}
        </span>
        <button
          title="Next page"
          className="bg-transparent border-1 rounded-md py-1 px-1 font-normal text-green-600 disabled:text-gray-800 disabled:cursor-not-allowed cursor-pointer text-xl"
          onClick={handleNextPage}
          disabled={!passengers?.pagination?.meta.nextPageNumber}
        >
          Next
          <span className="ml-2">{explore}</span>
        </button>
      </div>
    </>
  );
}
