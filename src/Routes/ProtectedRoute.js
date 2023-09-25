import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const { userToken } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!(userToken?.length > 0)) {
      toast.info("Please login first", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/login", { replace: true });
    }
  }, [userToken, navigate]);
  return userToken ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
