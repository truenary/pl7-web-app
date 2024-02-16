import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRepository } from "@/hooks/CustomHook";
import { capitalize } from "@/utils/utilities";
import { Driver } from "@/types/data";
import _ from "lodash";
export default function DriverInfo() {
  const [open, setOpen] = useState<boolean>(false);
  const [report, setReport] = useState<string>("");
  const [driver, setDriver] = useState<Driver>();
  const { id } = useParams();
  const { repo } = useRepository();
  function handleSendMessage() {
    if (_.isEqual(confirm("Are you sure!"), true)) {
      console.log(report);
      setReport("");
    }
  }
  async function handleVerify() {
    if (confirm("Are you sured to verify the data?") === true) {
      if (!_.isUndefined(id)) {
        const driver = await repo.verifyDrier(id);
        if (driver) {
          toast.success("Driver is verified successfully");
        }
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!_.isUndefined(id)) {
          const data = await repo.getDriverById(id);
          console.log(data);
          if (data) {
            if ("_id" in data) {
              setDriver(data);
            } else {
              console.log(data);
            }
          }
        } else {
          console.log("id is undefined");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [repo, id]);

  if (driver) {
    return (
      <>
        <div className="bg-gray-100 mb-20">
          <div className="container mx-auto py-2">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/2">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={driver.user.userImage}
                      alt="driverImage"
                      className="w-full h-48 bg-gray-300 rounded mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">
                      Role: {capitalize(driver.user.userRole)}
                    </h1>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Driver Status
                    </span>
                    <ul>
                      <li className="mb-2">status: {driver.user.status}</li>
                      <li className="mb-2">
                        Total Rides: {driver.user.totalRide}
                      </li>
                      <li className="mb-2">Ratings: {driver.ratings}</li>
                      <li className="mb-2">Joining Date: {driver.createdAt}</li>
                    </ul>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Personal Info
                    </span>
                    <ul>
                      <li className="mb-2">
                        Name:{" "}
                        {`${capitalize(driver.user.firstName)} ${capitalize(
                          driver.user.lastName
                        )}`}
                      </li>
                      <li className="mb-2">Address: {driver.user.address}</li>
                      <li className="mb-2">Phone: {driver.user.phoneNumber}</li>
                      <li className="mb-2">
                        Liscence Number:{driver.liscenceNumber}
                      </li>
                    </ul>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Vehicle Info
                    </span>
                    <ul>
                      <li className="mb-2">
                        Number Plate: {driver.vehicle.numberPlate}
                      </li>
                      <li className="mb-2">Color: {driver.vehicle.color}</li>
                    </ul>
                  </div>
                  <div
                    className={`${
                      driver.accountVerifyStatus !== true ? "flex" : "hidden"
                    } flex flex-row gap-x-2 mt-4`}
                  >
                    <button
                      onClick={handleVerify}
                      className="bg-green-500 py-2 px-4 rounded text-white text-base hover:bg-green-600 w-1/2"
                    >
                      Verify
                    </button>
                    <button
                      onClick={() => setOpen(!open)}
                      className="disabled:bg-slate-500 bg-red-500 py-2 px-4 rounded text-white text-base hover:bg-red-600 w-1/2"
                    >
                      {open ? "Hide Report" : "Report"}
                    </button>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />

                  <div className={`${open ? "flex" : "hidden"} flex-col mt-5`}>
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Send Message
                    </span>
                    <ul>
                      <li className="mb-2">
                        <textarea
                          className="border-2 border-black w-full h-20 rounded"
                          value={report}
                          onChange={(e) => setReport(e.target.value)}
                        />
                      </li>
                      <li className="mb-2">
                        <button
                          onClick={handleSendMessage}
                          className="bg-green-500 py-2 px-4 rounded text-white text-base hover:bg-green-600 w-1/2"
                        >
                          send
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white shadow rounded-lg p-6">
                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <h3 className="font-medium text-xl mb-4">
                        Vehicle Image
                      </h3>
                      <img
                        src={driver.vehicle.vehicleImage}
                        alt="Vehicle Image"
                        className="h-auto max-w-full bg-gray-300 rounded mb-4 shrink-0"
                      />
                    </li>
                    <li>
                      <h3 className="font-medium text-xl mb-4">
                        Liscence Image
                      </h3>
                      <img
                        src={driver.liscenceImage}
                        alt="Liscence Image"
                        className="h-auto max-w-full bg-gray-300 rounded mb-4 shrink-0"
                      />
                    </li>
                    <li>
                      <h3 className="font-medium text-xl mb-4">
                        BillBook Image
                      </h3>
                      <img
                        src={driver.vehicle.billBookImage}
                        alt="Bill Book Image"
                        className="h-auto max-w-full bg-gray-300 rounded mb-4 shrink-0"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    console.log(driver);
    return (
      <div>
        <h2>Driver data not found</h2>
      </div>
    );
  }
}
