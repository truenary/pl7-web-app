import aboutUs from "@/utils/aboutus.json";
function About_uscompo() {
  return (
    <div className=" bg-blue-500">
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  ">
        <div className="container mx-48">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">image</div>
                  <div className="py-3 sm:py-4">image</div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">image</div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 text-white">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-7xl font-semibold text-primary">
                  {aboutUs.title}
                </span>
                <h2 className="mb-5 text-1xl font-inline text-dark dark:text-white sm:text-[40px]/[48px]">
                  {aboutUs.discription}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_uscompo;
