import { Helmet } from "react-helmet";


function DownloadLink() {
  return (
    <>
     <Helmet>
        <title>Download Link | Dhoka</title>
       <meta name="description" content="Download the Dhoka app now and avail our services. Book autos anytime, anywhere." />
    <meta name="keywords" content="Dhoka app, auto booking app, download Dhoka, book autos, auto services app" />
  
      </Helmet>
    <div className="bg-stone-50 my-10 md:my-20">
      <div className="mx-4 md:mx-8 lg:mx-48">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-center md:min-h-[750px]">
          <div className="text-center md:text-left md:w-full md:max-w-md lg:max-w-none">
            <p className="text-2xl md:text-4xl lg:text-6xl text-blue-500 pt-5 md:pt-10">
              Download the app
            </p>
            <p className="text-base md:text-lg lg:text-2xl text-blue-500 pt-5 md:pt-8 lg:pt-14">
              Download now & avail our service through the app
            </p>
            <p className="text-lg md:text-xl lg:text-3xl font-bold text-blue-500 pt-5 md:pt-8 lg:pt-20">
              Download the app
            </p>
            <div className="flex justify-center md:justify-start mt-5 md:mt-10 lg:mt-14 space-x-3 md:space-x-8">
              <div className="flex items-center border rounded-lg px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-4 md:w-6 lg:w-8"
                  alt="Google Play Store"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <div className="text-left ml-2 md:ml-3">
                  <p className="text-sm md:text-base lg:text-lg text-blue-500">Download on </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-500">Google Play Store</p>
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-4 md:w-6 lg:w-8"
                  alt="Apple App Store"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <div className="text-left ml-2 md:ml-3">
                  <p className="text-sm md:text-base lg:text-lg text-blue-500">Download on </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-500">Apple App Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2 mt-5 md:mt-8 lg:mt-0">
            
            <div
  className="md:bg-cover bg-no-repeat bg-center h-[250px] md:h-[350px] lg:h-[500px] w-full md:w-[250px] lg:w-[350px]"
  style={{
    backgroundImage: "url('https://source.unsplash.com/random/800x600')",
  }}
></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DownloadLink;
