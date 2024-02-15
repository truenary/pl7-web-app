import { useEffect, useState } from "react";
import { useRepository } from "@/hooks/CustomHook";
import { OnlineDriver } from "@/types/data";
import _ from "lodash";
function OnlineDriverTable() {
  const { repo } = useRepository();
  const [Onlinedrivers, setOnlineDrivers] = useState<OnlineDriver[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllOnlineDriver();
        if (_.isArray(data)) {
          setOnlineDrivers(data);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // const intervalId = setInterval(fetchData, 1000);
    // return () => clearInterval(intervalId);
  }, [repo]);
  return (
    <div className="flex-none h-auto w-1/2 border-2 border-cyan-600 mx-2 my-2">
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">rating</th>
          </tr>
        </thead>
        <tbody>
  {           _.map(Onlinedrivers,(driver)=>(
            <tr key={driver.id}>
              <td className="py-2 px-4 border-b">{driver.name}</td>
              <td className="py-2 px-4 border-b">{driver.Status}</td>
              <td className="py-2 px-4 border-b">{driver.rating}</td>
            </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default OnlineDriverTable;
