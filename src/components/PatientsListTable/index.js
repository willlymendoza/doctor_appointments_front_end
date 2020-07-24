import React, { Fragment, useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import { useSelector } from "react-redux";
import axios from "axios";

import "./styles.scss";
import { NavLink } from "react-router-dom";

const PatientsListTable = () => {
  const [usersData, setUsersData] = useState([]);

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
        setUsersData(result);
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
        {usersData.map((user) => (
          <div className="table-grid table-content">
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
            <span>{user.personal_document_id}</span>
            <span>{user.email}</span>
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
