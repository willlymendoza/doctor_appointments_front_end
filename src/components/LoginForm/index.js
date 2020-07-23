import React, { Fragment } from "react";
import CardContainer from "../CardContainer";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

import "./styles.scss";

const LoginForm = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    /* getPatients(); */
    console.log("submited");
  };

  /* const getPatients = async () => {
    const rest = await axios.get("http://localhost:5000/api/patients");
    console.log(rest.data);
  }; */

  const result = useAxios("http://localhost:5000/api/patients");
  console.log(result);

  return (
    <Fragment>
      <div className="form-container login-container">
        <CardContainer title="Account Login" color="secondary_color">
          <form className="form" onSubmit={handleOnSubmit}>
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
