import React from "react";
import useStore from "store";
const NumberInput = ({ label, onChangeFlat, ...props }) => {
  const flat = useStore((state) => state.flat);
  const setFlat = useStore((state) => state.setFlat);

  const onChangeText = (e) => {
    setFlat(e.target.value);
  };
  return (
    <div className="flex-1 py-4 px-3 min-w-min w-full">
      <p className="header mb-3 ml-0.5">{label}</p>
      <input
        value={flat}
        onChange={onChangeText}
        type="text"
        placeholder="Flat Number"
        className="mx-1 py-2 placeholder-blueGray-300 text-gray-600 relative bg-transparent text-sm border-b-0  outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
};
export default NumberInput;
