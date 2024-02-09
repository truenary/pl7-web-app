// src/components/UserTable.tsx
import { useEffect, useState } from "react";
import { useRepository } from "../../../hooks/CustomHook";

interface Rides {
  id: string;
  PickupLocation: string;
  DropLocation: string;
  NumberOfPassenger: string;
  Price: string;
  Message: string;
  distance: string;
}

function Ridestable() {
  const { repo } = useRepository();
  const [Rides, setRides] = useState<Rides[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllRides();

        // Check if data is an array
        if (Array.isArray(data)) {
          setRides(data);
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
    <div className="overflow-x-auto">
      <table className="min-w-full  text-center">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">PickupLocation</th>
            <th className="py-2 px-4 border-b">DropLocation</th>
            <th className="py-2 px-4 border-b"> distance </th>
            <th className="py-2 px-4 border-b"> Price</th>
            <th className="py-2 px-4 border-b">NumberOfPassenger </th>
            <th className="py-2 px-4 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {Rides.map((Rides) => (
            <tr key={Rides.id}>
              <td className="py-2 px-4 border-b">{Rides.id}</td>
              <td className="py-2 px-4 border-b">{Rides.PickupLocation}</td>
              <td className="py-2 px-4 border-b">{Rides.DropLocation}</td>
              <td className="py-2 px-4 border-b">{Rides.distance}</td>
              <td className="py-2 px-4 border-b">{Rides.Price}</td>
              <td className="py-2 px-4 border-b">{Rides.NumberOfPassenger}</td>
              <td className="py-2 px-4 border-b">{Rides.Message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Ridestable;
