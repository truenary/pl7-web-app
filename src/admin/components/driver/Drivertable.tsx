import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";
import { useDrivers, useRepository } from "../../../hooks/CustomHook";

function Drivertable() {
  const { driverRepo } = useRepository();
  if (!driverRepo) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useDrivers();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    console.log(error);
    return <h2>Error: {error.message}</h2>;
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
            <TableHeading label="Action" />
          </tr>
        </thead>
        <tbody>
          {data?.map((driver, index) => (
            <DriverTableRow user={driver} index={index} key={driver.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivertable;
