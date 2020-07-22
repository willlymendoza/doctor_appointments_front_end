import React from "react";
import "./styles.scss";

const SubmitButton = ({ text, colorClass }) => {
  return (
    <div className={`submitButton ${colorClass}`}>
      <button type="submit">{text}</button>
    </div>
  );
};

export default SubmitButton;
