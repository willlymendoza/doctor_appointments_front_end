import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogoutAction } from "../../redux/authDuck";
import "./styles.scss";

const NavBar = ({ handleClick, showMenu }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogoutAction());
  };

  return (
    <Fragment>
      <nav className={`nav-bar ${showMenu ? "open" : ""}`}>
        <NavLink
          activeClassName="active-link"
          to="/"
          exact
          onClick={handleClick}
        >
          Dashboard
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/appointments"
          onClick={handleClick}
        >
          Apponintments
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/patients"
          onClick={handleClick}
        >
          Patients
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/users"
          onClick={handleClick}
        >
          Users
        </NavLink>
        <NavLink to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default NavBar;

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};
