import React from "react";
//import RequestListItem from "./RequestListItem";
import { useEffect } from "react";
import RequestItem from "./RequestItem";

function RequestList({
  uuid,
  assignActiveRequest,
  activeRequest,
  requests,
  setRequests,
}) {
  useEffect(() => {
    const updatedRequests = requests.map((request) => {
      if (request.id === activeRequest.id) {
        return { ...request, active: true };
      } else {
        return { ...request, active: false };
      }
    });
    setRequests(updatedRequests);
  }, [activeRequest]);

  return (
    <div className="space-y-1">
      {requests.map((request) => {
        return (
          <RequestItem
            key={request.id}
            request={request}
            uuid={uuid}
            assignActiveRequest={assignActiveRequest}
          />
        );
      })}
    </div>
  );
}

export default RequestList;
