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
        activePage={3}
        itemsCountPerPage={10}
        totalItemsCount={100}
        pageRangeDisplayed={5}
      />
    </Fragment>
  );
};

export default AppointmentsListTable;
