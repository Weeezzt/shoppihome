export type Listing = {
  listingId: string;
  title: string;
  description: string;
  address: string;
  city: string;
  price: number;
  bid?: number;
  soldPrice?: number;
  area: number;
  numberOfRooms: number;
  type: "Villa" | "Apartment" | "Townhouse" | "Condo" | "Cottage" | "Studio" | "Other";
  realtorId: string;
  realEstateFirm: string;
  status: "For Sale" | "Sold";
  propertyFeatures: {
    garden?: boolean;
    parking?: boolean;
    heating?: boolean;
    [key: string]: any;
  };
  totalClicked: number;
  yearBuilt: number;
  images: string[];
};
