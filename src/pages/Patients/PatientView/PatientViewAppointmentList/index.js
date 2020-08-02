import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import CardContainer from "../../../../components/CardContainer";
import dateService from "../../../../services/dateService";

const PatientViewAppointmentList = ({ appointmentsInfo }) => {
  return (
    <CardContainer title="Appointments" color="warning_color">
      <div className="list-container">
        {appointmentsInfo.map((item) => (
          <div key={item._id}>
            <span>{dateService(item.appointment_date)}</span>
            <span>{item.hour}</span>
            <span>
              <Link to={`/appointments/${item._id}`}>
                <i className="fas fa-eye"></i>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default PatientViewAppointmentList;
