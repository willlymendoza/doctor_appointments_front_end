import React, { Fragment } from "react";
import CardContainer from "../../components/CardContainer";
import DashBoardCard from "../../components/DashBoardCard";
import PageTitle from "../../components/PageTitle";

const Dashboard = () => {
  return (
    <Fragment>
      <PageTitle title="DASHBOARD" />

      <div className="dashboard-cards">
        <DashBoardCard title="Patients" color="warning_color" quantity={55} />
        <DashBoardCard title="Appointments" color="info_color" quantity={45} />
        <DashBoardCard
          title="Today's Appointments"
          color="secondary_color"
          quantity={6}
        />
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
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <button className="button button-right bg-secondary-color">
              view full list
            </button>
          </div>
        </CardContainer>
        <CardContainer title="Recent Registered Patients" color="warning_color">
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
          <div className="table-grid table-content" style={{ marginTop: 50 }}>
            <button className="button button-right bg-warning-color">
              view full list
            </button>
          </div>
        </CardContainer>
      </div>
    </Fragment>
  );
};

export default Dashboard;
