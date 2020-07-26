import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import PatientViewForm from "../../../components/PatientViewForm";

import "./styles.scss";
import CardContainer from "../../../components/CardContainer";

const ViewPatient = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <PageTitle title={`PATIENT ${id}`} />
      <div className="patient-info-container">
        <PatientViewForm />
        <CardContainer title="Appointments" color="warning_color">
          <div className="list-container">
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
            <div>
              <span>2020-07-18</span>
              <span>15:30</span>
              <span>
                <a href="/">
                  <i className="fas fa-eye"></i>
                </a>
              </span>
            </div>
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default ViewPatient;
