// import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../global/Sidebar';

export default function Admin_Layout() {
    return (
        <div className="h-full overflow-hidden ">
            <main className="flex gap-4">
                <div className=''>
                    <Sidebar />
                </div>
                <div className="pt-0 px-4  mt-0 mx-auto flex-1 flex-col max-h-screen overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
