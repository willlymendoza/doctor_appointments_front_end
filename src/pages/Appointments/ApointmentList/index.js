import React, { Fragment } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import { NavLink } from "react-router-dom";
import Table from "../Table";
import "./styles.scss";

const AppointmentsListTable = ({
  appointmentsData,
  handlePageChange,
  activePage,
}) => {
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
        <Table
          labels={[
            { label: "Date", value: "appointment_date", type: "date" },
            { label: "Hour", value: "hour" },
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

export default AppointmentsListTable;
