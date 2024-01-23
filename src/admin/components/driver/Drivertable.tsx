import { DriverRepo, IDriverRepo } from "../../../Repos/DriverRepo";
import { IDriverApi } from "../../../api/type";
import { DriverApi } from "../../../api/DriverApi";
import { useQuery } from "@tanstack/react-query";
import TableHeading from "../shared/TableHeading";
import DriverTableRow from "./DriverTableRow";

function Drivertable() {
  const api: IDriverApi = new DriverApi();
  const repo: IDriverRepo = new DriverRepo(api);
  if (!repo) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const result = await repo.getAllDriver();
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
            <TableHeading label="SN" />
            <TableHeading label="Name" />
            <TableHeading label="Address" />
            <TableHeading label="Phone" />
            <TableHeading label="Joining Date" />
            <TableHeading label="Total Rides" />
            <TableHeading label="Ratings" />
            <TableHeading label="Status" />
            <TableHeading label="Action" />
          </tr>
        </thead>
        <tbody>
          {data?.map((driver, index) => (
            <DriverTableRow user={driver} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drivertable;
