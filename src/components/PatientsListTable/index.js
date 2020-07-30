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
  const [activePage, setActivePage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const userToken = useSelector((store) => store.authData.userToken);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    const getPatients = async () => {
      try {
        const getListPatients = await axios.get(
          `http://localhost:5000/api/patients?pageNumber=${activePage}&pageSize=5`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        const result = getListPatients.data;
        setPatientsData(result.patients);
        setTotalData(result.count);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getPatients();
  }, [activePage, userToken]);

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
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={totalData}
        pageRangeDisplayed={5}
        handlePageChange={handlePageChange}
      />
    </Fragment>
  );
};

export default PatientsListTable;
