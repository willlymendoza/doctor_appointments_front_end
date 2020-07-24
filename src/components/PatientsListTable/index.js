import React, { Fragment, useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import { useSelector } from "react-redux";
import axios from "axios";

import "./styles.scss";
import { NavLink } from "react-router-dom";

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
        <div className="table-grid table-header">
          <label>First Name</label>
          <label>Last Name</label>
          <label>Personal ID</label>
          <label>E-mail</label>
          <label>Actions</label>
        </div>
        {patientsData.map((patient) => (
          <div key={patient.id} className="table-grid table-content">
            <span>{patient.first_name}</span>
            <span>{patient.last_name}</span>
            <span>{patient.personal_document_id}</span>
            <span>{patient.email}</span>
            <span className="actions">
              <a href="/" className="edit_item">
                <i className="fas fa-edit"></i>
              </a>
              <a href="/" className="view_item">
                <i className="fas fa-eye"></i>
              </a>
            </span>
          </div>
        ))}
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
