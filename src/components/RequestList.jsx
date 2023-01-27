import React from "react";
//import RequestListItem from "./RequestListItem";
import { useEffect, useState } from "react";
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
      if (request.id === activeRequest) {
        return { ...request, active: true };
      } else {
        return { ...request, active: false };
      }
    });
    setRequests(updatedRequests);
  }, [activeRequest]);

  console.log(requests);
  return (
    <div className="space-y-1">
      {requests.map((request) => {
        return (
          <RequestItem
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
