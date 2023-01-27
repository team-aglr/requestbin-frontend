import React, { useEffect } from "react";

const testHeaders = {
  host: "https://collect.requestbin.com/akadsfdfe1",
  "content-length": 9627,
  "user-agent": "GitHub - Hookshot / b591633",
};

const testBody = {
  id: 9007199254741210,
  kind: "message_created",
  details: { notified_recipient_ids: [1007299144] },
  created_at: "2016-06-08T19:00:41.933Z",
  recording: {
    id: 9007199254741622,
    status: "active",
    created_at: "2016-07-20T00:21:41.446Z",
    updated_at: "2016-07-19T21:29:08.739Z",
    title: "Welcome to Basecamp!",
    inherits_status: true,
    type: "Message",
    url: "https://3.basecampapi.com/195539477/buckets/2085958498/messages/9007199254741622.json",
    app_url:
      "https://3.basecamp.com/195539477/buckets/2085958498/messages/9007199254741622",
    comments_count: 1,
    comments_url:
      "https://3.basecampapi.com/195539477/buckets/2085958498/recordings/9007199254741622/comments.json",
    parent: {
      id: 9007199254741434,
      title: "Message Board",
      type: "Message::Board",
      url: "https://3.basecampapi.com/195539477/buckets/2085958498/message_boards/9007199254741434.json",
      app_url:
        "https://3.basecamp.com/195539477/buckets/2085958498/message_boards/9007199254741434",
    },
    bucket: {
      id: 2085958498,
      name: "The Leto Laptop",
      type: "Project",
    },
    creator: {
      id: 1007299165,
      attachable_sgid:
        "BAh7CEkiCGdpZAY6BkVUSSIrZ2lkOi8vYmMzL1BlcnNvbi8xMDA3Mjk5MTY1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIg9hdHRhY2hhYmxlBjsAVEkiD2V4cGlyZXNfYXQGOwBUMA==--c28a27d0c490353fc1a5c2a50ce8eda0fae07370",
      name: "Matt Donahue",
      email_address: "matt@honchodesign.com",
      personable_type: "User",
      title: "Global Data Strategist",
      bio: null,
      created_at: "2016-07-19T21:27:47.654Z",
      updated_at: "2016-07-19T21:27:47.654Z",
      admin: false,
      owner: false,
      time_zone: "America/Chicago",
      avatar_url:
        "https://3.basecamp-static.com/195539477/people/BAhpBF0qCjw=--21513efb0cf6f64f7a0720b2c56ac6145ae6680c/avatar-64-x4",
    },
    content:
      "<div>Hey all, here are some high res shots of the laptop hardware that we can use. These are not public yet, so be careful with how you share them. We don't want any leaks at all with these images.</div>",
  },
  creator: {
    id: 1007299165,
    attachable_sgid:
      "BAh7CEkiCGdpZAY6BkVUSSIrZ2lkOi8vYmMzL1BlcnNvbi8xMDA3Mjk5MTY1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIg9hdHRhY2hhYmxlBjsAVEkiD2V4cGlyZXNfYXQGOwBUMA==--c28a27d0c490353fc1a5c2a50ce8eda0fae07370",
    name: "Matt Donahue",
    email_address: "matt@honchodesign.com",
    personable_type: "User",
    title: "Global Data Strategist",
    bio: null,
    created_at: "2016-07-19T21:27:47.654Z",
    updated_at: "2016-07-19T21:27:47.654Z",
    admin: false,
    owner: false,
    time_zone: "America/Chicago",
    avatar_url:
      "https://3.basecamp-static.com/195539477/people/BAhpBF0qCjw=--21513efb0cf6f64f7a0720b2c56ac6145ae6680c/avatar-64-x4",
  },
};

// Store the request data in a variable

// const [currRequest, setcurrRequest] = useState(0);

function RequestDetails() {
  // useEffect(() => {
  //   getRequestData();
  // });

  return (
    <div className="mx-auto bg-white shadow-lg rounded-md border-gray-200 max-h-[720px] w-[672px] mt-24 p-6">
      <div className="flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <h1 className="text-xl font-bold ">github.com</h1>
          <p className="text-gray-500">POST</p>
        </div>
        <p className="text-gray-500">Today · 5:05 EST</p>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg">Headers</h2>
        <div className="flex mt-3">
          <div>
            {Object.keys(testHeaders).map((key) => (
              <>
                <p className="mb-2 mt-2 font-semibold">{key}:</p>
                <hr />
              </>
            ))}
          </div>
          <div>
            {Object.keys(testHeaders).map((key) => {
              return (
                <>
                  <p className="mb-2 mt-2 font-mono text-gray-600 ml-[108px]">
                    {testHeaders[key]}
                  </p>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg mb-4">Body</h2>
        <div className="bg-gray-100 w-full h-[380px] rounded-md p-4 overflow-y-scroll">
          {JSON.stringify(testBody)}
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
