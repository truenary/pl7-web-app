// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TableRow from "../shared/TableHeading";
import PassengerTableRow from "./PassengerTableRow";
import { useRepository } from "../../../hooks/CustomHook";

export default function PassengerTable() {
  const { passengerRepo: repo } = useRepository();
  if (!repo) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["passenger"],
    queryFn: async () => {
      const result = await repo.getAllPassengers();
      return result;
    },
  });

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
            <TableRow label="SN" />
            <TableRow label="Name" />
            <TableRow label="Address" />
            <TableRow label="Phone" />
            <TableRow label="Joining Date" />
            <TableRow label="Total Rides" />
            <TableRow label="Account Status" />
            <TableRow label="Action" />
          </tr>
        </thead>
        <tbody>
          {typeof data === "undefined" ? (
            <tr>
              <td>The data is undefined</td>
            </tr>
          ) : (
            data.map((passenger, index) => (
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
