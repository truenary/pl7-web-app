import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { auth } from "./firebase.config";
import { useForm } from "react-hook-form";
import Button from "../components/shared/Button";

type InitialFormData = {
    phone: string;
};

type FinalFormData = InitialFormData & {
    first_name: string;
    last_name: string;
    liscence_number: string; // Change from number to string for consistency
    vehicle_number: string; // Change from number to string for consistency
    vehicle_type: string;
    vehicle_model: string;
};

function Register() {
    const [optshow, setotpshow] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [user, setUser] = useState<ConfirmationResult | null>(null);
    const [otp, setOtp] = useState<string>("");
    const [isPhoneVerified, setPhoneVerified] = useState<boolean>(false);

    const inputClassName =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const label = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

    const { register, handleSubmit, reset } = useForm<FinalFormData>({
        defaultValues: {
            vehicle_model: "Auto",
        },
    });

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, `+${phone}`, recaptcha);
            setUser(confirmation);
            setotpshow(true);
        } catch (err) {
            console.error(err);
        }
    };

    const verifyOtp = async () => {
        try {
            if (user) {
                const data = await user.confirm(otp);
                console.log(data);
                setPhoneVerified(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handlePhoneVerification = (data: InitialFormData) => {
        setOtp(""); // Reset OTP when initiating phone verification
        setPhone(data.phone);
        sendOtp();
    };

    const handlesub = (data: FinalFormData) => {
        console.log(data);
        reset();
        // Add logic to send data to the backend for registration after phone verification
    };

    return (
        <section className="">
            <div className="md:my-10 bg-white md:flex flex-col space-y-5 md:flex-row px-5 h-full">
                {/* image part */}
                <div className="md:w-1/3 md:me-10 md:items-center md:block hidden h-[700px] overflow-y-hidden ">
                    <img src="kals.JPG" alt="Rickshaw" className="rounded-lg " />
                </div>

                <div className="flex flex-col md:w-1/2 lg:mx-20 md:mx-10">
                    {!isPhoneVerified ? (
                        <form onSubmit={handleSubmit(handlePhoneVerification)}>
                            <div className="mb-6">
                                <label htmlFor="phone" className={label}>
                                    Phone number
                                </label>
                                <PhoneInput
                                    country={'us'}
                                    value={phone}
                                    onChange={(value: any) => setPhone("+" + value)}
                                />
                            </div>
                            <button onClick={sendOtp}

                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Send otp
                            </button>
                            <br></br>
                            <div id="recaptcha" ></div>

                            <br></br>
                            {optshow ? (
                                // Render this when optshow is true
                                <div><div className="mb-4">


                                    <br />
                                    <input
                                        id="otp"
                                        type="text"
                                        placeholder="Enter OTP"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                    <br />
                                    <br />
                                </div>
                                    <button
                                        onClick={verifyOtp}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"

                                    >
                                        Submit OTP
                                    </button>


                                </div>
                            ) : (
                                // Render this when optshow is false
                                <div></div>
                            )}

                        </form>

                    ) : (
                        <form onSubmit={handleSubmit(handlesub)}>
                            <div className="grid gap-9 mb-6 md:grid-cols-2 mt-24">
                                <div>
                                    <label htmlFor="first_name" className={label}>
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className={inputClassName}
                                        placeholder=""
                                        {...register("first_name", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className={label}>
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className={inputClassName}
                                        {...register("last_name", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="liscence_number" className={label}>
                                        License number
                                    </label>
                                    <input
                                        type="text"
                                        id="liscence_number"
                                        className={inputClassName}
                                        {...register("liscence_number", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vehicle_number" className={label}>
                                        Vehicle number
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicle_number"
                                        className={inputClassName}
                                        {...register("vehicle_number", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vehicle_type" className={label}>
                                        Vehicle type
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicle_type"
                                        className={inputClassName}
                                        {...register("vehicle_type", { required: true })}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicle_model" className={label}>
                                    Vehicle model
                                </label>
                                <select
                                    id="vehicle_model"
                                    className={inputClassName}
                                    {...register("vehicle_model", { required: true })}
                                >
                                    <option value="Auto">Auto</option>
                                    <option value="Mayuri">Mayuri</option>
                                </select>{" "}
                            </div>
                            <Button
                                label="Register"
                                style="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p"
                            />
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Register;
