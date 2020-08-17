import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CardContainer from "components/CardContainer";
import CustomPagination from "components/CustomPagination";
import { NavLink } from "react-router-dom";
import Table from "components/Table";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const PatientList = ({ patientsData, handlePageChange, activePage }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NavLink to="/patients/add">
        <button
          type="button"
          className="button bg-secondary-color"
          style={{ marginBottom: 10 }}
        >
          {t("new.label")}
        </button>
      </NavLink>
      <CardContainer title={t("patients_list.label")} color="secondary_color">
        <Table
          labels={[
            { label: `${t("first_name.label")}`, value: "first_name" },
            { label: `${t("last_name.label")}`, value: "last_name" },
            {
              label: `${t("personal_id.label")}`,
              value: "personal_document_id",
            },
            { label: `${t("email.label")}`, value: "email" },
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

export default PatientList;

PatientList.propTypes = {
  patientsData: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
};
