import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" ">
      <div className=" bg-blue-500 ">
        <div className="max-w-4xl mx-auto text-white py-10  text-4xl ">
          <div className="text-center">
            <h3 className="text-3xl mb-3">{t("Download our Auto App")}</h3>
            <p> {t("Enjoy Service All day, every day")} </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border  rounded-lg px-4 py-2 lg:w-60  md:w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8 "
                />
                <div className="text-left ml-3">
                  <p className="text-lg text-gray-200">{t("Download")} </p>
                  <p className="lg:text-lg md:text-base">
                    {" "}
                    {t("Google Play Store")}{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center border  rounded-lg px-4 py-2  lg:w-60 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="lg:text-lg text-gray-200">{t("Download")} </p>
                  <p className="lg:text-lg md:text-base">
                    {" "}
                    {t("Apple Store")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Dhoka, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">{t("About Us")}</span>
              <span className="px-2 border-l">{t("Contact")}</span>
              <span className="px-2 border-l">{t("Privacy Policy")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
