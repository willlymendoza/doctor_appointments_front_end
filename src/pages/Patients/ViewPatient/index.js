import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import PatientViewForm from "../../../components/PatientViewForm";

import "./styles.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import PatientAppointmentsList from "../PatientAppointmentsList";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import usePatientFormValidation from "../../../hooks/usePatientFormValidation";

const ViewPatient = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState([]);
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  const [disabledInput, setDisabledInput] = useState(true);
  const userToken = useSelector((store) => store.authData.userToken);
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
      await axios.put(`http://localhost:5000/api/patients/${id}`, data, {
        headers: {
          Authorization: userToken,
        },
      });
      setDisabledInput(true);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/patients/${id}`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setPatientInfo(result.data);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getPatientInfo();
  }, [id, userToken]);

  useEffect(() => {
    const getPatientAppointments = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/appointments/patient/${id}`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setAppointmentsInfo(result.data);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getPatientAppointments();
  }, [id, userToken]);

  return (
    <Fragment>
      <PageTitle title={patientInfo.first_name + " " + patientInfo.last_name} />
      <div className="patient-info-container">
        <PatientViewForm
          patientInfo={patientInfo}
          onSubmitForm={onSubmitForm}
          disabledInput={disabledInput}
          handleEditClick={handleEditClick}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />

        <PatientAppointmentsList appointmentsInfo={appointmentsInfo} />
      </div>
    </Fragment>
  );
};

export default ViewPatient;
