import React, { Fragment, useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import "./styles.scss";
import Table from "../Table";

const PatientsListTable = () => {
  const [patientsData, setPatientsData] = useState([]);

  const userToken = useSelector((store) => store.authData.userToken);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const getListPatients = await axios.get(
          "http://localhost:5000/api/patients",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getListPatients.data;
        setPatientsData(result);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getPatients();
  }, [userToken]);

  return (
    <Fragment>
      <NavLink to="/patients/add">
        <button
          type="button"
          className="button bg-secondary-color"
          style={{ marginBottom: 10 }}
        >
          New
        </button>
      </NavLink>
      <CardContainer title="List Of Patients" color="secondary_color">
        <Table
          labels={[
            { label: "First Name", value: "first_name" },
            { label: "Last Name", value: "last_name" },
            { label: "Personal ID", value: "personal_document_id" },
            { label: "E-mail", value: "email" },
          ]}
          data={patientsData}
          actions={{ link: "/patients" }}
        />
      </CardContainer>
      <CustomPagination
        color="secondary"
        activePage={3}
        itemsCountPerPage={10}
        totalItemsCount={100}
        pageRangeDisplayed={5}
      />
    </Fragment>
  );
};

export default PatientsListTable;
