import React, { Fragment } from "react";
import CardContainer from "../CardContainer";
import "./styles.scss";

const Main = () => {
  return (
    <Fragment>
      <div className="main-container"></div>

      <main className="main-content">
        <div className="page-title">
          <h1>DASHBOARD</h1>
          <span></span>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h2>PATIENTS</h2>
            <h1>55</h1>
          </div>
          <div className="dashboard-card">
            <h2>PATIENTS</h2>
            <h1>55</h1>
          </div>
          <div className="dashboard-card">
            <h2>PATIENTS</h2>
            <h1>55</h1>
          </div>
        </div>

        <div className="dashboard-tables">
          <CardContainer
            title="Recent Registered Appointments"
            color="secondary_color"
          >
            <div className="table-grid table-header">
              <label>Patient</label>
              <label>Date</label>
              <label>Hour</label>
              <label>Doctor</label>
            </div>
            <div className="table-grid table-content">
              <span>
                <label>Name: </label>Willian Wosbely Mendoza Hernandez
              </span>
              <span>2020-07-2020</span>
              <span>09:30</span>
              <span>Dr. Jhon Doe</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
              <span>Dr. Jhon Doe</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
              <span>Dr. Jhon Doe</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
              <span>Dr. Jhon Doe</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
              <span>Dr. Jhon Doe</span>
            </div>
          </CardContainer>
          <CardContainer
            title="Recent Registered Patients"
            color="warning_color"
          >
            <div className="table-grid table-header">
              <label>Patient</label>
              <label>Date</label>
              <label>Hour</label>
            </div>
            <div className="table-grid table-content">
              <span>
                <label>Name: </label>Willian Wosbely Mendoza Hernandez
              </span>
              <span>2020-07-2020</span>
              <span>09:30</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
            </div>
            <div className="table-grid table-content">
              <span>Willian Wosbely Mendoza Hernandez</span>
              <span>2020-07-2020</span>
              <span>09:30</span>
            </div>
          </CardContainer>
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
