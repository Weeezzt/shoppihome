import axios from "axios";
const api = "http://localhost:8000/api";

export const fetchUsername = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.get<{ username: string }>(`${api}/profile/username`, {
      headers: {
        Authorization: `Bearer ${token}`, // Ensure the token is included in the request
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching username:", error);
    throw error;
  }
};
