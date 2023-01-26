import React from "react";
import { useState } from "react";

function BinURL({ uuid }) {
  const [copyURL, setCopyURL] = useState(false);

  const copy = () => {
    const url = `${process.env.REACT_APP_HOST}/${uuid}`;
    const textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    // Change the state to true
    setCopyURL(true);

    // Reset the state to false after two seconds
    setTimeout(() => {
      setCopyURL(false);
    }, 2000);
  };

  return (
    <div className="flex border border-gray-300 shadow-sm rounded-md px-4 py-3 justify-between">
      <p>
        {process.env.REACT_APP_HOST}/{uuid}
      </p>
      <button
        className="text-primary-500 font-medium hover:primary-400"
        onClick={copy}
      >
        {copyURL ? "copied!" : "copy"}
      </button>
    </div>
  );
}

export default BinURL;
