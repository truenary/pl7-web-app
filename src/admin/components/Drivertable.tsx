// src/components/UserTable.tsx
import React, { useState } from 'react';
import { DriverRepo, IDriverRepo } from '../../Repos/DriverRepo';
import { IDriverApi } from '../../api/type';
import { DriverApi } from '../../api/DriverApi';


interface User {
    id: string;
    first_name?: string;
    last_name?: string;
    license_number?: string;
    vehicle_number?: string;
    vehicle_color?: string;
    phone?: string;
}

async function UserTable() {
    const [users, setUsers] = useState<User | undefined>();

    const api: IDriverApi = new DriverApi();
    const repo: IDriverRepo = new DriverRepo(api);
    const data = await repo.getAllDriver();
    const newData: User = {

        id: data[0].id,
        first_name: data[0].first_name,
        last_name: data[0].last_name,
        license_number: data[0].liscence_number,
        vehicle_number: data[0].vehicle_number,
        vehicle_color: data[0].vehicle_color,
        phone: data[0].phone,

    }
    setUsers(newData);
    return (
        <table className='table-fixed'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>License Number</th>
                    <th>Vehicle Number</th>
                    <th>Vehicle Color</th>
                    <th>Phone</th>
                    <th>Token</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>{users?.id}</td>
                    <td>{users?.first_name}</td>
                    <td>{users?.last_name}</td>
                    <td>{users?.license_number}</td>
                    <td>{users?.vehicle_number}</td>
                    <td>{users?.vehicle_color}</td>
                    <td>{users?.phone}</td>

                </tr>
                {/* {users?.map(user > (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.license_number}</td>
                        <td>{user.vehicle_number}</td>
                        <td>{user.vehicle_color}</td>
                        <td>{user.phone}</td>
                        <td>{user.token}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
}

export default UserTable;
