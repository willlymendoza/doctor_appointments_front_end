import React, { Fragment, useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import axios from "axios";

import "./styles.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AppointmentsListTable = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);

  const userToken = useSelector((store) => store.authData.userToken);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const getListAppointments = await axios.get(
          "http://localhost:5000/api/appointments",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getListAppointments.data;
        setAppointmentsData(result);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getAppointments();
  }, [userToken]);

  return (
    <Fragment>
      <NavLink to="/appointments/add">
        <button
          type="button"
          className="button bg-warning-color"
          style={{ marginBottom: 10 }}
        >
          New
        </button>
      </NavLink>
      <CardContainer title="List Of Appointments" color="warning_color">
        <div className="table-grid table-header">
          <label>Date</label>
          <label>Hour</label>
          <label>Patient</label>
          <label>Doctor</label>
          <label>Actions</label>
        </div>
        {appointmentsData.map((appointment) => (
          <div key={appointment._id} className="table-grid table-content">
            <span>{appointment.appointment_date}</span>
            <span>{appointment.hour}</span>
            <span>
              <label>Name: </label>
              {appointment.patient.first_name} {appointment.patient.last_name}
            </span>
            <span>
              {appointment.doctor.name} {appointment.doctor.last_name}
            </span>
            <span className="actions">
              <a href="/" className="edit_item">
                <i className="fas fa-edit"></i>
              </a>
              <a href="/" className="view_item">
                <i className="fas fa-eye"></i>
              </a>
            </span>
          </div>
        ))}
      </CardContainer>
      <CustomPagination
        color="warning"
        activePage={3}
        itemsCountPerPage={10}
        totalItemsCount={100}
        pageRangeDisplayed={5}
      />
    </Fragment>
  );
};

export default AppointmentsListTable;
