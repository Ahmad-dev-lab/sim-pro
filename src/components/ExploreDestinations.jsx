import React from "react";

const ExploreDestinations = () => {
  return (
    <section className="w-full bg-white py-16 overflow-x-hidden">
     
      <div className="w-full max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row justify-between ml-7 lg:ml-28">
        
      
        <div className="max-w-xl">
          <button
            style={{ border: "1px solid #DEDEDE" }}
            className="flex items-center justify-center xxxs:ml-14 gap-x-2 text-gray-400 px-4 py-1 rounded-full mb-4 text-sm font-medium w-24"
          >
            <img src="/images/globe-04.svg" alt="icon" className="w-5 h-5 " />
            Explore
          </button>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4 xxxs:-ml-12">
           <p className="xxxs:ml-16 "> Explore</p><p className="xxxs:ml-[70px] -mb-[75px] "> Global</p><br /> Destinations
          </h1>

          <p className="text-gray-600 text-lg xxxs:w-[305px] xxxs:text-sm xxxs:-ml-12">
            Find and buy the best prepaid eSIMs online for your travels.
            Connect to the internet in minutes in more than 197 destinations
            around the world.
          </p>
        </div>

        
        <div className="mt-10 md:mt-0 mr-16">
          <img
            src="/images/suitcase.png"
            alt="Suitcase"
            className="max-w-sm object-contain sm:block xs:hidden xxs:hidden xxxs:hidden w-[340px] h-[269px] -rotate-6 lg:w-72 lg:h-60 lg:mr-44 md:w-60 md:h-48 sm:w-52 sm:h-40"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
