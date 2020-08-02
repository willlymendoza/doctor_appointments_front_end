import React from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";

const PatientViewForm = ({
  patientInfo,
  onSubmitForm,
  disabledInput,
  handleEditClick,
  register,
  handleSubmit,
  errors,
  requestError,
}) => {
  return (
    <div className="form-container patient-form">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="first_name"
              disabled={disabledInput}
              defaultValue={patientInfo.first_name}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.first_name?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              disabled={disabledInput}
              defaultValue={patientInfo.last_name}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.last_name?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input
              name="personal_document_id"
              disabled={disabledInput}
              defaultValue={patientInfo.personal_document_id}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.personal_document_id?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone_number"
              disabled={disabledInput}
              defaultValue={patientInfo.phone_number}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.phone_number?.message}
            </span>
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              name="email"
              disabled={disabledInput}
              defaultValue={patientInfo.email}
              ref={register}
            />
            <span className="form-error-message">{errors?.email?.message}</span>
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              disabled={disabledInput}
              defaultValue={patientInfo.city}
              ref={register}
            />
            <span className="form-error-message">{errors?.city?.message}</span>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              disabled={disabledInput}
              defaultValue={patientInfo.address}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.address?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              disabled={disabledInput}
              defaultValue={patientInfo.age}
              ref={register}
            />
            <span className="form-error-message">{errors?.age?.message}</span>
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input
              name="sex"
              disabled={disabledInput}
              defaultValue={patientInfo.sex}
              ref={register}
            />
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
            {!disabledInput ? (
              <button
                type="submit"
                className="button button-right bg-secondary-color"
              >
                save changes
              </button>
            ) : (
              <button
                type="button"
                className="button button-right bg-secondary-color"
                onClick={handleEditClick}
              >
                edit
              </button>
            )}
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientViewForm;

PatientViewForm.propTypes = {
  patientInfo: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  requestError: PropTypes.string.isRequired,
};
