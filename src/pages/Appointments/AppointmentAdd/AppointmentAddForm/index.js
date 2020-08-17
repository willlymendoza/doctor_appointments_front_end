import React from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import Select from "react-select";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      <CardContainer title={t("appointment_info.label")} color="warning_color">
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group full-width">
            <label>{t("patient.label")}</label>
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
            <label>{t("doctor.label")}</label>
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
            <label>{t("observations.label")}</label>
            <textarea name="observations" ref={register} />
            <span className="form-error-message">
              {errors?.observations?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("date.label")}</label>
            <input type="date" name="appointment_date" ref={register} />
            <span className="form-error-message">
              {errors?.appointment_date?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("hour.label")}</label>
            <input type="time" name="hour" ref={register} />
            <span className="form-error-message">{errors?.hour?.message}</span>
          </div>

          <div className="form-group button-container">
            <button className="button button-right bg-warning-color">
              {t("add.label")}
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default AppointmentAddForm;

AppointmentAddForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  patientsList: PropTypes.array.isRequired,
  doctorsList: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  Controller: PropTypes.func.isRequired,
};
