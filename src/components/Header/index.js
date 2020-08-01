import React, { Fragment, useState } from "react";
import NavBar from "../NavBar";
import Logo from "../Logo";
import { useSelector } from "react-redux";

import "./styles.scss";
import BurgerButton from "../BurgerButton";

const Header = () => {
  const isAuthenticated = useSelector(
    (store) => store.authData.isAuthenticated
  );

  const [showMenu, setShowMenud] = useState(false);

  const handleClick = () => {
    setShowMenud(!showMenu);
  };

  return (
    <Fragment>
      <div className="header-container"></div>
      <header className="header-content">
        <Logo />
        {isAuthenticated ? (
          <Fragment>
            <NavBar handleClick={handleClick} showMenu={showMenu} />
            <BurgerButton handleClick={handleClick} showMenu={showMenu} />
          </Fragment>
        ) : (
          ""
        )}
      </header>
    </Fragment>
  );
};

export default Header;
