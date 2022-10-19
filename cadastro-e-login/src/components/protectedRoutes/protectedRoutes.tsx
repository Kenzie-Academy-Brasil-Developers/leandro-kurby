import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectedRoutes = () => {
  const { user, loadingPage } = useContext(AuthContext);
  const location = useLocation();

  if (loadingPage) {
    return null;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
