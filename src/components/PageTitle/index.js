import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PageTitle = ({ title }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <span></span>
    </div>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
