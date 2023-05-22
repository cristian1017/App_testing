import {Outlet, Navigate} from "react-router-dom";


export const ProtectedRoutes = () => {
  const login = localStorage.getItem("login");
  return login ? <Outlet /> : <Navigate to="/login" />
};

export const ProtectedRoutesLogin = () => {
  const login = localStorage.getItem("login");
  return !login ? <Outlet /> : <Navigate to="/home" />
};

