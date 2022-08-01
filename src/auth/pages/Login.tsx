import React, { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { AuthContext } from "../context";
import { IAuthContext } from "../interfaces";

export const Login: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { login } = useContext(AuthContext) as IAuthContext;

  const onLogin = () => {
    login("Carlos Zabala Roqueme");

    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
