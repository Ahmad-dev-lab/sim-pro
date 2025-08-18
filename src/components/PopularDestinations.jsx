import React, { useRef } from "react";
import CountryCard from "./CountryCard";

export default function PopularDestinations() {
  const scrollRef = useRef(null);

  const popularDestinations = [
    {
      name: "Albania",
      image: "/images/countries/Albania.jpg",
      flag: "/images/flags/Albania.svg",
    },
    {
      name: "Australia",
      image: "/images/countries/Australia.jpg",
      flag: "/images/flags/Australia.svg",
    },
    {
      name: "Belgium",
      image: "/images/countries/Belgium.jpg",
      flag: "/images/flags/Belgium.svg",
    },
    {
      name: "Albania",
      image: "/images/countries/Albania.jpg",
      flag: "/images/flags/Albania.svg",
    },
    {
      name: "Australia",
      image: "/images/countries/Australia.jpg",
      flag: "/images/flags/Australia.svg",
    },
    {
      name: "Belgium",
      image: "/images/countries/Belgium.jpg",
      flag: "/images/flags/Belgium.svg",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-8 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-sm font-bold mb-2">
          <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
          Top Countries
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Popular Destination</h2>

          
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="h-9 w-9 rounded-fullflex items-center justify-center"
            >
              <img src="/images/Frame 71.svg" alt="Left" className="h-8 w-8" />
            </button>
            <button
              onClick={scrollRight}
              className="h-9 w-9 rounded-full  flex items-center justify-center"
            >
              <img src="/images/Frame 70.svg" alt="Right" className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {popularDestinations.map((country, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[300px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
