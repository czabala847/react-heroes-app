import React from "react";

import { AppRouter } from "./router/AppRouter";

import { AuthProvider } from "./auth/context";

export const HeroesApp: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
