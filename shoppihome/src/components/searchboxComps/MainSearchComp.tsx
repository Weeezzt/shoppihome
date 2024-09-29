import React from "react";
import SearchBox from "./SearchBox";
import FilterBar from "./FilterBar";
import RangeFilter from "./RangeFilter";
import SubmitButton from "./SubmitButton";
import MoreFilters from "./MoreFilters";

const MainSearchComp: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <div className="mb-4">
        <SearchBox />
      </div>
      <RangeFilter />
      <FilterBar />
      <div className="mt-4 flex justify-center">
        <MoreFilters>Fler filter</MoreFilters>
      </div>
      <SubmitButton />
    </div>
  );
};

export default MainSearchComp;
