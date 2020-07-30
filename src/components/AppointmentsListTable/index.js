import React, { Fragment, useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import axios from "axios";

import "./styles.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../Table";

const AppointmentsListTable = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const userToken = useSelector((store) => store.authData.userToken);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const getListAppointments = await axios.get(
          `http://localhost:5000/api/appointments?pageNumber=${activePage}&pageSize=5`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getListAppointments.data;
        setAppointmentsData(result.appointments);
        setTotalData(result.count);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getAppointments();
  }, [activePage, userToken]);

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
            { label: "Date", value: "appointment_date" },
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
          data={appointmentsData}
          actions={{ link: "/appointments" }}
        />
      </CardContainer>
      <CustomPagination
        color="warning"
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={totalData}
        pageRangeDisplayed={5}
        handlePageChange={handlePageChange}
      />
    </Fragment>
  );
};

export default AppointmentsListTable;
