import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useState } from "react";
import { useDrivers, useRepository } from "../../../hooks/CustomHook";
import { capitalize } from "../../../utils/utilities";
export default function DriverInfo() {
  const [open, setOpen] = useState<boolean>(false);
  const [report, setReport] = useState<string>("");
  const { id } = useParams();
  const { repo } = useRepository();
  function handleSendMessage() {
    if (confirm("Are you sure!") == true) {
      console.log(report);
      setReport("");
    }
  }
  async function handleVerify() {
    if (confirm("Are you sured to verify the data?") === true) {
      if (typeof id !== "undefined") {
        const driver = await repo.verifyDrier(id);
        if (driver) {
          toast.success("Driver is verified successfully");
        }
      }
    }
  }
  // console.log(id);
  const { data, error, isLoading, isError } = useDrivers();
  if (isLoading) {
    return <h2>Data is loading....</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const driver: Driver[] | undefined = data?.filter((d: any) => d.id === id);
  // console.log(driver);
  if (typeof driver === "undefined") {
    console.log(driver);
  } else {
    return (
      <>
        <div className="bg-gray-100 mb-20">
          <div className="container mx-auto py-2">
            <div className="flex flex-row gap-x-4">
              <div className="w-1/2">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="driverImage"
                      className="w-full h-48 bg-gray-300 rounded mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">
                      Role: {capitalize(driver[0].user)}
                    </h1>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Driver Status
                    </span>
                    <ul>
                      <li className="mb-2">status: {driver[0].status}</li>
                      <li className="mb-2">
                        Total Rides: {driver[0].total_rides}
                      </li>
                      <li className="mb-2">Ratings: {driver[0].ratings}</li>
                      <li className="mb-2">
                        Joining Date: {driver[0].joining_date}
                      </li>
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
                        {`${capitalize(driver[0].first_name)} ${capitalize(
                          driver[0].last_name
                        )}`}
                      </li>
                      <li className="mb-2">Address: {driver[0].address}</li>
                      <li className="mb-2">Phone: {driver[0].phone}</li>
                      <li className="mb-2">
                        Liscence Number:{driver[0].liscence_number}
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
                        Number Plate: {driver[0].vehicle_number}
                      </li>
                      <li className="mb-2">Color: {driver[0].vehicle_color}</li>
                    </ul>
                  </div>
                  <div
                    className={`${
                      driver[0].account_status !== "Verified"
                        ? "flex"
                        : "hidden"
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
                        src="https://images.unsplash.com/photo-1626149637281-4e227308da18?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Vehicle Image"
                        className="h-auto max-w-full bg-gray-300 rounded mb-4 shrink-0"
                      />
                    </li>
                    <li>
                      <h3 className="font-medium text-xl mb-4">
                        Liscence Image
                      </h3>
                      <img
                        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*pZdSWb6BcwMFsKLYNn4FGA.jpeg"
                        alt="Liscence Image"
                        className="h-auto max-w-full bg-gray-300 rounded mb-4 shrink-0"
                      />
                    </li>
                    <li>
                      <h3 className="font-medium text-xl mb-4">
                        BillBook Image
                      </h3>
                      <img
                        src="https://scontent.fktm18-1.fna.fbcdn.net/v/t1.18169-9/14993374_1296023847105320_7049894729626723524_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=Y4aFH2uSgbkAX99lAGX&_nc_ht=scontent.fktm18-1.fna&oh=00_AfCbLvNo0MpPWeEVcsKFCGRJZgIUDb8KUAr0GwjCavMmtQ&oe=65D9CE44"
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
  }
}
