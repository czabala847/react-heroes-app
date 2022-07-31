import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../auth";
import { HeroRoutes } from "../heroes";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<HeroRoutes />} />
    </Routes>
  );
};
