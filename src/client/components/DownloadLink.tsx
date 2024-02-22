import React from "react";

function DownloadLink() {
  return (
    <div className="bg-stone-50 my-10 md:my-20">
      <div className="mx-4 md:mx-8 lg:mx-48">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-center md:min-h-[750px]">
          <div className="text-center md:text-left md:w-full md:max-w-md lg:max-w-none">
            <p className="text-3xl md:text-5xl lg:text-7xl text-blue-500 pt-5 md:pt-10">
              Download the app
            </p>
            <p className="text-lg md:text-xl lg:text-3xl text-blue-500 pt-5 md:pt-8 lg:pt-14">
              Download now & avail our service through the app
            </p>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-500 pt-5 md:pt-8 lg:pt-20">
              Download the app
            </p>
            <div className="flex justify-center md:justify-start mt-5 md:mt-10 lg:mt-14 space-x-3 md:space-x-8">
              <div className="flex items-center border rounded-lg px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-6 md:w-8"
                  alt="Google Play Store"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div className="text-left ml-2 md:ml-3">
                  <p className="text-sm md:text-lg lg:text-lg text-blue-500">Download on </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-500">Google Play Store</p>
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-6 md:w-8"
                  alt="Apple App Store"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div className="text-left ml-2 md:ml-3">
                  <p className="text-sm md:text-lg lg:text-lg text-blue-500">Download on </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-500">Apple App Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2 mt-5 md:mt-8 lg:mt-0">
            {/* Optimize background image by specifying dimensions and loading it lazily */}
            <div
              className="md:bg-[url('../Images/demo.jpg')] bg-contain h-[300px] md:h-[450px] lg:h-[750px] w-full md:w-[300px] lg:w-[400px]"
              style={{
                backgroundImage: "url('../Images/demo.jpg')",
                width: "300px",
                height: "450px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
