import Button from "../shared/Button";

function Hero() {
  return (
    <header className="bg-white dark:bg-blue-500">
      <div className="container px-4 md:px-6 py-10 md:py-16 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 md:mx-20">
            <div className="max-w-lg">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold dark:text-white">
                Dhoka<br /> your <span className="">Ride</span>
              </h1>
              <p className="mt-3 text-gray-700 dark:text-white text-sm md:text-base">
                Dhoka is a transportation technology providing a full range
                of app-based services including ride-sharing, food delivery,
                and free games.
              </p>
              <Button
                label={"Join Dhoka"}
                style="mt-4 md:mt-6 p-2 md:p-3 bg-orange-500 text-white text-base font-normal rounded w-full text-center lg:w-64 lg:text-lg md:w-56"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="auto_illustrator.jpg"
              alt="Rickshaw"
              className="rounded-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
