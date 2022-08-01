import { createContext } from "react";
import { IAuthContext } from "../interfaces/AuthContext.interface";

export const AuthContext = createContext<IAuthContext | null>(null);
