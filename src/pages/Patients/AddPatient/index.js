import React, { Fragment, useState } from "react";
import PageTitle from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PatientAddForm from "../../../components/PatientAddForm";

const AddPatient = () => {
  const formData = {
    first_name: "",
    last_name: "",
    personal_document_id: "",
    phone_number: "",
    email: "",
    city: "",
    address: "",
    age: "",
    sex: "",
  };

  const [patientInfo, setPatientInfo] = useState(formData);
  const userToken = useSelector((store) => store.authData.userToken);
  const history = useHistory();

  const handleInputChange = (e) => {
    setPatientInfo({
      ...patientInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    axiosPostData();
    e.preventDefault();
  };

  const axiosPostData = async () => {
    try {
      await axios.post("http://localhost:5000/api/patients", patientInfo, {
        headers: {
          Authorization: userToken,
        },
      });
      history.push("/patients");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      <PageTitle title="ADD PATIENT" />
      <PatientAddForm
        handleOnSubmit={handleOnSubmit}
        handleInputChange={handleInputChange}
      />
    </Fragment>
  );
};

export default AddPatient;
