import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import Select from "react-select";
import moment from "moment";

const AppointmentViewForm = ({
  patientsList,
  doctorsList,
  appointmentInfo,
  onSubmitForm,
  disabledInput,
  handleSelectChange,
  handleEditClick,
  handleSubmit,
  register,
  errors,
  control,
  Controller,
  setValue,
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

  useEffect(() => {
    setValue("patient_id", appointmentInfo.patient_id);
    setValue("doctor_id", appointmentInfo.doctor_id);
  }, [appointmentInfo.doctor_id, appointmentInfo.patient_id, setValue]);

  return (
    <div className="form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        {appointmentInfo ? (
          <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form-group full-width">
              <label>Patient</label>
              <Controller
                control={control}
                name="patient_id"
                render={() => (
                  <Select
                    name="patient_id"
                    isDisabled={disabledInput}
                    defaultValue={patientsList.filter(
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
                )}
              />
              <span className="form-error-message">
                {errors?.patient_id?.message}
              </span>
            </div>
            <div className="form-group full-width">
              <label>Doctor</label>
              <Controller
                name="doctor_id"
                control={control}
                render={() => (
                  <Select
                    name="doctor_id"
                    isDisabled={disabledInput}
                    defaultValue={doctorsList.filter(
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
                )}
              />
              <span className="form-error-message">
                {errors?.doctor_id?.message}
              </span>
            </div>
            <div className="form-group full-width">
              <label>Observations</label>
              <textarea
                name="observations"
                disabled={disabledInput}
                defaultValue={appointmentInfo.observations}
                ref={register}
              />
              <span className="form-error-message">
                {errors?.observations?.message}
              </span>
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
                ref={register}
              />
              <span className="form-error-message">
                {errors?.appointment_date?.message}
              </span>
            </div>
            <div className="form-group">
              <label>Hour</label>
              <input
                type="time"
                name="hour"
                disabled={disabledInput}
                defaultValue={appointmentInfo.hour}
                ref={register}
              />
              <span className="form-error-message">
                {errors?.hour?.message}
              </span>
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

AppointmentViewForm.propTypes = {
  patientsList: PropTypes.array.isRequired,
  doctorsList: PropTypes.array.isRequired,
  appointmentInfo: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  Controller: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
