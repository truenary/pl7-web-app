import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRepository } from "../../../hooks/CustomHook";

type formValueData = {
  labelText?: string;
  id: string;
  value?: string | undefined;
  type: string;
  required: boolean;
};
type userDetailsFormProps = {
  phone: string;
  token: string | undefined;
  user: string;
};
export default function UserDetailsform({
  phone,
  token,
  user,
}: userDetailsFormProps) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { userRepo: repo } = useRepository();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleDriverDataSubmit(data: any) {
    const newData: User = {
      ...data,
      phone,
      token,
      user,
    };
    try {
      const response = await repo.registerUser(newData);
      if (typeof response !== "string") {
        toast.success("You are registerd successfully");
        navigate("/download");
      } else {
        toast.error(response);
      }
    } catch (err) {
      toast.error("Error while registration");
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleUserDataSubmit(data: any) {
    const newData: User = {
      ...data,
      user_image: data.user_image[0].name,
      phone,
      token,
      user,
    };
    try {
      const response = await repo.registerUser(newData);
      if (typeof response !== "string") {
        toast.success("You are registerd successfully");
        navigate("/download");
      } else {
        toast.error(response);
      }
    } catch (err) {
      toast.error("Error while registration");
    }
  }
  const formValue: formValueData[] = [
    {
      labelText: "First Name",
      id: "first_name",
      type: "text",
      required: true,
    },
    {
      labelText: "Last Name",
      id: "last_name",
      type: "text",
      required: true,
    },
    {
      labelText: "Address",
      id: "adress",
      type: "text",
      required: true,
    },
    {
      labelText: "Driver Photo",
      id: "user_image",
      type: "file",
      required: true,
    },
    {
      labelText: "Liscence Number",
      id: "liscence_number",
      type: "text",
      required: true,
    },
    {
      labelText: "Liscence Image",
      id: "liscence_image",
      type: "file",
      required: true,
    },
    {
      labelText: "BillBook Image",
      id: "billBook_image",
      type: "file",
      required: true,
    },
    {
      labelText: "Vehicle Number",
      id: "vehicle_number",
      type: "text",
      required: true,
    },
    {
      labelText: "Vehicle Image",
      id: "vehicle_image",
      type: "file",
      required: true,
    },
    {
      labelText: "Vehicle Color",
      id: "vehicle_color",
      type: "text",
      required: true,
    },
  ];
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Add your credentials</p>
              </div>
              <div className="flex flex-row text-base font-medium text-gray-400">
                <p>as a {user}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                {user === "driver" ? (
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
                ) : (
                  <form onSubmit={handleSubmit(handleUserDataSubmit)}>
                    <div>
                      <label
                        htmlFor="first_name"
                        key="first_name_label"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        key="first_name_input"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("first_name", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        key="last_name_label"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                      >
                        Last Name{" "}
                      </label>
                      <input
                        type="text"
                        key="last_name_input"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("last_name", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        key="address_label"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        key="address_input"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("address", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_image"
                        key="image_label"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                      >
                        Add your Image
                      </label>
                      <input
                        type="file"
                        key="image_input"
                        id="user_image"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("user_image", { required: true })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Resiter User
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
