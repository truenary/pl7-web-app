import TableHeading from "../shared/TableHeading";

function RidesHistoryTable({ userId }: { userId: string }) {
  console.log(userId);

  return (
    <div className="overflow-x-auto ">
      for {userId}
      <table className='min-w-full bg-white border border-gray-300 text-center "'>
        <thead>
          <tr>
            <TableHeading label="SN" />
            <TableHeading label="numberOfPassenger" />
            <TableHeading label="price" />
            <TableHeading label="message" />
            <TableHeading label="status " />
            <TableHeading label="pickupLocation " />
            <TableHeading label="dropLocation" />
          </tr>
        </thead>
        <tbody>
          {/* {drivers?.map((driver: Driver, index: number) => (
            <DriverTableRow user={driver} index={index} key={driver._id} />
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default RidesHistoryTable;
