import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import ChangeLanguage from "components/ChangeLanguage";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>

      <ChangeLanguage />
    </div>
  );
};

export default Logo;
