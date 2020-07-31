import Joi from "@hapi/joi";

const useLoginFormValidation = () =>
  Joi.object({
    email: Joi.string().email({ tlds: false }).required().messages({
      "string.email": `"Email" must be a valid email`,
      "string.empty": `"Email" is required`,
    }),
    password: Joi.string().trim().required().messages({
      "string.empty": `"Password" is required`,
    }),
  });

export default useLoginFormValidation;
