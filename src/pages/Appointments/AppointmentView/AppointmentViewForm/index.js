import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import Select from "react-select";
import moment from "moment";
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    setValue("patient_id", appointmentInfo.response.patient_id);
    setValue("doctor_id", appointmentInfo.response.doctor_id);
  }, [
    appointmentInfo.response.doctor_id,
    appointmentInfo.response.patient_id,
    setValue,
  ]);

  return (
    <div className="form-container">
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
                  isDisabled={disabledInput}
                  defaultValue={patientsList.filter(
                    (item) => item._id === appointmentInfo.response.patient_id
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
            <label>{t("doctor.label")}</label>
            <Controller
              name="doctor_id"
              control={control}
              render={() => (
                <Select
                  name="doctor_id"
                  isDisabled={disabledInput}
                  defaultValue={doctorsList.filter(
                    (item) => item._id === appointmentInfo.response.doctor_id
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
            <label>{t("observations.label")}</label>
            <textarea
              name="observations"
              disabled={disabledInput}
              defaultValue={appointmentInfo.response.observations}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.observations?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("date.label")}</label>
            <input
              type="date"
              name="appointment_date"
              disabled={disabledInput}
              defaultValue={moment(
                appointmentInfo.response.appointment_date
              ).format("yyyy-MM-DD")}
              ref={register}
            />
            <span className="form-error-message">
              {errors?.appointment_date?.message}
            </span>
          </div>
          <div className="form-group">
            <label>{t("hour.label")}</label>
            <input
              type="time"
              name="hour"
              disabled={disabledInput}
              defaultValue={appointmentInfo.response.hour}
              ref={register}
            />
            <span className="form-error-message">{errors?.hour?.message}</span>
          </div>

          {appointmentInfo.response.doctor_id ? (
            <div className="form-group button-container">
              {!disabledInput ? (
                <button
                  type="submit"
                  className="button button-right bg-warning-color"
                >
                  {t("save_changes.label")}
                </button>
              ) : (
                <button
                  type="button"
                  className="button button-right bg-warning-color"
                  onClick={handleEditClick}
                >
                  {t("edit.label")}
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </form>
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
