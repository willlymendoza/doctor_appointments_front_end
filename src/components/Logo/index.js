import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <h1>Logo here</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
