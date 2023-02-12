import Home from "./pages/Home";
import BestSellerWeb from "./pages/BestSellerWeb";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import { Routes, Route, Link, NavLink } from "react-router-dom";

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
