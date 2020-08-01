import React, { Fragment } from "react";
import ReactLoading from "react-loading";
import style from "./styles.scss";

const PageLoading = () => {
  return (
    <Fragment>
      <div className="page-loading-container">
        <ReactLoading
          type={"bubbles"}
          color={style.primary_color}
          className="page-loading"
        />
      </div>
    </Fragment>
  );
};

export default PageLoading;
