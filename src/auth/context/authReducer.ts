import {
  AuthAction,
  AuthActionKind,
  AuthState,
} from "../interfaces/AuthState.interface";

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionKind.LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case AuthActionKind.LOGOUT:
      return {
        ...state,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};
