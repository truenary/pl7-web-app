function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4 lg:px-6 lg:text-4xl sm:text-sm">
        <div className="text-center">
          <h3 className="text-xl md:text-3xl mb-3">Download our Auto App</h3>
          <p className="text-sm md:text-base">Enjoy Service. All day, every day.</p>
          <div className="flex flex-col md:flex-row justify-center my-6 md:my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 md:w-auto lg:w-60 mx-2 mb-2 md:mb-0">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-6 md:w-8" alt="Google Play Store" />
              <div className="text-left ml-3">
                <p className="text-xs md:text-sm text-gray-200">Download on</p>
                <p className="text-xs md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 md:w-auto lg:w-60 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 md:w-8" alt="Apple App Store" />
              <div className="text-left ml-3">
                <p className="text-xs md:text-sm text-gray-200">Download on</p>
                <p className="text-xs md:text-base">Apple App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:justify-between items-center text-xl">
          <div className="order-2 md:order-1">
            <p>&copy; Dhoka, {new Date().getFullYear()}.</p>
          </div>
          <div className="order-1 md:order-2 mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end">
            <span className="px-2 mb-2 md:mb-0 text-xs md:text-base">About us</span>
            <span className="px-2 mb-2 md:mb-0 border-l md:border-l-0 text-xs md:text-base">Contact us</span>
            <span className="px-2 mb-2 md:mb-0 border-l md:border-l-0 text-xs md:text-base">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
