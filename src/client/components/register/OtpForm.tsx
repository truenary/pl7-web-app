import { ConfirmationResult } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

declare type otpFormProps = {
  phone: string;
  confirmed: ConfirmationResult | null;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
};
declare type FormData = {
  otp: string;
};
export default function OtpForm({
  phone,
  confirmed,
  setToken,
  setCurrentForm,
}: otpFormProps) {
  const { register, handleSubmit } = useForm<FormData>();

  //verifying the otp
  async function verifyOtp(data: FormData) {
    try {
      if (confirmed) {
        const response = await confirmed.confirm(data.otp);
        const token = (await response.user.getIdToken()).toString();
        setToken(token);
        setCurrentForm(3);
        toast.success("User is verified successfully");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (er: any) {
      if (er.code === "auth/invalid-verification-code") {
        toast.error("Wrong OTP Please check again");
      } else {
        toast.error("Error while verifying otp, please try again");
      }
    }
  }
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Phone Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to {phone}</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(verifyOtp)}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        autoFocus
                        id="otp"
                        {...register("otp", {
                          min: 6,
                        })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Number
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
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
