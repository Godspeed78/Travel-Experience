import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import axios from "axios"
import Home from "./components/Home";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginRegister from "./components/Login_Register"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Booking from "./components/Booking"
import NewTest from "./components/newTest"


class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        {/* <Home/> */}

        <BrowserRouter>
          <Route exact path="/" component={Home}>
            <Redirect to="/Home" />
          </Route>

          <Switch>
            <Route path={"/Home"} component={Home} />
            <Route path={"/SignIn_Register"} component={LoginRegister} />
            <Route path={"/AboutUs"} component={AboutUs} />
            <Route path={"/ContactUs"} component={ContactUs} />
            <Route path={"/Booking"} component={Booking} />
            <Route path={"/NewTest"} component={NewTest} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
