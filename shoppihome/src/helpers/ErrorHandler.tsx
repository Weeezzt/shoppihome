import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (Array.isArray(error.response?.data.errors)) {
      for (let val of error.response?.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof error.response?.data.errors === "object") {
      for (let key in error.response?.data.errors) {
        toast.warning(error.response?.data.errors[key][0]);
      }
    } else if (error.response?.data) {
      toast.warning(error.response?.data);
    } else if (error.response?.status === 401) {
      toast.warning("Unauthorized");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (error.response) {
      toast.warning(error.response?.data);
    }
  }
};
