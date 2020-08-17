import Joi from "@hapi/joi";
import { useTranslation } from "react-i18next";

const useLoginFormValidation = () => {
  const { t } = useTranslation();
  return Joi.object({
    email: Joi.string()
      .email({ tlds: false })
      .required()
      .messages({
        "string.email": `${t("email_valid.label")}`,
        "string.empty": `${t("email_required.label")}`,
      }),
    password: Joi.string()
      .trim()
      .required()
      .messages({
        "string.empty": `${t("password_required.label")}`,
      }),
  });
};

export default useLoginFormValidation;
