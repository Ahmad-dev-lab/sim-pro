import React from "react";
const ExploreDestinations = () => {
  return (
    <section className="w-full bg-white py-16 pl-8 pr-3">
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-xl">
         

         <button
  style={{ border: "1px solid #DEDEDE" }}
  className="flex items-center justify-center gap-x-2 text-gray-400 px-4 py-1 rounded-full mb-4 text-sm font-medium w-24"
>
  <img src="/images/globe-04.svg" alt="icon" className="w-5 h-5" />
  Explore
  
</button>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Explore Global <br /> Destinations
          </h1>
          
          <p className="text-gray-600 text-lg">
            Find and buy the best prepaid eSIMs online for your travels. Connect to the internet in minutes in more than 197 destinations around the world.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="/images/suitcase.png"
            alt="Suitcase"
            className="max-w-sm object-contain w-[340px] h-[269px] pr-8 -rotate-6 ml-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
