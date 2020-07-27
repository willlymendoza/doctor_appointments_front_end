import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import CardContainer from "../../../components/CardContainer";
import AppointmentViewForm from "../../../components/AppointmentViewForm";

import "./styles.scss";

const ViewAppointment = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <PageTitle title={`2020-07-17 15:30 -- ${id}`} />
      <div className="appointment-info-container">
        <AppointmentViewForm />
        <CardContainer title="Patient Info" color="secondary_color">
          <div className="list-container">
            <div>
              <label>Name: </label>
              <span>Willian Wosbely Mendoza Hernandez</span>
            </div>
            <div>
              <label>Personal Document ID: </label>
              <span>2129848611301</span>
            </div>
            <div>
              <label>E-mail: </label>
              <span>wyllmh5@gmail.com</span>
            </div>
            <div>
              <label>Phone Number: </label>
              <span>44921199</span>
            </div>
            <div>
              <label>City: </label>
              <span>Guatemala</span>
            </div>
            <div>
              <label>Address: </label>
              <span>Huehuetenango, z. 8</span>
            </div>
            <div>
              <label>Age: </label>
              <span>18</span>
            </div>
            <div>
              <label>Sex: </label>
              <span>M</span>
            </div>
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default ViewAppointment;
