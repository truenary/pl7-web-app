// src/components/UserTable.tsx
import { useEffect, useState } from 'react';
import { DriverRepo, IDriverRepo } from '../../Repos/DriverRepo';
import { IDriverApi } from '../../api/type';
import { DriverApi } from '../../api/DriverApi';


interface Driver {
    id: string;
    first_name?: string;
    last_name?: string;
    liscence_number
    ?: string;
    vehicle_number?: string;
    vehicle_color?: string;
    phone?: string;
}

function Drivertable() {
    const [Driver, setDriver] = useState<Driver[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const api: IDriverApi = new DriverApi();
                const repo: IDriverRepo = new DriverRepo(api);
                const data = await repo.getAllDriver();

                // Check if data is an array
                if (Array.isArray(data)) {
                    setDriver(data);
                } else {
                    console.error('Data is not in the expected format:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="overflow-x-auto">
            <table className='min-w-full bg-white border border-gray-300"'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b'>ID</th>
                        <th className='py-2 px-4 border-b'>First Name</th>
                        <th className='py-2 px-4 border-b'>Last Name</th>
                        <th className='py-2 px-4 border-b'>License Number</th>
                        <th className='py-2 px-4 border-b'>Vehicle Number</th>
                        <th className='py-2 px-4 border-b'>Vehicle Color</th>
                        <th className='py-2 px-4 border-b'>Phone</th>

                    </tr>
                </thead>
                <tbody>
                    {Driver?.map(Driver => (
                        <tr key={Driver.id}>
                            <td className="py-2 px-4 border-b">{Driver.id}</td>
                            <td className="py-2 px-4 border-b">{Driver.first_name}</td>
                            <td className="py-2 px-4 border-b">{Driver.last_name}</td>
                            <td className="py-2 px-4 border-b">{Driver.liscence_number}</td>
                            <td className="py-2 px-4 border-b">{Driver.vehicle_number}</td>
                            <td className="py-2 px-4 border-b">{Driver.vehicle_color}</td>
                            <td className="py-2 px-4 border-b">{Driver.phone}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Drivertable;
