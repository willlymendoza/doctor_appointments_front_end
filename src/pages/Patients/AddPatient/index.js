import React, { Fragment, useState } from "react";
import PageTitle from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PatientAddForm from "../../../components/PatientAddForm";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import Joi from "@hapi/joi";

const AddPatient = () => {
  const schemaValidation = Joi.object({
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

  const [requestError, setRequestError] = useState(null);

  const userToken = useSelector((store) => store.authData.userToken);
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schemaValidation),
  });
  const history = useHistory();

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const axiosPostData = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/patients", data, {
        headers: {
          Authorization: userToken,
        },
      });
      history.push("/patients");
    } catch (error) {
      if (error.response) {
        setRequestError(error.response.data);
      }
    }
  };

  return (
    <Fragment>
      <PageTitle title="ADD PATIENT" />
      <PatientAddForm
        onSubmitForm={onSubmitForm}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        requestError={requestError}
      />
    </Fragment>
  );
};

export default AddPatient;
