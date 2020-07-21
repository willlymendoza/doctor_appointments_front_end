import React, { Fragment } from "react";
import NavBar from "../NavBar";
import Logo from "../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header-container"></div>
      <header className="header-content">
        <Logo />
        <NavBar />
      </header>
    </Fragment>
  );
};

export default Header;
