import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Shop from "./Pages/Shop/Shop";
import PlaceOrder from "./Pages/Shop/Compo/Products/Compo/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/Dashboard/Compo/MyOrders/MyOrders";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Checkout from "./Pages/Dashboard/Compo/Checkout/Checkout";
import NotFound from "./Pages/NotFound/NotFound";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <PrivateRoute path="/shop">
              <Shop />
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/contact" component={ContactUs} />
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
