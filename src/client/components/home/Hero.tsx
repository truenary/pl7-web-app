import { useNavigate } from "react-router";
import Button from "../shared/Button";

export default function Hero() {
  const navigate = useNavigate();
  return (
    //hero section
    //first section
    <section className="">
      <div className="h-[500px] bg-white md:flex md:items-center flex-col space-y-5 md:flex-row px-5">
        <div className="flex flex-col gap-10 md:w-1/2 lg:mx-20 md:mx-10">
          <div className="flex flex-col space-y-2 text-left md:space-y-4">
            <h1 className="lg:text-6xl md:text-5xl font-bold  text-3xl mt-10 ">
              Platform for all auto services
            </h1>
            <p className="text-lg md:text-xl">
              One app, all services at your finger
            </p>
          </div>
          <div className="flex flex-col space-y-5 mx:5">
            <Button action={() => navigate("/register")}
              label={"Earn with Dhoka"}
              style={
                "p-2 md:p-3 bg-orange-500 text-white text-base font-normal rounded w-full text-center lg:w-64 lg:text-lg md:w-56"
              }
            />
            <Button action={() => navigate("/download")}
              label={"Download App"}
              style={
                "p-2 md:p-3 bg-white text-black text-base font-normal rounded w-full text-center lg:w-64 border border-1 border-black  md:w-56"
              }
            />
          </div>
        </div>
        {/* image section */}
        <div className="md:w-1/2 md:me-10">
          <img
            src="auto_illustrator.jpg"
            alt="Rickshaw"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
