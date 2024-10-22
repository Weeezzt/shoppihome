import ListingCard from "./ListingCard";
import { useState } from "react";
import { useEffect } from "react";

interface Property {
  id: string;
  address: string;
  city: string;
  type: string;
  rooms: number;
  squareMeters: number;
  price: number;
  description: string;
  images: string[];
  status: string;
  yearBuilt: number;
  garden?: boolean;
  parking?: boolean | string;
  heating: string;
  listingDate: string;
  agent: string;
  propertyTax: number;
  distanceToCityCenter: number;
  publicTransport: string;
  neighborhood: string;
  energyRating: string;
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
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/data/info.json");
        const data: Property[] = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties data:", error);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const matchesSearchTerm =
        property.address.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesRooms = property.rooms >= filters.minRooms;
      const matchesPrice = property.price <= filters.maxPrice;
      const matchesArea = property.squareMeters >= filters.minArea;
      const matchesType =
        filters.propertyType === "Alla typer" || property.type === filters.propertyType;

      return matchesSearchTerm && matchesRooms && matchesPrice && matchesArea && matchesType;
    });

    setFilteredProperties(filtered);
  }, [filters, properties]);

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
