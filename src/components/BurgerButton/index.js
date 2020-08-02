import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const BurgerButton = ({ handleClick, showMenu }) => {
  return (
    <div className="menu-btn" onClick={handleClick}>
      <span className={`menu-btn-burger ${showMenu ? "open" : ""}`}></span>
    </div>
  );
};

export default BurgerButton;

BurgerButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};
