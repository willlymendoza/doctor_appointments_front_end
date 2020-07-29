import React, { Fragment } from "react";
import LoginForm from "./LoginForm";
import PageTitle from "../../components/PageTitle";

const Login = () => {
  return (
    <Fragment>
      <PageTitle title="LOGIN" />
      <LoginForm />
    </Fragment>
  );
};

export default Login;
