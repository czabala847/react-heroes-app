import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../auth";
import { HeroRoutes } from "../heroes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <HeroRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
