import Home from "./pages/Home";
import BestSellerWeb from "./pages/BestSellerWeb";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/bestseller" element={<BestSellerWeb />} />
      </Routes>
    </>
  );
}

export default App;
