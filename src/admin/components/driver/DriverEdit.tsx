import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import { useRepository } from "@/hooks/CustomHook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Driver, driverFormType, formValueData } from "@/types/data";
import _ from "lodash";
import formData from "@/utils/RegisterInputFormData.json";
import Modal from "@/shared/Modal";

export default function DriverEditForm() {
  const location = useLocation();
  const userData: Driver = location.state.user;
  const { register, handleSubmit, formState } = useForm<driverFormType>({
    defaultValues: {
      firstName: userData.user.firstName,
      lastName: userData.user.lastName,
      liscenceNumber: userData.licenseNumber,
      numberPlate: userData.vehicle.vehicleNumber,
    },
  });
  console.log("isDirty:", formState.isDirty);
  const navigate = useNavigate();
  const { repo } = useRepository();
  const blocker = useBlocker(formState.isDirty);
  async function handleDriverDataSubmit(data: driverFormType) {
    const formData = new FormData();
    const fields = [
      "firstName",
      "lastName",
      "address",
      "liscenceNumber",
      "numberPlate",
    ];

    fields.forEach((field) => {
      if (data[field]) {
        formData.append(`${field}`, data[field] as string);
      }
    });
    formData.append("driverId", userData.driverId);
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
        <form onSubmit={handleSubmit(handleDriverDataSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            {_.map(formData.driverEditFormData, (value: formValueData) => (
              <div>
                <label
                  htmlFor={value.id}
                  key={`${value.id}_label`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                >
                  {value.labelText}
                </label>
                <input
                  type={value.type}
                  key={`${value.id}_input`}
                  id={value.id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register(value.id, { required: value.required })}
                />
              </div>
            ))}
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
