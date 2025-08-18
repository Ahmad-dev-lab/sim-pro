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

  const showLimitedCards = windowWidth <= 640 && searchTerm.length === 0;

  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const countriesToShow = showLimitedCards
    ? filteredCountries.slice(0, 8)
    : filteredCountries;

  return (
    <section className="px-6 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm font-bold mb-2">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        All Countries
      </div>

      <h2 className="text-[30px] font-bold mb-4  md:text-left">
        Explore Countries
      </h2>

      {/* Search Bar */}
      <div className="mb-6 w-full max-w-md mx-auto md:mx-0">
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

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {countriesToShow.map((country, index) => (
          <div
            key={index}
            className="
              bg-white 
              rounded-2xl 
              shadow 
              hover:shadow-md 
              transition 
              p-3 
              mx-auto 
              w-full 
              max-w-[160px] 
              xxxs:max-w-[140px] 
              xxxs:h-[177px] 
              sm:max-w-xs 
              sm:h-[210px]
            "
          >
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden h-[140px] xxxs:h-[120px] sm:h-[150px]">
              <img
                src={`/images/countries/${country.name}.jpg`}
                alt={country.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute top-2 left-2 bg-white rounded-full p-[2px] shadow w-[26px] h-[26px]">
                <img
                  src={`/images/flags/${country.name}.svg`}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="font-bold text-base truncate">
                {country.name}
              </span>
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
