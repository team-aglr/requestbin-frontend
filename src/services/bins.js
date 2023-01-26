import axios from "axios";

async function getBins() {
  const response = await axios.get("http://localhost:3001/api/bins");
  return response.data;
}

async function createBin() {
  const response = await axios.post("http://localhost:3001/api/bins");
  return response.data;
}

export { getBins, createBin };
