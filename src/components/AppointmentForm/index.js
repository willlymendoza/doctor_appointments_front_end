import React, { useState, useEffect } from "react";
import CardContainer from "../../components/CardContainer";
import Select from "react-select";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AppointmentForm = () => {
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

  const customSelectStyles = {
    valueContainer: () => ({
      height: 37,
      paddingLeft: 10,
    }),
    input: () => ({
      margin: "auto 0",
    }),
  };

  return (
    <div className="form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-group full-width">
            <label>Patient</label>
            <Select
              name="patient_id"
              styles={customSelectStyles}
              options={patientsList}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              getOptionValue={(option) => option._id}
            />
          </div>
          <div className="form-group full-width">
            <label>Doctor</label>
            <Select
              name="doctor_id"
              styles={customSelectStyles}
              options={doctorsList}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) => `${option.name} ${option.last_name}`}
              getOptionValue={(option) => option._id}
            />
          </div>
          <div className="form-group full-width">
            <label>Observations</label>
            <textarea name="observations" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="appointment_date"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input type="time" name="hour" onChange={handleInputChange} />
          </div>

          <div className="form-group button-container">
            <button className="button button-right bg-warning-color">
              add
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default AppointmentForm;
