import React, { Fragment } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";
import { NavLink } from "react-router-dom";
import Table from "../Table";
import "./styles.scss";

const PatientsListTable = ({ patientsData, handlePageChange, activePage }) => {
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
          data={patientsData.response.patients}
          actions={{ link: "/patients" }}
        />
      </CardContainer>
      <CustomPagination
        color="secondary"
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={patientsData.response.count}
        pageRangeDisplayed={3}
        handlePageChange={handlePageChange}
      />
    </Fragment>
  );
};

export default PatientsListTable;
