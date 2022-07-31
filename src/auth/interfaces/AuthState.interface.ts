export interface AuthState {
  logged: boolean;
  user: string | null;
}

// Action types
export enum AuthActionKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

// Actions
export type AuthAction =
  | { type: AuthActionKind.LOGIN; payload: string }
  | { type: AuthActionKind.LOGOUT };
