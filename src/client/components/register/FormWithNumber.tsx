import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import { auth } from "../../pages/firebase.config";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
// import { UserApi } from "../../../api/UserApi";
// import { IUserRepo, UserRepo } from "../../../Repos/UserRepo";
// import { IUserApi } from "../../../api/type";

declare type formProps = {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setConfirmed: React.Dispatch<React.SetStateAction<ConfirmationResult | null>>;
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
};

export default function FormWithNumber({
  phone,
  setPhone,
  setConfirmed,
  setCurrentForm,
}: formProps) {
  // const api: IUserApi = new UserApi();
  // const repo: IUserRepo = new UserRepo(api);

  //sending otp to the user's phone
  async function handlePhoneSubmit() {
    const regex =
      /977((986)|(985)|(984)|(981)|(982)|(980)|(976)|(975)|(974)|(971)|(972))\d{6}/;
    const isValid = regex.test(phone);
    if (phone && isValid) {
      ///this already existed user is not completed yet
      // const userResponse = repo.isUserExist(phone);
      // const driverResponse = repo.isDriverExist(phone);
      // if (userResponse === null) {
      try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
          size: "invisible",
        });
        const confirmation = await signInWithPhoneNumber(
          auth,
          `+${phone}`,
          recaptcha
        );
        setConfirmed(confirmation);
        setCurrentForm(2);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (err.code === "auth/invalid-phone-number") {
          toast.error("Invalid Phone number");
        } else {
          toast.error("Error while sending otp, please try again");
        }
      }
    } else {
      toast.error("This phone number is already exist");
    }
    // } else {
    //   toast.error("Phone number is not valid");
    // }
  }
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Join us via Phone Number</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>we will text a code to verify your phone</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-full h-16 ">
                    <PhoneInput
                      country={"np"}
                      value={phone}
                      onChange={(value) => setPhone(value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      onClick={handlePhoneSubmit}
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                  <div id="recaptcha"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
