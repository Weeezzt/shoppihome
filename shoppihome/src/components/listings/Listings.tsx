import ListingCard from "./ListingCard";
import { useState } from "react";
import { useEffect } from "react";
import { Listing } from "@/models/Listing";
import { useQuery } from "@tanstack/react-query";
import { fetchAllListings } from "@/Services/ListingService";
import { AxiosError } from "axios";

interface ListingsProps {
  filters: {
    searchTerm: string;
    minRooms: number;
    maxPrice: number;
    minArea: number;
    propertyType: string;
  };
}

const Listings: React.FC<ListingsProps> = ({ filters }) => {
  const [filteredProperties, setFilteredProperties] = useState<Listing[]>([]);
  const {
    data: properties,
    error,
    isLoading,
    isError,
  } = useQuery<Listing[], AxiosError>({
    queryKey: ["listings"],
    queryFn: fetchAllListings,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
    refetchInterval: 30 * 60 * 1000, // 30 minutes
  });

  // Apply filters
  useEffect(() => {
    if (!properties) return;
    const filtered = properties.filter((property: Listing) => {
      const matchesSearchTerm =
        property.address.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesRooms = property.numberOfRooms >= filters.minRooms;
      const matchesPrice = property.price <= filters.maxPrice;
      const matchesArea = property.area >= filters.minArea;
      const matchesType =
        filters.propertyType === "Alla typer" || property.type === filters.propertyType;

      return matchesSearchTerm && matchesRooms && matchesPrice && matchesArea && matchesType;
    });

    setFilteredProperties(filtered);
  }, [filters, properties]);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="flex flex-col space-y-6 w-full mx-auto lg:ml-24">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <ListingCard key={property.listingId} property={property} />
        ))
      ) : (
        <p>No properties match the current filters.</p>
      )}
    </div>
  );
};

export default Listings;
