import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress color="success" />
      </div>
    );
  }
  // if (!admin) {
  //     return <div style={{ textAlign: 'center' }}>
  //         <CircularProgress color="success" />
  //     </div>
  // }

  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
