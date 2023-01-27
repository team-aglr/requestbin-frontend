import React from "react";
import BinURL from "./BinURL";
import { Link } from "react-router-dom";
import { deleteBin } from "../services/bins";
import { BsFillTrashFill } from "react-icons/bs";

function BinPreview({ uuid, isNew, id, binData, setLocalBins }) {

  async function remove(id, bins, setLocalBins) {
    await deleteBin(id);
    const selected = bins.filter(bin => bin.id !== id);
    setLocalBins(selected);
  }

  return (
    <div className="max-w-2xl bg-white shadow-lg hover:shadow-xl rounded-md px-6 pt-4 pb-6 border-gray-100">
      <div className="flex gap-2 mb-3">
        <Link
          to={`/${uuid}`}
          className="font-bold text-lg hover:text-blue-500 block"
        >
          #{uuid}
        </Link>
        {isNew ? (
          <div className="bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-lg px-2 text-sm flex items-center max-h-8">
            <p className="text-white">New</p>
          </div>
        ) : null}
        <button >
          < BsFillTrashFill 
              size="2em" 
              onClick={() => remove(id, binData, setLocalBins)}
          />
        </button>
      </div>
      <BinURL uuid={uuid} />
    </div>
  );
}

export default BinPreview;
