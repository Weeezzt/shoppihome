import ListingCard from "./ListingCard";
import { useState } from "react";
import { useEffect } from "react";
import { Document } from "mongoose";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PropertyType = "Villa" | "Apartment" | "Townhouse" | "Condo" | "Cottage" | "Studio" | "Other";
type PropertyStatus = "For Sale" | "Sold";

interface Property extends Document {
  listingId: string; // Unique identifier for the property
  title: string; // Title of the listing
  description: string; // Description of the property
  address: string; // Full address of the property
  city: string; // City where the property
  price: number; // Price of the property
  bid?: number; // Optional field for bids
  soldPrice?: number; // Optional field for the sold price
  area: number; // Area in square meters
  numberOfRooms: number; // Number of rooms in the property
  type: PropertyType; // Property type
  realtorId: string; // ID of the realtor associated with the property
  realEstateFirm: string; // Name of the real estate firm
  status: PropertyStatus;
  propertyFeatures: {
    garden?: boolean; // Optional garden feature
    parking?: boolean; // Optional parking feature
    heating?: boolean; // Optional heating feature
    [key: string]: any; // Additional features can be added dynamically
  };
  totalClicked: number; // Total clicks on the listing
  yearBuilt: number; // Year the property was built
  images: string[]; // Array of image URLs
}

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
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const {
    data: properties,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      const response = await axios.get("http://localhost:8000/api/listings");
      return response.data;
    },
    queryKey: ["listings"],
  });

  // Apply filters
  useEffect(() => {
    if (!properties) return;
    const filtered = properties.filter((property: Property) => {
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
    <div className="flex flex-col space-y-6 w-full ml-24">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => <ListingCard key={property.id} property={property} />)
      ) : (
        <p>No properties match the current filters.</p>
      )}
    </div>
  );
};

export default Listings;
