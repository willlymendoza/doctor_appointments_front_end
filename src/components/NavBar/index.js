import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink activeClassName="active-link" to="/" exact>
        Dashboard
      </NavLink>
      <NavLink activeClassName="active-link" to="/appointments" exact>
        Apponintments
      </NavLink>
      <NavLink activeClassName="active-link" to="/patients">
        Patients
      </NavLink>
      <NavLink activeClassName="active-link" to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
