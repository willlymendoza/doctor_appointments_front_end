import React, { Fragment, useState, useEffect } from "react";
import AppointmentAddForm from "../../../components/AppointmentAddForm";
import PageTitle from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Joi from "@hapi/joi";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";

const AddAppointment = () => {
  const useAppointmentFormValidation = Joi.object({
    patient_id: Joi.string().required().messages({
      "any.required": `"Patient" is required`,
    }),
    doctor_id: Joi.string().required().messages({
      "any.required": `"Doctor" is required`,
    }),
    observations: Joi.string().trim().allow("").min(5).max(55).messages({
      "string.min": `"Observations" must be at least 5 characters long`,
      "string.max": `"Observations" can only be up to 55 characters long`,
    }),
    appointment_date: Joi.date().required().messages({
      "date.base": `"Appointment Date" is required`,
      "date.empty": `"Appointment Date" is required`,
    }),
    hour: Joi.string().trim().required().min(4).max(10).messages({
      "string.empty": `"Hour" is required`,
    }),
  });

  const { register, handleSubmit, errors, control, setValue } = useForm({
    resolver: joiResolver(useAppointmentFormValidation),
  });

  const [patientsList, setPatientsList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [doctorsList, setDoctorsList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { userToken } = useSelector((store) => store.authData);
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

  const axiosPostData = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/appointments", data, {
        headers: {
          Authorization: userToken,
        },
      });
      history.push("/appointments");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      <PageTitle title="ADD APPOINTMENT" />
      <AppointmentAddForm
        onSubmitForm={onSubmitForm}
        handleSelectChange={handleSelectChange}
        patientsList={patientsList}
        doctorsList={doctorsList}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        selectedPatient={selectedPatient}
        selectedDoctor={selectedDoctor}
        control={control}
        Controller={Controller}
      />
    </Fragment>
  );
};

export default AddAppointment;
