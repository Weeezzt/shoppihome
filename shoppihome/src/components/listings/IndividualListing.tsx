import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPinIcon, PhoneIcon } from "lucide-react";
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

interface IndividualListingProps {
  property: Property;
}

const IndividualListing = ({ property }: IndividualListingProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1">
          <img
            src={property.images[0]}
            alt={`Image of ${property.address}`}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={`/${image}`}
                alt={`Image ${index + 1} of ${property.address}`}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
          <h1 className="text-3xl font-bold mt-6">{property.address}</h1>
          <p className="text-xl text-gray-600">{property.city}</p>
          <div className="flex gap-4 mt-4">
            <Badge variant="outline">{property.status}</Badge>
            <span className="text-gray-500">Listed on (date)</span>
          </div>
          <p className="mt-4">{property.description}</p>
          <div className="flex gap-6 mt-6">
            <div>
              <h2 className="font-semibold">Price</h2>
              <p>{property.price.toLocaleString()} kr</p>
            </div>
            <div>
              <h2 className="font-semibold">Size</h2>
              <p>{property.area} m²</p>
            </div>
            <div>
              <h2 className="font-semibold">Rooms</h2>
              <p>{property.numberOfRooms}</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <h2 className="font-semibold">Property Details</h2>
            <p>
              <strong>Year Built:</strong> {property.yearBuilt}
            </p>
            {property.propertyFeatures.garden && (
              <p>
                <strong>Garden:</strong> Yes
              </p>
            )}
            {property.propertyFeatures.parking && (
              <p>
                <strong>Parking:</strong>{" "}
                {typeof property.propertyFeatures.parking === "string"
                  ? property.propertyFeatures.parking
                  : "Yes"}
              </p>
            )}
            <p>
              <strong>Heating:</strong> {property.propertyFeatures.heating}
            </p>
          </div>
        </div>

        {/* Right Column: Agent Info */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-semibold text-xl mb-4">Contact Agent</h2>
            <div className="flex items-center gap-4">
              <img
                src="/path/to/agent/image.jpg"
                alt="Agent profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{property.realEstateFirm}</p>
                <p className="text-gray-500">Real Estate Agency</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Show Phone Number
            </Button>
            <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
              Email Agent
            </Button>
          </div>

          <div className="mt-6">
            <Button variant="secondary" className="w-full flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              View on Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualListing;
