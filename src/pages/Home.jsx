import React from "react";
import BinPreview from "../components/BinPreview";

function Home() {
  return (
    <div className="mx-auto max-w-2xl mt-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Bins</h1>
        <button className="bg-gradient-to-b from-primary-400 to-primary-500 text-white px-3 py-3 rounded-md hover:opacity-90">
          + Create a bin
        </button>
      </div>
      <div className="mt-6">
        <BinPreview uuid="124zlfldfh32" />
      </div>
    </div>
  );
}

export default Home;
