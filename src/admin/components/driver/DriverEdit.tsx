import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import { useRepository } from "@/hooks/CustomHook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Driver, driverFormType } from "@/types/data";
import _ from "lodash";
import { useState } from "react";
import Modal from "@/shared/Modal";

export default function DriverEditForm() {
  const { register, handleSubmit } = useForm<driverFormType>();
  const navigate = useNavigate();
  const { repo } = useRepository();
  const location = useLocation();
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  const userData: Driver = location.state.user;
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDataChanged && currentLocation.pathname !== nextLocation.pathname
  );
  async function handleDriverDataSubmit(data: driverFormType) {
    console.log(data["userImage"]);
    const formData = new FormData();
    const fields = [
      "firstName",
      "lastName",
      "address",
      "password",
      "userImage",
      "liscenceImage",
      "vehicleImage",
      "billBookImage",
      "liscenceNumber",
      "color",
      "numberPlate",
    ];

    fields.forEach((field) => {
      if (data[field]) {
        if (_.isArray(data[field])) {
          const fileList: FileList = data[field] as FileList;
          if (fileList.length > 0) {
            const file: File = fileList[0];
            formData.append(`${field}`, file);
            formData.append(`${field}Name`, file.name);
          }
        } else {
          formData.append(`${field}`, data[field] as string);
        }
      }
    });
    formData.append("driverId", userData._id);
    try {
      const response = await repo.updateDriverInfo(formData);
      if (response) {
        toast.success("Updated successfully");
        navigate("/driverInfo");
      } else {
        toast.error("Could not update");
      }
    } catch (err) {
      toast.error("Failed to update, please try again");
    }
    setIsDataChanged(false);
  }
  function handleConfirm() {
    if (blocker && !_.isUndefined(blocker.proceed)) {
      blocker.proceed();
    }
  }
  function handleCancel() {
    if (blocker && !_.isUndefined(blocker.reset)) {
      blocker.reset();
    }
  }
  return (
    <div className="w-2/3 bg-white mb-32 mt-10 py-5 px-5 mx-auto rounded-lg">
      <div className="flex flex-col items-center justify-center text-center space-y-2 my-5">
        <div className="font-semibold text-3xl">
          <p>Update Driver Info</p>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(handleDriverDataSubmit)}
          onChange={() => setIsDataChanged(true)}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                defaultValue={userData.user.firstName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("firstName")}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                defaultValue={userData.user.lastName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("lastName")}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Address
              </label>

              <input
                type="text"
                id="address"
                defaultValue={userData.user.address}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("address")}
              />
            </div>
            <div>
              <label
                htmlFor="liscenceNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Liscence Number
              </label>

              <input
                type="text"
                id="liscenceNumber"
                defaultValue={userData.liscenceNumber}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("liscenceNumber")}
              />
            </div>

            <div>
              <label
                htmlFor="userImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                User Image
              </label>

              <input
                type="file"
                id="userImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("userImage")}
              />
              <img
                src={userData.user.userImage}
                alt=""
                className="h-10 w-10 my-2 mx-4 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="liscenceImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Liscence Image
              </label>

              <input
                type="file"
                id="liscenceImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("liscenceImage")}
              />
              <img
                src={userData.liscenceImage}
                alt=""
                className="h-10 w-10 my-2 mx-4 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="billBookImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Billbook Image
              </label>

              <input
                type="file"
                id="billBookImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("billBookImage")}
              />
              <img
                src={userData.vehicle.billBookImage}
                alt=""
                className="h-10 w-10 my-2 mx-4 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="vehicleImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Vehicle Image
              </label>

              <input
                type="file"
                id="vehicleImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("vehicleImage")}
              />
              <img
                src={userData.vehicle.vehicleImage}
                alt=""
                className="h-10 w-10 my-2 mx-4 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="numberPlate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Number Plate
              </label>

              <input
                type="text"
                id="numberPlate"
                defaultValue={userData.vehicle.numberPlate}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("numberPlate")}
              />
            </div>
            <div>
              <label
                htmlFor="color"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Vehicle Color
              </label>

              <input
                type="text"
                id="color"
                defaultValue={userData.vehicle.color}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("color")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 mt-5 rounded py-2 px-4 items-center"
          >
            Update
          </button>
        </form>
      </div>
      <Modal
        isOpen={blocker.state === "blocked"}
        title="Confirm Leave"
        content="Are you sure you want to leave without saving changes?"
        confirmText="Leave"
        cancelText="Cancel"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}
