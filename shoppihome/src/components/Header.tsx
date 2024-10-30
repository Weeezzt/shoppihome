import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        <div className="text-3xl font-bold">
          {/* Logo or site title */}
          <a href="/home">
            <span>Shoppi</span>
            <span className="text-blue-600">Home</span>
          </a>
        </div>
        <ul className="hidden md:flex justify-between space-x-28">
          {/* Navigation links */}
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
            <a href="/contact" className=" font-bold text-gray-700 hover:text-blue-500">
              Mäklare
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          {/* Action buttons */}
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
        </div>
        <button className="md:hidden text-gray-700 focus:outline-none">
          {/* Hamburger icon for mobile */}
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
    </header>
  );
};

export default Header;
