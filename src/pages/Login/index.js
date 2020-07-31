import React, { Fragment, useState } from "react";
import LoginForm from "./LoginForm";
import PageTitle from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginAction } from "../../redux/authDuck";
import { login } from "../../services/loginService";

const Login = () => {
  const [requestError, setRequestError] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitForm = (data) => {
    axiosPostData(data);
  };

  const axiosPostData = async (data) => {
    try {
      const result = await login(data);

      dispatch(
        setLoginAction({
          user: result.data,
          userToken: result.headers.authorization,
        })
      );

      history.push("/");
    } catch (error) {
      if (error.response) {
        setRequestError(error.response.data);
      }
    }
  };

  const formValidations = {
    email: {
      required: {
        value: true,
        message: "Email is Required",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid Email Address",
      },
    },
    password: {
      required: { value: true, message: "Password is Required" },
      minLength: {
        value: 6,
        message: "Password length must be at least 6 characters long",
      },
    },
  };

  return (
    <Fragment>
      <PageTitle title="LOGIN" />
      <LoginForm
        handleSubmit={handleSubmit}
        onSubmitForm={onSubmitForm}
        register={register}
        formValidations={formValidations}
        errors={errors}
        requestError={requestError}
      />
    </Fragment>
  );
};

export default Login;
