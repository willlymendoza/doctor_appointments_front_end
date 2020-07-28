import React from "react";
import CardContainer from "../CardContainer";

const PatientAddForm = ({ handleOnSubmit, handleInputChange }) => {
  return (
    <div className="form-container">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input name="first_name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input name="last_name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input name="personal_document_id" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone_number" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input name="email" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input name="address" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input name="age" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input name="sex" onChange={handleInputChange} />
          </div>
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
