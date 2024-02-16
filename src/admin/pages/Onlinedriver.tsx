import DashboardMap from "../components/dashboard/Dashboard_map";
import OnlineDriverTable from "../components/OnlineDriver/OnlineDriverTable";

function Onlinedriver() {
  return (
    <div className="flex flex-row">
      <OnlineDriverTable />
      <div className="flex-grow h-full">
        <DashboardMap />
      </div>
    </div>
  );
}

export default Onlinedriver;
