import React from "react";
import PropTypes from "prop-types";
import config from "./styles.scss";

const CardContainer = ({ title, color, children }) => {
  return (
    <div className="card-container">
      <div className="card-header" style={{ background: config[color] }}>
        <h2>{title}</h2>
      </div>

      <div className="card-content">{children}</div>
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
