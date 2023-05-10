// ** Router imports
import { lazy } from "react";

// ** Router imports
import { useRoutes, Navigate } from "react-router-dom";

// ** Components
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const LoginScreen = lazy(() => import("../screens/LoginScreen"));
const RegisterScreen = lazy(() => import("../screens/RegisterScreen"));
const Router = () => {

  const routes = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/signin",
      element: <LoginScreen />,
    },
    {
      path: "/signup",
      element: <RegisterScreen />,
    },
  ]);

  return routes;
};

export default Router;
