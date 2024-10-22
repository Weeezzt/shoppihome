import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div className="mt-6">
      <button
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={onClick}
      >
        Hitta bostäder till salu
      </button>
    </div>
  );
};

export default SubmitButton;
