import { parse } from "path";
import React, { useState } from "react";

interface FilterProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  minRooms: number;
  onMinRoomsChange: (value: number) => void;
  maxPrice: number;
  onMaxPriceChange: (value: number) => void;
  minArea: number;
  onMinAreaChange: (value: number) => void;
}

const MoreFilters: React.FC<FilterProps> = ({
  onClick,
  className = "",
  children,
  minRooms,
  maxPrice,
  minArea,
  onMinRoomsChange,
  onMaxPriceChange,
  onMinAreaChange,
}) => {
  const [active, setActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRoomValue, setSelectedRoomValue] = useState(minRooms.toString());
  const [selectedPriceValue, setSelectedPriceValue] = useState(maxPrice.toString());
  const [selectedAreaValue, setSelectedAreaValue] = useState(minArea.toString());
  const handleRoomChange = (event: any) => {
    const value = parseInt(event.target.value);
    setSelectedRoomValue(event.target.value);
    onMinRoomsChange(value);
  };
  const handlePriceChange = (event: any) => {
    const value = parseInt(event.target.value);
    setSelectedPriceValue(event.target.value);
    onMaxPriceChange(value);
  };
  const handleAreaChange = (event: any) => {
    const value = parseInt(event.target.value);
    setSelectedAreaValue(event.target.value);
    onMinAreaChange(value);
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
          <div className="flex space-x-4">
            <div className="w-1/3 p-2 ">
              <h3 className="font-bold">Högsta pris</h3>
              <select
                value={selectedPriceValue}
                onChange={handlePriceChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="1000000">1.000.000</option>
                <option value="2000000">2.000.000</option>
                <option value="3000000">3.000.000</option>
                <option value="4000000">4.000.000</option>
                <option value="5000000">5.000.000</option>
              </select>
            </div>
            <div className="w-1/3 p-2">
              <h3 className="font-bold">Boarea</h3>
              <select
                value={selectedAreaValue}
                onChange={handleAreaChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="30">30m2</option>
                <option value="40">40m2</option>
                <option value="50">50m2</option>
                <option value="60">60m2</option>
                <option value="100">100m2</option>
                <option value="200">200m2</option>
              </select>
            </div>
            <div className="w-1/3 p-2">
              <h3 className="font-bold">Antal rum</h3>
              <select
                value={selectedRoomValue}
                onChange={handleRoomChange}
                className="border-solid border-2 rounded-md p-2"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFilters;
