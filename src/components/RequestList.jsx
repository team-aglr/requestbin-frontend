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
      {requests.length === 0 ? (
        <div className="bg-gray-200 rounded mx-4 px-6 text-center py-4">
          <p className="font-bold">No requests so far</p>
          <p className="mt-1">
            When your webhook sends requests to the URL above, they will appear
            here. Make sure to refresh the page.
          </p>
        </div>
      ) : (
        requests.map((request) => {
          return (
            <RequestItem
              key={request.id}
              request={request}
              uuid={uuid}
              assignActiveRequest={assignActiveRequest}
            />
          );
        })
      )}
    </div>
  );
}

export default RequestList;
