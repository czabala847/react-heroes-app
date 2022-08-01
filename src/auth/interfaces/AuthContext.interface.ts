import { IAuthState } from "./AuthState.interface";

export interface IAuthContext {
  state: IAuthState;
  login: (name: string) => void;
  logout: () => void;
}
