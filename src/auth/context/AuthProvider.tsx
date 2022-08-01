import React, { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import {
  AuthActionType,
  AuthActionKind,
  IAuthState,
} from "../interfaces/AuthState.interface";

interface Props {
  children: React.ReactNode;
}

const initialState: IAuthState = {
  logged: false,
  user: null,
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username: string) => {
    const action: AuthActionType = {
      type: AuthActionKind.LOGIN,
      payload: {
        id: "ABC",
        name: username,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login, state }}>
      {children}
    </AuthContext.Provider>
  );
};
