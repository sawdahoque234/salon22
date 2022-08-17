import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AllServices from "./Pages/AllServices/AllServices";
import AddService from "./Pages/Dashboard/AddService/AddService";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DefaultDashboard from "./Pages/Dashboard/Dashboard/DefaultDashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Orders from "./Pages/Orders/Orders";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/allServices" element={<AllServices />}></Route>
            <Route
              path={`/Order/:orderId`}
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                exact
                path="/dashboard"
                element={<DefaultDashboard />}
              ></Route>
              <Route path={`/dashboard/review`} element={<Review />}></Route>
              <Route path={`/dashboard/myOrder`} element={<MyOrder />}></Route>

              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addService`}
                element={
                  <AdminRoute>
                    <AddService />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageOrders`}
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageProducts`}
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
