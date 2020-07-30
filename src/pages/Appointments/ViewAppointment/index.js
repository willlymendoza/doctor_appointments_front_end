import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import AppointmentViewForm from "../../../components/AppointmentViewForm";
import AppointmentPatientInfo from "../AppointmentPatientInfo";
import axios from "axios";

import "./styles.scss";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import useAppointmentFormValidation from "../../../hooks/useAppointmentFormValidation";

const ViewAppointment = () => {
  const { id } = useParams();
  const [appointmentInfo, setAppointmentInfo] = useState(null);
  const [patientInfo, setPatientInfo] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [disabledInput, setDisabledInput] = useState(true);
  const userToken = useSelector((store) => store.authData.userToken);

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

  const axiosPostData = async (data) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/${id}`, data, {
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

  /* getting list of doctors */
  useEffect(() => {
    const getDoctors = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/users", {
          headers: {
            Authorization: userToken,
          },
        });

        setDoctorsList(result.data.filter((item) => item.is_doctor === true));
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getDoctors();
  }, [userToken]);

  /* getting list of patients */
  useEffect(() => {
    const getPatients = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/patients", {
          headers: {
            Authorization: userToken,
          },
        });

        setPatientsList(result.data);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    getPatients();
  }, [userToken]);

  /* getting appointment info */
  useEffect(() => {
    const getAppointmentInfo = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/appointments/${id}`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        const { doctor, patient, ...appointmentData } = result.data;
        setPatientInfo(patient);
        setAppointmentInfo(appointmentData);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getAppointmentInfo();
  }, [id, userToken]);

  return (
    <Fragment>
      {appointmentInfo && doctorsList && patientsList ? (
        <Fragment>
          <PageTitle
            title={
              appointmentInfo.appointment_date + " " + appointmentInfo.hour
            }
          />
          <div className="appointment-info-container">
            <AppointmentViewForm
              appointmentInfo={appointmentInfo}
              onSubmitForm={onSubmitForm}
              patientsList={patientsList}
              disabledInput={disabledInput}
              handleSelectChange={handleSelectChange}
              doctorsList={doctorsList}
              handleEditClick={handleEditClick}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              control={control}
              Controller={Controller}
              setValue={setValue}
            />

            <AppointmentPatientInfo patientInfo={patientInfo} />
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ViewAppointment;
