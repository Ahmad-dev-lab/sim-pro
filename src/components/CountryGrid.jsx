import React, { useState, useEffect } from "react";

export default function PopularDestinations() {
  const allCountries = [
    { name: "Albania" },
    { name: "Algeria" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Aruba" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bangkok" },
    { name: "Bangladesh" },
    { name: "Belgium" },
    { name: "Brazil" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define breakpoints in px based on Tailwind defaults or your setup
  // xxxs ~ <=320, xxs ~ <=375, xs ~ <=640, md ~ >=768 (md to 2xl covers >=768)
  const showLimitedCards =
    windowWidth <= 640 && searchTerm.length === 0; // for xs, xxs, xxxs

  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const countriesToShow = showLimitedCards
    ? filteredCountries.slice(0, 8)
    : filteredCountries;

  return (
    <section className="px-6 py-8 max-w-6xl mx-auto relative right-4 lg:ml-32 md:ml-11">
      <div className="flex items-center gap-2 text-sm font-bold mb-2">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        All Countries
      </div>

      <h2 className="text-[30px] font-bold mb-4">Explore Countries</h2>

      <div className="mb-6 w-[40%] sm:w-1/2 xxxs:w-[112%]">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-200 rounded-full py-2 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm font-semibold text-gray-800"
          />
          <div className="absolute right-2 h-7 w-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <img src="/images/search-lg.svg" alt="Search" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xxxs:grid-cols-2 xxs:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 gap-5">
        {countriesToShow.map((country, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-md transition p-3"
          >
            <div className="relative rounded-xl overflow-hidden h-[180px]">
              <img
                src={`/images/countries/${country.name}.jpg`}
                alt={country.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-white rounded-full p-[2px] shadow w-[26px] h-[26px] ">
                <img
                  src={`/images/flags/${country.name}.svg`}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 px-1">
              <span className="font-bold text-base">{country.name}</span>
              <span className="text-lg">
                <img src="/images/arrow.svg" alt="" className="h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
