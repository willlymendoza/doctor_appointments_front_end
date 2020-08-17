import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const LoginForm = ({
  handleSubmit,
  onSubmitForm,
  register,
  errors,
  requestError,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="form-container login-container">
        <CardContainer title="Account Login" color="secondary_color">
          <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form-group full-width">
              <label>E-mail</label>
              <input
                type="text"
                name="email"
                autoFocus
                defaultValue="demouser@doctorappointments.com"
                ref={register}
              />
              <span className="form-error-message">
                {errors?.email?.message}
              </span>
            </div>
            <div className="form-group full-width">
              <label>{t("password.label")}</label>
              <input
                type="password"
                name="password"
                defaultValue="12345678"
                ref={register}
              />
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  requestError: PropTypes.string.isRequired,
};
