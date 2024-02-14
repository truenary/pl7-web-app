import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";
import { useRepository } from "@/hooks/CustomHook";
import { useEffect, useState } from "react";
import { AllDriver, Driver, driverTableProp } from "@/types/data";
import _ from "lodash";

function Drivertable({ filterValue }: driverTableProp) {
  console.log(filterValue);
  const { repo } = useRepository();
  const [drivers, setDrivers] = useState<AllDriver>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllDriver();
        // Check if data is an array
        if (_.isArray(data)) {
          setDrivers(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [repo]);
  return (
    <div className="overflow-x-auto text-center">
      <table className='min-w-full bg-white border border-gray-300"'>
        <thead>
          <tr>
            <TableHeading label="SN" />
            <TableHeading label="Image" />
            <TableHeading label="Name" />
            <TableHeading label="Address" />
            <TableHeading label="Phone" />
            <TableHeading label="Total Rides" />
            <TableHeading label="Ratings" />
            <TableHeading label="Account Status" />
            <TableHeading label="Driver Status" />
            <TableHeading label="Action" />
          </tr>
        </thead>
        <tbody>
          {drivers?.map((driver: Driver, index: number) => (
            <DriverTableRow user={driver} index={index} key={driver._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivertable;
