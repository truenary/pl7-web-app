import React from "react";
import Button from "../shared/Button";

function Earn_With_us() {
  return (
    <section className="">
      <div className="mt-10 h-[500px] bg-white md:flex md:items-center flex-col space-y-5 sm:space-y-reverse md:flex-row px-5">
        {/* image section */}
        <div className=" md:w-1/2 lg:mx-20 md:mx-10 ">
          <img
            src="public/model biku-PhotoRoom1.jpg"
            alt="Rickshaw"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-10 md:w-1/2 md:me-10">
          <div className="flex flex-col space-y-2 text-left md:space-y-4">
            <h1 className="lg:text-6xl md:text-5xl font-bold  text-3xl mt-10 ">
              Earn with your Auto or Rickshaw
            </h1>
            <ul className="text-lg md:text-xl list-disc ps-6">
              <li>Drive at anytime and on any day of the week</li>
              <li>Scope to earn more with Dhoka</li>
              <li>Get your payment on time with Dhoka</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5 mx:5 items-start">
            <Button
              label={"Join Dhoka"}
              style={
                "p-2 md:p-3 bg-orange-500 text-white text-base font-normal rounded w-full text-center lg:w-64 lg:text-lg md:w-56"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earn_With_us;
