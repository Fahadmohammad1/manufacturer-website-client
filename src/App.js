import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Authentication/Login";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import SignUp from "./Components/Pages/Authentication/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase" element={<Purchase></Purchase>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
