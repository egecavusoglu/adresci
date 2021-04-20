import React from "react";
const SelectItem = ({ label, options, ...props }) => {
  return (
    <div className="flex-1 py-4 px-3 min-w-min w-full">
      <p className="mb-3 ml-0.5 header">{label}</p>
      <select className="text-base text-gray-600 px-0 w-full bg-transparent p-2">
        {options?.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectItem;
