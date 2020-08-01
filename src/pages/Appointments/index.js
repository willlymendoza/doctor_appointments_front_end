import React, { Fragment, useState } from "react";
import PageTitle from "../../components/PageTitle";
import AppointmentsListTable from "../../components/AppointmentsListTable";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import PageLoading from "../../components/PageLoading";

const Appointments = () => {
  const [activePage, setActivePage] = useState(1);
  const userToken = useSelector((store) => store.authData.userToken);

  const appointmentsData = useFetch({
    url: `/appointments?pageNumber=${activePage}&pageSize=5`,
    userToken,
  });

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <Fragment>
      {appointmentsData.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle title="APPOINTMENTS" />
          <AppointmentsListTable
            appointmentsData={appointmentsData}
            handlePageChange={handlePageChange}
            activePage={activePage}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Appointments;
