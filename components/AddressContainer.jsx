import React from "react";
import Copy from "./CopyButton";

const AddressContainer = ({ address, copy, ...props }) => {
  return (
    <div className="max-w-2xl w-5/6 mx-auto ">
      <p className="ml-2 mb-3 header">Address</p>
      <div className="border-2 w-full py-8 px-6 rounded">
        <p className="text-base text-gray-600">{address}</p>
      </div>
      <div className="w-full py-3 flex justify-center">
        <Copy copyPressed={() => copy()} />
      </div>
    </div>
  );
};
export default AddressContainer;
