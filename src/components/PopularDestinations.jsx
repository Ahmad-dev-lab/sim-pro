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
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-8 relative lg:-left-9 md:ml-7 xxxs:-ml-2">
      <div className="max-w-6xl mx-auto">
       
        <div className="flex items-center gap-2 text-sm font-bold mb-2">
          <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
          Top Countries
        </div>

    
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Popular Destination</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="h-9 w-9 rounded-full flex items-center justify-center"
            >
              <img src="/images/Frame 71.svg" alt="Left" className="h-6 w-6" />
            </button>
            <button
              onClick={scrollRight}
              className="h-9 w-9 rounded-full flex items-center justify-center"
            >
              <img src="/images/Frame 70.svg" alt="Right" className="h-6 w-6" />
            </button>
          </div>
        </div>

       
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth items-stretch pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {popularDestinations.map((country, index) => (
            <div key={index} className="min-w-[280px] ">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
