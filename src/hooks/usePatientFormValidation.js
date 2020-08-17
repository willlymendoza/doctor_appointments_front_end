import Joi from "@hapi/joi";
import { useTranslation } from "react-i18next";

const usePatientFormValidation = () => {
  const { t } = useTranslation();

  return Joi.object({
    first_name: Joi.string()
      .trim()
      .required()
      .min(5)
      .max(55)
      .messages({
        "string.empty": `${t("first_name_required.label")}`,
        "string.min": `${t("first_name_min.label")}`,
        "string.max": `${t("first_name_max.label")}`,
      }),
    last_name: Joi.string()
      .trim()
      .required()
      .min(5)
      .max(55)
      .messages({
        "string.empty": `${t("last_name_required.label")}`,
        "string.min": `${t("last_name_min.label")}`,
        "string.max": `${t("last_name_max.label")}`,
      }),
    personal_document_id: Joi.string()
      .trim()
      .required()
      .min(5)
      .max(55)
      .messages({
        "string.empty": `${t("personal_id_required.label")}`,
        "string.min": `${t("personal_id_min.label")}`,
        "string.max": `${t("personal_id_max.label")}`,
      }),
    phone_number: Joi.string()
      .trim()
      .required()
      .min(8)
      .max(25)
      .messages({
        "string.empty": `${t("phone_number_required.label")}`,
        "string.min": `${t("phone_number_min.label")}`,
        "string.max": `${t("phone_number_max.label")}`,
      }),
    email: Joi.string()
      .trim()
      .email({ tlds: false })
      .required()
      .min(8)
      .max(50)
      .messages({
        "string.empty": `${t("email_required.label")}`,
        "string.email": `${t("email_valid.label")}`,
        "string.min": `${t("email_min.label")}`,
        "string.max": `${t("email_max.label")}`,
      }),
    city: Joi.string()
      .trim()
      .required()
      .min(3)
      .max(40)
      .messages({
        "string.empty": `${t("city_required.label")}`,
        "string.min": `${t("city_min.label")}`,
        "string.max": `${t("city_max.label")}`,
      }),
    address: Joi.string()
      .trim()
      .required()
      .min(5)
      .max(60)
      .messages({
        "string.empty": `${t("address_required.label")}`,
        "string.min": `${t("address_min.label")}`,
        "string.max": `${t("address_max.label")}`,
      }),
    age: Joi.number()
      .integer()
      .required()
      .min(1)
      .max(150)
      .messages({
        "number.base": `${t("age_number.label")}`,
        "number.empty": `${t("age_required.label")}`,
        "number.unsafe": `${t("age_valid.label")}`,
        "number.integer": `${t("age_valid.label")}`,
        "number.min": `${t("age_min.label")}`,
        "number.max": `${t("age_max.label")}`,
      }),
    sex: Joi.string()
      .trim()
      .required()
      .min(1)
      .max(1)
      .valid("m", "f")
      .messages({
        "string.base": `${t("sex_required.label")}`,
        "string.empty": `${t("sex_required.label")}`,
        "any.only": `${t("sex_mf.label")}`,
        "string.min": `${t("sex_min.label")}`,
        "string.max": `${t("sex_max.label")}`,
      }),
  });
};

export default usePatientFormValidation;
