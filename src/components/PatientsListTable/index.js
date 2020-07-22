import React, { Fragment } from "react";
import CardContainer from "../../components/CardContainer";
import CustomPagination from "../../components/CustomPagination";

import "./styles.scss";

const PatientsListTable = () => {
  return (
    <Fragment>
      <CardContainer title="List Of Patients" color="secondary_color">
        <div className="table-grid table-header">
          <label>First Name</label>
          <label>Last Name</label>
          <label>Personal ID</label>
          <label>E-mail</label>
          <label>Actions</label>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
        <div className="table-grid table-content">
          <span>
            <label>Name: </label>Willian Wosbely
          </span>
          <span>Mendoza Hernandez</span>
          <span>09:30</span>
          <span>Dr. Jhon Doe</span>
          <span className="actions">
            <a href="/" className="edit_item">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/" className="view_item">
              <i className="fas fa-eye"></i>
            </a>
          </span>
        </div>
      </CardContainer>
      <CustomPagination
        color="secondary"
        activePage={3}
        itemsCountPerPage={10}
        totalItemsCount={100}
        pageRangeDisplayed={5}
      />
    </Fragment>
  );
};

export default PatientsListTable;
