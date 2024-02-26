
import RidesHistoryTable from './RidesHistoryTable';
import { useLocation } from 'react-router-dom';


function RidesHistory() {
    
    const location = useLocation();
    const userId = location.state?.userId;
    
  return (
   <div className="mb-4">
      <div className="flex flex-row relative items-center mt-5 align-middle">
        <h1 className="text-lg font-medium">Rides History</h1>
        <select
          className="text-lg absolute right-24 font-medium px-4 py-2 rounded"
        
        >
          <option value="all">All</option>
          <option value="verified">recent Rides </option>
          <option value="not_verified"> old Rides</option>
        </select>
        <button className="text-lg absolute right-4 font-medium bg-green-500 hover:bg-green-600 px-4 py-1 rounded">
          filter
        </button>
      </div>
      <div className="mt-5 mb-5">
       
         <RidesHistoryTable userId={userId} />
      </div>
    </div>
  )
}

export default RidesHistory
