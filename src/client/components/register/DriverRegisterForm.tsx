import { useNavigate } from "react-router-dom";
import { useRepository } from "@/hooks/CustomHook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { driverFormType } from "@/types/data";

type formValueData = {
  labelText?: string;
  id:
    | "numberPlate"
    | "vehicleImage"
    | "color"
    | "firstName"
    | "lastName"
    | "password"
    | "address"
    | "userImage"
    | "liscenceNumber"
    | "liscenceImage"
    | "billBookImage";
  value?: string | undefined;
  type: string;
  required: boolean;
};
const formValue: formValueData[] = [
  {
    labelText: "First Name",
    id: "firstName",
    type: "text",
    required: true,
  },
  {
    labelText: "Last Name",
    id: "lastName",
    type: "text",
    required: true,
  },
  {
    labelText: "Password",
    id: "password",
    type: "text",
    required: true,
  },
  {
    labelText: "Address",
    id: "address",
    type: "text",
    required: true,
  },
  {
    labelText: "Driver Photo",
    id: "userImage",
    type: "file",
    required: true,
  },
  {
    labelText: "Liscence Number",
    id: "liscenceNumber",
    type: "text",
    required: true,
  },
  {
    labelText: "Liscence Image",
    id: "liscenceImage",
    type: "file",
    required: true,
  },
  {
    labelText: "BillBook Image",
    id: "billBookImage",
    type: "file",
    required: true,
  },
  {
    labelText: "Vehicle Number",
    id: "numberPlate",
    type: "text",
    required: true,
  },
  {
    labelText: "Vehicle Image",
    id: "vehicleImage",
    type: "file",
    required: true,
  },
  {
    labelText: "Vehicle Color",
    id: "color",
    type: "text",
    required: true,
  },
];

type userDetailsFormProps = {
  phoneNumber: string;
  // token: string | undefined;
  userRole: string;
};

export default function DriverRegisterForm({
  phoneNumber,
  userRole,
}: userDetailsFormProps) {
  const { register, handleSubmit } = useForm<driverFormType>();
  const navigate = useNavigate();
  const { repo } = useRepository();
  async function handleDriverDataSubmit(data: driverFormType) {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("address", data.address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("userRole", userRole);
    formData.append("password", data.password);
    formData.append("userImage", data.userImage[0]);
    formData.append("userImageName", data.userImage[0].name);
    formData.append("liscenceImage", data.liscenceImage[0]);
    formData.append("liscenceImageName", data.liscenceImage[0].name);
    formData.append("vehicleImage", data.vehicleImage[0]);
    formData.append("vehicleImageName", data.vehicleImage[0].name);
    formData.append("billBookImage", data.billBookImage[0]);
    formData.append("billBookImageName", data.billBookImage[0].name);
    formData.append("liscenceNumber", data.liscenceNumber);
    formData.append("vehicleColor", data.color);
    formData.append("numberPlate", data.numberPlate);
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
    }
    try {
      const response = await repo.registerDriver(formData);
      if (response) {
        toast.success("You are registerd successfully");
        navigate("/download");
      } else {
        toast.error("Could not register");
      }
    } catch (err) {
      toast.error("Could not register, please try again");
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Add your credentials</p>
            </div>
            <div className="flex flex-row text-base font-medium text-gray-400">
              <p>as a {userRole}</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col"></div>
            <form onSubmit={handleSubmit(handleDriverDataSubmit)}>
              {formValue.map((value) => (
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
              <div className="flex items-start mb-6 mt-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register Driver
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
