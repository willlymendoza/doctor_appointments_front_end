import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Users from "./pages/Users";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/appointments" exact component={Appointments}></Route>
          <Route path="/patients" exact component={Patients}></Route>
          <Route path="/users" exact component={Users}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
