import React from "react";
//import RequestListItem from "./RequestListItem";
import { useEffect, useState } from "react";
import { getRequests } from "../services/requests";

function RequestList({ uuid }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function allRequests(bin_uuid) {
      const data = await getRequests(bin_uuid);
      setRequests(data);
    }
    allRequests(uuid);
  }, [uuid]);

  return (
    <>
    {requests.map((request) => {
        // RequestListItem doesn't exist yet, but can replace {request.http_method} below w/ the following chunk:
        //  <RequestListItem 
        //    method={request.http_method} 
        //    created_at={request.create_at} 
        //    uuid={request.uuid} 
        //    id={request.id}
        //  />
      return (
      <div key={request.id} className="border-x-2 border-y-2 px-3 py-3 border-slate-50">
        {request.http_method} {request.created_at} 
      </div>
      );
    })}
  </>
  );
}

export default RequestList;
