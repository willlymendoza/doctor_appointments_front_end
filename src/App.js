import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./hoc/ProtectedRoute";

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
import Error404 from "./components/Error404";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <Router>
            <Header />

            <Main>
              <Switch>
                <ProtectedRoute path="/" exact component={Dashboard} />
                <ProtectedRoute
                  path="/appointments"
                  exact
                  component={Appointments}
                />
                <ProtectedRoute
                  path="/appointments/add"
                  exact
                  component={AddAppointment}
                />
                <ProtectedRoute
                  path="/appointments/:id"
                  exact
                  component={ViewAppointment}
                />
                <ProtectedRoute path="/patients" exact component={Patients} />
                <ProtectedRoute
                  path="/patients/add"
                  exact
                  component={AddPatient}
                />
                <ProtectedRoute
                  path="/patients/:id"
                  exact
                  component={ViewPatient}
                />
                <ProtectedRoute path="/users" exact component={Users} />
                <Route path="/login" exact component={Login}></Route>
                <Route path="*" component={Error404}></Route>
              </Switch>
            </Main>

            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
