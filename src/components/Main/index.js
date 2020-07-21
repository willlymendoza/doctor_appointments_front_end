import React, { Fragment } from "react";
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
