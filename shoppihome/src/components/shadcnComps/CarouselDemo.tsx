import * as React from "react";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
export function CarouselDemo() {
  const listings = randomListing([]);
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="mx-auto max-w-sm md:max-w-md"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <h2 className="text-2xl text-gray-900 text-center p-4">Populära bostäder</h2>
              <Card className=" w-96 mx-auto rounded-sm hover:cursor-pointer hover:shadow-lg">
                <CardHeader className="p-3">
                  <CardTitle className="text-center">Bankgatan 7 Sorsele</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full items-center justify-center m-0 p-0">
                  <img src="apart.png" alt="" className="rounded-b-sm" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const randomListing = (listings: any[]) => {
  const randomListings = new Set<any>();

  while (randomListings.size < 6 && randomListings.size < listings.length) {
    const index = Math.floor(Math.random() * listings.length);
    randomListings.add(listings[index]);
  }

  return Array.from(randomListings);
};
