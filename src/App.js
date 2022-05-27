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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Components/Pages/Dashboard/Payment";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Components/Shared/RequireAdmin";
import ManageAllProducts from "./Components/Pages/Dashboard/ManageAllProducts";
import ManageAllOrders from "./Components/Pages/Dashboard/ManageAllOrders";
import useAdmin from "./Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Loading from "./Components/Shared/Loading";

function App() {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if ((loading, adminLoading)) {
    return <Loading />;
  }
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
          <Route
            index
            element={!admin ? <MyOrders></MyOrders> : <MakeAdmin></MakeAdmin>}
          />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          />
          <Route
            path="manageAllProducts"
            element={
              <RequireAdmin>
                <ManageAllProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
