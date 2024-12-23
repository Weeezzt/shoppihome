import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IndividualListing from "@/components/listings/IndividualListing";
import Header from "@/components/Header";
import { Document } from "mongoose";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/components/placeHolders/Loading";

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
const IndividualPropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const {
    data: property,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      const response = await axios.get(`http://localhost:8000/api/listings/${id}`);
      return response.data;
    },
    queryKey: ["listing"],
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div>Error fetching property</div>;
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
