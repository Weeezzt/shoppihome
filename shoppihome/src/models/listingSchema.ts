import { Schema, model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Optional: to generate a UUID for listingId

interface Property extends Document {
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
}

const propertySchema = new Schema<Property>({
  listingId: {
    type: String,
    unique: true,
    default: uuidv4, // Generates a UUID if not manually set
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bid: {
    type: Number,
    default: null,
  },
  soldPrice: {
    type: Number,
    default: null,
  },
  area: {
    type: Number,
    required: true,
    min: 0,
  },
  numberOfRooms: {
    type: Number,
    required: true,
    min: 1,
  },
  type: {
    type: String,
    required: true,
    enum: ["Villa", "Apartment", "Townhouse", "Condo", "Cottage", "Studio", "Other"],
  },
  realtorId: {
    type: String,
    required: true,
  },
  realEstateFirm: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["For Sale", "Sold"],
  },
  propertyFeatures: {
    type: Object,
    default: {},
  },
  totalClicked: {
    type: Number,
    default: 0,
  },
  yearBuilt: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

export const PropertyModel = model<Property>("Property", propertySchema);
