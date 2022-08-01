export interface IUser {
  id: string;
  name: string;
}

export interface IAuthState {
  logged: boolean;
  user: IUser | null;
}

// Action types
export enum AuthActionKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

// Actions
export type AuthActionType =
  | { type: AuthActionKind.LOGIN; payload: IUser }
  | { type: AuthActionKind.LOGOUT };
