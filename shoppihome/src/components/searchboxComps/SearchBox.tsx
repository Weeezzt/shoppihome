import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div className="rounded-md">
      <label htmlFor="search" className="block text-gray-900 text-md mb-2">
        Område
      </label>
      <input
        type="text"
        id="search"
        placeholder="Skriv område eller adress"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBox;
