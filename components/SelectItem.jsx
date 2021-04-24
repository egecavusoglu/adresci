import React from "react";
const SelectItem = ({ label, options, value = "", setValue, ...props }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex-1 py-4 px-3 min-w-min w-full">
      <p className="mb-3 ml-0.5 header">{label}</p>
      <select
        value={value || ""}
        onChange={onChange}
        className="text-base text-gray-600 px-0 w-full bg-transparent p-2"
      >
        <option value="" disabled>
          Select
        </option>
        {options?.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectItem;
