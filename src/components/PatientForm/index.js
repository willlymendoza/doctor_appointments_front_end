import React from "react";
import CardContainer from "../../components/CardContainer";

const PatientForm = ({ buttonText }) => {
  return (
    <div className="form-container">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form">
          <div className="form-group">
            <label>First Name</label>
            <input name="first_name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input name="last_name" />
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input name="personal_document_id" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone_number" />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input name="email" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input name="address" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input name="age" />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input name="sex" />
          </div>
          <div className="form-group button-container">
            <button
              type="submit"
              className="button button-right bg-secondary-color"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientForm;
