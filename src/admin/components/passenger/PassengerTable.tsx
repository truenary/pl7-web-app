import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { useRepository } from "../../../hooks/CustomHook";
import { useEffect, useState } from "react";

export default function PassengerTable() {
  const { repo } = useRepository();
  const [passengers, setPassengers] = useState<AllPassenger>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllPassengers();
        if (Array.isArray(data)) {
          setPassengers(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
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
            passengers.map((passenger: Passenger, index: number) => (
              <PassengerTableRow
                user={passenger}
                index={index}
                key={passenger.id}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
