import React, { Fragment, useState } from "react";
import PageTitle from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PatientAddForm from "../../../components/PatientAddForm";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import usePatientFormValidation from "../../../hooks/usePatientFormValidation";

const AddPatient = () => {
  const formValidation = usePatientFormValidation();

  const [requestError, setRequestError] = useState(null);

  const userToken = useSelector((store) => store.authData.userToken);
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(formValidation),
  });
  const history = useHistory();

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const axiosPostData = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/patients", data, {
        headers: {
          Authorization: userToken,
        },
      });
      history.push("/patients");
    } catch (error) {
      if (error.response) {
        setRequestError(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      <PageTitle title="ADD PATIENT" />
      <PatientAddForm
        onSubmitForm={onSubmitForm}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        requestError={requestError}
      />
    </Fragment>
  );
};

export default AddPatient;
