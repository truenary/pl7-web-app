import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useRepository } from "../../hooks/CustomHook";

type loginForm = {
  phone: string;
  password: string;
};
function Login() {
  const { userRepo: repo } = useRepository();
  const { register, handleSubmit, reset } = useForm<loginForm>();

  const navigate = useNavigate();
  async function handleLogin(data: loginForm) {
    const response = await repo.login(`977${data.phone}`);
    if (typeof response !== "string") {
      if (!response.isExist) {
        toast.error("User does not exist, please register first");
        reset();
        navigate("/register");
      } else {
        if (response.role === "admin") {
          if (response.password === undefined) {
            const res = await repo.addPassword(data.password, response.id);
            if (typeof res === "string") {
              toast.error(res);
            } else {
              navigate("/admin");
              toast.success("you are logged in successfully");
            }
          } else {
            if (response.password === data.password) {
              reset();
              navigate("/admin");
              toast.success("you are logged in successfully");
            } else {
              toast.error("password or phone number is incorrect");
            }
          }
        } else {
          toast.error("Access denied");
        }
      }
    } else {
      toast.error(response);
    }
  }
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>User Login</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-col items-center w-full max-w-xs mx-auto">
                    <div className="flex flex-col w-full gap-y-4">
                      <label
                        htmlFor="phone"
                        key="phone_label"
                        className="block text-base font-normal text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        key="phone_input"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("phone", { required: true })}
                      />
                      <label
                        htmlFor="password"
                        key="password_label"
                        className="text-base font-normal text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        key="password_input"
                        id="password"
                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("password", { required: true })}
                      />

                      <button
                        type="submit"
                        className="text-center border rounded-xl outline-none py-3 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
