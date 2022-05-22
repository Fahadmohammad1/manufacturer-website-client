import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase" element={<Purchase></Purchase>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
