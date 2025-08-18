import React from "react";

const ExploreDestinations = () => {
  return (
    <section className="w-full bg-white py-16 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          
          <div className="max-w-xl w-full flex flex-col items-center text-center md:items-start md:text-left">
            <button
              style={{ border: "1px solid #DEDEDE" }}
              className="flex items-center justify-center gap-x-2 text-gray-400 px-4 py-1 rounded-full mb-4 text-sm font-medium w-24"
            >
              <img src="/images/globe-04.svg" alt="icon" className="w-5 h-5" />
              Explore
            </button>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight space-y-2">
              <span className="block">Explore</span>
              <span className="block">Global</span>
              <span className="block">Destinations</span>
            </h1>

            <p className="text-gray-600 text-md w-[307px] mt-4">
              Find and buy the best prepaid eSIMs online for your travels.
              Connect to the internet in minutes in more than 197 destinations
              around the world.
            </p>
          </div>

     
          <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
            <img
              src="/images/suitcase.png"
              alt="Suitcase"
              className="max-w-sm object-contain w-[340px] h-[269px] xxxs:hidden xxs:hidden xs:hidden -rotate-6 lg:w-72 lg:h-60 md:w-60 md:h-48 sm:w-52 sm:h-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
