import { AuthProvider } from "./auth";
import { AppRoutes } from "./router/AppRoutes";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
