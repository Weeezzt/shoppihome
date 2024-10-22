import React, { useState } from "react";
import SearchBox from "./SearchBox";
import FilterBar from "./FilterBar";
import RangeFilter from "./RangeFilter";
import SubmitButton from "./SubmitButton";
import MoreFilters from "./MoreFilters";

interface SearchFilters {
  searchTerm: string;
  minRooms: number;
  maxPrice: number;
  minArea: number;
  propertyType: string;
}

interface SecondarySearchCompProps {
  onSearch: (filters: SearchFilters) => void;
}

const SecondarySearchComp: React.FC<SecondarySearchCompProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRooms, setMinRooms] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minArea, setMinArea] = useState(0);
  const [propertyType, setPropertyType] = useState("Alla typer");

  const handleSubmit = () => {
    onSearch({ searchTerm, minRooms, minArea, maxPrice, propertyType });
  };

  return (
    <div className="p-6 max-w-3xl ml-24 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <RangeFilter />
      <FilterBar propertyType={propertyType} onTypeChange={setPropertyType} />
      <div className="mt-4 flex justify-center">
        <MoreFilters
          minRooms={minRooms}
          onMinRoomsChange={setMinRooms}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          minArea={minArea}
          onMinAreaChange={setMinArea}
        >
          Fler filter
        </MoreFilters>
      </div>
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default SecondarySearchComp;
