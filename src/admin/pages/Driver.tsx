import Drivertable from "../components/driver/Drivertable";

function Driver() {
  return (
    <div className="mb-4">
      <div className="flex flex-row relative items-center mt-5 align-middle">
        <h1 className="text-lg font-medium">All Drivers</h1>
        <p className="text-lg absolute right-10 font-medium">filter/sort</p>
      </div>
      <div className="mt-5 mb-5">
        <Drivertable />
      </div>
    </div>
  );
}

export default Driver;
