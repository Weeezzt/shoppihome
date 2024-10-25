import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Rest of the code...

import { Document } from "mongoose";

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

interface ListingCardProps {
  property: Property;
}

const ListingCard = ({ property }: ListingCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/homes/${property.listingId}`);
  };

  return (
    <Card onClick={handleCardClick} className="w-full max-w-5xl shadow-lg p-4 hover:cursor-pointer">
      <CardHeader className="p-2">
        <div className="flex justify-between">
          <div>
            <CardTitle>{property.address}</CardTitle>
            <p className="text-sm text-gray-500">{property.city}</p>
          </div>
          <div className="text-right">
            <Button variant="ghost" size="sm" className="p-1">
              <CalendarIcon className="w-4 h-4 mr-1" />
              Listed on (date)
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <img
          src={property.images[0]} // Display first image
          alt="Property image"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="flex mt-4 space-x-4">
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{property.price.toLocaleString()} kr</span>
            <span className="text-gray-500">{property.area} m²</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{property.numberOfRooms} rum</span>
            <span className="text-gray-500">{property.type}</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-700">
          {property.description.length > 100
            ? property.description.slice(0, 100) + "..."
            : property.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between p-2">
        <Badge variant="outline">{property.status}</Badge>
        <Button variant="outline">Visa mer</Button>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
