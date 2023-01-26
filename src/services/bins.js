import axios from "axios";

async function getBins() {
  const response = await axios.get("/api/bins");
  return response.data;
}

async function createBin() {
  const response = await axios.post("/api/bins");
  return response.data;
}

export { getBins, createBin };
