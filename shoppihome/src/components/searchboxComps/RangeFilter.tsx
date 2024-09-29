import React from "react";

const RangeFilter: React.FC = () => {
  return (
    <div className="mt-4 col-span-2">
      <label htmlFor="range" className="block text-gray-700 text-sm mb-2">
        Utöka område med
      </label>
      <select id="range" className="w-full p-2 border border-gray-300 rounded-md">
        <option value="0">+ 0 km</option>
        <option value="5">+ 5 km</option>
        <option value="10">+ 10 km</option>
        <option value="20">+ 20 km</option>
      </select>
    </div>
  );
};

export default RangeFilter;
