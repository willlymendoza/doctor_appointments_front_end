import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import PatientViewForm from "../../../components/PatientViewForm";

import "./styles.scss";
import CardContainer from "../../../components/CardContainer";
import { useSelector } from "react-redux";
import axios from "axios";

const ViewPatient = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState([]);
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  const [disabledInput, setDisabledInput] = useState(true);
  const userToken = useSelector((store) => store.authData.userToken);

  const handleInputChange = (e) => {
    setPatientInfo({
      ...patientInfo,
      [e.target.name]: e.target.value,
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
      const { _id, ...postData } = patientInfo;
      await axios.put(`http://localhost:5000/api/patients/${id}`, postData, {
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
      <PageTitle title={`PATIENT ${id}`} />
      <div className="patient-info-container">
        <PatientViewForm
          patientInfo={patientInfo}
          handleOnSubmit={handleOnSubmit}
          disabledInput={disabledInput}
          handleInputChange={handleInputChange}
          handleEditClick={handleEditClick}
        />

        {/* PATIENT INFO CONTAINER */}
        <CardContainer title="Appointments" color="warning_color">
          <div className="list-container">
            {appointmentsInfo.map((item) => (
              <div key={item._id}>
                <span>{item.appointment_date}</span>
                <span>{item.hour}</span>
                <span>
                  <Link to={`/appointments/${item._id}`}>
                    <i className="fas fa-eye"></i>
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default ViewPatient;
