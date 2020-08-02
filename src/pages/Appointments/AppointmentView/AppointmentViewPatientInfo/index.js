import React from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import "./styles.scss";

const AppointmentViewPatientInfo = ({ patientInfo }) => {
  return (
    <CardContainer title="Patient Info" color="secondary_color">
      <div className="patient-info">
        <div>
          <label>Name: </label>
          <span>
            {patientInfo.first_name} {patientInfo.last_name}
          </span>
        </div>
        <div>
          <label>Personal Document ID: </label>
          <span>{patientInfo.personal_document_id}</span>
        </div>
        <div>
          <label>E-mail: </label>
          <span>{patientInfo.email}</span>
        </div>
        <div>
          <label>Phone Number: </label>
          <span>{patientInfo.phone_number}</span>
        </div>
        <div>
          <label>City: </label>
          <span>{patientInfo.city}</span>
        </div>
        <div>
          <label>Address: </label>
          <span>{patientInfo.address}</span>
        </div>
        <div>
          <label>Age: </label>
          <span>{patientInfo.age}</span>
        </div>
        <div>
          <label>Sex: </label>
          <span>{patientInfo.sex}</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default AppointmentViewPatientInfo;

AppointmentViewPatientInfo.propTypes = {
  patientInfo: PropTypes.object.isRequired,
};
