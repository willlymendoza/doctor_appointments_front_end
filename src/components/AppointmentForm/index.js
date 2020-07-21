import React from "react";
import CardContainer from "../../components/CardContainer";
import "./styles.scss";

const AppointmentForm = () => {
  return (
    <div className="appointment-form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        <form className="form">
          <div className="form-group full-width">
            <label>Patient</label>
            <select name="patient">
              <option value="0">Dr. Jhon Doe</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label>Doctor</label>
            <select name="doctor">
              <option value="0">Dr. Jhon Doe</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label>Observations</label>
            <textarea name="personal_document_id" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="phone_number" />
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input type="time" name="email" />
          </div>

          <div className="submitButton">
            <button type="submit">Add</button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default AppointmentForm;
