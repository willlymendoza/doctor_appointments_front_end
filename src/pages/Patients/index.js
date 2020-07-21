import React, { Fragment } from "react";
import PageTitle from "../../components/PageTitle";
import PatientsListTable from "../../components/PatientsListTable";

const Patients = () => {
  return (
    <Fragment>
      <PageTitle title="PATIENTS" />
      <PatientsListTable />
    </Fragment>
  );
};

export default Patients;
