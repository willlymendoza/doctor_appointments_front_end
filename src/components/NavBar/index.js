import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogoutAction } from "../../redux/authDuck";
import "./styles.scss";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogoutAction());
  };

  return (
    <nav className="nav-bar">
      <NavLink activeClassName="active-link" to="/" exact>
        Dashboard
      </NavLink>
      <NavLink activeClassName="active-link" to="/appointments">
        Apponintments
      </NavLink>
      <NavLink activeClassName="active-link" to="/patients">
        Patients
      </NavLink>
      <NavLink activeClassName="active-link" to="/users">
        Users
      </NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
};

export default NavBar;
