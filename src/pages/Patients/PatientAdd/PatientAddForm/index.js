import React from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import { useTranslation } from "react-i18next";

const PatientAddForm = ({
  onSubmitForm,
  register,
  handleSubmit,
  errors,
  requestError,
}) => {
  const { t } = useTranslation();
  return (
    <div className="form-container patient-form add-form-container">
      <CardContainer title={t("patient_info.label")} color="secondary_color">
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
            <label>{t("first_name.label")}</label>
            <input name="first_name" ref={register} />
            <span className="form-error-message">
              {errors?.first_name?.message}
            </span>
          </div>

          <div className="form-group">
            <label>{t("last_name.label")}</label>
            <input name="last_name" ref={register} />
            <span className="form-error-message">
              {errors?.last_name?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("personal_id.label")}</label>
            <input name="personal_document_id" ref={register} />
            <span className="form-error-message">
              {errors?.personal_document_id?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("phone_number.label")}</label>
            <input name="phone_number" ref={register} />
            <span className="form-error-message">
              {errors?.phone_number?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("email.label")}</label>
            <input name="email" ref={register} />
            <span className="form-error-message">{errors?.email?.message}</span>
          </div>
          <div className="form-group">
            <label>{t("city.label")}</label>
            <input name="city" ref={register} />
            <span className="form-error-message">{errors?.city?.message}</span>
          </div>
          <div className="form-group">
            <label>{t("address.label")}</label>
            <input name="address" ref={register} />
            <span className="form-error-message">
              {errors?.address?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("age.label")}</label>
            <input name="age" ref={register} />
            <span className="form-error-message">{errors?.age?.message}</span>
          </div>
          <div className="form-group">
            <label>{t("sex.label")} (m, f)</label>
            <input name="sex" ref={register} />
            <span className="form-error-message">{errors?.sex?.message}</span>
          </div>

          {requestError ? (
            <span className="form-error-message form-group full-width">
              {requestError}
            </span>
          ) : (
            ""
          )}

          <div className="form-group button-container">
            <button
              type="submit"
              className="button button-right bg-secondary-color"
            >
              {t("add.label")}
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientAddForm;

PatientAddForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  requestError: PropTypes.string.isRequired,
};
