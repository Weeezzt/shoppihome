import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IndividualListing from "@/components/listings/IndividualListing";
import Header from "@/components/Header";

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
  floor?: number;
  balcony?: boolean;
  propertyTax: number;
  distanceToCityCenter: number;
  publicTransport: string;
  neighborhood: string;
  energyRating: string;
}

const IndividualPropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch("/data/info.json");
        const data: Property[] = await response.json();
        const foundProperty = data.find((property) => property.id === id);
        setProperty(foundProperty || null);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-100">
        <div>
          <IndividualListing property={property} />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default IndividualPropertyPage;
