import React, { Fragment, useState, useEffect } from "react";
import CardContainer from "../../components/CardContainer";
import DashBoardCard from "../../components/DashBoardCard";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [recentPatients, setRecentPatients] = useState([]);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todayAppointments, setTodayAppointments] = useState(0);

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

  useEffect(() => {
    const getRecentPatients = async () => {
      try {
        const getPatientsList = await axios.get(
          "http://localhost:5000/api/patients/recent/5",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getPatientsList.data;
        setRecentPatients(result);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getRecentPatients();
  }, [userToken]);

  useEffect(() => {
    const getTotalPatients = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5000/api/patients/total",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setTotalPatients(result.data.total);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getTotalPatients();
  }, [userToken]);

  useEffect(() => {
    const getTotalAppointments = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5000/api/appointments/total",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setTotalAppointments(result.data.total);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getTotalAppointments();
  }, [userToken]);

  useEffect(() => {
    const getTodayAppointments = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5000/api/appointments/today",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setTodayAppointments(result.data.total);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getTodayAppointments();
  }, [userToken]);

  return (
    <Fragment>
      <PageTitle title="DASHBOARD" />

      <div className="dashboard-cards">
        <DashBoardCard
          title="Patients"
          color="warning_color"
          quantity={totalPatients}
        />
        <DashBoardCard
          title="Appointments"
          color="info_color"
          quantity={totalAppointments}
        />
        <DashBoardCard
          title="Today's Appointments"
          color="secondary_color"
          quantity={todayAppointments}
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
            <label>E-mail</label>
            <label>Registered Date</label>
          </div>
          {recentPatients.map((patient) => (
            <div key={patient._id} className="table-grid table-content">
              <span>
                <label>Name: </label>
                {patient.first_name} {patient.last_name}
              </span>
              <span>{patient.email}</span>
              <span>{patient.created_at}</span>
            </div>
          ))}
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
