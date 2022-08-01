import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { IAuthContext } from "../auth/interfaces";

interface Props {
  children: JSX.Element;
}

export const PrivateRoutes: React.FC<Props> = ({ children }) => {
  const { state } = useContext(AuthContext) as IAuthContext;
  const { logged } = state;

  return logged ? children : <Navigate to="/login" />;
};
