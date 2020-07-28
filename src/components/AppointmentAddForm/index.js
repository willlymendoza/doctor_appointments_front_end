import React from "react";
import CardContainer from "../CardContainer";
import Select from "react-select";

const AppointmentForm = ({
  handleOnSubmit,
  handleInputChange,
  handleSelectChange,
  patientsList,
  doctorsList,
}) => {
  const customSelectStyles = {
    valueContainer: () => ({
      height: 37,
      paddingLeft: 10,
    }),
    input: () => ({
      margin: "auto 0",
    }),
  };
  return (
    <div className="form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-group full-width">
            <label>Patient</label>
            <Select
              name="patient_id"
              styles={customSelectStyles}
              options={patientsList}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              getOptionValue={(option) => option._id}
            />
          </div>
          <div className="form-group full-width">
            <label>Doctor</label>
            <Select
              name="doctor_id"
              styles={customSelectStyles}
              options={doctorsList}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) => `${option.name} ${option.last_name}`}
              getOptionValue={(option) => option._id}
            />
          </div>
          <div className="form-group full-width">
            <label>Observations</label>
            <textarea name="observations" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="appointment_date"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input type="time" name="hour" onChange={handleInputChange} />
          </div>

          <div className="form-group button-container">
            <button className="button button-right bg-warning-color">
              add
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default AppointmentForm;
