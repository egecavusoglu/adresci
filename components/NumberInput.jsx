import React from "react";
const NumberInput = ({ label, ...props }) => {
  return (
    <div className="flex-1 py-4 px-3 min-w-min">
      <p className="text-lg mb-3 text-green-400 ml-0.5 font-medium">{label}</p>
      <input
        type="text"
        placeholder="Flat Number"
        className="px-3 py-2 placeholder-blueGray-300 text-gray-600 relative bg-transparent text-sm border-b-2  outline-none focus:outline-none focus:ring min-w-12 w-min"
      />
    </div>
  );
};
export default NumberInput;
