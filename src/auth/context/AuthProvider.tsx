import React, { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import {
  AuthActionType,
  AuthActionKind,
  IAuthState,
  IUser,
} from "../interfaces";

interface Props {
  children: React.ReactNode;
}

const initialState: IAuthState = {
  logged: false,
  user: null,
};

const init = () => {
  const user = localStorage.getItem("user");

  return {
    logged: user ? true : false,
    user: user ? JSON.parse(user) : user,
  };
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name: string) => {
    const user: IUser = { id: "ABC", name };

    const action: AuthActionType = {
      type: AuthActionKind.LOGIN,
      payload: user,
    };

    dispatch(action);

    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: AuthActionKind.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
