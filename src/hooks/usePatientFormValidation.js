import Joi from "@hapi/joi";

const usePatientFormValidation = () =>
  Joi.object({
    first_name: Joi.string().trim().required().min(5).max(55).messages({
      "string.empty": `"First Name" is required`,
      "string.min": `"First Name" must be at least 5 characters long`,
      "string.max": `"First Name" can only be up to 55 characters long`,
    }),
    last_name: Joi.string().trim().required().min(5).max(55).messages({
      "string.empty": `"Last Name" is required`,
      "string.min": `"Last Name" must be at least 5 characters long`,
      "string.max": `"Last Name" can only be up to 55 characters long`,
    }),
    personal_document_id: Joi.string()
      .trim()
      .required()
      .min(5)
      .max(55)
      .messages({
        "string.empty": `"Personal Document ID" is required`,
        "string.min": `"Personal Document ID" must be at least 5 characters long`,
        "string.max": `"Personal Document ID" can only be up to 55 characters long`,
      }),
    phone_number: Joi.string().trim().required().min(8).max(25).messages({
      "string.empty": `"Phone Number" is required`,
      "string.min": `"Phone Number" must be at least 8 characters long`,
      "string.max": `"Phone Number" can only be up to 25 characters long`,
    }),
    email: Joi.string()
      .trim()
      .email({ tlds: false })
      .required()
      .min(8)
      .max(50)
      .messages({
        "string.empty": `"Email" is required`,
        "string.email": `Please Provide a Valid Email address`,
        "string.min": `"Email" must be at least 8 characters long`,
        "string.max": `"Email" can only be up to 25 characters long`,
      }),
    city: Joi.string().trim().required().min(3).max(40).messages({
      "string.empty": `"City" is required`,
      "string.min": `"City" must be at least 3 characters long`,
      "string.max": `"City" can only be up to 40 characters long`,
    }),
    address: Joi.string().trim().required().min(5).max(60).messages({
      "string.empty": `"Address" is required`,
      "string.min": `"Address" must be at least 3 characters long`,
      "string.max": `"Address" can only be up to 40 characters long`,
    }),
    age: Joi.number().integer().required().min(1).max(150).messages({
      "number.base": `"Age" must be a number`,
      "number.empty": `"Age" is required`,
      "number.unsafe": `"Age" must be a valid Integer number`,
      "number.integer": `"Age" must be a valid Integer number`,
      "number.min": `"Age" must be at least 1`,
      "number.max": `That Age is Insane!! "Age" can only be up to 150`,
    }),
    sex: Joi.string().trim().required().min(1).max(1).valid("m", "f").messages({
      "string.base": `"Sex" is requiredasdf`,
      "string.empty": `"Sex" is required`,
      "any.only": `"Sex" must be one of [m, f]`,
      "string.min": `"Sex" must be at least 3 characters long`,
      "string.max": `"Sex" can only be up to 40 characters long`,
    }),
  });

export default usePatientFormValidation;
