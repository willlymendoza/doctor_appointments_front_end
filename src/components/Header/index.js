import React, { Fragment } from "react";
import "./styles.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header-container"></div>
      <header className="header-content">
        <div className="logo">
          <h1>Logo here</h1>
        </div>
        <nav className="nav-bar">
          <ul>
            <li>Appointments</li>
            <li>Patients</li>
            <li>Users</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
