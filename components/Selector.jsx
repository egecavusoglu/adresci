import React, { useEffect } from "react";
import Select from "./SelectItem";
import NumberInput from "./NumberInput";
import useStore from "store";

const Selector = ({ residences, blocks, ...props }) => {
  const residence = useStore((state) => state.residence);
  const setResidence = useStore((state) => state.setResidence);

  const block = useStore((state) => state.block);
  const setBlock = useStore((state) => state.setBlock);

  const flat = useStore((state) => state.flat);

  const setAddress = useStore((state) => state.setAddress);

  useEffect(() => {
    setAddress(`ADDRESS ${residence} ${block} ${flat}`);
  }, [residence, block, flat]);

  return (
    <div className="mx-auto bg-gray-50 w-5/6 rounded-lg border-2 border-gray-300 grid  grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-200">
      <Select
        value={residence}
        setValue={(e) => {
          setResidence(e);
          setBlock("");
        }}
        label="Residence"
        options={residences}
      />
      <Select
        value={block}
        setValue={setBlock}
        label="Block"
        options={blocks}
      />
      <NumberInput label="Apartment" />
    </div>
  );
};
export default Selector;
