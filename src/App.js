import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Authentication/Login";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import SignUp from "./Components/Pages/Authentication/SignUp";
import RequireAuth from "./Components/Shared/RequireAuth";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Blog from "./Components/Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
        </Route>
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
