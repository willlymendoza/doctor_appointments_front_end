import React, { Fragment, useState, useEffect } from "react";
import CardContainer from "../../components/CardContainer";
import DashBoardCard from "../../components/DashBoardCard";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

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
          color="secondary_color"
          quantity={totalPatients}
        />
        <DashBoardCard
          title="Appointments"
          color="info_color"
          quantity={totalAppointments}
        />
        <DashBoardCard
          title="Today's Appointments"
          color="warning_color"
          quantity={todayAppointments}
        />
      </div>

      <div className="dashboard-tables">
        <CardContainer
          title="Recent Registered Appointments"
          color="warning_color"
        >
          <Table
            labels={[
              { label: "Date", value: "appointment_date" },
              { label: "Hour", value: ["hour"] },
              {
                label: "Patient",
                value: "patient",
                child: ["first_name", "last_name"],
                type: "object",
              },
              {
                label: "Doctor",
                value: "doctor",
                child: ["name", "last_name"],
                type: "object",
              },
            ]}
            data={recentAppointments}
          />
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <Link
              className="button button-right bg-warning-color"
              to="/appointments"
            >
              view full list
            </Link>
          </div>
        </CardContainer>

        <CardContainer
          title="Recent Registered Patients"
          color="secondary_color"
        >
          <Table
            labels={[
              { label: "Patient", value: ["first_name", "last_name"] },
              { label: "E-mail", value: "email" },
              { label: "Registered Date", value: "created_at" },
            ]}
            data={recentPatients}
          />
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <Link
              className="button button-right bg-secondary-color"
              to="/patients"
            >
              view full list
            </Link>
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default Dashboard;
