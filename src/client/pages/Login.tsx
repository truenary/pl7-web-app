import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";


type LoginForm = {
  phoneNumber: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();
 const base_url: string = import.meta.env.VITE_REACT_APP_LOGIN_ENDPOINT


  async function handleLogin(data: LoginForm) {
    const loginInfo = {
      phoneNumber: `+977${data.phoneNumber}`,
      password: data.password,
      deviceToken: "abc",
    };

    try {
      const response = await fetch(base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem("accessToken", responseData.token);
        navigate("/admin");
      } else {
        console.error("Login failed:", responseData);
      }
    } else {
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Login error:", error);
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
                        className="block text-base font-normal text-gray-900 "
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        key="phone_input"
                        id="phoneNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("phoneNumber", { required: true })}
                      />
                      <label
                        htmlFor="password"
                        key="password_label"
                        className="text-base font-normal text-gray-900 "
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
