import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardContainer from "../../components/CardContainer";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const PatientViewForm = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState([]);
  const [disabledInput, setDisabledInput] = useState(true);
  const userToken = useSelector((store) => store.authData.userToken);
  const history = useHistory();

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
      delete patientInfo._id;
      await axios.put(`http://localhost:5000/api/patients/${id}`, patientInfo, {
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

  return (
    <div className="form-container">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="first_name"
              disabled={disabledInput}
              defaultValue={patientInfo.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              disabled={disabledInput}
              defaultValue={patientInfo.last_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input
              name="personal_document_id"
              disabled={disabledInput}
              defaultValue={patientInfo.personal_document_id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone_number"
              disabled={disabledInput}
              defaultValue={patientInfo.phone_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              name="email"
              disabled={disabledInput}
              defaultValue={patientInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              disabled={disabledInput}
              defaultValue={patientInfo.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              disabled={disabledInput}
              defaultValue={patientInfo.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              disabled={disabledInput}
              defaultValue={patientInfo.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input
              name="sex"
              disabled={disabledInput}
              defaultValue={patientInfo.sex}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group button-container">
            {!disabledInput ? (
              <button
                type="submit"
                className="button button-right bg-secondary-color"
              >
                save changes
              </button>
            ) : (
              <button
                type="button"
                className="button button-right bg-secondary-color"
                onClick={handleEditClick}
              >
                edit
              </button>
            )}
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientViewForm;
