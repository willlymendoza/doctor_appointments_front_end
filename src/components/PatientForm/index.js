import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardContainer from "../../components/CardContainer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PatientForm = (props) => {
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
    <div className="form-container">
      <CardContainer title="Patient Info" color="secondary_color">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input name="first_name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input name="last_name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Personal Document ID</label>
            <input name="personal_document_id" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone_number" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input name="email" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input name="address" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input name="age" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input name="sex" onChange={handleInputChange} />
          </div>
          <div className="form-group button-container">
            <button
              type="submit"
              className="button button-right bg-secondary-color"
            >
              add
            </button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default PatientForm;
