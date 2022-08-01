import {
  AuthActionType,
  AuthActionKind,
  IAuthState,
} from "../interfaces/AuthState.interface";

export const authReducer = (state: IAuthState, action: AuthActionType) => {
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
