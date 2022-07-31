import React, { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { AuthState } from "../interfaces/AuthState.interface";

interface Props {
  children: React.ReactNode;
}

const initialState: AuthState = {
  logged: false,
  user: null,
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
