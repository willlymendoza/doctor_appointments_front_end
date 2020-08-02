import React from "react";
import CardContainer from "../../../../components/CardContainer";
import Select from "react-select";

const AppointmentAddForm = ({
  onSubmitForm,
  handleSelectChange,
  patientsList,
  doctorsList,
  handleSubmit,
  register,
  errors,
  control,
  Controller,
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
    <div className="form-container add-form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group full-width">
            <label>Patient</label>
            <Controller
              control={control}
              name="patient_id"
              render={() => (
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
              render={({ selectedDoctor }) => (
                <Select
                  name="doctor_id"
                  value={selectedDoctor}
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
            <textarea name="observations" ref={register} />
            <span className="form-error-message">
              {errors?.observations?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="appointment_date" ref={register} />
            <span className="form-error-message">
              {errors?.appointment_date?.message}
            </span>
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input type="time" name="hour" ref={register} />
            <span className="form-error-message">{errors?.hour?.message}</span>
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

export default AppointmentAddForm;
