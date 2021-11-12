import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import LoginUi from "./pages/Login/LoginUi/LoginUi";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./component/PrivateRoute";
import AllServices from "./pages/Services/AllServices";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder/PlaceOrder";
import MyOrder from "./pages/MyOrder/MyOrder";
import Payment from "./pages/Payment/Payment";
import AddReview from "./pages/AddReview/AddReview";
import Register from "./pages/Register/Register";
import ManageAllOrfer from "./pages/Admin/ManageAllOrder/ManageAllOrfer";
import AddNewService from "./pages/Admin/AddNewService/AddNewService";
import MakeAdmin from "./pages/Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "./pages/Admin/AdminRoute/AdminRoute";
import ManageAllProduct from "./pages/Admin/ManageAllProducts/ManageAllProduct";
import AllReviews from "./pages/Admin/ManageReviews/AllReviews";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LoginUi></LoginUi>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <AdminRoute path="/manageall">
              <ManageAllOrfer></ManageAllOrfer>
            </AdminRoute>
            <Route path="/packages">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <AdminRoute path="/addservice">
              <AddNewService></AddNewService>
            </AdminRoute>
            <AdminRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/mreviews">
              <AllReviews></AllReviews>
            </AdminRoute>
            <AdminRoute path="/mproducts">
              <ManageAllProduct></ManageAllProduct>
            </AdminRoute>
            <PrivateRoute path="/placeorder/:pakId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
