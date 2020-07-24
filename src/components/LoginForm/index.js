import React, { Fragment, useState } from "react";
import CardContainer from "../CardContainer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginAction } from "../../redux/authDuck";

import "./styles.scss";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axiosPostData(formData);
  };

  const axiosPostData = async (data) => {
    try {
      const result = await axios.post("http://localhost:5000/api/auth", {
        email: data.email,
        password: data.password,
      });

      dispatch(
        setLoginAction({
          user: result.data,
          userToken: result.headers.authorization,
        })
      );

      history.push("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      <div className="form-container login-container">
        <CardContainer title="Account Login" color="secondary_color">
          <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-group full-width">
              <label>E-mail</label>
              <input
                type="text"
                name="email"
                autoFocus
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
              />
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
