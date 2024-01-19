import React from "react";
import Button from "../shared/Button";

type userTypeProp = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
};

export default function SelectUser({ setUser, setCurrentForm }: userTypeProp) {
  function selectPassenger() {
    setUser("passenger");
    setCurrentForm(4);
  }
  function selectDriver() {
    setUser("driver");
    setCurrentForm(4);
  }
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>What are you</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>select each of these option</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <Button
                style="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                label="Passenger"
                action={selectPassenger}
              />
              <Button
                style="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                label="Driver"
                action={selectDriver}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
