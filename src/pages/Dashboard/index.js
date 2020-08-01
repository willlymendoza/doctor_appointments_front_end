import React, { Fragment } from "react";
import CardContainer from "../../components/CardContainer";
import DashBoardCard from "../../components/DashBoardCard";
import PageTitle from "../../components/PageTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const userToken = useSelector((store) => store.authData.userToken);
  const appointmentsList = useFetch({
    url: "/appointments/recent/5",
    userToken,
  });
  const recentPatients = useFetch({
    url: "/patients/recent/5",
    userToken,
  });
  const totalPatients = useFetch({
    url: "/patients/total",
    userToken,
  });
  const totalAppointments = useFetch({
    url: "/appointments/total",
    userToken,
  });
  const todayAppointments = useFetch({
    url: "/appointments/today",
    userToken,
  });

  return (
    <Fragment>
      <PageTitle title="DASHBOARD" />

      <div className="dashboard-cards">
        <DashBoardCard
          title="Patients"
          color="secondary_color"
          quantity={totalPatients.response.total}
        />
        <DashBoardCard
          title="Appointments"
          color="info_color"
          quantity={totalAppointments.response.total}
        />
        <DashBoardCard
          title="Today's Appointments"
          color="warning_color"
          quantity={todayAppointments.response.total}
        />
      </div>

      <div className="dashboard-tables">
        {appointmentsList.isLoading ? (
          <div>Loading...</div>
        ) : (
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
              data={appointmentsList.response}
            />
            <div className="table-grid" style={{ marginTop: 50 }}>
              <Link
                className="button button-right bg-warning-color"
                to="/appointments"
              >
                view full list
              </Link>
            </div>
          </CardContainer>
        )}

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
            data={recentPatients.response}
          />
          <div className="table-grid" style={{ marginTop: 50 }}>
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
