import React, { Fragment, useState, useEffect } from "react";
import AppointmentAddForm from "../../../components/AppointmentAddForm";
import PageTitle from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddAppointment = () => {
  const formData = {
    patient_id: "",
    doctor_id: "",
    observations: "",
    appointment_date: "",
    hour: "",
  };

  const [appointmentInfo, setAppointmentInfo] = useState(formData);
  const [doctorsList, setDoctorsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const { userToken } = useSelector((store) => store.authData);
  const history = useHistory();

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

  const handleOnSubmit = (e) => {
    axiosPostData();
    e.preventDefault();
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

  const axiosPostData = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/appointments",
        appointmentInfo,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
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
        handleOnSubmit={handleOnSubmit}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        patientsList={patientsList}
        doctorsList={doctorsList}
      />
    </Fragment>
  );
};

export default AddAppointment;
