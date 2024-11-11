import React, { useState } from "react";
import { useAuth } from "@/context/useAuth";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { isLoggedIn, logoutUser, user } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <a href="/home">
            <span>Shoppi</span>
            <span className="text-blue-600">Home</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/homes" className="font-bold text-gray-700 hover:text-blue-500">
              Hitta Bostad
            </a>
          </li>
          <li>
            <a href="/products" className="font-bold text-gray-700 hover:text-blue-500">
              Sälj Bostad
            </a>
          </li>
          <li>
            <a href="/news" className="font-bold text-gray-700 hover:text-blue-500">
              Nyheter
            </a>
          </li>
          <li>
            <a href="/contact" className="font-bold text-gray-700 hover:text-blue-500">
              Mäklare
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <a
                href={`/dashboard/${user?.userName}`}
                className="font-bold text-gray-700 hover:text-blue-500"
              >
                Dashboard
              </a>
            </li>
          )}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <a href="/auth/login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Login
                </button>
              </a>
              <a href="/auth/signup">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                  Sign Up
                </button>
              </a>
            </>
          ) : (
            <button
              onClick={logoutUser}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Log Out
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4">
          <li>
            <a href="/homes" className="block font-bold text-gray-700 hover:text-blue-500">
              Hitta Bostad
            </a>
          </li>
          <li>
            <a href="/products" className="block font-bold text-gray-700 hover:text-blue-500">
              Sälj Bostad
            </a>
          </li>
          <li>
            <a href="/news" className="block font-bold text-gray-700 hover:text-blue-500">
              Nyheter
            </a>
          </li>
          <li>
            <a href="/contact" className="block font-bold text-gray-700 hover:text-blue-500">
              Mäklare
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <a
                href={`/dashboard/${user?.userName}`}
                className="block font-bold text-gray-700 hover:text-blue-500"
              >
                Dashboard
              </a>
            </li>
          )}
          <div className="space-y-2">
            {!isLoggedIn ? (
              <>
                <a href="/auth/login">
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Login
                  </button>
                </a>
                <a href="/auth/signup">
                  <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                    Sign Up
                  </button>
                </a>
              </>
            ) : (
              <button
                onClick={logoutUser}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
            )}
          </div>
        </ul>
      )}
    </header>
  );
};

export default Header;
