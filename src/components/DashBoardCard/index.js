import React, { Fragment } from "react";
import PropTypes from "prop-types";
import config from "./styles.scss";

const DashBoardCard = ({ title, quantity, color }) => {
  return (
    <Fragment>
      <div className="dashboard-card" style={{ background: config[color] }}>
        <h2>{title}</h2>
        <h1>{quantity}</h1>
      </div>
    </Fragment>
  );
};

export default DashBoardCard;

DashBoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
