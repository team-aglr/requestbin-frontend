import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bin from "./pages/Bin";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:uuid" element={<Bin />} />
      </Routes>
    </>
  );
}
