import React, { useEffect } from "react";
import Select from "./SelectItem";
import NumberInput from "./NumberInput";
import useStore from "store";

const Selector = ({ residenceData, residences, blocks, ...props }) => {
  const residence = useStore((state) => state.residence);
  const setResidence = useStore((state) => state.setResidence);

  const block = useStore((state) => state.block);
  const setBlock = useStore((state) => state.setBlock);

  const flat = useStore((state) => state.flat);

  const setAddress = useStore((state) => state.setAddress);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    handleAddress();
    setLoading(false);
  }, [residence, block, flat]);

  const handleAddress = async () => {
    setLoading(true);
    const isAllFilled = checkAllFilled(residence, block, flat);
    if (!isAllFilled) {
      setAddress("");
      return;
    }
    const generatedAddress = generateAddress(residence, block, flat);
    setAddress(generatedAddress);
  };

  const checkAllFilled = (residence, block, flat) => {
    return residence?.length > 0 && block?.length > 0 && flat?.length > 0;
  };

  const generateAddress = (residence, block, flat) => {
    let { template, blocks, blockCode } = residenceData[residence];
    if (blockCode) {
      const ind = blocks.indexOf(block);
      const bCode = blockCode[ind];
      template = template.replace("%*BLOCK-CODE*%", bCode);
    }
    template = template.replace("%*BLOCK*%", block);
    template = template.replace("%*FLAT*%", flat);
    return template;
  };

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
