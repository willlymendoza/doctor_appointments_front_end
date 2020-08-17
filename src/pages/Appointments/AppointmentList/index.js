import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import CustomPagination from "components/CustomPagination";
import { NavLink } from "react-router-dom";
import Table from "components/Table";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const AppointmentList = ({
  appointmentsData,
  handlePageChange,
  activePage,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NavLink to="/appointments/add">
        <button
          type="button"
          className="button bg-warning-color"
          style={{ marginBottom: 10 }}
        >
          {t("new.label")}
        </button>
      </NavLink>
      <CardContainer title={t("appointments_list.label")} color="warning_color">
        <Table
          labels={[
            {
              label: `${t("date.label")}`,
              value: "appointment_date",
              type: "date",
            },
            { label: `${t("hour.label")}`, value: "hour" },
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
          data={appointmentsData.response.appointments}
          actions={{ link: "/appointments" }}
        />
      </CardContainer>
      <CustomPagination
        color="warning"
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={appointmentsData.response.count}
        pageRangeDisplayed={3}
        handlePageChange={handlePageChange}
      />
    </Fragment>
  );
};

export default AppointmentList;

AppointmentList.propTypes = {
  appointmentsData: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
};
