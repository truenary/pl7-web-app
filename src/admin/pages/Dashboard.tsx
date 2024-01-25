import Dashboard_map from "../components/dashboard/Dashboard_map";

function Dashboard() {
  return (
    <>
      <div className="map h-auto  ">
        <Dashboard_map />
      </div>

      <div className="my-6 grid grid-cols-2 gap-2">
        <div className="h-80  bg-slate-200">
          <h1 className="text-center text-black-200">graph</h1>
        </div>

        <div className="h-80  bg-slate-200">
          <h1 className="text-center text-black-200">total info</h1>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-2 my-6">
        <div className="h-80  bg-slate-200">
          <h1 className="text-center text-black-200">Total Driver</h1>
        </div>

        <div className="h-80  bg-slate-200">
          <h1 className="text-center text-black-200">total passenger</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
