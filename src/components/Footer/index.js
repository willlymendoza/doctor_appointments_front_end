import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="footer-container"></div>
      <footer className="footer-content">
        <h1>{t("created_by.label")}</h1>
        <h2>Full-Stack Developer</h2>
      </footer>
    </Fragment>
  );
}

export default Footer;
