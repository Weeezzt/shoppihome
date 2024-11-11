import axios from "axios";
import { handleError } from "@/helpers/ErrorHandler";
import { Listing } from "@/models/Listing"; // Assuming you have a Listing model
const api = "http://localhost:8000/api";

// Fetch all listings
export const fetchAllListings = async (): Promise<Listing[]> => {
  try {
    const response = await axios.get<Listing[]>(`${api}/listings`);
    return response.data;
  } catch (error) {
    handleError(error);
    return [];
  }
};

// Fetch a single listing by ID
export const fetchListingById = async (id: string) => {
  try {
    const response = await axios.get<Listing>(`${api}/listings/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a new listing
export const createListing = async (listingData: Partial<Listing>) => {
  try {
    const response = await axios.post<Listing>(`${api}/listings`, listingData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const addToFavorites = async (username: string, listingId: string) => {
  try {
    const response = await axios.post(`${api}/profile/${username}/save-listing`, { listingId });
    console.log("Listing saved successfully");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
