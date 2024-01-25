import PassengerTable from "../components/passenger/PassengerTable";

function Passengers() {
  return (
    <div className="mb-4">
      <div className="flex flex-row relative items-center mt-5 align-middle">
        <h1 className="text-lg font-medium">All Passengers</h1>
        <p className="text-lg absolute right-10 font-medium">filter/sort</p>
      </div>
      <div className="mt-5 mb-5">
        <PassengerTable />
      </div>
    </div>
  );
}

export default Passengers;
