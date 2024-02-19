import Button from "../shared/Button"


function Hero() {
  return (
    <div>
        <header className="bg-white dark:bg-blue-500">
   

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 mx-20">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold  dark:text-white lg:text-4xl">Dhoka<br /> your <span className=" ">Ride</span></h1>
                    
                    <p className="mt-3 text-white ">Dhoka is a transportation technology providing a full range of app-based services including ride-sharing, food delivery and free games.</p>
                    <br></br>
                     <Button
              label={"Join Dhoka"}
              style={
                "p-2 md:p-3 bg-orange-500 text-white text-base font-normal rounded w-full text-center lg:w-64 lg:text-lg md:w-56"
              }
            /> </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
            src="auto_illustrator.jpg"
            alt="Rickshaw"
            className="rounded-lg"
          />
            </div>
        </div>
    </div>
</header>
      

    
    </div>
  )
}


export default Hero
