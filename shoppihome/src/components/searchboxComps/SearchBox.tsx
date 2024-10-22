import React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBox: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="rounded-md">
      <label htmlFor="search" className="block text-gray-900 text-md mb-2">
        Område
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Skriv område eller adress"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBox;
