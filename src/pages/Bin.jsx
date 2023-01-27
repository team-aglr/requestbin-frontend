import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BinURL from "../components/BinURL";
import RequestList from "../components/RequestList";
import RequestDetails from "../components/RequestDetails";
import { useEffect, useState } from "react";
import { getRequests, requestById } from "../services/requests";
import { addCookie } from "../services/cookies";

function Bin() {
  const [activeRequest, setActiveRequest] = useState(null);
  const [requests, setRequests] = useState([]);
  const { uuid } = useParams();
  addCookie(document, uuid);

  useEffect(() => {
    async function retrieveRequests() {
      let data = await getRequests(uuid);
      for (const req of data) {
        const { body, headers } = await requestById(uuid, req.id);
        req.body = body;
        req.headers = headers;
      }

      console.log(data)
      data.forEach((req) => (req.active = false));
      if (data.length > 0) {
        data[0].active = true;
      }
      data.length > 0 ? setActiveRequest(data[0]) : setActiveRequest(null);
      setRequests(data);
    }
    retrieveRequests();
  }, [uuid]);
  // Need to store the active requestID here

  function assignActiveRequest(requestId) {
    setActiveRequest(requestId);
  }

  return (
    <div className="flex">
      <div className=" h-screen bg-white shadow-sm border-r-gray-200 w-96">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 text-md mt-5 mb-4 block ml-4"
        >
          Back to all bins
        </Link>
        <hr className="mt-3" />
        <div className="mt-4 mx-4">
          <h2 className="font-bold mb-2">Your Bin</h2>
          <BinURL uuid={uuid} />
        </div>
        <div className="mt-6">
          <h2 className="font-bold mb-2 mx-4">All Requests</h2>
          <RequestList
            uuid={uuid}
            requests={requests}
            assignActiveRequest={assignActiveRequest}
            activeRequest={activeRequest}
            setRequests={setRequests}
          />
        </div>
      </div>
      <RequestDetails
        activeRequest={activeRequest}
      />
    </div>
  );
}

export default Bin;
