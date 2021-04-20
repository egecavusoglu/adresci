import React from "react";
import { DuplicateIcon } from "@heroicons/react/outline";
import { useToasts } from "react-toast-notifications";
const Copy = ({ copyPressed }) => {
  const { addToast } = useToasts();

  const copy = () => {
    copyPressed();
    addToast("Address Copied", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
      placement: "bottom-center",
    });
  };
  return (
    <button
      onClick={copy}
      className="flex flex-row items-center border-2 rounded px-3 py-1 shadow-sm"
    >
      <DuplicateIcon className="h-5 w-5 mr-1 text-gray-500" />
      <label className="text-gray-600 text-sm">Copy</label>
    </button>
  );
};
export default Copy;
