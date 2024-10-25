import { useState } from "react";
import React from "react";

interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <button className="toggle-btn p-2 bg-blue-500 text-white rounded" onClick={toggleCollapse}>
        {isOpen ? "Hide" : label}
      </button>
      {isOpen && <div className="content mt-4">{children}</div>}
    </div>
  );
};

export default Collapsible;
