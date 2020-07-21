import React from "react";
import CardContainer from "../../components/CardContainer";
import Select from "react-select";
import "./styles.scss";

const options = [
  { id: 1, first_name: "Jhon", last_name: "Doe" },
  { id: 2, first_name: "Juan", last_name: "Doe" },
  { id: 3, first_name: "Mic", last_name: "Doe" },
];

const AppointmentForm = () => {
  const handleSelectChange = (newValue, actionMeta) => {
    console.log(newValue);
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
    <div className="appointment-form-container">
      <CardContainer title="Appointment Info" color="warning_color">
        <form className="form">
          <div className="form-group full-width">
            <label>Patient</label>
            <Select
              styles={customSelectStyles}
              options={options}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              getOptionValue={(option) => option["id"]}
            />
          </div>
          <div className="form-group full-width">
            <label>Doctor</label>
            <Select
              styles={customSelectStyles}
              options={options}
              onChange={handleSelectChange}
              isClearable
              maxMenuHeight={150}
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              getOptionValue={(option) => option["id"]}
            />
          </div>
          <div className="form-group full-width">
            <label>Observations</label>
            <textarea name="personal_document_id" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="phone_number" />
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input type="time" name="email" />
          </div>

          <div className="submitButton">
            <button type="submit">Add</button>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default AppointmentForm;
