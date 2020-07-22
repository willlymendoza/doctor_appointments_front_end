import React, { Fragment } from "react";
import PageTitle from "../../components/PageTitle";
import AppointmentsListTable from "../../components/AppointmentsListTable";

const Appointments = () => {
  return (
    <Fragment>
      <PageTitle title="APPOINTMENTS" />
      <AppointmentsListTable />
    </Fragment>
  );
};

export default Appointments;
