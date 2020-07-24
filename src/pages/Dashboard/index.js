import React, { Fragment, useState, useEffect } from "react";
import CardContainer from "../../components/CardContainer";
import DashBoardCard from "../../components/DashBoardCard";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [recentAppointments, setRecentAppointments] = useState([]);
  const { recentPatients, setRecentPatients } = useState([]);

  const userToken = useSelector((store) => store.authData.userToken);

  useEffect(() => {
    const getRecentAppointments = async () => {
      try {
        const getAppointmentsList = await axios.get(
          "http://localhost:5000/api/appointments/recent/5",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getAppointmentsList.data;
        setRecentAppointments(result);
      } catch (error) {}
    };
    getRecentAppointments();
  }, [userToken]);

  return (
    <Fragment>
      <PageTitle title="DASHBOARD" />

      <div className="dashboard-cards">
        <DashBoardCard title="Patients" color="warning_color" quantity={55} />
        <DashBoardCard title="Appointments" color="info_color" quantity={45} />
        <DashBoardCard
          title="Today's Appointments"
          color="secondary_color"
          quantity={6}
        />
      </div>

      <div className="dashboard-tables">
        <CardContainer
          title="Recent Registered Appointments"
          color="secondary_color"
        >
          <div className="table-grid table-header">
            <label>Date</label>
            <label>Hour</label>
            <label>Patient</label>
            <label>Doctor</label>
          </div>
          {recentAppointments.map((appointment) => (
            <div className="table-grid table-content">
              <span>{appointment.appointment_date}</span>
              <span>{appointment.hour}</span>
              <span>
                <label>Name: </label>
                {appointment.patient.first_name} {appointment.patient.last_name}
              </span>
              <span>
                {appointment.doctor.name} {appointment.doctor.last_name}
              </span>
            </div>
          ))}
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <button className="button button-right bg-secondary-color">
              view full list
            </button>
          </div>
        </CardContainer>
        <CardContainer title="Recent Registered Patients" color="warning_color">
          <div className="table-grid table-header">
            <label>Patient</label>
            <label>Date</label>
            <label>Hour</label>
          </div>
          <div className="table-grid table-content">
            <span>
              <label>Name: </label>Willian Wosbely Mendoza Hernandez
            </span>
            <span>2020-07-2020</span>
            <span>09:30</span>
          </div>
          <div className="table-grid table-content">
            <span>Willian Wosbely Mendoza Hernandez</span>
            <span>2020-07-2020</span>
            <span>09:30</span>
          </div>
          <div className="table-grid table-content">
            <span>Willian Wosbely Mendoza Hernandez</span>
            <span>2020-07-2020</span>
            <span>09:30</span>
          </div>
          <div className="table-grid table-content">
            <span>Willian Wosbely Mendoza Hernandez</span>
            <span>2020-07-2020</span>
            <span>09:30</span>
          </div>
          <div className="table-grid table-content">
            <span>Willian Wosbely Mendoza Hernandez</span>
            <span>2020-07-2020</span>
            <span>09:30</span>
          </div>
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <button className="button button-right bg-warning-color">
              view full list
            </button>
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default Dashboard;
