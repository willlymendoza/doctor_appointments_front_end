import React from "react";
import CardContainer from "../CardContainer";

const PatientAddForm = ({
  onSubmitForm,
  register,
  handleSubmit,
  errors,
  requestError,
}) => {
  return (
    <div className="form-container patient-form add-form-container">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
            <label>First Name</label>
            <input name="first_name" ref={register} />
            <span className="form-error-message">
              {errors?.first_name?.message}
            </span>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input name="last_name" ref={register} />
            <span className="form-error-message">
              {errors?.last_name?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input name="personal_document_id" ref={register} />
            <span className="form-error-message">
              {errors?.personal_document_id?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone_number" ref={register} />
            <span className="form-error-message">
              {errors?.phone_number?.message}
            </span>
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input name="email" ref={register} />
            <span className="form-error-message">{errors?.email?.message}</span>
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" ref={register} />
            <span className="form-error-message">{errors?.city?.message}</span>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input name="address" ref={register} />
            <span className="form-error-message">
              {errors?.address?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input name="age" ref={register} />
            <span className="form-error-message">{errors?.age?.message}</span>
          </div>
          <div className="form-group">
            <label>Sex (m, f)</label>
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
              add
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientAddForm;
