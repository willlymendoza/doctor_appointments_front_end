import React, { Fragment } from "react";
import NavBar from "../NavBar";
import Logo from "../Logo";
import { useSelector } from "react-redux";

import "./styles.scss";

const Header = () => {
  const isAuthenticated = useSelector(
    (store) => store.authData.isAuthenticated
  );

  return (
    <Fragment>
      <div className="header-container"></div>
      <header className="header-content">
        <Logo />
        {isAuthenticated ? <NavBar /> : ""}
      </header>
    </Fragment>
  );
};

export default Header;
