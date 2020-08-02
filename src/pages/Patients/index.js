import React, { Fragment, useState } from "react";
import PageTitle from "components/PageTitle";
import PatientList from "../Patients/PatientList";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import PageLoading from "components/PageLoading";

const Patients = () => {
  const userToken = useSelector((store) => store.authData.userToken);
  const [activePage, setActivePage] = useState(1);
  const patientsData = useFetch({
    url: `/patients?pageNumber=${activePage}&pageSize=5`,
    userToken,
  });

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Fragment>
      {patientsData.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle title="PATIENTS" />
          <PatientList
            patientsData={patientsData}
            handlePageChange={handlePageChange}
            activePage={activePage}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Patients;
