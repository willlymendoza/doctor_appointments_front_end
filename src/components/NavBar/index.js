import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogoutAction } from "../../redux/authDuck";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const NavBar = ({ handleClick, showMenu }) => {
  const { t } = useTranslation();
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
          {t("appointments.label")}
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/patients"
          onClick={handleClick}
        >
          {t("patients.label")}
        </NavLink>
        <NavLink to="/" onClick={handleLogout}>
          {t("logout.label")}
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
