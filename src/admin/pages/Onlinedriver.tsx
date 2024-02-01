import React from 'react'
import DashboardMap from '../components/dashboard/Dashboard_map'

function Onlinedriver() {
    return (
        <div className='flex flex-row'>
            <div className='flex-none h-auto w-1/2 border-2 border-cyan-600 mx-2 my-2'>
                <table className='min-w-full  text-center'>
                    <thead>
                        <tr className=''>
                            <th className='py-2 px-4 border-b'>Name</th>
                            <th className='py-2 px-4 border-b'>Status</th>
                            <th className='py-2 px-4 border-b'>rating</th>




                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>


            </div>
            <div className='flex-grow h-full'>
                <DashboardMap />
            </div>
        </div>

    )
}

export default Onlinedriver
