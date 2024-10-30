import axios from "axios";
import { handleError } from "@/helpers/ErrorHandler";
import { UserProfileToken } from "@/models/User";
const api = "http://localhost:8000/api";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "/auth/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (username: string, email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "/auth/register", {
      username: username,
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
