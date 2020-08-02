import React, { Fragment, useState } from "react";
import AppointmentAddForm from "../AppointmentAdd/AppointmentAddForm";
import PageTitle from "components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import useAppointmentFormValidation from "hooks/useAppointmentFormValidation";
import { postNew } from "services/appointmentService";
import useFetch from "hooks/useFetch";
import PageLoading from "components/PageLoading";

const AppointmentAdd = () => {
  const formValidation = useAppointmentFormValidation();
  const { register, handleSubmit, errors, control, setValue } = useForm({
    resolver: joiResolver(formValidation),
  });
  const { userToken } = useSelector((store) => store.authData);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const doctorsList = useFetch({
    url: "/users?isDoctor=1",
    userToken,
  });
  const patientsList = useFetch({
    url: "/patients",
    userToken,
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const history = useHistory();

  const handleSelectChange = (newValue, actionMeta) => {
    if (actionMeta.name === "patient_id") {
      setValue("patient_id", newValue._id, { shouldValidate: true });
      setSelectedPatient(newValue._id);
    }
    if (actionMeta.name === "doctor_id") {
      setValue("doctor_id", newValue._id, { shouldValidate: true });
      setSelectedDoctor(newValue._id);
    }
  };

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const axiosPostData = async (data) => {
    try {
      await postNew(data, userToken);
      history.push("/appointments");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      {patientsList.isLoading || doctorsList.isLoading ? (
        <PageLoading />
      ) : (
        <Fragment>
          <PageTitle title="ADD APPOINTMENT" />
          <AppointmentAddForm
            onSubmitForm={onSubmitForm}
            handleSelectChange={handleSelectChange}
            patientsList={patientsList.response}
            doctorsList={doctorsList.response}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            selectedPatient={selectedPatient}
            selectedDoctor={selectedDoctor}
            control={control}
            Controller={Controller}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default AppointmentAdd;
