import Joi from "@hapi/joi";

const useAppointmentFormValidation = () =>
  Joi.object({
    patient_id: Joi.string().required().messages({
      "any.required": `"Patient" is required`,
    }),
    doctor_id: Joi.string().required().messages({
      "any.required": `"Doctor" is required`,
    }),
    observations: Joi.string().trim().allow("").min(5).max(55).messages({
      "string.min": `"Observations" must be at least 5 characters long`,
      "string.max": `"Observations" can only be up to 55 characters long`,
    }),
    appointment_date: Joi.date().required().messages({
      "date.base": `"Appointment Date" is required`,
      "date.empty": `"Appointment Date" is required`,
    }),
    hour: Joi.string().trim().required().min(4).max(10).messages({
      "string.empty": `"Hour" is required`,
    }),
  });

export default useAppointmentFormValidation;
