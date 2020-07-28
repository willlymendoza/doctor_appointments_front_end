import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardContainer from "../../components/CardContainer";
import Select from "react-select";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

const AppointmentViewForm = () => {
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

        delete result.data.doctor;
        delete result.data.patient;

        setAppointmentInfo(result.data);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };

    getAppointmentInfo();
  }, [id, userToken]);

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
        {appointmentInfo ? (
          <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-group full-width">
              <label>Patient</label>
              <Select
                name="patient_id"
                isDisabled={disabledInput}
                value={patientsList.filter(
                  (item) => item._id === appointmentInfo.patient_id
                )}
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
                isDisabled={disabledInput}
                value={doctorsList.filter(
                  (item) => item._id === appointmentInfo.doctor_id
                )}
                styles={customSelectStyles}
                options={doctorsList}
                onChange={handleSelectChange}
                isClearable
                maxMenuHeight={150}
                getOptionLabel={(option) =>
                  `${option.name} ${option.last_name}`
                }
                getOptionValue={(option) => option._id}
              />
            </div>
            <div className="form-group full-width">
              <label>Observations</label>
              <textarea
                name="observations"
                disabled={disabledInput}
                defaultValue={appointmentInfo.observations}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="appointment_date"
                disabled={disabledInput}
                defaultValue={moment(appointmentInfo.appointment_date).format(
                  "yyyy-MM-DD"
                )}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Hour</label>
              <input
                type="time"
                name="hour"
                disabled={disabledInput}
                defaultValue={appointmentInfo.hour}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group button-container">
              {!disabledInput ? (
                <button
                  type="submit"
                  className="button button-right bg-warning-color"
                >
                  save changes
                </button>
              ) : (
                <button
                  type="button"
                  className="button button-right bg-warning-color"
                  onClick={handleEditClick}
                >
                  edit
                </button>
              )}
            </div>
          </form>
        ) : (
          <h3>Loading...</h3>
        )}
      </CardContainer>
    </div>
  );
};

export default AppointmentViewForm;
