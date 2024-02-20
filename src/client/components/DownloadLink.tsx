function DownloadLink() {
  return (
    <div className="bg-stone-50 my-20">
      <div className="mx-4 md:mx-8 lg:mx-48">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-center md:h-[750px]">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-7xl text-blue-500 pt-10">Download the app</p>
            <p className="text-3xl text-blue-500 pt-8 md:pt-14">
              Download now & avail our service through the app
            </p>
            <p className="text-4xl font-bold text-blue-500 pt-8 md:pt-20">
              Download the app
            </p>
            <div className="flex justify-center md:justify-start mt-10 md:mt-14 space-x-4 md:space-x-8">
              <div className="flex items-center border rounded-lg px-4 py-2 w-44 md:w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-lg text-blue-500">Download on </p>
                  <p className="text-base text-blue-500">Google Play Store</p>
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-4 py-2 w-44 md:w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-lg text-blue-500">Download on </p>
                  <p className="text-base text-blue-500">Apple Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
            <div className="md:bg-[url('../Images/demo.jpg')] bg-contain h-[500px] md:h-[750px] w-full md:w-[600px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
