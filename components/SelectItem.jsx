import React from "react";
const SelectItem = ({ label, options, ...props }) => {
  return (
    <div className="flex-1 py-4 px-3 min-w-min">
      <p className="text-lg mb-3 text-indigo-900 ml-1 font-medium">{label}</p>
      <select className="text-base text-gray-600 px-0 bg-transparent p-2">
        {options?.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectItem;
