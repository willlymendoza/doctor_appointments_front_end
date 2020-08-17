import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const AppointmentViewPatientInfo = ({ patientInfo }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <CardContainer title={t("patient_info.label")} color="secondary_color">
        <div className="patient-info">
          <div>
            <label>{t("name.label")}: </label>
            <span>
              {patientInfo.first_name} {patientInfo.last_name}
            </span>
          </div>
          <div>
            <label>{t("personal_id.label")}: </label>
            <span>{patientInfo.personal_document_id}</span>
          </div>
          <div>
            <label>{t("email.label")}: </label>
            <span>{patientInfo.email}</span>
          </div>
          <div>
            <label>{t("phone_number.label")}: </label>
            <span>{patientInfo.phone_number}</span>
          </div>
          <div>
            <label>{t("city.label")}: </label>
            <span>{patientInfo.city}</span>
          </div>
          <div>
            <label>{t("address.label")}: </label>
            <span>{patientInfo.address}</span>
          </div>
          <div>
            <label>{t("age.label")}: </label>
            <span>{patientInfo.age}</span>
          </div>
          <div>
            <label>{t("sex.label")}: </label>
            <span>{patientInfo.sex}</span>
          </div>
        </div>
      </CardContainer>
    </Fragment>
  );
};

export default AppointmentViewPatientInfo;

AppointmentViewPatientInfo.propTypes = {
  patientInfo: PropTypes.object.isRequired,
};
