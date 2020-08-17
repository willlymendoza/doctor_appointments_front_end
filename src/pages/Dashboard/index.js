import React, { Fragment } from "react";
import CardContainer from "components/CardContainer";
import DashBoardCard from "components/DashBoardCard";
import PageTitle from "components/PageTitle";
import PageLoading from "components/PageLoading";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "components/Table";
import useFetch from "hooks/useFetch";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
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
      {appointmentsList.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle title="DASHBOARD" />

          <div className="dashboard-cards">
            <DashBoardCard
              title={t("patients.label")}
              color="secondary_color"
              quantity={parseInt(totalPatients.response.total) || 0}
            />
            <DashBoardCard
              title={t("appointments.label")}
              color="info_color"
              quantity={parseInt(totalAppointments.response.total) || 0}
            />
            <DashBoardCard
              title={t("today_appointments.label")}
              color="warning_color"
              quantity={parseInt(todayAppointments.response.total) || 0}
            />
          </div>

          <div className="dashboard-tables">
            <CardContainer
              title={t("recent_appointments.label")}
              color="warning_color"
            >
              <Table
                labels={[
                  {
                    label: `${t("date.label")}`,
                    value: "appointment_date",
                    type: "date",
                  },
                  { label: `${t("hour.label")}`, value: ["hour"] },
                  {
                    label: `${t("patient.label")}`,
                    value: "patient",
                    child: ["first_name", "last_name"],
                    type: "object",
                  },
                  {
                    label: `${t("doctor.label")}`,
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
                  {t("view_full_list.label")}
                </Link>
              </div>
            </CardContainer>

            <CardContainer
              title={t("recent_patients.label")}
              color="secondary_color"
            >
              <Table
                labels={[
                  {
                    label: `${t("patient.label")}`,
                    value: ["first_name", "last_name"],
                  },
                  { label: `${t("email.label")}`, value: "email" },
                  {
                    label: `${t("registered_date")}`,
                    value: "created_at",
                    type: "date",
                  },
                ]}
                data={recentPatients.response}
              />
              <div className="table-grid" style={{ marginTop: 50 }}>
                <Link
                  className="button button-right bg-secondary-color"
                  to="/patients"
                >
                  {t("view_full_list.label")}
                </Link>
              </div>
            </CardContainer>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
