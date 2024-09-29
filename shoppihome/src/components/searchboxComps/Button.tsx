import React, { useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className = "", children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md focus:outline-none ${
        active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
      } hover:bg-blue-400`}
    >
      {children}
    </button>
  );
};

export default Button;
