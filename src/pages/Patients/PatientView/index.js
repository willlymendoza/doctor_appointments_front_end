import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import PatientViewForm from "../../Patients/PatientView/PatientViewForm";
import { useSelector } from "react-redux";
import PatientViewAppointmentList from "../PatientView/PatientViewAppointmentList";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import usePatientFormValidation from "../../../hooks/usePatientFormValidation";
import useFetch from "../../../hooks/useFetch";
import { update } from "../../../services/patientService";
import "./styles.scss";
import PageLoading from "../../../components/PageLoading";

const PatientView = () => {
  const { id } = useParams();
  const userToken = useSelector((store) => store.authData.userToken);
  const patientInfo = useFetch({
    url: `/patients/${id}`,
    userToken,
  });
  const appointmentsInfo = useFetch({
    url: `/appointments/patient/${id}`,
    userToken,
  });
  const [disabledInput, setDisabledInput] = useState(true);
  const [requestError, setRequestError] = useState(null);
  const formValidation = usePatientFormValidation();

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(formValidation),
  });

  const handleEditClick = (e) => {
    e.preventDefault();
    setDisabledInput(false);
  };

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const axiosPostData = async (data) => {
    try {
      await update(id, data, userToken);
      setDisabledInput(true);
    } catch (error) {
      if (error.response) {
        setRequestError(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      {patientInfo.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle
            title={
              patientInfo.response.first_name +
              " " +
              patientInfo.response.last_name
            }
          />
          <div className="patient-info-container">
            <PatientViewForm
              patientInfo={patientInfo.response}
              onSubmitForm={onSubmitForm}
              requestError={requestError}
              disabledInput={disabledInput}
              handleEditClick={handleEditClick}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />

            <PatientViewAppointmentList
              appointmentsInfo={appointmentsInfo.response}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PatientView;
