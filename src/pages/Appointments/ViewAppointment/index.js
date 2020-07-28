import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import AppointmentViewForm from "../../../components/AppointmentViewForm";
import AppointmentPatientInfo from "../AppointmentPatientInfo";
import axios from "axios";

import "./styles.scss";
import { useSelector } from "react-redux";

const ViewAppointment = () => {
  const { id } = useParams();
  const [appointmentInfo, setAppointmentInfo] = useState(null);
  const [patientInfo, setPatientInfo] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [disabledInput, setDisabledInput] = useState(true);
  const userToken = useSelector((store) => store.authData.userToken);

  const handleInputChange = (e) => {
    setAppointmentInfo({
      ...appointmentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (newValue, actionMeta) => {
    setAppointmentInfo({
      ...appointmentInfo,
      [actionMeta.name]: newValue._id,
    });
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setDisabledInput(false);
  };

  const handleOnSubmit = (e) => {
    axiosPostData();
    e.preventDefault();
  };

  const axiosPostData = async () => {
    try {
      const { _id, id, ...postData } = appointmentInfo;
      await axios.put(
        `http://localhost:5000/api/appointments/${id}`,
        postData,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
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

        setPatientInfo(result.data.patient);

        const { doctor, patient, ...appointmentData } = result.data;

        setAppointmentInfo(appointmentData);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getAppointmentInfo();
  }, [id, userToken]);

  return (
    <Fragment>
      {appointmentInfo ? (
        <PageTitle
          title={appointmentInfo.appointment_date + " " + appointmentInfo.hour}
        />
      ) : (
        ""
      )}
      <div className="appointment-info-container">
        <AppointmentViewForm
          appointmentInfo={appointmentInfo}
          handleOnSubmit={handleOnSubmit}
          patientsList={patientsList}
          disabledInput={disabledInput}
          handleSelectChange={handleSelectChange}
          doctorsList={doctorsList}
          handleInputChange={handleInputChange}
          handleEditClick={handleEditClick}
        />

        <AppointmentPatientInfo patientInfo={patientInfo} />
      </div>
    </Fragment>
  );
};

export default ViewAppointment;
