import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Rest of the code...

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

interface ListingCardProps {
  property: Property;
}

const ListingCard = ({ property }: ListingCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/homes/${property.id}`);
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
              Listed on {new Date(property.listingDate).toLocaleDateString()}
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
            <span className="text-gray-500">{property.squareMeters} m²</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{property.rooms} rum</span>
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
