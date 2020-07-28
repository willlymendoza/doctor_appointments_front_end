import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import CardContainer from "../../../components/CardContainer";

const AppointmentsList = ({ appointmentsInfo }) => {
  return (
    <CardContainer title="Appointments" color="warning_color">
      <div className="list-container">
        {appointmentsInfo.map((item) => (
          <div key={item._id}>
            <span>{item.appointment_date}</span>
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

export default AppointmentsList;
