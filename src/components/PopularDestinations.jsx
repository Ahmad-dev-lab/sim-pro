import React from "react";
import CountryCard from "./CountryCard";
import { popularDestinations } from "../asset/popular";

export default function PopularDestinations() {
  return (
    <section className="px-6 py-8 ml-7">
      {/* Title with icon */}
      <div className="flex items-center gap-2 text-sm font-bold mb-2">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        Top Countries
      </div>

      {/* Section heading + navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Popular Destination</h2>
        <div className="flex gap-2">
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
            <img src="/images/Frame 71.svg" alt="" className="h-5 w-5" />
          </button>
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
            <img src="/images/Frame 70.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal scrollable cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {popularDestinations.map((country, index) => (
          <div key={index} className="min-w-[280px]">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </section>
  );
}
