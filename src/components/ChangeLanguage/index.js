import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("current_language") || "en"
  );

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem("current_language", language);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <Fragment>
      <button
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={currentLanguage === "es" ? "active" : ""}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
    </Fragment>
  );
};

export default ChangeLanguage;
