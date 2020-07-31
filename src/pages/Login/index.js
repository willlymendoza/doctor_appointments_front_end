import React, { Fragment, useState } from "react";
import LoginForm from "./LoginForm";
import PageTitle from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginAction } from "../../redux/authDuck";
import { login } from "../../services/loginService";
import { joiResolver } from "@hookform/resolvers";
import useLoginFormValidation from "../../hooks/useLoginFormValidation";

const Login = () => {
  const formValidation = useLoginFormValidation();
  const [requestError, setRequestError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(formValidation),
  });

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

  return (
    <Fragment>
      <PageTitle title="LOGIN" />
      <LoginForm
        handleSubmit={handleSubmit}
        onSubmitForm={onSubmitForm}
        register={register}
        errors={errors}
        requestError={requestError}
      />
    </Fragment>
  );
};

export default Login;
