import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center border rounded-full w-[350px] px-2 py-1 relative sm:right-20">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch?.(e.target.value)}
        className="px-2 py-2 w-full rounded-full outline-none text-gray-800"
      />
      <button className="bg-yellow-400 p-2 w-12 rounded-full absolute right-1 flex items-center justify-center">
        <img
          src="/images/search-lg.svg"
          alt="Search"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
}
