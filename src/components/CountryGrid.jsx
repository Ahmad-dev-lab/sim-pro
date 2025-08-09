// src/components/CountryGrid.jsx
import React from "react";
import SearchBar from "./SearchBar";
import { countries } from "../asset/countries";

export default function CountryGrid() {
  return (
    <section className="px-6 py-8 ml-7">
      {/* Title */}
      <div className="flex items-center gap-2 text-sm font-bold mb-2">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        All Countries
      </div>

      <h2 className="text-[30px] font-bold mb-4">Explore Countries</h2>

      {/* Search */}
      <SearchBar />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-2"
          >
            {/* Image with flag */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={`/images/countries/${country.name}.jpg`}
                alt={country.name}
                className="w-full h-44 object-cover"
              />

              {/* Flag circle */}
          <div className="absolute top-3 left-3 p-1 rounded-full ">
  <img
    src={`/images/flags/${country.name}.svg`}
    alt={`${country.name} flag`}
    className="w-8 h-8 rounded-full object-cover"
  />
</div>

            </div>

            {/* Country name + arrow */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="font-bold text-lg">{country.name}</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
