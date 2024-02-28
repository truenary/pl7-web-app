import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useRepository } from "@/hooks/CustomHook";
import { formValueData, userFormType } from "@/types/data";
import formData from "@/utils/RegisterInputFormData.json";
import _ from "lodash";
import { useTranslation } from "react-i18next";

export default function UserRegisterform() {
  const { register, handleSubmit } = useForm<userFormType>();
  const navigate = useNavigate();
  const { repo } = useRepository();
  const location = useLocation();
  const { t } = useTranslation();
  const phoneNumber = location.state?.phone;
  const token = location.state?.token;
  async function handleUserDataSubmit(data: userFormType) {
    console.log("data", data);
    const formData = new FormData();
    const fields = ["firstName", "lastName", "password", "userImage"];
    fields.forEach((field) => {
      if (data[field]) {
        if (_.isArray(data[field])) {
          const fileList: FileList = data[field] as FileList;
          if (fileList.length > 0) {
            const file: File = fileList[0];
            formData.append(`${field}File`, file);
            formData.append(`${field}`, file.name);
          }
        } else {
          formData.append(`${field}`, data[field] as string);
        }
      }
    });
    formData.append("phoneNumber", phoneNumber);
    formData.append("firebaseToken", token);
    try {
      const response = await repo.registerUser(formData);
      console.log(response);
      if (response) {
        toast.success(response.message);
        navigate("/download");
      } else {
        toast.error("Could not register please try again");
      }
    } catch (err) {
      toast.error("Could not register please try again");
    }
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>{t("Add your credentials")}</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <form onSubmit={handleSubmit(handleUserDataSubmit)}>
                  {_.map(formData.userFormData, (value: formValueData) => (
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
                    className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Register User")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
