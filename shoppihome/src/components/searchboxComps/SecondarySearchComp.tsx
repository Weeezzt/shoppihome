import React, { useState } from "react";
import SearchBox from "./SearchBox";
import FilterBar from "./FilterBar";
import RangeFilter from "./RangeFilter";
import SubmitButton from "./SubmitButton";
import MoreFilters from "./MoreFilters";

interface SearchFilters {
  searchTerm: string;
  minRooms: number;
  maxRooms: number;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
}

interface SecondarySearchCompProps {
  onSearch: (filters: SearchFilters) => void;
}

const SecondarySearchComp: React.FC<SecondarySearchCompProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(10);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [propertyType, setPropertyType] = useState("Alla typer");

  const handleSubmit = () => {
    onSearch({ searchTerm, minRooms, maxRooms, minPrice, maxPrice, propertyType });
  };

  return (
    <div className="p-6 max-w-3xl ml-24 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <SearchBox value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)} />
      </div>
      <RangeFilter
        minRooms={minRooms}
        maxRooms={maxRooms}
        onMinRoomsChange={setMinRooms}
        onMaxRoomsChange={setMaxRooms}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />
      <FilterBar propertyType={propertyType} onTypeChange={setPropertyType} />
      <div className="mt-4 flex justify-center">
        <MoreFilters>Fler filter</MoreFilters>
      </div>
      <SubmitButton />
    </div>
  );
};

export default SecondarySearchComp;
