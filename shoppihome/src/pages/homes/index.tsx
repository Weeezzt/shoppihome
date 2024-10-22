import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SecondarySearchComp from "@/components/searchboxComps/SecondarySearchComp";
import Header from "@/components/Header";
import { CarouselDemo } from "@/components/shadcnComps/CarouselDemo";
import Listings from "@/components/listings/Listings";

// Define a type for the filters
interface SearchFilters {
  searchTerm: string;
  minRooms: number;
  maxPrice: number;
  minArea: number;
  propertyType: string;
}

export default function page() {
  const location = useLocation();
  const initialFilters = location.state?.filters || {
    searchTerm: "",
    minRooms: 1,
    maxPrice: 10000000,
    minArea: 0,
    propertyType: "Alla typer",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleSearch = (searchFilters: any) => {
    console.log("Search filters received:", searchFilters);
    setFilters(searchFilters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-100">
        <div className="flex">
          <SecondarySearchComp onSearch={handleSearch} />
          <CarouselDemo />
        </div>
        <div className="w-full mt-12">
          <Listings filters={filters} />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
