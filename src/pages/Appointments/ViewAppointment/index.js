import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import AppointmentViewForm from "../../../components/AppointmentViewForm";
import AppointmentPatientInfo from "../AppointmentPatientInfo";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import useAppointmentFormValidation from "../../../hooks/useAppointmentFormValidation";
import useFetch from "../../../hooks/useFetch";
import { update } from "../../../services/appointmentService";
import "./styles.scss";
import PageLoading from "../../../components/PageLoading";
import dateService from "../../../services/dateService";

const ViewAppointment = (props) => {
  const { id } = useParams();
  const userToken = useSelector((store) => store.authData.userToken);
  const appointmentInfo = useFetch({
    url: `/appointments/${id}`,
    userToken,
  });
  const patientsList = useFetch({
    url: "/patients",
    userToken,
  });
  const doctorsList = useFetch({
    url: "/users?isDoctor=1",
    userToken,
  });
  const [disabledInput, setDisabledInput] = useState(true);
  const formValidation = useAppointmentFormValidation();
  const { register, handleSubmit, errors, control, setValue } = useForm({
    resolver: joiResolver(formValidation),
  });

  const handleSelectChange = (newValue, actionMeta) => {
    if (actionMeta.name === "patient_id") {
      setValue("patient_id", newValue._id, { shouldValidate: true });
    }
    if (actionMeta.name === "doctor_id") {
      setValue("doctor_id", newValue._id, { shouldValidate: true });
    }
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setDisabledInput(false);
  };

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const reload = () => {
    props.history.push("/temp");
    props.history.replace({ pathname: `/appointments/${id}` });
  };

  const axiosPostData = async (data) => {
    try {
      await update(id, data, userToken);
      setDisabledInput(true);
      reload();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      {appointmentInfo.isLoading ||
      patientsList.isLoading ||
      doctorsList.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle
            title={
              dateService(appointmentInfo.response.appointment_date) +
              " " +
              appointmentInfo.response.hour
            }
          />
          <div className="appointment-info-container">
            <AppointmentViewForm
              appointmentInfo={appointmentInfo.response}
              onSubmitForm={onSubmitForm}
              patientsList={patientsList.response}
              doctorsList={doctorsList.response}
              disabledInput={disabledInput}
              handleSelectChange={handleSelectChange}
              handleEditClick={handleEditClick}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              control={control}
              Controller={Controller}
              setValue={setValue}
            />

            <AppointmentPatientInfo
              patientInfo={appointmentInfo.response.patient}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ViewAppointment;
