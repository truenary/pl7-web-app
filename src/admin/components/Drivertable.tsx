// src/components/UserTable.tsx
import React, { useEffect, useState } from 'react';


interface User {
    id: string;
    first_name?: string;
    last_name?: string;
    license_number?: string;
    vehicle_number?: string;
    vehicle_color?: string;
    phone?: string;
    token?: string;
}

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }

                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                {users?.map(user => (
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
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
