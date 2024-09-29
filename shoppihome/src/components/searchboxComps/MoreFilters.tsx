import React, { useState } from "react";

interface FilterProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const MoreFilters: React.FC<FilterProps> = ({ onClick, className = "", children }) => {
  const [active, setActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Option 1");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    setActive(!active);
    setShowDropdown(!showDropdown);
    if (onClick) onClick();
  };

  return (
    <div className="relative flex justify-around">
      <p
        onClick={handleClick}
        className={`p-2 rounded-md focus:outline-none ${
          active ? "hidden" : " text-gray-700"
        } hover:text-blue-400 hover:cursor-pointer ${className}`}
      >
        {children}
      </p>
      {showDropdown && (
        <div className="realative flex p-x-12">
          <div className="flex flex-wrap">
            <div className="w-1/3 p-2 ">
              <h3 className="font-bold">Antal rum</h3>
              <select
                value={selectedValue}
                onChange={handleChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="w-1/3 p-2">
              <h3 className="font-bold">Boarea</h3>
              <select
                value={selectedValue}
                onChange={handleChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="w-1/3 p-2">
              <h3 className="font-bold">Högsta pris</h3>
              <select
                value={selectedValue}
                onChange={handleChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFilters;
