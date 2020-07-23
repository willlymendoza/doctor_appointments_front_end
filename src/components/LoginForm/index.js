import React, { Fragment } from "react";
import CardContainer from "../CardContainer";
import "./styles.scss";

const LoginForm = () => {
  return (
    <Fragment>
      <div className="form-container">
        <CardContainer title="Account Login" color="secondary_color">
          <form className="form">
            <div className="form-group full-width">
              <label>E-mail</label>
              <input type="text" name="email" />
            </div>
            <div className="form-group full-width">
              <label>Password</label>
              <input type="password" name="password" />
            </div>

            <div className="form-group button-container">
              <button className="button button-right bg-secondary-color">
                Login
              </button>
            </div>
          </form>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default LoginForm;
