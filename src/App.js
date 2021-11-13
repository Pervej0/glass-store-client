import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Shop from "./Pages/Shop/Shop";
import PlaceOrder from "./Pages/Shop/Compo/Products/Compo/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavigationBar />
              <Home />
              <Footer />
            </Route>
            <Route path="/home">
              <NavigationBar />
              <Home />
              <Footer />
            </Route>
            <Route path="/shop">
              <NavigationBar />
              <Shop />
              <Footer />
            </Route>
            <PrivateRoute path="/product/:id">
              <NavigationBar />
              <PlaceOrder />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
              <Footer />
            </PrivateRoute>
            <Route path="/contact">
              <NavigationBar />
              <ContactUs />
              <Footer />
            </Route>
            <Route path="/login">
              <NavigationBar />
              <Login />
              <Footer />
            </Route>
            <Route path="/register">
              <NavigationBar />
              <Register />
              <Footer />
            </Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
