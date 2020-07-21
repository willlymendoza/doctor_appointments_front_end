import React, { Fragment } from "react";
import AppointmentForm from "../../../components/AppointmentForm";
import PageTitle from "../../../components/PageTitle";

const AddAppointment = () => {
  return (
    <Fragment>
      <PageTitle title="ADD APPOINTMENT" />
      <AppointmentForm />
    </Fragment>
  );
};

export default AddAppointment;
