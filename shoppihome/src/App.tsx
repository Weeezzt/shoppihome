import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { User } from "lucide-react";
import { UserProvider } from "./context/useAuth";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
