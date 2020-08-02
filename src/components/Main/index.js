import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Main = ({ children }) => {
  return (
    <Fragment>
      <div className="main-container"></div>

      <main className="main-content">{children}</main>
    </Fragment>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
