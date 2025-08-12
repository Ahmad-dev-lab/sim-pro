// src/components/CountryCard.jsx
import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition w-72 gap-0 z-[9999]">
      <div className="relative p-3"> {/* p-3 yaha rakha taaki outer div ka gap na aaye */}
        {/* Main Country Image */}
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-40 object-cover rounded-xl"
        />

        {/* Small Flag Icon */}
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="absolute top-6 left-6 w-7 h-7 rounded-full border-2 border-white shadow"
        />
      </div>

      {/* Country Name and Arrow */}
      <div className="flex justify-between items-center px-3 pb-3">
        <span className="font-bold text-gray-800">{country.name}</span>
              <span className="text-lg"><img src="/images/arrow.svg" alt="" className="h-4 w-4" /></span>
      </div>
    </div>
  );
}
