import React from "react";
import CardContainer from "../../components/CardContainer";
import Select from "react-select";
import moment from "moment";

const AppointmentViewForm = ({
  patientsList,
  doctorsList,
  appointmentInfo,
  handleOnSubmit,
  disabledInput,
  handleSelectChange,
  handleInputChange,
  handleEditClick,
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
        {appointmentInfo ? (
          <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-group full-width">
              <label>Patient</label>
              <Select
                name="patient_id"
                isDisabled={disabledInput}
                value={patientsList.filter(
                  (item) => item._id === appointmentInfo.patient_id
                )}
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
                isDisabled={disabledInput}
                value={doctorsList.filter(
                  (item) => item._id === appointmentInfo.doctor_id
                )}
                styles={customSelectStyles}
                options={doctorsList}
                onChange={handleSelectChange}
                isClearable
                maxMenuHeight={150}
                getOptionLabel={(option) =>
                  `${option.name} ${option.last_name}`
                }
                getOptionValue={(option) => option._id}
              />
            </div>
            <div className="form-group full-width">
              <label>Observations</label>
              <textarea
                name="observations"
                disabled={disabledInput}
                defaultValue={appointmentInfo.observations}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="appointment_date"
                disabled={disabledInput}
                defaultValue={moment(appointmentInfo.appointment_date).format(
                  "yyyy-MM-DD"
                )}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Hour</label>
              <input
                type="time"
                name="hour"
                disabled={disabledInput}
                defaultValue={appointmentInfo.hour}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group button-container">
              {!disabledInput ? (
                <button
                  type="submit"
                  className="button button-right bg-warning-color"
                >
                  save changes
                </button>
              ) : (
                <button
                  type="button"
                  className="button button-right bg-warning-color"
                  onClick={handleEditClick}
                >
                  edit
                </button>
              )}
            </div>
          </form>
        ) : (
          <h3>Loading...</h3>
        )}
      </CardContainer>
    </div>
  );
};

export default AppointmentViewForm;
