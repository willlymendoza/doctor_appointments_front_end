import Joi from "@hapi/joi";
import { useTranslation } from "react-i18next";

const useAppointmentFormValidation = () => {
  const { t } = useTranslation();

  return Joi.object({
    patient_id: Joi.string()
      .required()
      .messages({
        "any.required": `${t("patient_required.label")}`,
      }),
    doctor_id: Joi.string()
      .required()
      .messages({
        "any.required": `${t("doctor_required.label")}`,
      }),
    observations: Joi.string()
      .trim()
      .allow("")
      .min(5)
      .max(55)
      .messages({
        "string.min": `${t("observations_min.label")}`,
        "string.max": `${t("observations_max.label")}`,
      }),
    appointment_date: Joi.date()
      .required()
      .messages({
        "date.base": `${t("date_required.label")}`,
        "date.empty": `${t("date_required.label")}`,
      }),
    hour: Joi.string()
      .trim()
      .required()
      .min(4)
      .max(10)
      .messages({
        "string.empty": `${t("hour_required.label")}`,
      }),
  });
};

export default useAppointmentFormValidation;
