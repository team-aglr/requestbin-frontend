import React from "react";
import BinPreview from "../components/BinPreview";
import { useEffect, useState } from "react";
import { getBins, createBin } from "../services/bins";
import { addCookie, findCookieBins } from "../services/cookies";

function Home() {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    async function allBins() {
      const data = await getBins();
      const cookieBins = findCookieBins(document, data);
      setBins(cookieBins);
    }
    allBins();
  }, []);

  async function create() {
    const data = await createBin();
    data.isNew = true;
    addCookie(document, data.uuid);
    setBins([data, ...bins]);
  }

  return (
    <div className="mx-auto max-w-2xl mt-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Bins</h1>
        <button
          className="bg-gradient-to-b from-primary-400 to-primary-500 text-white px-3 py-3 rounded-md hover:opacity-90"
          onClick={create}
        >
          + Create a bin
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {bins.length === 0 ? (
          <div className="bg-gray-400 text-center py-8 px-8 rounded-md">
            <h2 className="font-bold text-lg">No bins created ... so far</h2>
            <p className="mt-2">
              Each bin gives you a unique URL that you can provide to a webhook.
              Once the webhook sends a POST request, your bin will receive it
              and display the data on the screen.
            </p>
          </div>
        ) : (
          bins.map((bin) => {
            return (
              <BinPreview
                uuid={bin.uuid}
                key={bin.id}
                id={bin.id}
                isNew={bin.isNew}
                binData={bins}
                setLocalBins={setBins}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
