import axios from "axios";

// app.use("/api/bins/:uuid/requests", requestController);

async function getRequests(uuid) {
  const response = await axios.get(`/api/bins/${uuid}/requests`);
  return response.data;
}

async function requestById(uuid, requestId) {
  const response = await axios.get(`/api/bins/${uuid}/requests/${requestId}`);
  return response.data;
}

export { getRequests, requestById };