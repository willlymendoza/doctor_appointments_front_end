import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import AddPatient from "./pages/Patients/AddPatient";
import ViewPatient from "./pages/Patients/ViewPatient";
import Users from "./pages/Users";
import Main from "./components/Main";
import Login from "./pages/Login";
import AddAppointment from "./pages/Appointments/AddAppointment";
import ViewAppointment from "./pages/Appointments/ViewAppointment";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />

        <Main>
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/appointments" exact component={Appointments}></Route>
            <Route
              path="/appointments/add"
              exact
              component={AddAppointment}
            ></Route>
            <Route
              path="/appointments/:id"
              exact
              component={ViewAppointment}
            ></Route>
            <Route path="/patients" exact component={Patients}></Route>
            <Route path="/patients/add" exact component={AddPatient}></Route>
            <Route path="/patients/:id" exact component={ViewPatient}></Route>
            <Route path="/users" exact component={Users}></Route>
            <Route path="/login" exact component={Login}></Route>
          </Switch>
        </Main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
