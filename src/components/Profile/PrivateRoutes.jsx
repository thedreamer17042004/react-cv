import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../request/authene";


const PrivateRoute = () => {
  const user = useAuth();
  console.log(user)
  if (!user?.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;