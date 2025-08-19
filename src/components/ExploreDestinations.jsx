import React from "react";

const ExploreDestinations = () => {
  return (
    <section className="w-full bg-white py-16 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          
          <div className="max-w-xl w-full flex flex-col items-center md:items-start text-center md:text-left">
  <button
    style={{ border: "1px solid #DEDEDE" }}
    className="flex items-center justify-center gap-x-2 xl:ml-[690px] lg:ml-36 text-gray-400 px-4 py-1 rounded-full mb-4 text-sm font-medium w-24 sm:mr-[620px]"
  >
    <img src="/images/globe-04.svg" alt="icon" className="w-5 h-5" />
    Explore
  </button>


            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="block sm:mr-[540px] xl:ml-[690px] lg:ml-36">Explore</span>
              
       
              <span className="block lg:pl-36 sm:mr-44 sm:-mt-14 md:ml-48 md:-mt-14 xl:pl-[690px]">Global</span>
              
              <span className="block sm:mr-[420px] lg:ml-36 xl:ml-[690px]">Destinations</span>
            </h1>

            <p className="text-gray-600 xl:ml-[690px] lg:ml-36 sm:mr-[344px] sm:w-[390px] text-md w-[307px] mt-4 md:w-[600px] md:ml-1">
              Find and buy the best prepaid eSIMs online for your travels.
              Connect to the internet in minutes in more than 197 destinations
              around the world.
            </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
            <img
              src="/images/suitcase.png"
              alt="Suitcase"
              className="max-w-sm object-contain w-[340px] h-[269px] 
                        sm:block xxxs:hidden xxs:hidden xs:hidden 
                        -rotate-6 lg:w-64
                        lg:mr-56 lg:h-60 md:w-60 md:h-48 md:ml-0 md:mt-0 sm:w-52 sm:h-40 sm:-mt-56 sm:ml-[500px]
                        xl:w-72 xl:h-56 xl:mr-[690px]
                        "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
