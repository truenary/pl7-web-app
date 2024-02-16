import { useEffect, useState } from "react";
import { fetchData } from "../../action/FetchOnlineDriverData";

import { OnlineDriver } from "@/types/data";
import _ from "lodash";

function OnlineDriverTable() {
  const [onlineDrivers, setOnlineDrivers] = useState<OnlineDriver[]>([]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      setOnlineDrivers(data);
    };

    fetchDataAndSetState();
  }, []);

  return (
    <div className="flex-none h-auto w-1/2 border-2 border-cyan-600 mx-2 my-2">
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Rating</th>
          </tr>
        </thead>
        <tbody>
          {_.map(onlineDrivers, (driver) => (
            <tr key={driver.id}>
              <td className="py-2 px-4 border-b">{driver.name}</td>
              <td className="py-2 px-4 border-b">{driver.Status}</td>
              <td className="py-2 px-4 border-b">{driver.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OnlineDriverTable;
