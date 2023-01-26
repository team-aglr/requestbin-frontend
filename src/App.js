import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bin from "./pages/Bin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:uuid" element={<Bin />} />
    </Routes>
  );
}
