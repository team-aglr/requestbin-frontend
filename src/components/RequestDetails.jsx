function RequestDetails({activeRequest}) {
  if (!activeRequest){
    return (<></>);
  }

  function cleanerDate(date) {
    return new Date(date).toGMTString();
  }

  const newRandomId = (function () {
    let num = 0;
    return (function() {
      return num +=0.13;
    });
  })();

  function renderHeaders(headers) {
    if (!headers){return}
    if (Object.keys(headers).length > 0) {
      return (
        <>
        <div>
            {Object.keys(headers).map(key => {
              // active property is for toggling which request is active, so don't expose that
              if (key !== "active") {
                return (
                  <div key={newRandomId()}>
                    <p className="mb-2 mt-2 font-semibold">{key}:</p>
                    <hr />
                  </div>
                );
              }
            })} 
          </div>
          <div>
            {Object.keys(headers).map(key => {
              if (key !== "active") {
                return (
                  <div key={newRandomId()}>
                    <p className="mb-2 mt-2 font-mono text-gray-600 ml-[108px]">
                      { 
                        key === "created_at" ? 
                          cleanerDate(headers[key]) : 
                          headers[key]
                      }
                    </p>
                    <hr />
                  </div>
                );
                };
            })}
          </div>
        </>
      )
    }
  }

  return (
    <div className="mx-auto bg-white shadow-lg rounded-md border-gray-200 max-h-[720px] w-[672px] mt-24 p-6">
      <div className="flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-gray-500">{activeRequest.http_method}</p>
        </div>
        <p className="text-gray-500">{cleanerDate(activeRequest.created_at)}</p>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg">Headers</h2>
        <div className="flex mt-3">
          {renderHeaders(activeRequest.headers)}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg mb-4">Body</h2>
        <div className="bg-gray-100 w-full h-[380px] rounded-md p-4 overflow-y-scroll">
         {activeRequest.body}
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
