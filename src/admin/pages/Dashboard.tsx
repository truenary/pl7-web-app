import Dashboard_map from "../components/dashboard/Dashboard_map"


import TotalChart from "../components/Charts/TotalChart";
import ChildComponent from "../components/dashboard/ChildComponent";


function Dashboard() {
  return (
    <>

      <div className="my-6  grid-cols-2 gap-2">
        <div className="h-auto  bg-slate-200">
          <h1 className="text-center text-black-200">Chart Survey</h1>
          <TotalChart />
        </div>
      </div>
      <div className=" my-44">
        <h1 className="text-center text-gray-800 text-3xl font-semibold mb-6">Travel Statistics</h1>
        <div className="flex justify-center">
          <div className="flex flex-row gap-28  my-14">
            <ChildComponent children="Booked Trips" value="400" backgroundColor="bg-gradient-to-br from-blue-400 to-cyan-500" />
            <ChildComponent children="New Passengers" value="200" backgroundColor="bg-gradient-to-br from-red-400 to-pink-500" />
            <ChildComponent children="Cancelled Trips" value="20" backgroundColor="bg-gradient-to-br from-orange-400 to-yellow-500" />
            <ChildComponent children="New Drivers" value="400" backgroundColor="bg-gradient-to-br from-green-400 to-teal-500" />
          </div>
        </div>
      </div>






    </>
  );
}

export default Dashboard;



