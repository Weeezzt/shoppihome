import LoginComp from "@/components/login/LoginComp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import Header from "@/components/Header";

export default function Login() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is already logged in
    if (isLoggedIn) {
      navigate("/home"); // or wherever you want to redirect
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <main className="bg-gray-100">
        <LoginComp />
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
