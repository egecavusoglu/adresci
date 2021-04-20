import React from "react";
const SelectItem = ({ label, options, ...props }) => {
  return (
    <div className="flex-1 py-4 px-3 min-w-min w-full">
      <p className="text-lg mb-3 text-green-400 ml-0.5 font-medium">{label}</p>
      <select className="text-base text-gray-600 px-0 w-full bg-transparent p-2">
        {options?.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectItem;
