import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import { useEffect } from "react";
import { fetchUsername } from "@/Services/userService";

import Header from "@/components/Header";
import MainSearchComp from "@/components/searchboxComps/MainSearchComp";
import CardDemo from "@/components/shadcnComps/CardDemo";
import MostExpensive from "@/components/MostExpensive";
import { AxiosError } from "axios";

interface SearchFilters {
  searchTerm: string;
  minRooms: number;
  maxPrice: number;
  minArea: number;
  propertyType: string;
}

function Home() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: "",
    minRooms: 1,
    maxPrice: 10000000,
    minArea: 0,
    propertyType: "Alla typer",
  });

  const {
    data: userData,
    error,
    isLoading,
    isError,
  } = useQuery<{ username: string }, AxiosError>({
    queryKey: ["username"],
    queryFn: async () => {
      const data = await fetchUsername();
      if (!data) {
        throw new Error("No username found");
      }
      return data;
    },
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (isLoggedIn && userData) {
      console.log("Username fetched:", userData.username);
    }
  }, [isLoggedIn, userData]);

  const handleSearch = (searchFilters: any) => {
    console.log("Search filters received:", searchFilters);
    setFilters(searchFilters);
    // Navigate to the results page with filters
    navigate("/homes", { state: { filters: searchFilters } });
  };

  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-3 md:p-7 bg-gray-100 pt-8">
        <div className="flex flex-col">
          <div className="flex flex-col lg:grid lg:grid-cols-8">
            <div className="mb-4 lg:col-start-1 lg:col-end-2 bg-white border border-gray-300 rounded-lg h-20 mx-auto w-11/12 md:w-9/12 lg:w-full lg:ml-12 lg:h-96 flex justify-center items-center">
              <p className="text-gray-400">Ad space</p>
            </div>
            <div className=" max-w-3xl lg:mx-auto lg:col-start-3 lg:col-end-7 ">
              <MainSearchComp onSearch={handleSearch} />
            </div>
            <div className=" lg:col-start-7 lg:w-full">
              <CardDemo src="home1.png" alt="Bild på hem" title="Din senaste visning" />
            </div>
          </div>
          <div className="mt-6 mx-auto mb-6">
            <h2 className="text-xl font-bold text-center my-6">Dyraste hemmen just nu</h2>
            <MostExpensive />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 bottom-0">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
