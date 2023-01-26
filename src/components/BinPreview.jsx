import React from "react";
import BinURL from "./BinURL";
import { Link } from "react-router-dom";

function BinPreview({ uuid }) {
  return (
    <div className="max-w-2xl bg-white shadow-lg rounded-md px-6 pt-4 pb-6 border-gray-100">
      <Link
        to={`/${uuid}`}
        className="font-bold text-lg mb-2 hover:text-blue-500 block"
      >
        #{uuid}
      </Link>
      <BinURL uuid={uuid} />
    </div>
  );
}

export default BinPreview;
