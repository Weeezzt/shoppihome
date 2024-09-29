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

const Listings = () => {
  const [properties, setProperties] = useState<Property[]>([]);

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
  return (
    <div className="flex flex-col space-y-6 w-full ml-24">
      {properties.map((property) => (
        <ListingCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Listings;
