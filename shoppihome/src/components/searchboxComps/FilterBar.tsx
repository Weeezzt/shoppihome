import React from "react";
import Button from "./Button"; // Import your Button component

interface FilterProps {
  propertyType: string;
  onTypeChange: (value: string) => void;
}
const FilterBar: React.FC<FilterProps> = ({ propertyType, onTypeChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 col-start-4 col-end-7">
      <Button onClick={() => onTypeChange("Alla typer")}>Alla typer</Button>
      <Button onClick={() => onTypeChange("Villa")}>Villor</Button>
      <Button onClick={() => onTypeChange("Lägenhet")}>Lägenheter</Button>
      <Button onClick={() => onTypeChange("Fritidsboende")}>Fritidsboenden</Button>
      <Button onClick={() => onTypeChange("Tomt")}>Tomter</Button>
      <Button onClick={() => onTypeChange("Övrigt")}>Övriga</Button>
    </div>
  );
};

export default FilterBar;
