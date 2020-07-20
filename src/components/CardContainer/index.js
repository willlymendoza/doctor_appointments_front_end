import React from "react";
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
