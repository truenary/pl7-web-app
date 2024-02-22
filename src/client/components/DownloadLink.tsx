import { useTranslation } from "react-i18next";

function DownloadLink() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-stone-50  my-20">
        <div className="h-[750px] mx-48">
          <div className="flex flex-row   space-x-96 ">
            <div className="  text-2xl  ">
              <p className="text-7xl text-blue-500 pt-10 ">
                {t("Download the app")}
              </p>

              <p className="text-3xl text-blue-500 pt-14  ">
                {t("Download now & avail our service through the app")}
              </p>
              <p className="text-4xl font-bold text-blue-500 pt-20 ">
                {t("Download the app")}
              </p>
              <div className="flex  my-10  space-x-40  ">
                <div className="flex items-center border  rounded-lg px-4 py-2 lg:w-60  md:w-52 ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8 "
                  />
                  <div className="text-left ml-3">
                    <p className="text-lg text-blue-500">{t("Download")} </p>
                    <p className="lg:text-lg md:text-base  text-blue-500">
                      {t("Google Play Store")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center border  rounded-lg px-4 py-2  lg:w-60 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="lg:text-lg text-blue-500">{t("Download")} </p>
                    <p className="lg:text-lg md:text-base text-blue-500">
                      {t("Apple Store")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" h-[100px]">
              <div className=" lg:bg-[url('../Images/demo.jpg')]  bg-contain h-[750px] w-[900px] mt-5 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
