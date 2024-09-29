import React from "react";
import Button from "./Button"; // Import your Button component

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 col-start-4 col-end-7">
      <Button>Alla typer</Button>
      <Button>Villor</Button>
      <Button>Lägenheter</Button>
      <Button>Fritidsboenden</Button>
      <Button>Tomter</Button>
      <Button>Övriga</Button>
    </div>
  );
};

export default FilterBar;
