import React from "react";
import Select from "./SelectItem";
import NumberInput from "./NumberInput";
const OPTIONS = ["Maslak 1453"];
const BLOCKS = ["A-1", "A-2", "A-3", "A-4", "A-5", "B-1"];

const Selector = (props) => {
  return (
    <div className="mx-auto bg-gray-50 w-5/6 rounded-lg border-2 border-gray-300 grid  grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-200">
      <Select label="Residence" options={OPTIONS} />
      <Select label="Block" options={BLOCKS} />
      <NumberInput label="Apartment" />
    </div>
  );
};
export default Selector;
