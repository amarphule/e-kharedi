import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";

const ProtectedRoute = () => {
  const { userToken } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!(userToken?.length > 0)) {
      alert("Please login first");
      navigate("/login", { replace: true });
    }
  }, [userToken, navigate]);
  return userToken ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
