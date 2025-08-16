import React from "react";
import LanguageCurrencySelector from "./LanguageCurrencySelector";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 ml-7 shadow-sm bg-white sm:-ml-0 xxxs:-ml-4 xxxs:w-[380px] sm:w-[950px] lg:w-[1200px] lg:ml-[116px]">
      
   
      <div className="flex items-center space-x-2">

        <button className="hidden sm:block">
          <img src="/images/menu-01.svg" alt="icon" className="w-6 h-6" />
        </button>

        
        <img src="/images/sim.png" alt="Logo" className="w-8 h-6 ml-2" />
        <span className="font-bold text-lg ml-2">simfree</span>
      </div>

 
      <div className="flex items-center space-x-4 mr-9">
        
        <button className="block xs:block xxs:block xxxs:block sm:hidden">
          <img src="/images/menu-01.svg" alt="icon" className="w-6 h-6" />
        </button>

      
        <button className="w-6 h-6 sm:block xs:hidden xxs:hidden xxxs:hidden">
          <img src="/images/globe-01.svg" alt="icon" />
        </button>

        
        <div className="sm:block xs:hidden xxs:hidden xxxs:hidden">
          <LanguageCurrencySelector />
        </div>

     
        <button className="w-6 h-6 sm:block xs:hidden xxs:hidden xxxs:hidden">
          <img src="/images/Group 854.svg" alt="icon" />
        </button>

  
        <button
          style={{ backgroundColor: "#FED98F" }}
          className="px-4 py-2 rounded-xl font-medium sm:block xs:hidden xxs:hidden xxxs:hidden"
        >
          Get your eSIM
        </button>
      </div>
    </header>
  );
}
