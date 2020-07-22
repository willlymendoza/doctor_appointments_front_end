import React, { Fragment } from "react";
import PageTitle from "../../../components/PageTitle";
import PatientForm from "../../../components/PatientForm";

const AddPatient = () => {
  return (
    <Fragment>
      <PageTitle title="ADD PATIENT" />
      <PatientForm />
    </Fragment>
  );
};

export default AddPatient;
