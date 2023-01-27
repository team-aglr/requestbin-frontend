import React from "react";
import BinURL from "./BinURL";
import { Link } from "react-router-dom";
import { deleteBin } from "../services/bins";

import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";

function BinPreview({ uuid, isNew, id, binData, setLocalBins }) {
  const [deleteMenu, setdeleteMenu] = useState(false);

  async function remove(id, bins, setLocalBins) {
    await deleteBin(id);
    const selected = bins.filter((bin) => bin.id !== id);
    setLocalBins(selected);
  }

  return (
    <div className="max-w-2xl bg-white shadow-lg hover:shadow-xl rounded-md px-6 pt-4 pb-6 border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 mb-3 items-center">
          <Link
            to={`/${uuid}`}
            className="font-bold text-lg hover:text-blue-500 block"
          >
            #{uuid}
          </Link>
          {isNew ? (
            <div className="bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-lg px-2 text-sm flex items-center py-[6px]">
              <p className="text-white">New</p>
            </div>
          ) : null}
        </div>
        <div
          className="hover:bg-gray-200 p-2 rounded-full mb-2 hover:cursor-pointer relative"
          onClick={() => setdeleteMenu(true)}
        >
          <FiMoreVertical className="h-6 w-6 text-gray-500"></FiMoreVertical>
          {deleteMenu ? (
            <div className="absolute right-3 top-8 bg-white shadow-lg text-red-600 w-40 rounded-md px-4 py-2 border border-gray-300 z-10">
              <p onClick={() => remove(id, binData, setLocalBins)}>Delete</p>
            </div>
          ) : null}
        </div>
        <button
          tabIndex={-1}
          className={`${
            deleteMenu ? "block" : "hidden"
          } fixed inset-0 cursor-default bg-white/0`}
          onClick={() => setdeleteMenu(false)}
        ></button>
      </div>
      <BinURL uuid={uuid} />
    </div>
  );
}

export default BinPreview;
