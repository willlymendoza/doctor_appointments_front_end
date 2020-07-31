import React, { Fragment } from "react";
import CardContainer from "../../../components/CardContainer";

import "./styles.scss";

const LoginForm = ({
  handleSubmit,
  onSubmitForm,
  register,
  errors,
  requestError,
}) => {
  return (
    <Fragment>
      <div className="form-container login-container">
        <CardContainer title="Account Login" color="secondary_color">
          <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form-group full-width">
              <label>E-mail</label>
              <input type="text" name="email" autoFocus ref={register} />
              <span className="form-error-message">
                {errors?.email?.message}
              </span>
            </div>
            <div className="form-group full-width">
              <label>Password</label>
              <input type="password" name="password" ref={register} />
              <span className="form-error-message">
                {errors?.password?.message}
              </span>
            </div>

            {requestError ? (
              <span className="form-error-message form-group full-width">
                {requestError}
              </span>
            ) : (
              ""
            )}

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
