import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";
import { useDrivers, useRepository } from "../../../hooks/CustomHook";
import { useState } from "react";
import Pagination from "../shared/Pagination";

declare type driverTableProp = {
  filterValue: string;
};
function Drivertable({ filterValue }: driverTableProp) {
  const { driverRepo } = useRepository();
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  if (!driverRepo) {
    return null;
  }
  console.log(filterValue);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useDrivers();
  const { data, error, isLoading, isError } = useDrivers();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    console.log(error);
    return <h2>Error: {error.message}</h2>;
  }
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = data?.slice(indexOfFirstUser, indexOfLastUser);
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="overflow-x-auto text-center">
      <table className='min-w-full bg-white border border-gray-300"'>
        <thead>
          <tr>
            <TableHeading label="SN" />
            <TableHeading label="Name" />
            <TableHeading label="Address" />
            <TableHeading label="Phone" />
            <TableHeading label="Joining Date" />
            <TableHeading label="Total Rides" />
            <TableHeading label="Ratings" />
            <TableHeading label="Account Status" />
            <TableHeading label="Driver Status" />
            <TableHeading label="Account Status" />
            <TableHeading label="Driver Status" />
            <TableHeading label="Action" />
          </tr>
        </thead>
        <tbody>
          {currentUser?.map((driver, index) => (
            <DriverTableRow user={driver} index={index} key={driver.id} />
          ))}
        </tbody>
      </table>
      {typeof data !== "undefined" ? (
        <Pagination
          postPerPage={userPerPage}
          totalPost={data.length}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Drivertable;
