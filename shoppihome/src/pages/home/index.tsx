import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import MainSearchComp from "@/components/searchboxComps/MainSearchComp";
import CardDemo from "@/components/shadcnComps/CardDemo";
import MostExpensive from "@/components/MostExpensive";

interface SearchFilters {
  searchTerm: string;
  minRooms: number;
  maxPrice: number;
  minArea: number;
  propertyType: string;
}

function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: "",
    minRooms: 1,
    maxPrice: 10000000,
    minArea: 0,
    propertyType: "Alla typer",
  });

  const handleSearch = (searchFilters: any) => {
    console.log("Search filters received:", searchFilters);
    setFilters(searchFilters);
    // Navigate to the results page with filters
    navigate("/homes", { state: { filters: searchFilters } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-7 bg-gray-100 pt-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-8">
            <div className="col-start-1 col-end-2 bg-white border border-gray-300 rounded-lg h-96 flex justify-center items-center">
              <p className="text-gray-400">Ad space</p>
            </div>
            <div className="col-start-3 col-end-7 ">
              <MainSearchComp onSearch={handleSearch} />
            </div>
            <div className="ml-16 col-start-7">
              <CardDemo src="home1.png" alt="Bild på hem" title="Din senaste visning" />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center p-4">Dyraste hemmen just nu</h2>
            <MostExpensive />
          </div>
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

export default Home;
